import { Pagination, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddModel from './AddModel';

function CornScheduel({ totalCount, page, count, onChangeVal, confirm, cancel }) {
    const data = [
        {
            _id: '1',
            name: 'Job 1',
            interval: 'Every 5 mins',
            status: 'Running',
        },
        {
            _id: '2',
            name: 'Job 2',
            interval: 'Every 10 mins',
            status: 'Pending',
        },
        {
            _id: '3',
            name: 'Job 3',
            interval: 'Daily at 6:00 AM',
            status: 'Completed',
        }
    ];

    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Cron Schedules</h4>
                                    </div>
                                    <div id="cornjobs-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button type="button" className="btn btn-primary" style={{ margin: "10px 0" }} onClick={() => setModalShow(true)}>Add Cron Schedules</button>
                                        </div>
                                        <AddModel
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                        <table id="cornjobs-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="cornjobs-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '150px' }}>Name</th>
                                                    <th style={{ width: '150px' }}>Interval</th>
                                                    <th style={{ width: '150px' }}>Status</th>
                                                    <th style={{ width: '100px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => {
                                                    return (
                                                        <tr role="row" key={item?._id}>
                                                            <td>{item?.name}</td>
                                                            <td>{item?.interval}</td>
                                                            <td>{item?.status}</td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <Link to={`#`} className="btn btn-info">
                                                                        Edit
                                                                    </Link>
                                                                    <Popconfirm
                                                                        title="Disable job!"
                                                                        description="Are you sure to disable?"
                                                                        // onConfirm={() => confirm(item?._id)}
                                                                        onCancel={cancel}
                                                                        okText="Yes"
                                                                        cancelText="No"
                                                                    >
                                                                        <Link to="#" className="btn btn-warning">
                                                                            Delete
                                                                        </Link>
                                                                    </Popconfirm>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
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
            </div>
            <ToastContainer className="text-center" />
        </>
    );
}

export default CornScheduel;
