import { useState } from "react";
import { API } from "../utils/makeRequest";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const register = async ({ fullName, username, email, password, gender }) => {
    setLoading(true);
    try {
      const response = await API.post(
        "/auth/signup",
        { fullName, username, email, password, gender },
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
      setLoading(false);
    } catch (error) {
      toast.error("Username already exists!");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, register };
};

export default useRegister;
