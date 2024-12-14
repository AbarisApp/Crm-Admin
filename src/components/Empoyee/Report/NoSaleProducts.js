import React from "react";
import { Link } from "react-router-dom";

export default function NoSaleProducts(){
    return(
        <div>
           <div className="row m-1 mt-4">
        <div className="col-xl-12">
            <div className="card">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0">No Sale Products</h4>
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
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className="mt-2">
                                <label className="form-label">Category</label>
                                <select className="form-select shadow">
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Days</label>
                                <div className="w-100">
                                    <input type="day" className="form-control" placeholder="Search Product" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className="mt-2">
                                <label className="form-label">QTY</label>
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

                        <div className="col-12 mt-4">
                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                <thead>
                                    <tr role="row">
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                        Category
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                        Product
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                        Last Order On
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                        Last Bill On
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                        Qty
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                        Days
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" className="odd" >
                                        <td>
                                        Category
                                        </td>
                                        <td>
                                        Product
                                        </td>
                                        <td>
                                        Last Order On
                                        </td>
                                        <td>
                                        Last Bill On
                                        </td>
                                        <td>
                                        Qty
                                        </td>
                                        <td>
                                        Days
                                        </td>         
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        </div>
    )
}