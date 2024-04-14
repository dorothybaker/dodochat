import { useState } from "react";
import MessageContainer from "../components/Messages/MessageContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import MobileSidebar from "../components/Sidebar/MobileSidebar";

function Home() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 md:h-[550px] sm:h-[450px] h-full rounded-lg flex md:w-[730px] w-full">
      {sidebar && <MobileSidebar setSidebar={setSidebar} />}
      <Sidebar />
      <MessageContainer sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
}

export default Home;
