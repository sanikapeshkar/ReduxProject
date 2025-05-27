import mongoose from "mongoose";
import { UserType } from "./user.types";

const userSchema = new mongoose.Schema<UserType>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
