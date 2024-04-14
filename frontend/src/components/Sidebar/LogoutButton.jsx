import { IoLogOutOutline } from "react-icons/io5";
import useLogout from "../../hooks/useLogout";

function LogoutButton() {
  const { logout } = useLogout();

  return (
    <div>
      <div
        className="p-2 flex items-center gap-2 text-gray-200 cursor-pointer w-max"
        onClick={logout}
      >
        <IoLogOutOutline size={20} />
        <span className="text-[15px]">Logout!</span>
      </div>
    </div>
  );
}

export default LogoutButton;
