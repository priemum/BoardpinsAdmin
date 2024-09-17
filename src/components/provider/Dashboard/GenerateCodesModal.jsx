import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "../atoms/commonatoms/Modal";

const validationSchema = Yup.object({
  promocode: Yup.string().required("Promocode is required"),
  discount: Yup.string().required("Discount is required"),
});

function GenerateCodesModal({ isModalOpen, handleCloseModal }) {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        smallModal={true}
        className={"lg:w-[40%] mx-6 h-[60vh] bg-white text-center font-poppins"}
      >
        <div className="flex flex-wrap justify-center items-center h-full">
          <div className="grid grid-row-3 gap-12">
            <div className="block">
              <h1 className="text-dark font-poppins text-3xl py-6 font-extrabold">
                Generate a new Promocode
              </h1>
            </div>
            <Formik
              initialValues={{ promocode: "", discount: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // Handle promocode generation logic here
                console.log("Form values:", values);
                // You can also call handleCloseModal() here if you want to close the modal after submission
              }}
            >
              {({ handleSubmit }) => (
                <Form className="flex flex-wrap justify-center gap-6">
                  <div>
                    <label
                      htmlFor="promocode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Promocode
                    </label>
                    <Field
                      type="text"
                      id="promocode"
                      name="promocode"
                      className="mt-1 block outline-0 w-full rounded-md border p-3 border-[#6161FF] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="amazon30%"
                    />
                    <ErrorMessage
                      name="promocode"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="discount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Discount Percentage %
                    </label>
                    <Field
                      type="text"
                      id="discount"
                      name="discount"
                      className="mt-1 block outline-0 w-full rounded-md border p-3 border-[#6161FF] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="30%"
                    />
                    <ErrorMessage
                      name="discount"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mt-4 flex justify-end space-x-4 w-full">
                    <button
                      type="button"
                      className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      onClick={handleSubmit}
                    >
                      Generate
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default GenerateCodesModal;
