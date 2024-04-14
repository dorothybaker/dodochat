import { useEffect, useState } from "react";
import useConversation from "../zustand/store";
import { API } from "../utils/makeRequest";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await API.get(`/messages/${selectedConversation._id}`);
        const data = await res.data;

        setMessages(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
