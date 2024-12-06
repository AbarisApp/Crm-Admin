import React, { useState } from "react";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaDownload } from "react-icons/fa6";
import CustomInputField from "../../../common/CustomInputField";
import ChooseColumns from "../chooseColumns/ChooseColumns";
import CustomerPattern from "../customerPattern/CustomerPattern";

const BoostSearch = () => {
  const [show, setShow] = useState(false);  // This controls the modal visibility
  const [showCustomer, setShowCustomer] = useState(false);  // This controls the modal visibility

  const handleShow = () => setShow(true);  // Open the modal
  const handleClose = () => setShow(false); // Close the modal

  const handleShowCustomer = () => setShowCustomer(true);  // Open the modal
  const handleCloseCustomer = () => setShowCustomer(false)

  const chengeStatus = (status, name) => {
    const maped = data.map((item) => {
      if (item.name === name) {
        return { ...item, isActive: status };
      }
      return item;
    });
    setData(maped);
  };

  const columns = ['Email / Contact', 'Customer', 'Qty', 'Taxless', "Taxpaid"];
  // Hardcoded row data
  const rows = [
    { id: 1, email: 'john@example.com', customer: "john", qty: '4', taxless: '4534', Taxpaid: "20,414" },
    { id: 2, email: 'john@example.com', customer: "john", qty: '4', taxless: '456456', Taxpaid: "20,414" },
    { id: 3, email: 'john@example.com', customer: "john", qty: '4', taxless: '45646', Taxpaid: "20,414" }
  ];

  const [data, setData] = useState([
    { name: "Area", isActive: false },
    { name: "Batch Expiry", isActive: false },
    { name: "Batch Name", isActive: false },
    { name: "Billdate", isActive: false },
    { name: "Billno", isActive: true },
    { name: "Brand", isActive: false },
    { name: "Category 1", isActive: false },
    { name: "Category Old", isActive: true },
    { name: "Cg 1", isActive: false },
    { name: "Cg 2", isActive: false },
    { name: "Cg 3", isActive: false },
    { name: "City", isActive: false },
    { name: "Company", isActive: false },
    { name: "Continent", isActive: false },
    { name: "Customer Group Name", isActive: false },
    { name: "Customer Name", isActive: false },
    { name: "Customer Type", isActive: false },
    { name: "District", isActive: false },
    { name: "Document Type", isActive: false },
    { name: "Ig 7", isActive: false },
    { name: "Ig 9", isActive: false },
    { name: "Im 1", isActive: false },
    { name: "Im 3", isActive: false },
    { name: "Im 4", isActive: false },
  ]);

  return (
    <div className="card">
      <div className="row align-items-center bg-black p-2">
        <div className="col-3">
          <HiOutlineSquare3Stack3D size={30} className="text-primary" onClick={handleShow} />
        </div>
        <div className="col-9 d-flex align-items-center gap-3 justify-content-end">
          <div className="mb-3 form-check d-flex align-items-center">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label text-nowrap text-light" htmlFor="exampleCheck1">
              Show Email and Contact
            </label>
          </div>

          <div className="w-100">
            <CustomInputField placeholder={"Press Space for Global Search"} className="p-2 w-100 border rounded-3 shadow-sm" />
          </div>

          <div className="w-50">
            <CustomInputField placeholder={"Search"} className="p-2 border rounded-3 shadow-sm w-75" />
          </div>
          <button type="button" className="border border-primary text p-2 text-primary">
            <FaDownload size={20} />
          </button>
        </div>
      </div>
      <div className="row my-3 fw-bold">
        <div className="col-4">
          <div className="border p-3 bg-black text-light">
            Projected Losses
            <span className="text-danger"> 264,417 </span> Across
            <span className="text-danger"> 46 </span> Customers
          </div>
        </div>
        <div className="col-2">
          <div className="border p-3 d-flex justify-content-between align-items-center bg-black text-light">
            <span>Qty</span>
            <span>129</span>
          </div>
        </div>
        <div className="col-3">
          <div className="border p-3 d-flex justify-content-between align-items-center bg-black text-light">
            <span>TaxLess</span>
            <span>6,08,041</span>
          </div>
        </div>
        <div className="col-3">
          <div className="border p-3 d-flex justify-content-between align-items-center bg-black text-light">
            <span>TaxPaid</span>
            <span>7,17,488</span>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover table-bordered shadow-sm rounded">
      {/* Table Header */}
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} onClick={handleShowCustomer}>
            <td>{row.customer}</td>
            <td>{row.email}</td>
            <td>{row.qty}</td>
            <td>{row.taxless}</td>
            <td>{row.Taxpaid}</td>
          </tr>
        ))}
      </tbody>
    </table>
      <ChooseColumns show={show} handleClose={handleClose} data={data} chengeStatus={chengeStatus} setData={setData} />
      <CustomerPattern  showCustomer={showCustomer} handleCloseCustomer={handleCloseCustomer}/>
    </div>
  );
};

export default BoostSearch;
