import React from "react";
import { CiEdit } from "react-icons/ci";

import { FaCircleCheck, FaRegTrashCan } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";

function CustomTable({
  title,
  icon: TitleIcon,
  buttonName,
  columns,
  data,
  num,
  onButtonClick, // Add this prop to handle button click
}) {
  return (
    <div className="p-6 bg-white">
      <h1 className="font-bold text-2xl my-5 flex items-center gap-2">
        <TitleIcon className="p-2 bg-gray-100 rounded text-2xl" size={35} />
        {title}
      </h1>
      <div className="relative overflow-x-auto lg:max-w-full max-w-[400px] shadow-custom2 bg-white">
        <div className="w-full flex justify-end">
          {buttonName ? (
            <button
              className="py-3 px-5 text-sm m-5 text-white bg-[#6161FF] rounded"
              onClick={onButtonClick} // Trigger the modal open function
            >
              {buttonName}
            </button>
          ) : (
            ""
          )}
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-[#757575] uppercase bg-white">
            <tr>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4">
                    {cell === true ? (
                      <FaCircleCheck color="#52CD8F" size={22} />
                    ) : cell === false ? (
                      <IoCloseCircleSharp color="#FF0000" size={25} />
                    ) : (
                      cell
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 gap-5 flex items-center">
                  <a
                    href="#"
                    className="font-medium text-[#1E1E1E] hover:text-blue-500 hover:underline"
                  >
                    <CiEdit />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-[#9F9F9F] hover:text-red-500 hover:underline"
                  >
                    <FaRegTrashCan />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-2 items-center bg-[#EDEDED] rounded w-full text-gray-600 text-sm py-1 my-3 px-3">
          <span> {num}</span>
          {title}
        </div>
      </div>
    </div>
  );
}

export default CustomTable;
