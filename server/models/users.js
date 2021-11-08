import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    type: {
      type: String,
      enum: ["buyer", "seller"],
    },
    phone: String,
  },
  { timestamps: true }
);

const Users = mongoose.model("users", userSchema);

export default Users;
