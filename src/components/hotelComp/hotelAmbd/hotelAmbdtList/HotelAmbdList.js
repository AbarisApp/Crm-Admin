import { Empty, Pagination } from 'antd'
import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HotelAmbdList({ getTransitionReport, confirm, page, count, data, totalCount, onChangeVal }) {
    return (
        <section className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>Hotel Amendments List
                                    </b></h4>
                                    <div>
                                        {/* <ExportPdf /> */}
                                        {/* {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                        </CSVLink>) : ""} */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role='row'>
                                                <th> Booking Reference Number</th>
                                                <th>Amendment Id</th>
                                                <th>Amendment Type</th>
                                                <th>Amendment Status</th>
                                                <th >Hotel Name	</th>
                                                <th >Traveller Name	</th>
                                                <th >Checkin Date	</th>
                                                <th >Checkout Date		</th>
                                                <th >City/ Country	</th>
                                                <th >Booking Status	</th>
                                                <th >Remark	</th>
                                                <th >Generate By	</th>
                                                <th >Created</th>
                                                <th >Summary
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data?.map((item, i) => {
                                                return <tr role="row" key={item?._id}>
                                                    <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.booking_reference_number}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.amendment_Id}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.amendment_Type}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.amendment_Status}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.hotel_name}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.traveller_name}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.checkin_date}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.checkout_date}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.city}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.booking_status}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.remark}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.generate_by}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.created}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.summary}</td>
                                                    {/* <td>
                                                        <div className="d-flex">
                                                            <button className="btn btn-primary shadow btn-xs sharp me-1" type='button' onClick={() => modalOpen(item?._id)}>
                                                                <i className="fa fa-pencil" />
                                                            </button>
                                                            <Popconfirm
                                                                title="Delete Flight Markup!"
                                                                description="Are you sure to delete?"
                                                                onConfirm={() => confirm(item?._id)}
                                                                // onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                    <i className="fa fa-trash" />
                                                                </Link>
                                                            </Popconfirm>
                                                        </div>
                                                    </td> */}
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>

                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
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
            </div >

        </section>

    )
}

export default HotelAmbdList