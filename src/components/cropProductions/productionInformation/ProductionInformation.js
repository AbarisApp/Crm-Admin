import React from "react";
import ProductionForm from "./productionList/ProductionForm";
import { useNavigate } from "react-router-dom";
import ProductionFormTwo from "./productionList/ProductionFormTwo";
import ProductionTable from "./productionList/ProductionTable";

const ProductionInformation = () => {
  const navigate = useNavigate();

  function handleAddNewClick() {
    navigate("/new-production-list");
  }

  const data = [
    { id: 1, name: "VRIFY SELECTED FARMERS" },
    { id: 2, name: "UN-VERIFIED SELECTED FARMERS" },
    { id: 3, name: "SELECTED FARMERS ASSING TO EMP" },
  ];

  return (
    <div className="card m-2">
      <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center">
        <h2 className="fs-4">Customer Directory</h2>
        <button
          onClick={handleAddNewClick}
          type="button"
          className="btn btn-primary "
        >
          Add New
        </button>
      </div>
      <ProductionForm />
      <ProductionTable />
      <ProductionFormTwo data={data} />
    </div>
  );
};

export default ProductionInformation;
