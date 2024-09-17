
import { TbCategoryFilled } from "react-icons/tb";

export const Categoies = ({ DataCategoies }) => {
    return (
      <div className="shadow-custom rounded-lg p-4 mb-3  font-poppins">
        <div className=" flex pb-3">
          {" "}
          <h1 className=" flex-grow ">Categoies</h1>
          <span className=" text-[#868686] hover:text-primary cursor-pointer">
            See more
          </span>
        </div>
  
        {DataCategoies.map((item, key) => (
          <div className=" flex items-start gap-2 py-3 h-full" key={key}>
            <div>
              <TbCategoryFilled color="#6161FF" className=" mt-1" />
            </div>
            <div>
              <h3 className=" font-bold text-[#1E1E1E]">{item.title}</h3>
              <p className=" text-xs text-[#292D32]">{item.subTitle}</p>
            </div>
          </div>
        ))}
  
        <button className="bg-[#CCCCCCA8] w-full rounded text-[#1E1E1E] py-2 text-sm">
          Add new category{" "}
        </button>
      </div>
    );
  };