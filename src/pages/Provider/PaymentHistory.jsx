import React from "react";
import { BiCategory } from "react-icons/bi";

import CustomTable from "../../components/provider/molecules/CustomTable";

function PaymentHistory() {
  const columns = ["Email", "Plan", "Price","Created Date", "Actions"];
  const data = [
    ["kerooadel5@gmail.com", "Premium","1,000 EGP", "15 / 1 / 2024 05:00 AM"],
    ["kerooadel5@gmail.com", "Premium","1,000 EGP", "15 / 1 / 2024 05:00 AM"],
    ["kerooadel5@gmail.com", "Premium","1,000 EGP", "15 / 1 / 2024 05:00 AM"],
    ["kerooadel5@gmail.com", "Premium","1,000 EGP", "15 / 1 / 2024 05:00 AM"],
   
  ];

  return (
    <CustomTable
      title="Payment History"
      icon={BiCategory}
     
      columns={columns}
      data={data}
          num= "4"
    />
  );
}

export default PaymentHistory;
