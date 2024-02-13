import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  phone_number: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

export const userModel = mongoose.model("users", userSchema);
