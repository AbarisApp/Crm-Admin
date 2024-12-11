
import { useState } from "react";
import { Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"
import DayColumn from "./DayColumn";
// import ChooseColumn from "./Columns";
// import PaymentRemarks from "./Remark";


export function TransactionSDayList({data, setData, chengeStatus}) {
    const [show, setShow] = useState(false);
    const [payremark, setPayremark] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlePayremarkShow = () => setPayremark(true);
    const handlePayremarkClose = () => setPayremark(false);

    const item = true
    return (
        <div className="row my-4">
            <DayColumn show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} setData={setData} data={data} chengeStatus={chengeStatus}/>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0" onClick={handleShow}><i class="fa-solid fa-table-cells-large"></i></h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" role="button" aria-controls="offcanvasExample">Sales</Link>
                                    <Link className="btn btn-primary btn-sm" role="button" aria-controls="offcanvasExample">Return</Link>
                                    <Link className="btn btn-primary btn-sm" role="button" aria-controls="offcanvasExample">DN</Link>
                                    <Link className="btn btn-primary btn-sm" role="button" aria-controls="offcanvasExample">CN</Link>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div>
                                <table id="table-to-xlsx" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Billno
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                               Category Old
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                               Avg Rate                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                               Document
                                            </th>
                                            <th className="sorting text-nowarp" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                               TaxPaid
                                               <p className="text-info">1,11,20,225</p>
                                            </th>
                                            <th className="sorting text-nowarp" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                            TaxLess
                                            <p className="text-info">2,43,20,225</p>
                                            </th>
                                            <th className="sorting text-nowrap" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                            Qty
                                            <p className="text-info">1,225</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td>
                                                sb2b/23-24/11450
                                            </td>
                                            <td>
                                               hdd
                                            </td>
                                            <td>
                                               6,255
                                            </td>
                                            <td>
                                                Sales
                                            </td>
                                            <td>
                                                12,223
                                            </td>
                                            <td>
                                                10,600
                                            </td>
                                            <td>
                                                2
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
            {/* <PaymentRemarks  show={payremark} setShow={setPayremark} handleClose={handlePayremarkClose} handleShow={handlePayremarkShow}/> */}
        </div >
    )
}