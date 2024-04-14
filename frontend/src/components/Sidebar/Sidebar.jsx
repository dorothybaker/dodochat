import { useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

function Sidebar() {
  const [search, setSearch] = useState("");

  return (
    <div className="md:flex-3 sm:flex-2 justify-between sm:flex hidden w-full px-2 pt-3 pb-1 h-full flex-col divide-y divide-gray-500 gap-2 border-r border-gray-500">
      <SearchInput setSearch={setSearch} search={search} />
      <Conversations search={search} />
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
