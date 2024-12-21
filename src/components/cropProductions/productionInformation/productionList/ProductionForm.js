
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ManageCustomerTable from "./ManageCustomerTable";

const ProductionForm = () => {
  return (
      <div className="row mt-3">
        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-lg-3 col-md-6 col-sm-12">
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

        <div className="col-12 text-center">
          <button type="button" className="btn btn-primary px-5">
            Search
          </button>
        </div>
      </div>
  );
};

export default ProductionForm
