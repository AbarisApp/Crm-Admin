import React from 'react'

function PackageFIlter() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Filter</b></h4>
                                </div>
                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                    <div className="form-group col-6 mt-2">
                                        <label htmlFor="fromDate">Country</label>
                                        <select className="form-select form-control" aria-label="Default select example">
                                            <option selected>Select Country</option>
                                            <option value={11}>One</option>
                                            <option value={21}>Two</option>
                                            <option value={11}>Three</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-6 mt-2">
                                        <label htmlFor="fromDate">Search By Keyword</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Search By Keyword'
                                            id="fromDate"
                                        />
                                    </div>

                                    <div className="form-group col-12 mt-3">
                                        <button type="button" className="btn btn-warning float-end" >
                                            RESET
                                        </button>
                                        <button type="submit" className="btn btn-primary float-end">
                                            FILTER
                                        </button>
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

export default PackageFIlter