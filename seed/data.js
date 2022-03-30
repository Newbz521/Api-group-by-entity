import db from "../db/connection.js";
import DataOne from "../dataOne/model/dataOneModel.js";
import dataOne from "../dataOne/dataOne.json" assert { type: "json" };
// import DataTwo from "../dataTwo/model/dataTwoModel.js";
// import dataTwo from "../dataTwo/dataTwo.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  db.dropDatabase();

  // insert dataOne into database
  await DataOne.insertMany(dataOne);

  // insert dataTwo into database
  // await DataTwo.insertMany(dataTwo);

  // close db connection (done)
  db.close();
};

insertData();
