import React from 'react'

const GpsFlaginformationForm = () => {
    return (
        <div className="row g-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">From Date</label>
            <input
              type="Date"
              id="employee"
              className="form-control"
            />
          </div>
  
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">To Date</label>
            <input
              type="Date"
              id="employee"
              className="form-control"
            />
          </div>
  
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="downline" className="form-label">Country</label>
            <select id="downline" className="form-select">
            <option selected>Open this select menu</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
  
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="downline" className="form-label">State</label>
            <select id="downline" className="form-select">
            <option selected>Open this select menu</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
  
          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="employee" className="form-label">Employee</label>
            <input
              type="text"
              placeholder="Search Employee Name/Code"
              id="employee"
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

          <div className="col-lg-3 col-md-6 col-sm-12">
            <label htmlFor="downline" className="form-label">Home Location</label>
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
      
    );
}

export default GpsFlaginformationForm