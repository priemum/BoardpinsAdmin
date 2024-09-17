import React from "react";
import { BiCategory } from "react-icons/bi";

import CustomTable from "../../components/provider/molecules/CustomTable";
import { BsPeopleFill } from "react-icons/bs";

function Users() {
  const columns = ["Category Name", "Number of Services", "Created Date", "Actions"];
  const data = [
    ["Factories", "2", "15 / 1 / 2024 05:00 AM"],
    ["Factories", "2", "15 / 1 / 2024 05:00 AM"],
    ["Factories", "2", "15 / 1 / 2024 05:00 AM"],
    ["Users2", "9", "15 / 1 / 2023 05:00 AM"],
  ];

  return (
    <CustomTable
      title="Users"
      icon={BsPeopleFill}
      buttonName="Add New User"
      columns={columns}
      data={data}
      num= "5"
    />
  );
}

export default Users;
