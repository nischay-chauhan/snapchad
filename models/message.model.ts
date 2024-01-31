import mongoose, {
  Document,
  Model,
  PopulatedDoc,
  Schema,
  Types,
} from "mongoose";
import { IUser } from "./user.model";

export interface IMessage {
  sender: Types.ObjectId | PopulatedDoc<IUser>;
  receiver: Types.ObjectId | PopulatedDoc<IUser>;
  content: string;
  messageType: "text" | "image";
  opened: boolean;
}

export interface IMessageDocument extends IMessage, Document {
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessageDocument>(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    messageType: { type: String, required: true, enum: ["text", "image"] },
    opened: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Message: Model<IMessageDocument> =
  mongoose.models?.Message || mongoose.model("Message", messageSchema);

export default Message;
