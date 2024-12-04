import { Pagination, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddModel from './AddModel';

function CornJobs({ totalCount, page, count, onChangeVal, confirm, cancel }) {
    const data = [
        {
            _id: '1',
            name: 'Job 1',
            schedule: 'Every 5 mins',
            nextRun: '2024-09-22 12:00',
            lastRun: '2024-09-22 11:55',
            isRunning: 'Running',
            type: 'Automated'
        },
        {
            _id: '2',
            name: 'Job 2',
            schedule: 'Every 10 mins',
            nextRun: '2024-09-22 12:05',
            lastRun: '2024-09-22 11:55',
            isRunning: 'Yes',
            type: 'Manual'
        },
        {
            _id: '3',
            name: 'Job 3',
            schedule: 'Daily at 6:00 AM',
            nextRun: '2024-09-23 06:00',
            lastRun: '2024-09-22 06:00',
            isRunning: 'Running',
            type: 'Automated'
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
                                        <h4 className="heading mb-0">Manage Corn Jobs</h4>
                                    </div>
                                    <div id="cornjobs-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button type="button" className="btn btn-primary" style={{ margin: "10px 0" }} onClick={() => setModalShow(true)}>Add New Job</button>
                                        </div>
                                        <AddModel
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                        <table id="cornjobs-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="cornjobs-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '150px' }}>Name</th>
                                                    <th style={{ width: '150px' }}>Schedule</th>
                                                    <th style={{ width: '150px' }}>Next Run</th>
                                                    <th style={{ width: '150px' }}>Last Run</th>
                                                    <th style={{ width: '100px' }}>Is Running</th>
                                                    <th style={{ width: '100px' }}>Type</th>
                                                    <th style={{ width: '100px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => {
                                                    return (
                                                        <tr role="row" key={item?._id}>
                                                            <td>{item?.name}</td>
                                                            <td>{item?.schedule}</td>
                                                            <td>{item?.nextRun} <div>14 minutes from now</div></td>
                                                            <td>{item?.lastRun} <div>34 minutes from now</div></td>
                                                            <td>{item?.isRunning}</td>
                                                            <td>{item?.type}</td>
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

export default CornJobs;
