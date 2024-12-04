import React from "react"
import CustomInputField from "../../common/CustomInputField"

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
                            <div className="col-11">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Form</label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"date"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">To</label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"date"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Lead Priority</label>
                                            <div className="w-100">
                                                <select className="form-select" name="Status">
                                                    <option></option>
                                                    <option>Alll</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Lead Status</label>
                                            <div className="w-100">
                                                <select className="form-select" name="Status">
                                                    <option></option>
                                                    <option>Alll</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Lead Sub Status</label>
                                            <div className="w-100">
                                                <select className="form-select" name="Status">
                                                    <option></option>
                                                    <option>Alll</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Assigned To</label>
                                            <div className="w-100">
                                                <select className="form-select" name="Status">
                                                    <option></option>
                                                    <option>Alll</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Enquiry Type</label>
                                            <div className="w-100">
                                                <select className="form-select" name="Status">
                                                    <option></option>
                                                    <option>Alll</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Lead Number</label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"text"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Firstname</label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"text"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Lastname</label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"date"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Mobile Number</label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"number"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Email Id</label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"email"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Tag</label>
                                            <div className="w-100">
                                                <select className="form-select" name="Status">
                                                    <option></option>
                                                    <option>Alll</option>
                                                </select>
                                            </div>
                                        </div>
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