import { Pagination, Popconfirm } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { baseUrlImage } from '../../../../../baseUrl';

function BannerList({ data, totalCount, page, count, onChangeVal, confirm, cancel }) {
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Banner List</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/create-banner" role="button" aria-controls="offcanvasExample">+ ADD Banner</Link>
                                        </div>
                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '150px' }}>Meta Title</th>
                                                    <th style={{ width: '150px' }}>Meta Keyword</th>
                                                    <th style={{ width: '150px' }}>Banner Image</th>
                                                    <th style={{ width: '150px' }}>Meta Image</th>
                                                    <th style={{ width: '100px' }}>Status</th>
                                                    <th style={{ width: '100px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => {
                                                    return (
                                                        <tr role="row" key={item?._id}>
                                                            <td>{(i + 1) + (page * count)}</td>
                                                           
                                                            <td>{item?.meta_title}</td>
                                                            <td>{item?.meta_keyword}</td>
                                                            <td>
                                                                <img src={`${baseUrlImage}${item?.banner_image}`}  alt="banner" style={{ width: '50px', height: '50px' }} />
                                                            </td>
                                                            <td>
                                                                <img src={`${baseUrlImage}${item?.meta_image}`} alt="meta" style={{ width: '50px', height: '50px' }} />
                                                            </td>
                                                            <td>{item?.is_active ? 'Active' : 'Inactive'}</td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <Link to={`/create-banner/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                        <i className="fa fa-pencil" />
                                                                    </Link>
                                                                    <Popconfirm
                                                                        title="Delete banner!"
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

export default BannerList;
