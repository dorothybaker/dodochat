import { IoEllipsisVerticalOutline, IoSearchOutline } from "react-icons/io5";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { useState } from "react";

function MobileSidebar({ setSidebar }) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className="sm:hidden flex flex-col w-full h-full px-2 pb-2">
      <div className="flex w-full h-full flex-col justify-between divide-y divide-gray-500 gap-2 mt-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-sky-500">dodoChat.</h1>
            <div className="flex items-center gap-2">
              <IoSearchOutline size={20} className="cursor-pointer" />
              <IoEllipsisVerticalOutline size={20} className="cursor-pointer" />
            </div>
          </div>
          <SearchInput search={searchFilter} setSearch={setSearchFilter} />
        </div>

        <Conversations setSidebar={setSidebar} search={searchFilter} />
        <LogoutButton />
      </div>
    </div>
  );
}

export default MobileSidebar;
