import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/store";

function Conversation({ setSidebar, conversation }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <div
      className="pt-2"
      onClick={() => {
        if (window.screen.availWidth < 640) {
          setSidebar(false);
        }
      }}
    >
      <div
        className={`flex items-center gap-2 hover:bg-sky-500 px-2 py-1 rounded-xl cursor-pointer ${
          isSelected && "bg-sky-500"
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline && "online"}`}>
          <div className="w-[38px] rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-200 font-medium text-[15px]">
            {conversation.fullName}
          </span>
          <span className="text-sm text-gray-300">
            @{conversation.username}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
