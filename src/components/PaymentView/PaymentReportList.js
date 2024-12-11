
import { useState } from "react";
import { Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"
import ChooseColumn from "./Columns";
import PaymentRemarks from "./Remark";

export function PaymentViewList() {
    const [show, setShow] = useState(false);
    const [payremark, setPayremark] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePayremarkShow = () => setPayremark(true);
  const handlePayremarkClose = () => setPayremark(false);

    const item = true
    return (
        <div className="row my-4">
            <ChooseColumn show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0" onClick={handleShow}><i class="fa-solid fa-table-cells-large"></i></h4>
                                <div className="d-flex gap-1">
                                    <div className="d-flex rounded-2 px-2 py-1 gap-1 m-0 bg-primary justify-content-between align-items-center">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-label m-0 text-white">Over Due</label>
                                    </div>
                                    <div className="d-flex rounded-2 px-2 py-1 gap-1 m-0 bg-primary justify-content-between align-items-center">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-label m-0 text-white">Not Due</label>
                                    </div>
                                    <div className="d-flex rounded-2 px-2 py-1 gap-1 m-0 bg-primary justify-content-between align-items-center">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-label m-0 text-white">Post Dated</label>
                                    </div>
                                    <div >
                                        <select className="rounded-2 p-1">
                                            <option>All due</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="date" className="rounded-2 p-1"/>
                                    </div>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div>
                                <table id="table-to-xlsx" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            <i class="fa-regular fa-envelope"></i>
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Customer
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                               State
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                               0-45
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                45-90
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                               91-180
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                over 180
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                over Stand
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                               Total OutStanding
                                            </th>
                                            <th>
                                            <i class="fa-regular fa-message"></i>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td>
                                                <input className="form-check-input" type="checkbox"></input>
                                            </td>
                                            <td>
                                               Renota Lighting
                                            </td>
                                            <td>
                                                Dehli
                                            </td>
                                            <td>
                                                0
                                            </td>
                                            <td>
                                                12223
                                            </td>
                                            <td>
                                                0
                                            </td>
                                            <td>
                                                0
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                12,3223
                                            </td>
                                            <td>
                                                <i class="fa-regular fa-message" onClick={handlePayremarkShow}></i>
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
            <PaymentRemarks  show={payremark} setShow={setPayremark} handleClose={handlePayremarkClose} handleShow={handlePayremarkShow}/>
        </div >
    )
}