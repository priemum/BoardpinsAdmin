import React, { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import CustomTable from "../../components/provider/molecules/CustomTable";
import Modal from "../../components/provider/atoms/commonatoms/Modal";
import GenerateCodesModal from "../../components/provider/Dashboard/GenerateCodesModal";

function Promocodes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = ["User name", "Status", "Discount Percentage", "Created Date", "Actions"];
  const data = [
    ["amazon30%", true, "15%", "15 / 1 / 2024 05:00 AM"],
    ["amazon30%", false, "15%", "15 / 1 / 2024 05:00 AM"],
    ["amazon30%", true, "15%", "15 / 1 / 2024 05:00 AM"],
    ["amazon30%", false, "15%", "15 / 1 / 2024 05:00 AM"],
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CustomTable
        title="Promocodes"
        icon={BiSolidOffer}
        buttonName={"Generate Code"}
        columns={columns}
        data={data}
        num="4"
        onButtonClick={handleOpenModal} // Pass the function to open modal
      />

 <GenerateCodesModal handleCloseModal={handleCloseModal} isModalOpen={isModalOpen}/>
    </>
  );
}

export default Promocodes;
