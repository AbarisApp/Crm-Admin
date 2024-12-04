import React from "react";

export default function LeadSearchFilter() {
    return (
        <div className="row my-2 mx-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">Lead Search Filter</h4>
                            <div>
                                {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Lead Number</label>
                                    <input className="form-control" placeholder="Lead Number" type="number" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Firstname</label>
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Lastname</label>
                                    <input placeholder="Last Name" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Mobile Number</label>
                                    <input type="number" placeholder="Mobile Number" className="form-control" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Assigned To</label>
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
                                    <label className="form-label">Email</label>
                                    <input className="form-control" placeholder="Email" type="email" />
                                </div>
                            </div>
                            <div className="col-1 d-grid align-items-end">
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}