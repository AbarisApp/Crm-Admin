import React from "react";

export default function LeadStatusChangeFilter() {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">Lead Status Filter</h4>
                            <div>
                                {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Status Change Date From</label>
                                    <input className="form-control" type="data" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Status Change Date To</label>
                                    <input className="form-control" type="data" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Current Status</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option>All</option>
                                            <option>Working</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Sales Person</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
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