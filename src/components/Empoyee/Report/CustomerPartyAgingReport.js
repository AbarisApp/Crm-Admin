import React from "react";
import { Link } from "react-router-dom";

export default function CustomePartyAgingReport(){
    return(
        <div>
           <div className="row m-1 mt-4">
        <div className="col-xl-12">
            <div className="card">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0">Customer(Party) Outstanding Report</h4>
                        <div>
                            <Link className="btn btn-success btn-sm" to="/" role="button" aria-controls="offcanvasExample">Excel</Link>
                            <Link className="btn btn-primary btn-sm" to="/" role="button" aria-controls="offcanvasExample">PDF</Link>
                            <Link className="btn btn-info btn-sm" to="/" role="button" aria-controls="offcanvasExample">Print</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Country</label>
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className="mt-2">
                                <label className="form-label">State</label>
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Employee</label>
                                <div className="w-100">
                                    <input type="search" className="form-control" placeholder="Search Customer Employee" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className="mt-2">
                                <label className="form-label">Downline?</label>
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className="mt-2">
                                <label className="form-label">Status</label>
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className="mt-2">
                                <label className="form-label">Type</label>
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className="mt-2">
                                <label className="form-label">Slab</label>
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Email</label>
                                <div className="w-100">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 align-items-end d-flex">
                            <button className="btn m-0 mt-4 btn-outline-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        </div>
    )
}