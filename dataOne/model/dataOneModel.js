
import mongoose from "mongoose";
const Schema = mongoose.Schema;

let DataOne = new Schema({
  _id: { type: String },
  name: { type: String, required: true },
  role: { type: String },
  style: {type: String},
  __v: { type: Number },
  species: { type: String }
});

export default mongoose.model("dataOne", DataOne);