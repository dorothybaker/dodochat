import { IoArrowBackOutline } from "react-icons/io5";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/store";
import { useEffect } from "react";

function MessageContainer({ sidebar, setSidebar }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div
      className={`md:flex-5 flex-3 sm:flex flex-col pb-2 ${
        sidebar ? "hidden" : "flex"
      }`}
    >
      {selectedConversation ? (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 rounded-tr-lg flex gap-3 items-center">
            <IoArrowBackOutline
              size={17}
              onClick={() => setSidebar(true)}
              className="sm:hidden block text-gray-300"
            />
            <div className="flex items-center gap-2">
              <div className="w-8 rounded-full">
                <img src={selectedConversation?.profilePic} />
              </div>
              <span className="text-gray-100">
                {selectedConversation?.fullName}
              </span>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
}

function NoChatSelected() {
  const { authUser } = useAuthContext();

  return (
    <div className="flex h-full items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <img src="/favicon.svg" alt="favicon" width={70} className="bounceIn" />
        <div className="flex flex-col">
          <p className="text-2xl text-gray-200">
            Welcome back{" "}
            <span className="text-sky-500 font-semibold">
              {authUser.fullName}
            </span>
            !
          </p>
          <span className="text-[15px] text-gray-400">
            Select a chat to start messaging!
          </span>
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;
