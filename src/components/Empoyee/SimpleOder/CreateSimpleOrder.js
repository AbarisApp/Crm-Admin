import React from "react"
import { Link } from "react-router-dom"
import ItemDetails from "./ItemDetails"

export function AddNewSimpleOrder() {
    return (
        <div className="row m-lg-4 m-2">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">Add Product Sample Order</h4>
                            <div>
                                {/* <Link className="btn btn-primary btn-sm" to="/order-return-page" role="button" aria-controls="offcanvasExample">Add New</Link> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Type of Products</label>
                                    <select className="form-select shadow">
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Customer</label>
                                    <input type="search" className="form-control" placeholder="Search Customer (party)" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Ship To</label>
                                    <div className="w-100">
                                        <input type="search" className="form-control" placeholder="Search Customer (party)" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Marketing Group</label>
                                    <div className="w-100">
                                        <input type="search" className="form-control" placeholder="Search Marketing Group" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Source</label>
                                    <select className="form-select shadow">
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Country of final Dest</label>
                                    <select className="form-select shadow">
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Tech.Person Name</label>
                                    <div className="w-100">
                                        <input type="text" className="form-control" placeholder="Technical Person" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Tech.Person Name</label>
                                    <div className="w-100">
                                        <input type="email" className="form-control" placeholder="Email ID" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Tech.Person ContactNo</label>
                                    <div className="w-100">
                                        <input type="number" className="form-control" placeholder="Contact No" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Other Email</label>
                                    <div className="w-100">
                                        <input type="number" className="form-control" placeholder="Other Email ID" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Disp Address</label>
                                    <div className="w-100">
                                        <textarea type="number" className="form-control" style={{ height: "43px !important " }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">City</label>
                                    <div className="w-100">
                                        <input type="text" className="form-control" placeholder="City" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Pincode</label>
                                    <div className="w-100">
                                        <input type="number" className="form-control" placeholder="pincode" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ItemDetails />
                    <div className="col-12">
                        <div className="mt-2">
                            <label className="form-label">Comments</label>
                            <div className="w-100">
                                <textarea type="text" className="form-control" placeholder="Comments" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                    <div className="col-lg-2 col-md-6 col-12 d-grid align-items-end mt-3">
                        <button className="btn m-0 btn-primary">Generate Order</button>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 d-grid align-items-end mt-3">
                        <button className="btn m-0 btn-danger">Rest</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 