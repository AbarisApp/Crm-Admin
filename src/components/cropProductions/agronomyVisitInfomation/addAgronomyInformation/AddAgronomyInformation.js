import React from "react";
import { useNavigate } from "react-router-dom";

const AddAgronomyInformation = () => {
  const navigate = useNavigate();
  function handleAddNewClick() {
    navigate("/agronomy-visit");
  }
  return (
    <div className="card m-2">
      <div className="bg-black text-light p-2 d-flex justify-content-between align-items-center">
        <h2 className="fs-4">Agronomy Practice Information</h2>
        <button
          onClick={handleAddNewClick}
          type="button"
          className="btn btn-primary"
        >
          Go Bakc
        </button>
      </div>
      <div className="row mt-3">
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
            <label htmlFor="employee" className="form-label">
              Farmer
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Farmer"}
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">
              Date Of Visit
            </label>
            <input
              type="Date"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="toDate" className="form-label">
              Crop Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Crop Name"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Problem In Crop
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Problem In Crop"}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Sugg.Dt
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
            <label htmlFor="employee" className="form-label">
              Total Land
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Total Land"}
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Product
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Product"}
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Volume
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Volume"}
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Select
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
            <label htmlFor="employee" className="form-label">
              Water Volume
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Water Volume"}
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Total Volume
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Total Volume"}
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              Select
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
              Drip Time
            </label>
            <input
              type="time"
              className="form-control"
              placeholder={"Drip Time"}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="downline" className="form-label">
              In Drip
            </label>
            <select className="form-select" id="downline">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-12">
          <div className="table-responsive mt-4">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Valume</th>
                  <th>Land</th>
                  <th>Water Volume</th>
                  <th>Total Volume</th>
                  <th>In Drip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
            Customer(Party)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Customer(Party)"}
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="employee" className="form-label">
              Comments
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={"Comments:"}
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="col-12 text-center">
          <button type="button" className="btn btn-primary px-5">
            Save 
          </button>
          <button type="button" className="btn btn-danger px-5">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAgronomyInformation;
