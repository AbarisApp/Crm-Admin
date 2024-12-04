import React from "react";
import JustifiedExample from "./JustifiedExample";

const VehicleDetails = () => {
  return (
    <div className="m-4 ">
      <h2 className="">Vehicle Details</h2>
      <div className=" row ">
        <div className="col-xl-3">
          <div className="row ">
            <div className="col-xl-12">
              <div className="card">
                <div className="d-flex justify-content-center flex-column gap-2 align-items-center">
                  <h3>Asdk</h3>
                  <span>MOTORCYCLE</span>
                  <span className="btn btn-success">Active</span>
                </div>
                <ul className="list-group list-group-unbordered mb-3 mt-4">
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="fw-bold">Bookings</span>
                    <span>0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="fw-bold">Bookings</span>
                    <span>0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="fw-bold">Bookings</span>
                    <span>0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <JustifiedExample />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
