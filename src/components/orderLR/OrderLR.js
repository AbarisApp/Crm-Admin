import React, { useState } from "react";
import CustomInputField from "../../common/CustomInputField";
import CustomPassInputField from "../../common/CustomPassInputField";

const OrderLR = () => {
  return (
    <div className="card">
      <h2 className="bg-black text-light p-2 fs-4">Order LR</h2>
      <div className="row mt-3">
        {/* From Date */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              From Date
            </label>
            <CustomInputField type={"date"} id="fromDate" />
          </div>
        </div>

        {/* To Date */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="toDate" className="form-label">
              To Date
            </label>
            <CustomInputField type={"date"} id="toDate" />
          </div>
        </div>

        {/* Country */}
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

        {/* State */}
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

        {/* Employee */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Employee
            </label>
            <CustomInputField
              type={"text"}
              placeholder={"Search Employee Name / code "}
            />
          </div>
        </div>

        {/* Downline */}
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

        {/* PO No */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="poNo" className="form-label">
              PO. No
            </label>
            <CustomInputField
              type={"text"}
              id="poNo"
              placeholder={"PO Number"}
            />
          </div>
        </div>

        {/* LR Status */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="lrStatus" className="form-label">
              LR Status
            </label>
            <select className="form-select" id="lrStatus">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="col-12 text-center">
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>

      <div className="mt-4">
        <table className="table table-bordered table-striped table-responsive">
          <thead className="table-dark ">
            <tr className="text-light">
              <th className="text-light">#</th>
              <th className="text-light text-center">Order Details</th>
              <th className="text-light text-center">Invoice No</th>
              <th className="text-light text-center">Bags</th>
              <th className="text-light text-center">LR Number</th>
              <th className="text-light text-center">LR Date</th>
              <th className="text-light text-center">Transport</th>
              <th className="text-light text-center">Delivery</th>
              <th className="text-light text-center">Save</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr>
              <td>1</td>
              <td>
                <div>
                  <span className="fw-bold">Order No: </span>
                  <span>GJ13441</span>
                </div>
                <div>
                  <span className="fw-bold">Order On: </span>
                  <span>2024-01-01</span>
                </div>
                <div>
                  <span className="fw-bold">Party Name: </span>
                  <span>
                    GJ1249 - Maruti Agro Center - Patdi - RJT - 1111111113
                  </span>
                </div>
              </td>
              <td>
                <CustomPassInputField
                  type={"text"}
                  placeholder={"Invoice No"}
                />
              </td>
              <td>
                <CustomPassInputField type={"text"} placeholder="Bags" />
              </td>
              <td>
                <CustomPassInputField type={"text"} placeholder="LR Number" />
              </td>
              <td>
                <CustomPassInputField type={"date"} />
              </td>
              <td>
                <CustomPassInputField type={"text"} placeholder="Transport" />
              </td>
              <td>
                <CustomPassInputField type={"text"} placeholder="Delivery" />
              </td>
              <td>
                <span className="fw-bold mb-2 d-inline-block">
                  Download PHoto
                </span>
                <CustomPassInputField
                  type={"file"}
                  placeholder={"choose file"}
                />
                <div className="d-flex align-items-center">
                  <button type="button" class="btn btn-primary btn-sm">
                    Save
                  </button>
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderLR;
