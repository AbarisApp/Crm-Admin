import React, { useState } from "react";
import CustomInputField from "../../../common/CustomInputField";
import { useNavigate } from "react-router-dom";
import ManageCustomerTable from "./ManageCustomerTable";
import ManagePoppup from "./ManagePoppup";

const ManageCustomerInside = () => {
  const [show, setShow] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navigate = useNavigate();
  function handleAddNewClick() {
    navigate("/add-manage-customer");
  }

  const toggleDropdown = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = [
    { id: 1, name: "ASSIGN PROFIT CENTER" },
    { id: 2, name: "ASSING ADDLCUSTOMER GROUP" },
    { id: 3, name: "ASSING DUSTOMER GROUP" },
    { id: 4, name: "INACTIVE SELLECTED PARTIES" },
    { id: 5, name: "ACTIVE SELECTED PARTIES " },
    { id: 6, name: "UPDATE SELECTED PARTIES LOCATION" },
    { id: 7, name: "SELECTED PARTIES ASIGN TO DEPO" },
    { id: 8, name: "SELECTED PARTIES ASIGN TO EMPLOYEE" },
    { id: 9, name: "SELECTED PARTIES TO SECONDARY EMPLOYEE" },
    { id: 10, name: "SELECTED DEALER ASIGN MARKETING GROUP " },
    { id: 11, name: "ASSING BEAT" },
  ];
  return (
    <div className="card m-1">
      <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center">
        <h2 className="fs-4">Manage Customer</h2>
        <button
          onClick={handleAddNewClick}
          type="button"
          className="btn btn-primary "
        >
          Add New
        </button>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              From Date
            </label>
            <input
              type="Date"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="toDate" className="form-label">
              To Date
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select className="form-select" id="country">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select className="form-select" id="state">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Depot
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Serch Depot"}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Employee
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Search Employee Name / code "}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Customer(Party)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Search Customer(Party) Company Name / code "}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="downline" className="form-label">
              Downline
            </label>
            <select className="form-select" id="downline">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              Status
            </label>
            <select className="form-select" id="state">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              Price List
            </label>
            <select className="form-select" id="state">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              Mr Pending
            </label>
            <select className="form-select" id="state">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              Depot Pending
            </label>
            <select className="form-select" id="state">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Secondary Emp
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Search Employee code"}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Search
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Search....."}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="dropdown">
            <label htmlFor="fromDate" className="form-label">
              Beat/Route
            </label>
            <button
              className="btn p-2 btn-light m-0 border dropdown-toggle w-100 text-start"
              type="button"
              onClick={toggleDropdown}
              aria-expanded={menuIsOpen}
            >
              <em>Beat/Route</em>
            </button>
            {menuIsOpen && (
              <div className="dropdown-menu w-100 show">
                <div className="dropdown-item">
                  <span>No matches for ""</span>
                </div>
                <div className="p-2">
                  <button type="button" className="btn btn-primary">
                    Ok
                  </button>
                  <button type="button" className="btn btn-primary">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-12 text-center">
          <button type="button" className="btn btn-primary ">
            Search
          </button>
        </div>
      </div>

      <div className="mt-3">
        <ManageCustomerTable />
      </div>

      <div className="mt-3 card">
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <button
                type="button"
                className="btn btn-info"
                onClick={handleShow}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div class="mb-3">
              <label htmlFor="state" className="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                placeholder="Message"
                id="floatingTextarea"
              ></textarea>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="mb-3">
              <label htmlFor="employee" className="form-label">
                Title For Notification Only
              </label>
              <input
                type="text"
                className="form-control"
                placeholder={"Notification Title "}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                For
              </label>
              <select className="form-select" id="state">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                Type
              </label>
              <select className="form-select" id="state">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                Action
              </label>
              <div>
                <button type="btn" className="btn btn-info">
                  SEND SMS/NOTIFICATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ManagePoppup show={show} handleClose={handleClose} />
    </div>
  );
};

export default ManageCustomerInside;
