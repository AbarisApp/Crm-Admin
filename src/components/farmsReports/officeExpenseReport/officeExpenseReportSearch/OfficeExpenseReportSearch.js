
import React from 'react'

function OfficeExpenseReportSearch() {

  return (
    <>

      <div className="row m-4">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption tbl-caption-2">
                  <h4 className="heading mb-0"> Date Range</h4>
                </div>
                <form className="tbl-captionn" >
                  <div className="row">
                    <div className="col-xl-5 mb-3">
                      <div className={`form-group`}>
                        <label htmlFor="subject">From Date </label>
                        <input
                          type="date"
                          id="subject"
                          name="subject"
                          value={''}
                          onChange={''}
                          className="form-control"
                        />

                      </div>
                    </div>
                    <div className="col-xl-5 mb-3">
                      <div className={`form-group`}>
                        <label htmlFor="subject">To Date </label>
                        <input
                          type="date"
                          id="subject"
                          name="subject"
                          value={''}
                          onChange={''}
                          className="form-control"
                        />

                      </div>
                    </div>
                    <div className="col-xl-2 mt-3">
                      <button type="button" className="btn btn-primary mt-4">Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OfficeExpenseReportSearch

