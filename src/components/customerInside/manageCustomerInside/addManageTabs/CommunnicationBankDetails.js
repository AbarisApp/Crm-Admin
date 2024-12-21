import React from "react";

const CommunnicationBankDetails = () => {
  return (
    <div className="row mt-3">
      <h4 className="text-black">Postal Communication</h4>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="fromDate" className="form-label">
            By Postal
          </label>
          <textarea
            className="form-control"
            placeholder=""
            id="floatingTextarea"
          ></textarea>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">
            Courier 1
          </label>
          <input
            type="text"
            placeholder="Courier 1"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            Courier 2
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Courier 2"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="mb-3 mt-5 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
      </div>

      <h5 className="fs-4 text-black">Bank Details</h5> 

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Bank Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Bank Name"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Bank A/c No
          </label>
          <input
            type="Number"
            className="form-control"
            placeholder={"Bank A/c No"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Bank Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Bank Address"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          IFSC Code
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"IFSC Code"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Name Of Cheque Sign Authority
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Name Of Cheque Sign Authority"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <h5 className="fs-4 text-black">Financial Status (Working capital)</h5>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Own Fund
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Own Fund"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Loans From Bank
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Loans From Bank"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Loans From Market
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Loans From Market"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Total Capital
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Total Capital"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <h5 className="fs-4 text-black">Bank Limit (Please Mention the name of Bank)</h5>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Working Capital Load
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Working Capital Load"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Term Loan
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Term Loan"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Over Draft
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Over Draft"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Limit Total
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Limit Total"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <h5 className="fs-4 text-black">Details of Security Deposit</h5>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Cheque No
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Cheque No"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Date Of Issue
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Date Of Issue"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Amount
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Amount"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
          Drawn On Bank
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Drawn On Bank"}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunnicationBankDetails;
