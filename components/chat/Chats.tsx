import { auth } from "@/auth";
import { getUsersForSidebar } from "@/lib/data";
import Chat from "./Chat";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const Chats = async () => {
	const session = await auth()
    // console.log(session)
	const chats = session?.user ? await getUsersForSidebar(session.user._id) : [];
    console.log(chats)
	return (
		<nav className='flex-1 overflow-y-auto'>
			<ul>
				{chats.map((chat) => (
					<Chat key={chat._id} chat={chat} />
				))}
                <h1></h1>
			</ul>
		</nav>
	);
};
export default Chats;