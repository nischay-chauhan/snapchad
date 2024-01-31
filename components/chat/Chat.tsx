import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import Image from "next/image";

type ChatProps = {
  chat: any;
};

const Chat = ({ chat }: ChatProps) => {
  const userToChat = chat.participants[0];

  return (
    <Link href={`/chat/${chat._id}`}>
      <li className="flex items-center p-2 bg-sigSurface hover:bg-sigBackgroundFeedHover cursor-pointer border-b border-b-sigColorBgBorder">
        <Avatar className="w-14 h-14 bg-black">
          <AvatarImage
            src={
              userToChat?.avatar ||
              "https://questhowth.ie/wp-content/uploads/2018/04/user-placeholder.png"
            }
          />
        </Avatar>

        <div className="ml-3">
          <p>{userToChat?.fullName}</p>
        </div>

        <Image
          src={"/camera.svg"}
          height={0}
          width={0}
          style={{ width: "20px", height: "auto" }}
          className="ml-auto hover:scale-95 "
          alt="Camera Icon"
        />
      </li>
    </Link>
  );
};

export default Chat;
