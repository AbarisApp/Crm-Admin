
import { useState } from "react";
import { Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"
import ItemColumnView from "./ItemColumnView";
import ClickToDrive from "./ClickToDrive";

export function ItemViewList({data , setData, chengeStatus}) {
    const [show, setShow] = useState(false);
    const [drive, setDrive] = useState(false);
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDrivekShow = () => setDrive(true);
  const handleDrivekClose = () => setDrive(false);

    const item = true
    return (
        <div className="row my-4">
            <ItemColumnView show={show} chengeStatus={chengeStatus} setShow={setShow} data={data} setData={setData} handleClose={handleClose} handleShow={handleShow} />
            <ClickToDrive drive={drive} chengeStatus={chengeStatus} setDrive={setDrive} data={data} setData={setData} handleDrivekClose={handleDrivekClose} handleDrivekShow={handleDrivekShow} />
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0" onClick={handleShow}><i class="fa-solid fa-table-cells-large"></i>  All Stock Items</h4>
                                <div className="d-flex aling-items-center gap-2 px-2">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="fs-6 text-white">Include 0 Total Stocks</label>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div>
                                <table id="table-to-xlsx" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                           Brand
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Stock Qty <span className="text-info">(7,476)</span>
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                               Stock val   <span className="text-info">(3,232)</span>
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                               Age(2)
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                               Sales  <span className="text-info">(3,126)</span>
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                               Interest  <span className="text-danger">(2,87,476)</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td onClick={handleDrivekShow}>
                                               Dell 
                                            </td>
                                            <td>
                                                123
                                            </td>
                                            <td>
                                                5,124
                                            </td>
                                            <td>
                                                5,22,332
                                            </td>
                                            <td>
                                                0
                                            </td>
                                            <td>
                                                3,40
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
        </div >
    )
}