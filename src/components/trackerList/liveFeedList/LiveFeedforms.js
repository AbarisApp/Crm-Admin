import React from 'react'

const LiveFeedforms = () => {
   return(
    <div className="m-2">

    <div className="p-4 border rounded bg-light">
      <div className="row g-3">

        <div className="col-lg-3 col-md-6 col-sm-12">
          <label htmlFor="employee" className="form-label">Name</label>
          <input
            type="text"
            id="employee"
            placeholder="Search Employee Name / Code"
            className="form-control"
          />
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
          <label htmlFor="downline" className="form-label">Custome</label>
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
   )
}

export default LiveFeedforms