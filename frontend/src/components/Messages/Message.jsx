import { useAuthContext } from "../../context/AuthContext";

import moment from "moment";

function Message({ message }) {
  const { authUser } = useAuthContext();

  const isFromMe = message.senderId === authUser._id;
  const shouldShake = message.shouldShake;

  return (
    <div className={`chat ${isFromMe ? "chat-end" : "chat-start"}`}>
      <div
        className={`chat-bubble ${
          isFromMe ? "bg-sky-950" : "bg-gray-800"
        } text-white md:max-w-[80%] sm:max-w-[85%] px-2 ${
          shouldShake && "shake"
        }`}
      >
        <div className="w-full flex flex-col gap-0.5">
          {message.image && (
            <img
              src={message.image}
              className="sm:min-w-[300px] min-w-full h-[230px] object-cover rounded-lg"
            />
          )}
          <p className="text-sm">{message.message}</p>
        </div>
        <div className="chat-footer text-[10.3px] text-gray-400 text-right font-semibold py-0">
          {moment(message.createdAt).format("hh:mm A")}
        </div>
      </div>
    </div>
  );
}

export default Message;

//
