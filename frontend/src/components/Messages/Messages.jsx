import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../utils/message.skeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const messageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  if (loading) {
    return <MessageSkeleton />;
  }

  return (
    <div className="px-2 overflow-y-auto flex-1 flex flex-col gap-1 pb-1">
      {messages.length > 0 &&
        !loading &&
        messages.map((message) => (
          <div key={message._id} ref={messageRef}>
            <Message message={message} />
          </div>
        ))}
      {messages.length < 1 && (
        <p className="text-center text-[15px] mt-4">
          Send a message to start a conversation!
        </p>
      )}
    </div>
  );
}

export default Messages;
