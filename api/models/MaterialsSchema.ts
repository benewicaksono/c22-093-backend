import mongoose from "mongoose";

const materialsSchema = new mongoose.Schema({
  key: String,
  name: String,
  desc: String,
  driveUrl: String,
  imgUrl: String,
});

export default mongoose.model("MaterialsData", materialsSchema, "materials");