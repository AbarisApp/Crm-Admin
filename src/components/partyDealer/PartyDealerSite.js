import React from 'react'
import CustomInputField from '../../common/CustomInputField';

const PartyDealerSite = () => {
    return (
        <div className="card">
          <h2 className="bg-black text-light p-2 fs-4">Party/Dealer Site</h2>
          <div className="row mt-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="fromDate" className="form-label">
                  From Date
                </label>
                <CustomInputField type={"date"} id="fromDate" />
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="toDate" className="form-label">
                  To Date
                </label>
                <CustomInputField type={"date"} id="toDate" />
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                Depot
                </label>
                <CustomInputField
                  type={"text"}
                  placeholder={"Search Depot"}
                />
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                  Employee
                </label>
                <CustomInputField
                  type={"text"}
                  placeholder={"Search Employee Name / code "}
                />
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="downline" className="form-label">
                  Downline
                </label>
                <select className="form-select" id="downline">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="lrStatus" className="form-label">
                Status
                </label>
                <select className="form-select" id="lrStatus">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                  Search
                </label>
                <CustomInputField
                  type={"text"}
                  placeholder={"Search.... "}
                />
              </div>
            </div>
    
            <div className="col-12 text-center">
              <button type="button" className="btn btn-primary ">
                Search
              </button>
              <button type="button" className="btn btn-primary ">
                Print
              </button>
            </div>
          </div>
    
          {/* ExistingPartyVisit table */}
          <div>
            {/* <div className="mt-4">
              <table className="table table-bordered table-striped table-responsive">
                <thead className="table-dark ">
                  <tr className="text-light">
                    <th className="text-light text-center">
                      Self - Exisitng Party Visit Report. (Date: 13-Dec-2024 - To -
                      13-Dec-2024)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No Records Found...</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="employee" className="form-label">
                    Email
                  </label>
                  <CustomInputField type={"Email"} placeholder={"Email To"} />
                </div>
                <div>
                  <button type="button" className="btn btn-warning ">
                    Email
                  </button>
                  <button type="button" className="btn btn-success ">
                    Excel
                  </button>
                  <button type="button" className="btn btn-primary ">
                    PDF
                  </button>
                  <button type="button" className="btn btn-info ">
                    Print
                  </button>
                </div>
              </div>
              {/* <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="lrStatus" className="form-label">
                    Email Template
                  </label>
                  <select className="form-select" id="lrStatus">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <button type="button" className="btn btn-info ">
                  Send Bulk Email
                </button>
              </div> */}
            </div>
          </div>
        </div>
      );
}

export default PartyDealerSite