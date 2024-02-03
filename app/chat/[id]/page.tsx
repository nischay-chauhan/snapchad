import ChatMessages from "@/components/chat/chat-messages";
import ChatTopbar from "@/components/chat/chat-topbar";
import SendMsgInput from "@/components/chat/send-msg-input";

const ChatHistoryPage = async ({ params }: { params: { id: string } }) => {
	return (
		<div className='bg-sigMain h-screen flex-[3_3_0%] flex flex-col px-4 text-white'>
			<ChatTopbar />
            <div>The params are {params.id}</div>
			<div className='bg-sigSurface flex-1 overflow-y-auto rounded-xl my-4 border border-sigColorBgBorder  py-2 px-3 '>
				<div className='flex flex-col'>
					<ChatMessages />
				</div>
			</div>
			<SendMsgInput />
		</div>
	);
};
export default ChatHistoryPage;