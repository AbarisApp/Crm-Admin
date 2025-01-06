import React from "react";
import NewProductinInformation from "./NewProductinInformation";
import { useNavigate } from "react-router-dom";

const NewProductionList = () => {

  const navigate = useNavigate()
  function handleAddNewClick(){
    navigate("/production")
  }
  return (
    <div className="card m-2">
      <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center">
        <h2 className="fs-4">Customer Information</h2>
        <button
          onClick={handleAddNewClick}
          type="button"
          className="btn btn-primary "
        >
          Go Back
        </button>
      </div>

      <NewProductinInformation />
    </div>
  );
};

export default NewProductionList;
