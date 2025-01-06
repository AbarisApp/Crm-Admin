import React from "react";

const NewProductinInformation = () => {
  return (
    <div className="row mt-3">
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
          <label htmlFor="fromDate" className="form-label">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">
            Districk Name
          </label>
          <input
            type="date"
            className="form-control"
            aria-describedby="Districk Name"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Address"}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Pin code
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Pin code"}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Mobile No
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Contant 1"}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Mobile No
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Contant 2"}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Taluka (Area)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Taluka (Area)"}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Destination
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Destination"}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder={"Email"}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Date of Birth
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"DOB"}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Date of Anniversary
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"DOA"}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Select Sub Customer
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={""}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Activity
          </label>
          <select className="form-select">
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
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Company Name "}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Assign To
          </label>
          <input
            type="text"
            className="form-control"
            value={"mr.Employee Tracker User-GJ83"}
            placeholder={""}
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Comments
          </label>
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
          ></textarea>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div class="mb-3 form-check mt-5">
          <input type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="exampleCheck1">
            Active ?
          </label>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div class="mb-3 form-check mt-5">
          <input type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="exampleCheck1">
          Production Farmer ?
          </label>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div class="mb-3 form-check mt-5">
          <input type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="exampleCheck1">
          Visit Req ?
          </label>
        </div>
      </div>

      <div className="col-12 text-center">
        <button type="button" className="btn btn-primary px-5">
          Search
        </button>
        <button type="button" className="btn btn-danger px-5">
          Reset
        </button>
      </div>
    </div>
  );
};

export default NewProductinInformation;  
