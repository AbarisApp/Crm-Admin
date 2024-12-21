import React from 'react';

function TrackingForm() {
  return (
    <div className="m-2">

      <div className="p-4 border rounded bg-light">
        <div className="row g-3">

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="fromDate" className="form-label">From Date</label>
            <input
              type="date"
              id="fromDate"
              defaultValue="2024-12-18"
              className="form-control"
            />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="toDate" className="form-label">To Date</label>
            <input
              type="date"
              id="toDate"
              defaultValue="2024-12-18"
              className="form-control"
            />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="country" className="form-label">Country</label>
            <select id="country" className="form-select">
                <option selected>Open this select menu</option>
              <option value="" selected>1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="state" className="form-label">State</label>
            <select id="state" className="form-select">
            <option selected>Open this select menu</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">Employee</label>
            <input
              type="text"
              id="employee"
              placeholder="Search Employee Name / Code"
              className="form-control"
            />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="downline" className="form-label">Downline</label>
            <select id="downline" className="form-select">
            <option selected>Open this select menu</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>

          <div className="col-12 text-center mt-3">
            <button type="button" className="btn btn-primary px-5">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackingForm;
