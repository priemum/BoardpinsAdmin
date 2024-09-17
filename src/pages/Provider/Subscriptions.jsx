import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import CustomTable from "../../components/provider/molecules/CustomTable";
import Modal from "../../components/provider/atoms/commonatoms/Modal";
import CustomSelectButton from "../../components/provider/atoms/commonatoms/CustomSelectButton";
import { FaPlus } from "react-icons/fa6";

function Subscriptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState(["Category 1", "Category 2"]); // Initial categories
  const [plans, setPlans] = useState([{ plan: "", price: "" }]);
  const [isAddingCategory, setIsAddingCategory] = useState(false); // State to control the visibility of the input field
  const [newCategory, setNewCategory] = useState(""); // State to track the new category name

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCategoryClick = () => {
    setIsAddingCategory(true);
  };

  const handleSaveCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
      setIsAddingCategory(false);
    }
  };

  const handleAddPlan = () => {
    setPlans([...plans, { plan: "", price: "" }]);
  };

  const handlePlanChange = (index, field, value) => {
    const updatedPlans = [...plans];
    updatedPlans[index][field] = value;
    setPlans(updatedPlans);
  };

  const columns = ["Category", "Plan", "Price", "Actions"];
  const data = [
    ["Category 1", "Premium", "1,000 EGP"],
    ["Category 1", "Premium", "1,000 EGP"],
    ["Category 1", "Premium", "1,000 EGP"],
    ["Category 1", "Premium", "1,000 EGP"],
  ];

  return (
    <>
      <CustomTable
        title="Subscriptions"
        icon={BiCategory}
        buttonName="Add New"
        columns={columns}
        data={data}
        num="4"
        onButtonClick={handleOpenModal}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className={
          "lg:w-[40%] mx-6 max-h-[75%] min-h-[60%] bg-white font-poppins"
        }
      >
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col gap-12">
            <h1 className="text-center text-dark font-poppins font-bold text-3xl">
              Add new Category
            </h1>
            <div className="space-y-4">
              <div className="flex items-center w-full">
                <div className="flex-grow">
                  <label className="block text-sm font-medium text-gray-700">
                    Business Category Name
                  </label>
                  <CustomSelectButton
                    options={categories}
                    defaultText="Select Category"
                    onSelect={(option) => console.log(option)} // Handle selection
                    className={
                      "flex relative items-center border-[1px] p-3 border-[#6161ff52] w-full rounded-lg lg:min-w-[120px] min-w-[150px] text-center py-3"
                    }
                  />
                </div>
                <button
                  onClick={handleAddCategoryClick}
                  className="ml-2 px-4 py-3 h-full bg-[#F5F5F5] text-dark mt-4 rounded"
                >
                  <FaPlus />
                </button>
              </div>

              {isAddingCategory && (
                <div className="mt-4">
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Enter new category name"
                    className="w-full border p-3 rounded-lg outline-0 border-[#6161ff52] shadow-sm"
                  />
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={handleSaveCategory}
                      className="px-4 py-2 text-white bg-[#6161FF] rounded-lg"
                    >
                      Save Category
                    </button>
                  </div>
                </div>
              )}

              {plans.map((plan, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Plan
                    </label>
                    <input
                      type="text"
                      value={plan.plan}
                      onChange={(e) =>
                        handlePlanChange(index, "plan", e.target.value)
                      }
                      className="mt-1 block w-full rounded-lg outline-0 border p-3 border-[#6161ff52] shadow-sm"
                      placeholder="Plan Name"
                    />
                  </div>
                  <button
                    onClick={handleAddPlan}
                    className="mt-6 px-4 py-4 bg-[#F5F5F5] text-dark rounded"
                  >
                    <FaPlus />
                  </button>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Price
                    </label>
                  <div className="  pe-3 flex gap-0 items-center rounded-lg   bg-white outline-0 border border-[#6161ff52]">
                  <input
                      type="text"
                      value={plan.price}
                      onChange={(e) =>
                        handlePlanChange(index, "price", e.target.value)
                      }
                      className=" m-2 rounded-xl  outline-0   bg-gray-200  max-w-[100px]  p-3 py-2  shadow-sm"
                      placeholder="Price"
                    />
<div className=" border-[#6161ff52] border-l-2 h-full text-sm px-3 font-semibold text-[#6161FF]">EGP</div>
                  </div>
                  
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-500 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-white bg-[#6161FF] rounded-lg">
                Create
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Subscriptions;
