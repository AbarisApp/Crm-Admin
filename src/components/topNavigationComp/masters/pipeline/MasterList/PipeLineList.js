import { Pagination, Popconfirm } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const fakeData = [
    {
        _id: '1',
        title: 'Pipeline 1',
        totalDealValue: '$10,000',
        noOfDeals: 5,
        stages: 'Initial Contact',
        createdDate: '2024-09-01',
        status: 'Active',
    },
    {
        _id: '2',
        title: 'Pipeline 2',
        totalDealValue: '$20,000',
        noOfDeals: 8,
        stages: 'Negotiation',
        createdDate: '2024-09-03',
        status: 'Inactive',
    },
    {
        _id: '3',
        title: 'Pipeline 3',
        totalDealValue: '$30,000',
        noOfDeals: 12,
        stages: 'Proposal Sent',
        createdDate: '2024-09-05',
        status: 'Active',
    },
    {
        _id: '4',
        title: 'Pipeline 4',
        totalDealValue: '$15,000',
        noOfDeals: 7,
        stages: 'Closed',
        createdDate: '2024-09-07',
        status: 'Inactive',
    },
    {
        _id: '5',
        title: 'Pipeline 5',
        totalDealValue: '$25,000',
        noOfDeals: 9,
        stages: 'Final Negotiation',
        createdDate: '2024-09-09',
        status: 'Active',
    },
];

function PipeLineList({ data = fakeData, totalCount = 5, page = 0, count = 5, onChangeVal, confirm, cancel }) {
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Pipeline List</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/Add-Pipeline" role="button" aria-controls="offcanvasExample">+ ADD Pipeline </Link>
                                        </div>
                                    </div>
                                    <div id="pipeline-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="pipeline-tblwrapper" className="table dataTable no-footer" role="grid">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '200px' }}>Pipeline Name</th>
                                                    <th style={{ width: '150px' }}>Total Deal Value</th>
                                                    <th style={{ width: '100px' }}>No of Deals</th>
                                                    <th style={{ width: '150px' }}>Stages</th>
                                                    <th style={{ width: '150px' }}>Created Date</th>
                                                    <th style={{ width: '100px' }}>Status</th>
                                                    <th style={{ width: '100px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => (
                                                    <tr role="row" key={item?._id}>
                                                        <td>{(i + 1) + (page * count)}</td>
                                                        <td>{item?.title}</td>
                                                        <td>{item?.totalDealValue}</td>
                                                        <td>{item?.noOfDeals}</td>
                                                        <td>{item?.stages}</td>
                                                        <td>{item?.createdDate}</td>
                                                        <td>{item?.status}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={`/Add-Pipeline/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete pipeline!"
                                                                    description="Are you sure to delete?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    onCancel={cancel}
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
                                                ))}
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

export default PipeLineList;
