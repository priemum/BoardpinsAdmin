import { AiTwotoneClockCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiArrowsOutSimpleBold } from "react-icons/pi";
export const ServicesproviderPendingApproval = ({ items, title }) => {
    return (
      <div className="shadow-custom rounded-lg p-4 mb-3  font-poppins">
        <div className=" flex pb-3">
          {" "}
          <h1 className=" flex-grow font-bold  ">{title}</h1>
          <span className="flex items-center gap-2">
          <PiArrowsOutSimpleBold  className=" text-[#868686] hover:text-primary cursor-pointer"/>
          <BsThreeDots className=" text-[#868686] hover:text-primary cursor-pointer" />
         
          </span>
        </div>
  
        {items.map((item, key) => (
          <div className=" flex lg:flex-row flex-col items-start gap-2 py-3 h-full" key={key}>
            <div className="flex flex-grow gap-2 items-center">
              {" "}
              <div>
                <img
                  src={item.imgSrc}
                  alt={item.Name}
                  className=" w-[60px] rounded-lg"
                />
              </div>
              <div>
                <h3 className=" font-bold text-[#1E1E1E]">{item.Name}</h3>
                <p className=" flex text-xs text-gray-500">{item.description}</p>
                <div className=" flex  gap-3  py-1 items-center text-xs text-gray-400">
                  <div className=" flex items-center">
                    <AiTwotoneClockCircle />
                    <span>{item.TimeAdd}</span>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="flex items-center gap-2 text-sm">
              <button className=" bg-[#52CD8F] text-white p-2 px-4 gap-2 flex items-center rounded-lg">
                <CiCircleCheck />
                Accept
              </button>
              <button className="bg-[#FF3636] text-white p-2 px-4 gap-2 flex items-center rounded-lg">
                <IoCloseCircleOutline />
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };