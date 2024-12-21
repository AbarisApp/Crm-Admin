import React from 'react'

const DealerStockForm = () => {
    return (
        <div className="">
          <h4 className="bg-black fs-4 p-2 text-light">Dealer Stock</h4>
          <div className="row mt-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                Country
                </label>
                <select className="form-select">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                State
                </label>
                <select className="form-select">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="fromDate" className="form-label">
                Employee
                </label>
                <input
                  type="text"
                  placeholder="Search Employee/code"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="fromDate" className="form-label">
                Customer(Party)
                </label>
                <input
                  type="text"
                  placeholder="Search Customer(Party) Company Name/Code"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                Category
                </label>
                <select className="form-select">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="fromDate" className="form-label">
                Product
                </label>
                <input
                  type="text"
                  placeholder="Search Product"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                Stock
                </label>
                <select className="form-select" id="country">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary">Search</button>
            <button type="button" className="btn btn-danger">Rest</button>
          </div>
        </div>
      );
}

export default DealerStockForm