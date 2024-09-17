import React from "react";
import user from "../../../assets/images/merchants/Rectangle 4649.png";
import { useNavigate } from "react-router-dom";
function HeaderDashboard() {
  const navgate = useNavigate();
  return (
    <>
      <div className=" flex px-8 lg:flex-row flex-col gap-4 pt-6">
        <div className="  flex  flex-grow gap-3">
          <img
            src={user}
            className=" rounded-full  border-[1.28px] border-[#292D32] max-w-[50px] max-h-[50px] p-1"
          />
          <div>
            <h1 className="font-bold text-[#1E1E1E] text-2xl">
              Hey, Kirolos 👋
            </h1>
            <p className=" text-sm">Happy to see you again on yourdashboard.</p>
          </div>
        </div>
        <div className=" flex gap-2 items-center text-sm justify-end">
          <button className=" border-[1px] border-[#6161FF] text-[#6161FF]  rounded-lg py-2  p-1 lg:p-3">
            Download Report
          </button>
          <button className=" border-[1px] bg-[#6161FF] text-[white]  rounded-lg  py-2  p-1 lg:p-3">
            Manage Sevices Provider
          </button>
        </div>
      </div>
      <div className=" flex gap-2 items-center text-sm p-8 py-3">
        <button className=" border-[1px] bg-[#6161FF] text-[white]  rounded-3xl  lg:min-w-[120px]  p-2" onClick={()=>{navgate('merchant')}}>
          Merchants
        </button>
        <button className=" border-[1px] border-[#6161FF] text-[#6161FF]  rounded-3xl lg:min-w-[120px]   p-2" onClick={()=>{navgate('serviceProvider')}}>
          Sevices Providers
        </button>
      </div>
    </>
  );
}

export default HeaderDashboard;
