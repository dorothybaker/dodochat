import { useEffect, useState } from "react";
import { API } from "../utils/makeRequest";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);

      try {
        const response = await API.get("/users");
        const data = await response.data;

        setConversation(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
