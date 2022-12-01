import mongoose from "mongoose";

const materialsSchema = new mongoose.Schema({
  key: String,
  name: String,
  driveUrl: String,
});

export default mongoose.model("MaterialsData", materialsSchema, "materials");