import mongoose from "mongoose";
export interface IChat {
    participants : mongoose.Types.ObjectId[];
    messages : mongoose.Types.ObjectId[];
}

export interface IChatDocument extends IChat, mongoose.Document {
	createdAt: Date;
	updatedAt: Date;
}


const chatSchema = new mongoose.Schema<IChatDocument>(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Chat: mongoose.Model<IChatDocument> = mongoose.models?.Chat || mongoose.model("Chat", chatSchema);

export default Chat;