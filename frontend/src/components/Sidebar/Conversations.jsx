import useGetConversation from "../../hooks/useGetConversations";
import ConversationSkeleton from "../../utils/conversation.skeleton";
import Conversation from "./Conversation";

function Conversations({ setSidebar, search }) {
  const { loading, conversations } = useGetConversation();

  return (
    <>
      {loading ? (
        <ConversationSkeleton />
      ) : (
        <div className="flex flex-col gap-2 divide-y divide-gray-500 overflow-y-scroll">
          {conversations
            ?.filter(
              (conversation) =>
                conversation?.fullName
                  .toLowerCase()
                  .includes(search?.toLowerCase()) ||
                conversation?.username
                  .toLowerCase()
                  .includes(search?.toLowerCase())
            )
            ?.map((conversation) => (
              <Conversation
                key={conversation._id}
                setSidebar={setSidebar}
                conversation={conversation}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default Conversations;
