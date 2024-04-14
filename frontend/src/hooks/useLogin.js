import { useState } from "react";
import toast from "react-hot-toast";
import { API } from "../utils/makeRequest";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const response = await API.post(
        "/auth/login",
        { username, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.data;
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error("Incorrect username or password!");
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
