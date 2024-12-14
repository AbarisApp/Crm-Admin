import React from 'react'
import CustomInputField from '../../common/CustomInputField';

const PickingDrying = () => {
    return (
        <div className="card">
          <h2 className="bg-black text-light p-2 fs-4">Picking & Drying</h2>
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
                District
                </label>
                <CustomInputField
                  type={"text"}
                  placeholder={"Search District "}
                />
              </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                Taluka
                </label>
                <CustomInputField
                  type={"text"}
                  placeholder={"Search Taluka "}
                />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                City
                </label>
                <CustomInputField
                  type={"text"}
                  placeholder={"Search City "}
                />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="downline" className="form-label">
                  Status
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
                <label htmlFor="employee" className="form-label">
                Farmer
                </label>
                <CustomInputField
                  type={"text"}
                  placeholder={"Search Farmer "}
                />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                Picking From Date
                </label>
                <CustomInputField
                  type={"date"}
                />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                Picking To Date
                </label>
                <CustomInputField
                  type={"Date"}
                />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                Sealing From Date
                </label>
                <CustomInputField
                  type={"date"}
                />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                Sealing To Date
                </label>
                <CustomInputField
                  type={"Date"}
                />
              </div>
            </div>
    
            <div className="col-12 text-center">
              <button type="button" className="btn btn-primary ">
                Search
              </button>
            </div>
          </div>
    
          {/* ExistingPartyVisit table */}
          <div className="border mt-4">
            <div className="mt-3">
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
              </div>
            </div>
          </div>
        </div>
      );
}

export default PickingDrying