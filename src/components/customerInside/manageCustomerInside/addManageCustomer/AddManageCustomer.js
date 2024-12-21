import React from "react";
import { useNavigate } from "react-router-dom";
import AddManageForm from "./AddManageForm";
import AddManageTabs from "../addManageTabs/AddManageTabs";

const AddManageCustomer = () => {
  const navigate = useNavigate();
  function handleAddNewClick() {
    navigate("/manage-customer");
  }
  return (
    <div className="card m-1">
      <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center">
        <h2 className="fs-4">Manage Customer</h2>
        <button
          onClick={handleAddNewClick}
          type="button"
          className="btn btn-primary "
        >
          Go Back
        </button>
      </div>
        <AddManageForm />
        <div className="mt-5">
        <AddManageTabs />
        </div>
    </div>
  );
};

export default AddManageCustomer;
