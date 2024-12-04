import React from 'react'
import { Link } from 'react-router-dom'

function HotelViewVoucherList() {
    return (
        <>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0 p-2">Hotel Voucher Report</h4>
                    <Link
                        className="btn btn-primary btn-sm"
                        to="/create-billings-hotel/cruisevoucher"
                        role="button"
                        aria-controls="offcanvasExample"
                    >
                        <span><i className="fa-sharp fa-solid fa-plus"></i></span>
                        <span>Add Hotel/Cruice Voucher type</span>
                    </Link>
                </div>
                <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                    <table className="table table-bordered text-center align-middle">
                        <thead className="heading">
                            <tr>
                                <th>Edit</th>
                                <th>Print-1</th>
                                <th>Print-2</th>
                                <th>Email</th>
                                <th>MSG</th>
                                <th>Type</th>
                                <th>VoucherNo</th>
                                <th>Date</th>
                                <th>Hotel/Cruise</th>
                                <th>Guest</th>
                                <th>Check-In</th>
                                <th>Room/Cabin Type</th>
                                <th>Contact</th>
                                <th>Party</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Empty row for now */}
                            <tr>
                                <td colSpan="14" className="text-muted">No data available</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default HotelViewVoucherList
