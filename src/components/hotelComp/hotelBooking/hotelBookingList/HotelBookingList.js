import { Empty, Pagination } from 'antd'
import React from 'react'
import { Table } from 'react-bootstrap'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function HotelBookingList({ data, onChangeVal, totalCount }) {
    return (
        <section className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>Hotel Booking  List</b></h4>
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
                                                <th >Summary </th>
                                                <th >Action </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data?.map((item, i) => {
                                                return <tr role="row" className="odd" key={i} style={{ cursor: "pointer" }}>

                                                    <td>{item?.booking_ref}</td>
                                                    <td>--</td>
                                                    <td>--</td>
                                                    <td>--</td>
                                                    <td>{item?.hotel_name}</td>
                                                    <td>--</td>
                                                    <td>{item?.check_in_time}</td>
                                                    <td>{item?.check_out_time}</td>
                                                    <td>{item?.city?.city_name} / {item?.city?.country_name}</td>
                                                    <td><span className="badge badge-success text-light border-0 w-100" style={{ backgroundColor: `${item?.status === "2" ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.status === "2" ? '0.8rem' : ''}` }}>{item?.status == "2" ? 'Success' : 'Pending'}</span></td>
                                                    <td>--</td>
                                                    <td>--</td>
                                                    <td>{item?.createdAt}</td>
                                                    <td>--</td>

                                                    <td>
                                                        <Link to={`${`/hotel-booking-deatils/${item?._id}`}`}>
                                                            <FaEye />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>

                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                            /* showSizeChanger
                                            onShowSizeChange={''} */

                                            defaultCurrent={1}
                                            onChange={onChangeVal}
                                        // total={aepsData?.totalCount}
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

export default HotelBookingList