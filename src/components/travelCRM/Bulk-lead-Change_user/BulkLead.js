import React from "react";

export default function BulkLead() {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">Lead Dates</h4>
                            <div>
                                {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                            </div>
                        </div>
                        <form>
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">From</label>
                                    <input className="form-control" type="date" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">To</label>
                                    <input className="form-control" type="date" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Lead Priority</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option>All</option>
                                            <option>Hot</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Lead Source</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option>All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Lead Status</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option>New Dehli</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Assign To</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option>All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">City</label>
                                    <input className="form-control" type="search" placeholder="City" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Tag</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option>All</option>
                                            <option>Family</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 mt-3 d-grid align-items-end">
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}