import { Pagination, Popconfirm } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function PriceDistributionList({ data, totalCount, page, count, onChangeVal, confirm, cancel }) {
    console.log(data);
    
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Price Distribution List</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-prize-distribution" role="button" aria-controls="offcanvasExample">+ ADD Price Distribution </Link>
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '200px' }}> Title</th>
                                                    <th style={{ width: '100px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => {
                                                    return (
                                                        <tr role="row" key={item?._id}>
                                                            <td>{(i + 1) + (page * count)}</td>
                                                            {/* <td>{item?.name}</td> */}
                                                            <td>{item?.title}</td>
                                                          
                                                            <td>
                                                                <div className="d-flex">
                                                                    <Link to={`/add-prize-distribution/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                        <i className="fa fa-pencil" />
                                                                    </Link>
                                                                    <Popconfirm
                                                                        title="Delete contest!"
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

export default PriceDistributionList;
