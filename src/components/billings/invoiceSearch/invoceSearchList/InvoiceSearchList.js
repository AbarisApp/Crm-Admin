import React from 'react'
import { Link } from 'react-router-dom'

function InvoiceSearchList({ totalCount, page, onChangeVal, data, count, confirm, cancel, loading }) {
    return (
        <>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0 p-2">Invoice List</h4>
                    <Link
                        className="btn btn-primary btn-sm"
                        to="/create-billings-invoice"
                        role="button"
                        aria-controls="offcanvasExample"
                    >
                        <span><i className="fa-sharp fa-solid fa-plus"></i></span>
                        <span>Add Invoice</span>
                    </Link>
                </div>
                <table className="table table-bordered text-center align-middle">
                    <thead className='heading'>
                        <tr>
                            <th>Edit</th>
                            <th>Print</th>
                            <th>PDF</th>
                            <th>Email</th>
                            <th>MSG</th>
                            <th>Bill Type</th>
                            <th>Bill No</th>
                            <th>Bill Date</th>
                            <th>Party</th>
                            <th>Bill Amount</th>
                            <th>Copy</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Empty row for now */}
                        <tr>
                            <td colSpan="12" className="text-muted">No data available</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="10" className="text-end"><strong>Total:</strong></td>
                            <td colSpan="2"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <nav>
                    <ul className="pagination mb-0">
                        <li className="page-item disabled">
                            <button className="page-link" tabIndex="-1">«</button>
                        </li>
                        <li className="page-item disabled">
                            <button className="page-link">»</button>
                        </li>
                    </ul>
                </nav>
                <div className="form-group d-flex align-items-center">
                    <label htmlFor="itemsPerPage" className="me-2 mb-0">Items per page:</label>
                    <select className="form-select" id="itemsPerPage" style={{ width: "auto" }}>
                        <option value="10" selected>10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default InvoiceSearchList