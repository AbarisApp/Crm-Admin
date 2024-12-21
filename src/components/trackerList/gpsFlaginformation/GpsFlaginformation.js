import React from "react";
import GpsFlaginformationForm from "./GpsFlaginformationForm";
import GpsFlaginformationTable from "./GpsFlaginformationTable";

const GpsFlaginformation = () => {
  return (
    <div>
      <div className="bg-black text-light p-2 m-2">
        <h3 className="fs-4">GPS Flag</h3>
      </div>
      <div className="p-4 border rounded bg-light m-2">
        <GpsFlaginformationForm />
      </div>
      <div className="p-4 border rounded bg-light m-2">
        <GpsFlaginformationTable />
      </div>
      <div className="p-4 border rounded bg-light m-2">
        <div className="mt-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="employee" className="form-label">
                Name
              </label>
              <input
                type={"Email"}
                id="employee"
                placeholder={"Email To"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 mt-3">
            <button type="button" className="btn btn-warning ">
              Email
            </button>
            <button type="button" className="btn btn-success ">
              Excel
            </button>
            <button type="button" className="btn btn-primary ">
              PDF
            </button>
            <button type="button" className="btn btn-info ">
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GpsFlaginformation;
