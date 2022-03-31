import DataOne from "./model/dataOneModel.js";

export const getDataOnes = async (req, res) => {
  try {
    const dataOnes = await DataOne.find();
    res.json(dataOnes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getDataOne = async (req, res) => {
  try {
    const { id } = req.params;
    const dataOne = await DataOne.findById(id)/*.populate("")*/;

    if (dataOne) {
      return res.json(dataOne);
    }

    res.status(400).json({ message: "DataOne not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getDataByProfession = async (req, res) => {
  try {
    const { id } = req.params;
    const dataOne = await DataOne.find({ 'Occupation': { $regex: id, $options: 'i' } }).exec();

    if (dataOne) {
      return res.json(dataOne);
    }

    res.status(400).json({ message: "DataOne not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createDataOne = async (req, res) => {
  try {
    const dataOne = new DataOne(req.body);
    await dataOne.save();
    res.status(201).json(dataOne);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateDataOne = async (req, res) => {
  const { id } = req.params;
  const dataOne = await DataOne.findByIdAndUpdate(id, req.body);
  res.status(200).json(dataOne);
};

export const deleteDataOne = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DataOne.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("DataOne deleted!");
    }

    throw new Error("DataOne not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};