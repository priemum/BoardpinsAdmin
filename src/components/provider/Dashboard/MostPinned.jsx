
import Rating from "@mui/material/Rating";
import { GiPin } from "react-icons/gi";
import { AiTwotoneClockCircle } from "react-icons/ai";
export const MostPinned = ({ DataPinned, title }) => {
    return (
      <div className="shadow-custom rounded-lg p-4 mb-3  font-poppins">
        <div className=" flex pb-3">
          {" "}
          <h1 className=" flex-grow ">{title}</h1>
          <span className=" text-[#868686] hover:text-primary cursor-pointer">
            See more
          </span>
        </div>
  
        {DataPinned.map((item, key) => (
          <div className=" flex items-start gap-2 py-3 h-full" key={key}>
            <div>
              <img
                src={item.imgSrc}
                alt={item.Name}
                className=" w-[60px] rounded-lg"
              />
            </div>
            <div>
              <h3 className=" font-bold text-[#1E1E1E]">{item.Name}</h3>
              <p className=" flex text-xs text-gray-500">
                {" "}
                <Rating
                  name="half-rating-read"
                  defaultValue={item.rating}
                  precision={0.5}
                  readOnly
                  sx={{ fontSize: "1rem" }}
                />{" "}
                <span> ( {item.Review} Review)</span>{" "}
              </p>
              <div className=" flex  gap-3  py-1 items-center text-xs text-gray-400">
                <div className=" flex items-center">
                  <GiPin />
                  <span>{item.saved}</span>
                </div>
  
                <div className=" flex items-center">
                  <AiTwotoneClockCircle />
                  <span>{item.TimeAdd}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
  
        <button className="bg-[#CCCCCCA8] w-full rounded text-[#1E1E1E] py-2 text-sm">
          Add new category{" "}
        </button>
      </div>
    );
  };
  