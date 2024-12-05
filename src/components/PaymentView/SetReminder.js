import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import AddReminder from "./AddReminder";

export default function AutoSetReminder() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="m-4">
            <AddReminder show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow}/>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Payment Reminders</h4>
                                <div className="pr-2">
                                    <button className="btn btn-primary btn-sm m-0" type="button" onClick={handleShow} role="button" aria-controls="offcanvasExample">Set Reminder</button>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer d-none">
                                <table id="table-to-xlsx" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Remark data
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                Remark
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                Remark  by
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td>
                                                17-Feb-24
                                            </td>
                                            <td>
                                                next monday
                                            </td>
                                            <td>
                                                Gaurav Sharma
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    {/* Total {totalCount} entries */}
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                       // showSizeChanger
                                        // onShowSizeChange={''}
                                        defaultCurrent={1}
                                        onChange=""
                                        total=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}