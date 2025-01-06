import { Empty, Pagination, Popconfirm } from 'antd'
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddVisaMArkup from '../../../visaComp/visaMarkup/addVisaMarkUp/AddVisaMarkup'
import AddHotelMarkup from '../addHotelMarkUp/AddHotelMarkup'

function HotelMarkupList({ getTransitionReport, confirm, page, count, data, totalCount, onChangeVal }) {
    const [modalShow, setModalShow] = useState(false);

    const [selectedItemId, setSelectedItemId] = useState(null);
    const modalOpen = (id) => {
        setSelectedItemId(id || null);
        setModalShow(true);
    };
    return (
        <section className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>Hotel Markup List
                                    </b></h4>
                                    <button className="btn btn-secondary pd-x-20" type='button' onClick={() => modalOpen(null)}>
                                        <i class="fas fa-plus"></i> Add Hotel Markup
                                    </button>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role='row'>
                                                <th>S.No</th>
                                                <th>Hotel Markup</th>
                                                {/* <th>Agent Class</th> */}
                                                <th>Value</th>
                                                <th>Region Type</th>
                                                <th>Hotel Markup Type</th>
                                                <th>Display Markup</th>
                                                <th>Star Rating</th>
                                                <th>Status</th>
                                                <th>Created</th>
                                                <th>Modified</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data?.map((item, i) => {
                                                return <tr role="row" key={item?._id}>
                                                    <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.markup_for}</td>
                                                    {/* <td valign="top" className="dataTables_empty" >--</td> */}
                                                    <td valign="top" className="dataTables_empty" >{item?.commision}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.region_type}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.markup_type}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.display_markup}</td>
                                                    <td valign="top" className="dataTables_empty" >--</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.status == true ? "Active" : 'InActive'}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.createdAt}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.updatedAt}</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button className="btn btn-primary shadow btn-xs sharp me-1" type='button' onClick={() => modalOpen(item?._id)}>
                                                                <i className="fa fa-pencil" />
                                                            </button>
                                                            <Popconfirm
                                                                title="Delete Hotel Markup!"
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
            <AddHotelMarkup
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedItemId={selectedItemId}
                getTransitionReport={getTransitionReport}
            />
        </section>

    )
}

export default HotelMarkupList