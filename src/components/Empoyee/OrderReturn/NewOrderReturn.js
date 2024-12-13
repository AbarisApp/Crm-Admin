import React from "react"
import { Link } from "react-router-dom"

export function OrderReturnFom() {
    return (
        <div className="row m-lg-4 m-2">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption justify-content-xs-between">
                            <h4 className="heading mb-0">Add Order Return</h4>
                            <div>
                                {/* <Link className="btn btn-primary btn-sm" to="/order-return-page" role="button" aria-controls="offcanvasExample">Add New</Link> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-12 col-md-4">
                                <div className="mt-2">
                                    <label className="form-label">State</label>
                                    <select className="form-select shadow" name="Status">
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-9 col-12 col-md-8">
                                <div className="mt-2">
                                    <label className="form-label">Customer(Party)</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-9 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Product</label>
                                    <div className="w-100">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="form-label">Packing</label>
                                    <div className="row gap-y-1">
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100">
                                                <select className="form-select shadow" name="Status">
                                                    <option>1kg</option>
                                                    <option>2kg</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100">
                                                <input type="text" value="NA" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100 s">
                                                <input type="text" className="form-control" placeholder="Quntity" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100 s">
                                                <select className="form-select shadow" name="Status">
                                                    <option>Case</option>
                                                    <option>Nos</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="form-label">Invoice No</label>
                                    <div className="row gap-y-1">
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100">
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100">
                                                <input type="text" className="form-control" placeholder="Batch No." />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100 s">
                                                <input type="text" className="form-control" placeholder="Remarks" />
                                            </div>
                                        </div>
                                        <div className="col-2 mt-2">
                                            <button className="btn s m-0 btn-primary">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="form-label">Return Reason</label>
                                    <div className="row gap-y-1">
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100">
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100">
                                                <input type="date" className="form-control" placeholder="Return on" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100 s">
                                                <input type="text" className="form-control" placeholder="Ref. No" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12 col-md-6">
                                            <div className="w-100 s">
                                                <input type="Date" className="form-control" placeholder="Ref. date" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="form-label">Preffered Transport</label>
                                    <div className="w-100">
                                        <div className="row gap-y-1">
                                            <div className="col-lg-3 col-12 col-md-6">
                                                <div className="w-100">
                                                    <input type="text" className="form-control" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-12 col-md-6">
                                                <div className="w-100">
                                                    <input type="text" className="form-control" placeholder="Delivery Destination" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-12 col-md-6">
                                                <div className="w-100 s">
                                                    <input type="text" className="form-control" placeholder="LR Number" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-12 col-md-6">
                                                <div className="w-100 s">
                                                    <input type="text" className="form-control" placeholder="Comments" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="form-label">Select Depo</label>
                                    <div className="row gap-y-1">
                                        <div className="col-lg-4 col-12 col-md-6">
                                            <div className="w-100">
                                                <input type="text" className="form-control" placeholder="Depo" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12 col-md-6">
                                            <div className="w-100">
                                                <input type="text" className="form-control" placeholder="Bags" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12 col-md-6">
                                            <div className="w-100 mt-1">
                                                <input type="Search" className="form-control" placeholder="Search Custom (Party)" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <label className="form-label">Ref. Photo</label>
                                <div className="w-100">
                                    <input type="File" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <label className="form-label">Ref. Photo</label>
                                <div className="w-100">
                                    <input type="File" className="form-control" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-2 col-md-4 col-12 d-grid align-items-end mt-3">
                        <button className="btn m-0 btn-primary">Generate Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 