import { IoIosSend } from "react-icons/io";
import mail from "../assets/mail.svg";
import { IoMailOpen } from "react-icons/io5";
function RightSection() {
  return (
    <div className="border-l-2 bg-white dark:bg-black dark:border-[#33383F] border-[#E0E0E0] h-full overflow-y-scroll no-scrollbar px-2">
      {/* Lead Details Header */}
      <div className="mt-5 dark:bg-[#23272C] bg-[#ECEFF3] text-black dark:text-white rounded-lg py-2 pl-4 text-sm md:text-base">Lead Details</div>
  
      {/* Lead Details Content */}
      <div className="px-4 md:px-6 my-10 space-y-6 dark:text-white text-[#637381]">
        <div className="flex justify-between text-xs md:text-sm">
          <div>Name</div>
          <div className="dark:text-[#B9B9B9]">Orlando</div>
        </div>
        <div className="flex justify-between text-xs md:text-sm">
          <div>Contact No</div>
          <div className="dark:text-[#B9B9B9]">+54-9062827869</div>
        </div>
        <div className="flex justify-between text-xs md:text-sm">
          <div>Email ID</div>
          <div className="dark:text-[#B9B9B9]">orlando@gmail.com</div>
        </div>
        <div className="flex justify-between text-xs md:text-sm">
          <div>Linkedin</div>
          <div className="dark:text-[#B9B9B9] truncate">linkedin.com/in/timvadde/</div>
        </div>
        <div className="flex justify-between text-xs md:text-sm">
          <div>Company Name</div>
          <div className="dark:text-[#B9B9B9]">Reachinbox</div>
        </div>
      </div>
  
      {/* Activities Header */}
      <div className="mt-8 dark:bg-[#23272C] bg-[#ECEFF3] text-black dark:text-white rounded-lg py-2 pl-4 text-sm md:text-base">Activities</div>
  
      {/* Activities Content */}
      <div className="my-8 px-4 md:px-6">
        <div className="px-2 text-black dark:text-white text-xs md:text-sm">Campaign Name</div>
        <div className="my-4 text-xs md:text-sm px-2 text-black dark:text-white">3 Steps | 5 Days in Sequence</div>
  
        {/* Steps */}
        <div className="px-2">
          <div className="flex flex-col md:flex-row my-4 items-center">
            <div>
              <img
                src={mail}
                className="w-10 md:w-12 dark:bg-[#23272C] bg-[#EEF1F4] p-2 rounded-full"
              />
            </div>
            <div className="ml-6 md:ml-10 space-y-2 text-black dark:text-white text-xs md:text-sm">
              <div>Step 1: Email</div>
              <div className="text-[#B9B9B9] text-xs md:text-sm flex items-center">
                <IoIosSend className="mr-2" /> Sent 3rd, Feb
              </div>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row my-4 items-center">
            <div>
              <img
                src={mail}
                className="w-10 md:w-12 dark:bg-[#23272C] bg-[#EEF1F4] p-2 rounded-full"
              />
            </div>
            <div className="ml-6 md:ml-10 space-y-2 text-black dark:text-white text-xs md:text-sm">
              <div>Step 2: Email</div>
              <div className="text-[#B9B9B9] text-xs md:text-sm flex items-center">
                <IoMailOpen className="mr-2 text-yellow-500" /> Open 5th, Feb
              </div>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row my-4 items-center">
            <div>
              <img
                src={mail}
                className="w-10 md:w-12 dark:bg-[#23272C] bg-[#EEF1F4] p-2 rounded-full"
              />
            </div>
            <div className="ml-6 md:ml-10 space-y-2 text-black dark:text-white text-xs md:text-sm">
              <div>Step 3: Email</div>
              <div className="text-[#B9B9B9] text-xs md:text-sm flex items-center">
                <IoMailOpen className="mr-2 text-yellow-500" /> Open 5th, Feb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default RightSection;
