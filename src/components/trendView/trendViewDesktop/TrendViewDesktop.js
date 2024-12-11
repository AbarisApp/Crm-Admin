import React from "react";
import SelectOption from "../../../common/selectOption";
import CustomInputField from "../../../common/CustomInputField";
import { FaDownload } from "react-icons/fa6";
import { BsFillFileSpreadsheetFill } from "react-icons/bs";
import TrendTable from "../trendTable/TrendTable";

const TrendViewDesktop = () => {
  let options = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
  ];
  //pb-3 py-2 bg-light rounded shadow-sm mb-2
  return (
    <div className="row">
      <div className="col-12">
        <div className="card p-3">
          <div className="mb-3">
            <div className="row ">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label fw-bold">
                    Transaction Type
                  </label>
                  <SelectOption
                    options={options}
                    combo="Select Transaction Type "
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label fw-bold">
                    Financial Year
                  </label>
                  <SelectOption
                    options={options}
                    combo="Select Financial Year"
                  />
                </div>
              </div>
              <div className="col-6 ">
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label fw-bold">
                    Cycle
                  </label>
                  <SelectOption options={options} combo="Select Cycle" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label fw-bold">
                    Date Range
                  </label>
                  <SelectOption options={options} combo="Select Date Range" />
                </div>
              </div>
              <div className="col-12 d-flex justify-content-end">
                <button type="button" className="btn btn-primary fw-bold fw-bold">
                  Submit
                </button>
              </div>
            </div>

            <div className="row justify-content-between align-items-center">
              <div className="col-3">
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label fw-bold">
                    Main Field
                  </label>
                  <SelectOption options={options} combo="Select Mian Field" />
                </div>
              </div>
              <div className="col-8 d-flex justify-content-end align-items-center">
                {/* Search Input and Buttons */}
                <div className="d-flex justify-content-end align-items-center w-100">
                  <CustomInputField
                    placeholder="Search"
                    className=" me-3"
                    style={{ width: "400px" }}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-primary me-2 fs-5 "
                  >
                    123
                  </button>
                  <button type="button" className="btn btn-primary me-2">
                    <BsFillFileSpreadsheetFill size={25} />
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <FaDownload />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Adding Border to the Table */}
          <TrendTable />
        </div>
      </div>
    </div>
  );
};

export default TrendViewDesktop;
