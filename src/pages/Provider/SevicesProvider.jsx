import React from "react";
import { BiCategory } from "react-icons/bi";

import CustomTable from "../../components/provider/molecules/CustomTable";
import { BsPersonVcard } from "react-icons/bs";

function SevicesProvider() {
  const columns = ["Sevices Provider Name", "Pinned By User", "Created Date","Updated Date", "Tags","Actions"];
  const data = [
    ["Sevices Provider Name", "5", "15 / 1 / 2024   05:00 AM","15 / 1 / 2024   05:00 AM" ,"tag1 , tag2, tag3"],
    ["Sevices Provider Name", "5", "15 / 1 / 2024   05:00 AM","15 / 1 / 2024   05:00 AM" ,"tag1 , tag2, tag3"],
    ["Sevices Provider Name", "5", "15 / 1 / 2024   05:00 AM","15 / 1 / 2024   05:00 AM" ,"tag1 , tag2, tag3"],
    ["Sevices Provider Name", "5", "15 / 1 / 2024   05:00 AM","15 / 1 / 2024   05:00 AM" ,"tag1 , tag2, tag3"],
    ["Sevices Provider Name", "5", "15 / 1 / 2024   05:00 AM","15 / 1 / 2024   05:00 AM" ,"tag1 , tag2, tag3"],
  ];

  return (
    <CustomTable
      title="SevicesProvider"
      icon={BsPersonVcard}
      buttonName="Add New Sevices Provider "
      columns={columns}
      data={data}
          num= "5"
    />
  );
}

export default SevicesProvider;
