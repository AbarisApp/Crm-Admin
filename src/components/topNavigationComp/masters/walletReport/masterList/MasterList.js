import { Pagination, Popconfirm } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function MasterList({ data, totalCount, page, count, onChangeVal, confirm, cancel, startDate, setstartDate, endtDate, setendtDate, getFloorMastersFilter }) {


    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className='startdates end dates'>
                                    {/* Start Date and End Date Input Fields */}
                                    <div className="row p-3">
                                        <div className="col-md-4">
                                            <label>Start Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={startDate}
                                                onChange={(e) => setstartDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>End Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={endtDate}
                                                onChange={(e) => setendtDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12" style={{ margin: "10px 0" }}>
                                            <button className="btn btn-primary" onClick={getFloorMastersFilter} >Search</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Contest Payment Report</h4>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>

                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '203.45px', textAlign: 'center' }}>S.No</th>
                                                    <th style={{ width: '156.475px', textAlign: 'center' }}>Date</th>
                                                    <th style={{ width: '156.475px', textAlign: 'center' }}>Order Id</th>
                                                    <th style={{ width: '156.475px', textAlign: 'center' }}>User Name</th>
                                                    <th style={{ width: '156.475px', textAlign: 'center' }}>Reciept Id</th>
                                                    <th style={{ width: '203.45px', textAlign: 'center' }}>Amount</th>
                                                    <th style={{ width: '156.475px', textAlign: 'center' }}>Payment Method</th>
                                                    <th style={{ width: '156.475px', textAlign: 'center' }}>Note</th>
                                                    <th style={{ width: '156.475px', textAlign: 'center' }}>Approval</th>
                                                    <th style={{ width: '156.475px', textAlign: 'center' }}>Currency</th>
                                                    <th style={{ width: '156.475px', textAlign: 'center' }}>Trans Type</th>
                                                    {/* <th style={{ width: '156.475px', textAlign: 'center' }}>Transactions</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => (
                                                    <tr key={i} role="row" className="odd">
                                                        <td>{(i + 1)}</td>
                                                        <td>{item?.createdAt}</td>
                                                        <td>{item?.order_id}</td>
                                                        <td>{item?.user_name}</td>
                                                        <td>{item?.reciept}</td>
                                                        <td>{item?.amount}</td>
                                                        <td>{item?.payment_method}</td>
                                                        <td>{item?.note}</td>
                                                        <td><span className="badge badge-success text-light border-0"
                                                            style={{
                                                                backgroundColor: item?.approval === true ? 'blue' : '#bc3922ab',
                                                                fontSize: item?.approval === false ? '0.8rem' : ''
                                                            }}>
                                                            {item?.approval ? 'Active' : 'In Active'}
                                                        </span></td>
                                                        <td>{item?.currency}</td>
                                                        <td>{item?.trans_type}</td>
                                                        {/* <td>{item?.transactions}</td> */}
                                                        

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={totalCount}
                                            />
                                        </div>
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

export default MasterList
