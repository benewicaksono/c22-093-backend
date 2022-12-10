import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: String,
  content: String,
  stars: Number,
});
export default mongoose.model("ReviewData", reviewSchema, "reviews");