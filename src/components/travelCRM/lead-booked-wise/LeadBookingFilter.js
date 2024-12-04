import React from "react"

export function LeadFilter() {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">Lead Filter</h4>
                            <div>
                                {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Form</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">To</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Status</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option></option>
                                            <option>Working</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Assigned To</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option></option>
                                            <option>All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 d-grid align-items-end mt-3">
                                <button className="btn m-0 btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 