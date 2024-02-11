import Message, { IMessageDocument } from "@/models/message.model";
import User, { IUser } from "@/models/user.model"
import { unstable_noStore as noStore } from "next/cache";
import { connectToMongoDB } from "./db";
import Chat, { IChatDocument } from "@/models/chat.model";

export const getUsersForSidebar = async (authUserId: string) => {
	noStore();
	try {
		const allUsers: IUser[] = await User.find({ _id: { $ne: authUserId } });
		const usersInfo = await Promise.all(
			allUsers.map(async (user) => {
				const lastMessage: IMessageDocument | null = await Message.findOne({
					$or: [
						{ sender: user._id, receiver: authUserId },
						{ sender: authUserId, receiver: user._id },
					],
				})
					.sort({ createdAt: -1 })
					.populate("sender", "fullName avatar _id")
					.populate("receiver", "fullName avatar _id")
					.exec();

				return {
					_id: user._id,
					participants: [user],
					lastMessage: lastMessage
						? {
								...lastMessage.toJSON(),
								sender: lastMessage.sender,
								receiver: lastMessage.receiver,
						  }
						: null,
				};
			})
		);

		return usersInfo;
	} catch (error) {
		// console.log("Error in getUsersForSidebar: ", error);
		throw error;
	}
};

export const getUserProfile = async (userId: string) => {
	noStore();
	try {
		await connectToMongoDB();
		const user: IUser | null = await User.findById(userId);
		if (!user) throw new Error("User not found");
		return user;
	} catch (error) {
		// console.log("Error in getUserProfile: ", error);
		throw error;
	}
};

export const getMessages = async (authUserId: string, otherUserId: string) => {
	noStore();
	try {
		await connectToMongoDB();

		const chat: IChatDocument | null = await Chat.findOne({
			participants: { $all: [authUserId, otherUserId] },
		}).populate({
			path: "messages",
			populate: {
				path: "sender",
				model: "User",
				select: "fullName",
			},
		});

		if (!chat) return [];

		const messages = chat.messages;
		return JSON.parse(JSON.stringify(messages));
	} catch (error) {
		// console.log("Error in getMessages: ", error);
		throw error;
	}
};