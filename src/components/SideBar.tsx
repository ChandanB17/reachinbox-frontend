// SideBar.js
import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from '../assets/Fevicon.png';

function SideBar({ onMenuItemClick }: any) {
  const [selectedItem, setSelectedItem] = useState('/');

  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 sm:w-20 md:w-24 lg:w-28 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      {/* Logo Section */}
      <div className="rounded-xl">
        <img src={logo} className="h-8 sm:h-10 md:h-12 rounded-xl object-left overflow-visible" alt="Logo" />
      </div>
  
      {/* Icons Section */}
      <div className="text-[#AEAEAE] text-2xl space-y-10 sm:space-y-12 md:space-y-14">
        <div className={`cursor-pointer p-1 ${selectedItem === '/' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/')}>
          <RiHome5Fill className="text-xl sm:text-2xl md:text-3xl" />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/search' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/search')}>
          <RiUserSearchLine className="text-xl sm:text-2xl md:text-3xl" />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/mail' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/mail')}>
          <RiMailFill className="text-xl sm:text-2xl md:text-3xl" />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/send' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/send')}>
          <IoIosSend className="text-xl sm:text-2xl md:text-3xl" />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/stack' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/stack')}>
          <SiElasticstack className="text-xl sm:text-2xl md:text-3xl" />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/inbox' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/inbox')}>
          <FaInbox className="text-xl sm:text-2xl md:text-3xl" />
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/stacks' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/stacks')}>
          <IoStatsChartSharp className="text-xl sm:text-2xl md:text-3xl" />
        </div>
      </div>
  
      {/* User Icon Section */}
      <div className="text-white bg-green-500 p-2 sm:p-3 md:p-4 rounded-full">
        CB
      </div>
    </div>
  );
  
}

export default SideBar;
