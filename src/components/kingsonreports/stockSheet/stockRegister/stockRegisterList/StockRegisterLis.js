import React from 'react'
import { Link } from 'react-router-dom'
function StockRegisterLis() {
    return (
        <section>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption d-flex justify-content-between align-items-center">
                                    <h4 className="heading mb-0">Stock Register</h4>
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        to="/kng-stocksheet/ledgerview"
                                        role="button"
                                        aria-controls="offcanvasExample"
                                    >
                                        <span><i class="fa-solid fa-square-caret-right"></i></span>
                                    </Link>
                                </div>
                                <div
                                    id="employees-tblwrapper"
                                    className="dataTables_wrapper no-footer"
                                >
                                    <table
                                        id="table-to-xls"
                                        className="table dataTable no-footer"
                                        role="grid"
                                        aria-describedby="employees-tblwrapper_info"
                                    >
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '122px' }}>Product Name</th>
                                                <th style={{ width: '122px' }}>Brand Name</th>
                                                <th style={{ width: '203px' }}>Group </th>
                                                <th style={{ width: '156px' }}>Opening</th>
                                                <th style={{ width: '141px' }}>Colsing </th>
                                                <th style={{ width: '161px' }}>Unit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row">
                                                <td colSpan={6} className="text-center">
                                                    {/* Replace with actual data */}
                                                    No records found.
                                                </td>
                                                {/* <td className="text-center">
                                                    <Link
                                                        to="/kng-update-purchase-register"
                                                        className="btn btn-sm btn-light mx-1"
                                                        title="View Details"
                                                    >
                                                        <i className="fa-regular fa-eye text-primary"></i>
                                                    </Link>
                                                    <Link
                                                        to="/kng-update-purchase-register"
                                                        className="btn btn-sm btn-light mx-1"
                                                        title="Edit"
                                                    >
                                                        <i className="fa-solid fa-pen-to-square text-primary"></i>
                                                    </Link>
                                                    <button
                                                        className="btn btn-sm btn-light mx-1"
                                                        title="Delete"
                                                    >
                                                        <i className="fa-solid fa-trash text-danger"></i>
                                                    </button>
                                                </td> */}
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div
                                        className="dataTables_info"
                                        id="employees-tblwrapper_info"
                                        role="status"
                                        aria-live="polite"
                                    >
                                        Showing 1 to 10 of 12 entries
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StockRegisterLis