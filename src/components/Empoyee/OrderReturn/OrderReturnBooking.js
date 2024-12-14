import React from "react"
import { Link } from "react-router-dom"

export function OrderReturnFilter() {
    return (
        <div className="row m-md-4 m-2">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption justify-content-xs-between">
                            <h4 className="heading mb-0">Order Return</h4>
                            <div>
                                <Link className="btn btn-primary btn-sm" to="/order-return-page" role="button" aria-controls="offcanvasExample">Add New</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Form</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">To</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Country</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option></option>
                                            <option>Working</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">State</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option></option>
                                            <option>All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Employee</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Customer(Party)</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Downline?</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option></option>
                                            <option>All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">PO. No</label>
                                    <input type="number" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Order Status</label>
                                    <div className="w-100">
                                        <select className="form-select shadow" name="Status">
                                            <option></option>
                                            <option>All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Search</label>
                                    <input type="Search" className="form-control" />
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