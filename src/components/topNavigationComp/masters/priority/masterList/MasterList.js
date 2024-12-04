import { Pagination, Popconfirm } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function MasterList({ data, totalCount, page, count, onChangeVal, confirm, cancel }) {
    return (
        <>
            <div className="row m-2">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Task List</h4>
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        to="/add-task_master"
                                        role="button"
                                        aria-controls="offcanvasExample"
                                    >
                                        + Task List
                                    </Link>
                                </div>
                                <div id="employees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="employees-tblwrapper" className="table dataTable no-footer" role="grid">
                                        <thead>
                                            <tr role="row">
                                                <th className="text-center">S.No</th>
                                                <th className="text-center">Name</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.map((item, i) => (
                                                <tr key={item._id} role="row" className="odd">
                                                    <td>{(i + 1) + (page * count)}</td>
                                                    <td>{item?.name}</td>
                                                    <td>
                                                        <span
                                                            className={`badge text-light border-0 ${item?.is_active ? 'bg-primary' : 'bg-danger'}`}
                                                            style={{ fontSize: `${item?.is_active ? '' : '0.8rem'}` }}
                                                        >
                                                            {item?.is_active ? 'Active' : 'Inactive'}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link
                                                                to={`/add-task_master/${item?._id}`}
                                                                className="btn btn-primary shadow btn-xs sharp me-1"
                                                                aria-label="Edit Task"
                                                            >
                                                                <i className="fa fa-pencil" />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete priority!"
                                                                description="Are you sure to delete?"
                                                                onConfirm={() => confirm(item?._id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <button
                                                                    className="btn btn-danger shadow btn-xs sharp"
                                                                    aria-label="Delete Task"
                                                                >
                                                                    <i className="fa fa-trash" />
                                                                </button>
                                                            </Popconfirm>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" role="status" aria-live="polite">
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <Pagination
                                            current={page}
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
            <ToastContainer className="text-center" />
        </>
    );
}

export default MasterList;
