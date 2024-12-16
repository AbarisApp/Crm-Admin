import { Empty, Pagination } from 'antd'
import React from 'react'

function FlightVoucherList({ page, count, onChangeVal, data, totalCount }) {
    return (
        <>
            <section className='mx-4'>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Flight Voucher Report</h4>
                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '150px' }}>S No.</th>
                                                    <th style={{ width: '150px' }}>Lead No.</th>
                                                    <th style={{ width: '150px' }}>Customer </th>
                                                    <th style={{ width: '150px' }}>Voucher No.</th>
                                                    <th style={{ width: '150px' }}>Booking Date</th>
                                                    <th style={{ width: '150px' }}>Created Date</th>
                                                    {/* <th style={{ width: '150px' }}>Date</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data?.map((item, i) => {
                                                    return <tr role="row" >
                                                        <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                        <td className="text-center">
                                                            {item?._id}
                                                        </td>
                                                        <td className="text-center">
                                                            {item?.firstname} {item?.lastname}
                                                        </td>
                                                        <td className="text-center">
                                                            {item?.voucher_number}
                                                        </td>
                                                        <td className="text-center">
                                                            {item?.hotel}
                                                        </td>
                                                        <td className="text-center">
                                                            {item?.booking_date}
                                                        </td>
                                                        <td className="text-center">
                                                            {item?.createdAt}
                                                        </td>

                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
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
            </section>
        </>
    )
}

export default FlightVoucherList