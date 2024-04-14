import { IoSearchOutline } from "react-icons/io5";

function SearchInput({ search, setSearch }) {
  return (
    <div className="flex sm:pt-0 pt-2">
      <input
        type="text"
        placeholder="Search users"
        className="h-10 rounded-l-xl bg-gray-950 w-full text-[15px] px-3 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-sky-500 h-10 text-white px-3 rounded-r-xl">
        <IoSearchOutline size={20} />
      </button>
    </div>
  );
}

export default SearchInput;
