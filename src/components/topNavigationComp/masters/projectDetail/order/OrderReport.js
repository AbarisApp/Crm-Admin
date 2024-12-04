import React from 'react'
import { ToastContainer } from 'react-toastify'

function OrderReport() {
    return (
        <>
            <div className="container">
                <div className="row m-2">
                    <div className="col-xl-12">
                        {/* Vendor Selection Dropdown */}
                        <div style={{ margin: "10px 0", display: "flex", alignItems: "center" }}>
                            <h6 style={{ marginRight: "10px" }}>Select Vendor(s)</h6>
                            <select className="form-select" style={{ width: "300px" }} aria-label="Select Vendors">
                                <option value="all">All Vendors</option>
                                {/* Add vendor options dynamically if needed */}
                            </select>
                        </div>

                        {/* Table */}
                        <div className="table-responsive active-projects style-1">

                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">

                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr>
                                            <th>Sl.No</th>
                                            <th>Order No.</th>
                                            <th>Order Type</th>
                                            <th>Order To</th>
                                            <th>Issued By</th>
                                            <th>Issue Date</th>
                                            <th>Due Date</th>
                                            <th>Order Status</th>
                                            <th>PO Status</th>
                                            <th>Progress Update</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {/* Empty Table Body (can add rows dynamically here) */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default OrderReport
