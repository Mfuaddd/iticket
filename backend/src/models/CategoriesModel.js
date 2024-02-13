import mongoose, { Schema } from "mongoose";

const categoriesSchema = new Schema({
  name: String,
  endpoint: String,
  index: Number,
});

export const categoriesModel = mongoose.model("categories", categoriesSchema);
