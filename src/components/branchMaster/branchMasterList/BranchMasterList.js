import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function BranchMasterList() {
    return (
        <>
            <div className="row m-2">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">List Of Branch
                                    </h4>
                                    <div>
                                        <Link
                                            className="btn btn-primary btn-sm"
                                            to="/create-branch-master"
                                            role="button"
                                            aria-controls="offcanvasExample"
                                        >
                                            + Add Branch
                                        </Link>

                                    </div>
                                </div>
                                <div
                                    id="banner-tblwrapper_wrapper"
                                    className="dataTables_wrapper no-footer"
                                >
                                    <div className="dt-buttons">
                                        <button
                                            className="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                                            tabIndex={0}
                                            aria-controls="banner-tblwrapper"
                                            type="button"
                                        >
                                            <span>
                                                <i className="fa-solid fa-file-excel" /> Export Report
                                            </span>
                                        </button>
                                    </div>
                                    <table
                                        id="banner-tblwrapper"
                                        className="table dataTable no-footer"
                                        role="grid"
                                        aria-describedby="banner-tblwrapper_info"
                                    >
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: "50px" }}>
                                                    <input type="checkbox" className="" />
                                                </th>
                                                <th style={{ width: "150px" }}>Branch</th>
                                                <th style={{ width: "150px" }}> Branch Code </th>
                                                <th style={{ width: "150px" }}>Account</th>
                                                <th style={{ width: "150px" }}>Contact</th>
                                                <th style={{ width: "150px" }}>Email</th>
                                                <th style={{ width: "150px" }}>Created By</th>

                                                <th style={{ width: "100px" }}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row">
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>CISTRONICS PESTICIDES LLP</td>

                                                <td>24</td>
                                                <td>CISTRONICS PESTICIDES LLP</td>
                                                <td></td>
                                                <td>KORATSG@GMAIL.COM</td>
                                                <td></td>
                                                <td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-items-center">
                                                        <Link to="#" className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp me-1">
                                                            <i className="fa-sharp fa-solid fa-trash"></i>
                                                        </Link>
                                                    </td>
                                                </td>


                                            </tr>
                                            <tr role="row">
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>CISTRONICS PESTICIDES LLP</td>

                                                <td>24</td>
                                                <td>CISTRONICS PESTICIDES LLP</td>
                                                <td></td>
                                                <td>KORATSG@GMAIL.COM</td>
                                                <td></td>
                                                <td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-items-center">
                                                        
                                                        <Link to="#" className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp me-1">
                                                            <i className="fa-sharp fa-solid fa-trash"></i>
                                                        </Link>
                                                    </td>
                                                </td>


                                            </tr>
                                            <tr role="row">
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>CISTRONICS PESTICIDES LLP</td>

                                                <td>24</td>
                                                <td>CISTRONICS PESTICIDES LLP</td>
                                                <td></td>
                                                <td>KORATSG@GMAIL.COM</td>
                                                <td></td>
                                                <td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-items-center">
                                                        <Link to="#" className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp me-1">
                                                            <i className="fa-sharp fa-solid fa-trash"></i>
                                                        </Link>
                                                    </td>
                                                </td>


                                            </tr>
                                        </tbody>
                                    </table>
                                    <div
                                        className="dataTables_info"
                                        role="status"
                                        aria-live="polite"
                                    >
                                        Total {"0"} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <Pagination defaultCurrent={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default BranchMasterList