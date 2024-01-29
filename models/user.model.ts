import { Fullscreen } from "lucide-react";
import mongoose, { Model } from "mongoose";

export interface IUser {
    username: string;
    fullName: string;
    email: string;
    avatar?: string;
}
export interface UserModel extends IUser, mongoose.Document {
    createdAt : Date,
    updatedAt : Date
}

const userSchema = new mongoose.Schema<UserModel>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User:Model<UserModel> = mongoose.models?.User || mongoose.model("User", userSchema);

export default User