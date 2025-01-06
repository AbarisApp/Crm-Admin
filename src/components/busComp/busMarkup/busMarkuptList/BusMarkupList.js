import { Empty, Pagination, Popconfirm } from 'antd'
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BusMarkupAdd from './busMarkupAdd/BusMarkupAdd'

function BusMarkupList({ getTransitionReport, confirm, page, count, data, totalCount, onChangeVal }) {
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
                                    <h4 className="heading mb-0">Bus Markup List</h4>
                                    <button className="btn btn-secondary pd-x-20" type='button' onClick={() => modalOpen(null)}>
                                        <i class="fas fa-plus"></i> Add Bus Mark Up
                                    </button>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role='row'>
                                                <th>S No.</th>
                                                <th>Markup For</th>
                                                <th>Agent Class</th>
                                                <th >Value</th>
                                                <th >Max Limit Pnr</th>
                                                <th >Mark Type</th>
                                                <th>Display Markup</th>
                                                <th>Status</th>
                                                <th >Created</th>
                                                <th >Modified</th>
                                                <th >Account</th>
                                                <th >Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data?.map((item, i) => {
                                                return <tr role="row" key={item?._id}>
                                                    <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.markup_for}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.agent_class?.map((item) => {
                                                        return <div key={item?._id}>{item?.name}</div>
                                                    })}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.commision}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.max_limit}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.markup_type}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.display_markup}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.status == true ? "Active" : 'InActive'}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.createdAt}</td>
                                                    <td valign="top" className="dataTables_empty" >{item?.updatedBy}</td>
                                                    <td valign="top" className="dataTables_empty" >-</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button className="btn btn-primary shadow btn-xs sharp me-1" type='button' onClick={() => modalOpen(item?._id)}>
                                                                <i className="fa fa-pencil" />
                                                            </button>
                                                            <Popconfirm
                                                                title="Delete Bus Markup!"
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
            <BusMarkupAdd
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedItemId={selectedItemId}
                getTransitionReport={getTransitionReport}
            />
        </section>

    )
}

export default BusMarkupList