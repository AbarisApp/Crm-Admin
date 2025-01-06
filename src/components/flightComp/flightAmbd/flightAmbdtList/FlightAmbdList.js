import { Empty, Pagination } from 'antd'
import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FlightAmbdList({ getTransitionReport, confirm, page, count, data, totalCount, onChangeVal }) {
    return (
        <section className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>Flight Amendments List
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
                                                <th>S.No</th>
                                                <th> Booking Ref Number</th>
                                                <th>Amendment Id</th>
                                                <th>Amendment Type</th>
                                                <th>Amendment Status</th>
                                                <th >Generated On	</th>
                                                <th >Generate By</th>
                                                <th >Journey Type</th>
                                                <th >Travel	Sector	</th>
                                                <th >Travel Date</th>
                                                <th >Fly Type</th>
                                                <th >Airline</th>
                                                <th >Airline Pnr</th>
                                                <th >GDS PNR</th>
                                                <th >Ticket No.</th>
                                                <th >Fare Rule</th>
                                                <th >Txn Status</th>
                                                <th >Booking Status</th>
                                                <th >Voucher</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data?.map((item, i) => {
                                                return <tr role="row" key={item?._id}>
                                                    <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.booking_Ref_Number}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.amendment_Id}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.amendment_Type}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.amendment_Status}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.generated_On}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.generate_By}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.journey_Type}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.travel_Sector}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.travel_Date}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.fly_Type}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.airline}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.airline_Pnr}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.GDS_PNR}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.ticket_No}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.fare_Rule}</td>

                                                    <td valign="top" className="dataTables_empty" >{item?.txn_Status}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.booking_Status}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.voucher}</td>
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

        </section >

    )
}

export default FlightAmbdList