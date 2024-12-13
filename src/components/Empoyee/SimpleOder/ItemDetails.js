import React from "react";

export default function ItemDetails(){
    return(
        <div className="row m-1 mt-4">
        <div className="col-xl-12">
            <div className="card">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0">ItemDetails</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Main Application</label>
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Sub Application</label>
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Customer End Products</label>
                                <input type="text" className="form-control" placeholder="Technical Item Details" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">% Of Dose:</label>
                                <div className="w-100">
                                    <input type="text" className="form-control" placeholder="Search Customer (party)" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Customer End Products</label>
                                <div className="w-100">
                                    <input type="search" className="form-control" placeholder="Customer End Products" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Product</label>
                                <div className="w-100">
                                    <input type="search" className="form-control" placeholder="Product" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Usage:</label>
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Required On</label>
                                <div className="w-100">
                                    <input type="date" className="form-control" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="mt-2">
                                <div className="d-flex gap-2 align-items-center mt-5">
                                    <input type="checkbox" className="form-check-input" placeholder="Email ID" />
                                    <label className="form-label">Tech.Person Name</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Product Depot</label>
                                <div className="w-100">
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">QTY</label>
                                <div className="w-100">
                                    <input type="number" className="form-control" placeholder="Qty" />
                                </div>

                        </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">-</label>
                                <div className="w-100">
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Remark</label>
                                <div className="w-100">
                                <input type="text" className="form-control" placeholder="Remark" />
                                </div>
                            </div>
                        </div>
                        <div className="col-2 align-items-end d-flex">
                            <button className="btn mt-1 btn-outline-primary"><i class="fa-solid fa-angles-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}