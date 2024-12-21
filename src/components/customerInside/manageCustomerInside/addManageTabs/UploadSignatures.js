import React from "react";

const UploadSignatures = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">
          Market Staff Sign
          </label>
          <input
            type="file"
            placeholder="Courier No Of Retail Outlets"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">
          Party Sign
          </label>
          <input
            type="file"
            placeholder="Courier No Of Retail Outlets"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">
          Upper Level Sign1
          </label>
          <input
            type="file"
            placeholder="Courier No Of Retail Outlets"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">
          Upper Level Sign2
          </label>
          <input
            type="file"
            placeholder="Courier No Of Retail Outlets"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">
          Admin Sign
          </label>
          <input
            type="file"
            placeholder="Courier No Of Retail Outlets"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>


    </div>
  );
};

export default UploadSignatures;
