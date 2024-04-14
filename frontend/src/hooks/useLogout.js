import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { API } from "../utils/makeRequest";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await API.post(
        "/auth/logout",
        {},
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.data;
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
