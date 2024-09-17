import { useState } from "react";
import ProgressBar from "../atoms/commonatoms/Progressbar";
import { BsThreeDotsVertical } from "react-icons/bs";
export const MonthlyTargetandRevenues = ({ header, start_value, end_value }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    // Calculate progress percentage based on start_value and end_value
    const progress = ((50 / 100) * 100).toFixed(2);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div className="shadow-custom rounded-lg p-4 mb-3">
        <div className="flex gap-4 items-center">
          <h3 className="font-bold flex-grow py-3 text-md text-lg">{header}</h3>
  
          <div className="hidden lg:flex justify-center gap-1 ">
            <button className="text-[#6161FF] mb-2 sm:mb-0 sm:ml-4 lg:w-auto w-full">
              Edit
            </button>
            <button className="bg-[#6161FF] font-[500] lg:text-sm px-4 text-[12px] rounded-lg lg:px-3 py-2 text-white mb-2 sm:mb-0 sm:ml-4">
              + Add Annual Target
            </button>
            <button className="bg-[#6161FF] font-[500] lg:text-sm px-4 text-[12px] rounded-lg lg:px-3 py-2 text-white mb-2 sm:mb-0 sm:ml-4">
              + Add Monthly Target
            </button>
          </div>
          <div className="lg:hidden relative ">
            <button
              onClick={toggleDropdown}
              className="  text-dark py-2 rounded-lg"
            >
              <BsThreeDotsVertical />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 flex flex-col gap-1  z-50  absolute shadow-custom2 bg-white p-4 right-2 min-w-[200px]">
                <button className="text-[#6161FF] mb-2 sm:mb-0 sm:ml-4 lg:w-auto w-full">
                  Edit
                </button>
                <button className="bg-[#6161FF] font-[500] text-sm px-4 py-2 rounded-lg text-white">
                  + Add Annual Target
                </button>
                <button className="bg-[#6161FF] font-[500] text-sm px-4 py-2 rounded-lg text-white">
                  + Add Monthly Target
                </button>
              </div>
            )}
          </div>
        </div>
  
        {/* Progress Bar Section */}
        <div className="flex justify-start  items-center gap-4 py-3">
          {/* Monthly Target Button */}
          <button className="bg-[#6161FF] rounded-2xl px-7 py-2 text-white mb-2 sm:mb-0 sm:ml-4">
            Monthly
          </button>
          {/* Annual Target Button */}
          <button className="text-[#6161FF] rounded-lg px-7 py-2">Annual</button>
        </div>
        <div className="mx-5 mt-5 progressbar">
          <div className="label flex">
            <span className="flex-grow font-bold text-lg">0</span>
            <span className="font-bold text-lg">100</span>
          </div>
          {/* Progress Bar */}
          <ProgressBar progress={progress} bgColor={"#6161FF"} />
        </div>
      </div>
    );
  };