import React, { useState } from 'react'

const DealerStockTable = () => {
    const [data, setData] = useState([
          {
            country: "USA",
            state: "California",
            employee: "John Doe",
            customer: "ACME Corp",
            category: "Electronics",
            product: "Laptop",
            stock: 50,
          },
          {
            country: "Germany",
            state: "Bavaria",
            employee: "Anna Schmidt",
            customer: "Tech GmbH",
            category: "Software",
            product: "Antivirus",
            stock: 120,
          },
          {
            country: "India",
            state: "Karnataka",
            employee: "Rahul Gupta",
            customer: "Tata Ltd.",
            category: "Automobile",
            product: "Electric Car",
            stock: 30,
          }
        ]);
      
        return (
          <div className="table-responsive mt-5">
          <table className="table table-bordered table-striped">
            <thead className="bg-danger">
                <tr>
                  <th>Country</th>
                  <th>State</th>
                  <th>Employee</th>
                  <th>Customer (Party)</th>
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
                    <td>{row.employee}</td>
                    <td>{row.customer}</td>
                    <td>{row.category}</td>
                    <td>{row.product}</td>
                    <td>{row.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
}

export default DealerStockTable