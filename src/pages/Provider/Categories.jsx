import React from "react";
import { BiCategory } from "react-icons/bi";

import CustomTable from "../../components/provider/molecules/CustomTable";

function Categories() {
  const columns = ["Category Name", "Number of Services", "Created Date", "Actions"];
  const data = [
    ["Factories", "2", "15 / 1 / 2024 05:00 AM"],
    ["Factories", "2", "15 / 1 / 2024 05:00 AM"],
    ["Factories", "2", "15 / 1 / 2024 05:00 AM"],
    ["Categories2", "9", "15 / 1 / 2023 05:00 AM"],
  ];

  return (
    <CustomTable
      title="Categories"
      icon={BiCategory}
      buttonName="Add New Category"
      columns={columns}
      data={data}
          num= "9"
    />
  );
}

export default Categories;
