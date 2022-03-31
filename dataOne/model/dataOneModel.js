
import mongoose from "mongoose";
const Schema = mongoose.Schema;

let DataOne = new Schema({
  "Occupation": { type: String, required: true },
  "SOC": { type: String },
  "Probability": { type: Number },
  "Alabama": { type: Number },
   "Alaska": { type: Number },
   "Arizona": { type: Number },
   "Arkansas": { type: Number },
   "California": { type: Number },
   "Colorado": { type: Number },
   "Connecticut": { type: Number },
   "Delaware": { type: Number },
   "District of Columbia": { type: Number },
   "Florida": { type: Number },
   "Georgia": { type: Number },
   "Hawaii": { type: Number },
   "Idaho": { type: Number },
   "Illinois": { type: Number },
   "Indiana": { type: Number },
   "Iowa": { type: Number },
   "Kansas": { type: Number },
   "Kentucky": { type: Number },
   "Louisiana": { type: Number },
   "Maine": { type: Number },
   "Maryland": { type: Number },
   "Massachusetts": { type: Number },
   "Michigan": { type: Number },
   "Minnesota": { type: Number },
   "Mississippi": { type: Number },
   "Missouri": { type: Number },
   "Montana": { type: Number },
   "Nebraska": { type: Number },
   "Nevada": { type: Number },
   "New Hampshire": { type: Number },
   "New Jersey": { type: Number },
   "New Mexico": { type: Number },
   "New York": { type: Number },
   "North Carolina": { type: Number },
   "North Dakota": { type: Number },
   "Ohio": { type: Number },
   "Oklahoma": { type: Number },
   "Oregon": { type: Number },
   "Pennsylvania": { type: Number },
   "Rhode Island": { type: Number },
   "South Carolina": { type: Number },
   "South Dakota": { type: Number },
   "Tennessee": { type: Number },
   "Texas": { type: Number },
   "Utah": { type: Number },
   "Vermont": { type: Number },
   "Virginia": { type: Number },
   "Washington": { type: Number },
   "West Virginia": { type: Number },
   "Wisconsin": { type: Number },
   "Wyoming": {type: Number},
  __v: { type: Number }
});

export default mongoose.model("dataOne", DataOne);