import React from "react";

export default function ContactSgainstCompanyFilter() {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">Contacts report User wise Filter</h4>
                            <div>
                                {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">company</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option></option>
                                            <option>Select Company</option>
                                        </select>
                                    </div>
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