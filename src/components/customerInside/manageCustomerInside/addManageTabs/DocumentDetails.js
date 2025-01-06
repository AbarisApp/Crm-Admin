import React from "react";

const DocumentDetails = () => {
  return (
    <div className="row mt-3 ">
      <h4 className="bg-black p-2 fs-5 text-light">
        Details of Infrastructure / Facility of Distribution
      </h4>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">
            No Of Retail Outlets
          </label>
          <input
            type="text"
            placeholder="Courier No Of Retail Outlets"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            No Of Sales Person
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"No Of Sales Person"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            No Of Clerical Staff
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"No Of Clerical Staff"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Vehicle Two Wheeler
          </label>
          <input
            type="Number"
            className="form-control"
            placeholder={"Vehicle Two Wheeler"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            No Of Four Wheeler
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"No Of Four Wheeler"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            No Of Loader
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"No Of Loader"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            No Of Godown Facility
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"No Of Godown Facility"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Year In Business
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Year In Business"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Why Us ?
          </label>
          <textarea
            className="form-control"
            placeholder=" Why Us"
            id="floatingTextarea"
          ></textarea>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Date Of Establishment
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Date Of Establishment"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentDetails;
