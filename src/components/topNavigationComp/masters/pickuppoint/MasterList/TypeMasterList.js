import { Pagination, Popconfirm } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { baseUrlImage } from '../../../../../baseUrl';

function TypeMasterList({ data, totalCount, page, count, onChangeVal, confirm, cancel }) {
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Pickup Point List</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/create-pickup-point" role="button" aria-controls="offcanvasExample">
                                                + ADD Pickup Point
                                            </Link>
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th>Pickup Point Name</th>
                                                    <th>Address</th>
                                                    <th>Location</th>
                                                    <th>Province</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => (
                                                    <tr role="row" key={item?._id}>
                                                        <td>{(i + 1) + (page * count)}</td>
                                                       
                                                        <td>{item?.pickupPoint_name}</td>
                                                        <td>{item?.address}</td>
                                                        <td>
                                                            Long: {item?.location?.long}, Lat: {item?.location?.lat}
                                                        </td>
                                                        <td>{item?.province}</td>
                                                        <td>{item?.phone}</td>
                                                        <td>{item?.email}</td>
                                                        <td>{item?.pickUpPointStatus ? 'Active' : 'Inactive'}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link
                                                                    to={`/create-pickup-point/${item?._id}`}
                                                                    className="btn btn-primary shadow btn-xs sharp me-1"
                                                                >
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete Pickup Point!"
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

export default TypeMasterList;
