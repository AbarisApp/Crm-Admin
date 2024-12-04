import React from 'react'

function MilkCollectReportSearch() {
  return (
    <>

      <div className="row m-4">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption tbl-caption-2">
                  <h4 className="heading mb-0">  Search Fields
                  </h4>
                </div>
                <form className="tbl-captionn" >
                  <div className="row">
                    <div className="col-xl-3 mb-3">
                      <div className={`form-group`}>
                      <label htmlFor="subject">Stall No </label>
                        <select class="form-control" aria-label="Default select example">
                          <option selected>---Select A Stall No----</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-3 mb-3">
                      <div className={`form-group`}>
                        <label htmlFor="subject">Milk Account No </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={''}
                          onChange={''}
                          className="form-control"
                        />

                      </div>
                    </div>
                    <div className="col-xl-3 mb-3">
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
                    <div className="col-xl-3 mb-3">
                      <div className={`form-group`}>
                        <label htmlFor="subject">TO Date </label>
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
                    <div className="col-xl-12 mt-3">
                      <button type="button" className="btn btn-primary mt-2 w-100">Search</button>
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

export default MilkCollectReportSearch
