import { Pagination, Popconfirm } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const fakeData = [
    {
        _id: '1',
        date: '2024-09-01',
        stallNo: 'Stall 1',
        cowNumber: 'C-001',
        note: 'Fed morning and evening',
        status: 'Active',
    },
    {
        _id: '2',
        date: '2024-09-02',
        stallNo: 'Stall 2',
        cowNumber: 'C-002',
        note: 'Fed only morning',
        status: 'Inactive',
    },
    {
        _id: '3',
        date: '2024-09-03',
        stallNo: 'Stall 3',
        cowNumber: 'C-003',
        note: 'Underweight, fed supplements',
        status: 'Active',
    },
    {
        _id: '4',
        date: '2024-09-04',
        stallNo: 'Stall 4',
        cowNumber: 'C-004',
        note: 'Fed twice, normal weight',
        status: 'Inactive',
    },
    {
        _id: '5',
        date: '2024-09-05',
        stallNo: 'Stall 5',
        cowNumber: 'C-005',
        note: 'Needs special diet',
        status: 'Active',
    },
];

function CowFeedList({ data = fakeData, totalCount = 5, page = 0, count = 5, onChangeVal, confirm, cancel }) {
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Cow Feed List</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-cow-feed" role="button" aria-controls="offcanvasExample">+ ADD Cow Feed </Link>
                                        </div>
                                    </div>
                                    <div id="pipeline-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="pipeline-tblwrapper" className="table dataTable no-footer" role="grid">
                                            <thead>
                                                <tr role="row">
                                                    <th className='text-center' style={{ width: '50px' }}>S.No</th>
                                                    <th className='text-center' style={{ width: '150px' }}>Date</th>
                                                    <th className='text-center' style={{ width: '150px' }}>Stall No</th>
                                                    <th className='text-center' style={{ width: '150px' }}>Cow Number</th>
                                                    <th className='text-center' style={{ width: '250px' }}>Note</th>
                                                    <th className='text-center' style={{ width: '100px' }}>Status</th>
                                                    <th className='text-center' style={{ width: '100px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => (
                                                    <tr role="row" key={item?._id}>
                                                        <td>{(i + 1) + (page * count)}</td>
                                                        <td>{item?.date}</td>
                                                        <td>{item?.stallNo}</td>
                                                        <td>{item?.cowNumber}</td>
                                                        <td>{item?.note}</td>
                                                        <td>{item?.status}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={`/edit-cow-feed/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete cow feed!"
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

export default CowFeedList;
