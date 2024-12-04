import React from "react";
import CustomInputField from "../../../common/CustomInputField";

export default function UpComingTravelFilter() {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive overflow-x-none active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">Lead Upcoming Travel Filter</h4>
                            <div>
                                {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                            </div>
                        </div>
                        <div className="row">
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">From Date</label>
                                            <input className="form-control" type="data" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">To Date</label>
                                            <input className="form-control" type="data" />
                                        </div>
                                    </div>
                                    <div className="col-1 mt-3 d-grid align-items-end">
                                        <button className="btn m-0 btn-primary">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}