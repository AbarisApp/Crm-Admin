import { Pagination, Popconfirm } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const fakeData = [
    {
        _id: '1',
        image: 'cow1.jpg',
        gender: 'Female',
        animalType: 'Cow',
        buyDate: '2024-01-01',
        buyingPrice: '50000',
        pregnantStatus: 'Yes',
        milkPerDay: '15',
        animalStatus: 'Active',
        date: '2024-09-01',
        stallNo: 'Stall 1',
        cowNumber: 'C-001',
        note: 'Fed morning and evening',
        status: 'Active',
    },
    {
        _id: '2',
        image: 'cow2.jpg',
        gender: 'Male',
        animalType: 'Bull',
        buyDate: '2023-06-10',
        buyingPrice: '60000',
        pregnantStatus: 'No',
        milkPerDay: '0',
        animalStatus: 'Inactive',
        date: '2024-09-02',
        stallNo: 'Stall 2',
        cowNumber: 'C-002',
        note: 'Fed only morning',
        status: 'Inactive',
    },
    // Add more fake data entries as needed
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
                                        <h4 className="heading mb-0">Animal List</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-manage-cow" role="button" aria-controls="offcanvasExample">+ ADD new </Link>
                                        </div>
                                    </div>
                                    <div id="pipeline-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="pipeline-tblwrapper" className="table dataTable no-footer" role="grid">
                                            <thead>
                                                <tr role="row">
                                                    <th className="text-center">S.No</th>
                                                    <th className="text-center">ID</th>
                                                    <th className="text-center">Image</th>
                                                    <th className="text-center">Gender</th>
                                                    <th className="text-center">Animal Type</th>
                                                    <th className="text-center">Buy Date</th>
                                                    <th className="text-center">Buying Price</th>
                                                    <th className="text-center">Pregnant Status</th>
                                                    <th className="text-center">Milk Per Day (LTR)</th>
                                                    <th className="text-center">Animal Status</th>
                                                    <th className="text-center">Note</th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => (
                                                    <tr role="row" key={item?._id}>
                                                        <td>{(i + 1) + (page * count)}</td>
                                                        <td>{item?._id}</td>
                                                        <td>
                                                            <img src={item?.image} alt={item?.cowNumber} style={{ width: '50px', height: '50px' }} />
                                                        </td>
                                                        <td>{item?.gender}</td>
                                                        <td>{item?.animalType}</td>
                                                        <td>{item?.buyDate}</td>
                                                        <td>{item?.buyingPrice}</td>
                                                        <td>{item?.pregnantStatus}</td>
                                                        <td>{item?.milkPerDay}</td>
                                                        <td>{item?.animalStatus}</td>
                                                        <td>{item?.note}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={`/edit-manage-cow/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
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
