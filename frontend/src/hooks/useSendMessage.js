import { useState } from "react";
import useConversation from "../zustand/store";
import { API } from "../utils/makeRequest";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message, image) => {
    setLoading(true);
    try {
      const res = await API.post(
        `/messages/send/${selectedConversation._id}`,
        { message, image },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = await res.data;

      setMessages([...messages, data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
