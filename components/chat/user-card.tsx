import { IUser } from "@/models/user.model";
import { Avatar, AvatarImage } from "../ui/avatar";

const UserCard = ({user}:{user:IUser}) => {
	return (
		<div
			className={`flex items-center gap-2 border-b border-b-sigColorBgBorder p-1 hover:bg-sigBackgroundFeedHover cursor-pointer `}
		>
			<Avatar className='cursor-pointer hover:bg-sigBackgroundSecondaryHover'>
				<AvatarImage src={user.avatar} />
			</Avatar>
			<span>{user.fullName}</span>
		</div>
	);
};
export default UserCard;