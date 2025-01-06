import React from "react";
import TrackingRepotFrom from "./TrackingRepotFrom";
import TrackingRepotTable from "./TrackingRepotTable";

const EmployeeTrackingInformation = () => {
  return (
    <div>
      <div className="bg-black text-light p-2 m-2">
        <h3 className="fs-4"> Employee Tracking Information</h3>
      </div>
      <div className="p-4 border rounded bg-light m-2">
        <TrackingRepotFrom />
      </div>
      <div className="border p-4 m-2 bg-light ">
        <TrackingRepotTable />
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

export default EmployeeTrackingInformation;
