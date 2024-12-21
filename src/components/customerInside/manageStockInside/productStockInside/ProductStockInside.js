import React from "react";
import ProductStockForm from "./ProductStockForm";
import ProductStockTable from "./ProductStockTable";

const ProductStockInside = () => {
  return (
   <div className="card m-1">
      <div>
      <ProductStockForm />
      </div>
      <div className="mt-5">
      <ProductStockTable />
      </div>
   </div>
  );
};

export default ProductStockInside;
