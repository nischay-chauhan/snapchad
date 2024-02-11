import {  UserModel } from "@/models/user.model";
import { Avatar, AvatarImage } from "../ui/avatar";

type UserCardProps = {
	user: UserModel;
	handleSelectUser: (user: UserModel) => void;
	selectedUser: UserModel | null;
};
const UserCard = ({ user, handleSelectUser, selectedUser }: UserCardProps) => {
	const isSelected = selectedUser?._id === user._id;
	return (
		<div
			onClick={() => handleSelectUser(user)}
			className={`flex items-center gap-2 border-b border-b-sigColorBgBorder p-1 hover:bg-sigBackgroundFeedHover cursor-pointer 
				${isSelected ? "bg-sigBackgroundFeedHover" : ""}
			`}
		>
			<Avatar className='cursor-pointer hover:bg-sigBackgroundSecondaryHover'>
				<AvatarImage src={user.avatar} />
			</Avatar>
			<span>{user.fullName}</span>
		</div>
	);
};
export default UserCard;
