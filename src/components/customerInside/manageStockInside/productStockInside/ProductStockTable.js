import React, { useState } from 'react';

const ProductStockTable = () => {
  const [data, setData] = useState([
    {
      country: "USA",
      state: "California",
      depot: "Depot A",
      customer: "ACME Corp",
      category: "Electronics",
      product: "Laptop",
      stock: 50,
    },
    {
      country: "Germany",
      state: "Bavaria",
      depot: "Depot B",
      customer: "Tech GmbH",
      category: "Software",
      product: "Antivirus",
      stock: 120,
    },
    {
      country: "India",
      state: "Karnataka",
      depot: "Depot C",
      customer: "Tata Ltd.",
      category: "Automobile",
      product: "Electric Car",
      stock: 30,
    }
  ]);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="bg-danger">
          <tr>
            <th>Country</th>
            <th>State</th>
            <th>Depot</th>
            <th>Category</th>
            <th>Product</th>
            <th>Stock</th>
          </tr>
        </thead>

        {/* The Table Body */}
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.country}</td>
              <td>{row.state}</td>
              <td>{row.depot}</td> {/* Display Depot */}
              <td>{row.category}</td>
              <td>{row.product}</td>
              <td>{row.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductStockTable;
