import React from "react"
import CustomInputField from "../../../common/CustomInputField"
import { Link } from "react-router-dom"


export function SaleRegisterFilter() {
    return (
        <div className="row mt-4 my-2">
            <div className="col-xl-12">
                <div className="card">
                <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Travel sale Register Filter</h4>
                                <div>
                                <Link className="btn btn-primary btn-sm" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-file-excel"></i> </Link>
                                </div>
                            </div>
                        <div className="row">
                        <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">Filter</label>
                                            <div className="w-100">
                                                <select className="form-select shadow" name="Status">
                                                    <option>Today</option>
                                                    <option>This Month</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">Form</label>
                                            <input className="form-control" type="date"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">To</label>
                                            <input className="form-control" type="date"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">Bill Type</label>
                                            <div className="w-100">
                                                <select className="form-select shadow" name="Status">
                                                    <option>Domectic</option>
                                                    <option>Internatonal</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">State</label>
                                            <div className="w-100">
                                                <select className="form-select shadow" name="Status">
                                                    <option>Dehli</option>
                                                    <option>UP</option>
                                                    <option>Jharkhand</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="mt-2">
                                        <label className="form-label">Wise</label>
                                        <div className="w-100">
                                            <div className="d-flex gap-1">
                                                <div className="d-flex align-items-center">
                                                    <input className="" type="radio" checked name="wise"/>
                                                    <label className="form-label fs-6 fw-normal mx-1">Summary</label>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <input className="" type="radio" name="wise"/>
                                                    <label className="form-label fs-6 fw-normal mx-1">Bill wise</label>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <input className="" type="radio" name="wise"/>
                                                    <label className="form-label fs-6 fw-normal mx-1">Party wise</label>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <input className="" type="radio" name="wise"/>
                                                    <label className="d-block my-0 fs-6 fw-normal mx-1">Passenger wise</label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                    <div className="mt-2">
                                            <label className="form-label">Party </label>
                                            <input className="form-control" type="text" placeholder="party"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                        <label className="form-label">Transaction Type</label>
                                        <div className="w-100">
                                            <div className="d-flex gap-1">
                                                <div className="d-flex align-items-center">
                                                    <input className="" type="radio" checked name="Transaction"/>
                                                    <label className="form-label fs-6 fw-normal mx-1">All</label>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <input className="" type="radio" name="Transaction"/>
                                                    <label className="form-label fs-6 fw-normal mx-1">B2B</label>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <input className="" type="radio" name="Transaction"/>
                                                    <label className="form-label fs-6 fw-normal mx-1">B2c</label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                    <div className="mt-2">
                                            <label className="form-label">Tax %</label>
                                            <select className="form-select shadow" name="Status">
                                                    <option>5</option>
                                                    <option>10</option>
                                                </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
} 