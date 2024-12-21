import React from 'react'

const AgronomyVisitForm = () => {
  return (
    <div className="row mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="mb-3">
        <label htmlFor="fromDate" className="form-label">
          From Date
        </label>
        <input
          type="Date"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="mb-3">
        <label htmlFor="toDate" className="form-label">
          To Date
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
        <label htmlFor="country" className="form-label">
          Country
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
        <label htmlFor="toDate" className="form-label">
          Districk
        </label>
        <input
          type="text"
          className="form-control"
          placeholder='Districk'
          aria-describedby="emailHelp"
        />
      </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="mb-3">
        <label htmlFor="employee" className="form-label">
          Taluka
        </label>
        <input
          type="text"
          className="form-control"
          placeholder={"Taluka"}
          aria-describedby="emailHelp"
        />
      </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="mb-3">
        <label htmlFor="employee" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          placeholder={"City"}
          aria-describedby="emailHelp"
        />
      </div>
    </div>

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
        <label htmlFor="employee" className="form-label">
        Custom From Date
        </label>
        <input
          type="date"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="mb-3">
        <label htmlFor="employee" className="form-label">
        Custom To Date
        </label>
        <input
          type="date"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </div>

    <div className="col-12 text-center">
      <button type="button" className="btn btn-primary px-5">
        Search
      </button>
    </div>
  </div>
  )
}

export default AgronomyVisitForm