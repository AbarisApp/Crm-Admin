import { Pagination, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddModel from './AddModel';

function ManagePages({ totalCount, page, count, onChangeVal, confirm, cancel }) {
    const data = [
        {
            _id: '1',
            name: 'Home Page',
            slug: 'home-page'
        },
        {
            _id: '2',
            name: 'About Us',
            slug: 'about-us'
        },
        {
            _id: '3',
            name: 'Services',
            slug: 'services'
        },
        {
            _id: '4',
            name: 'Contact',
            slug: 'contact'
        },
        {
            _id: '5',
            name: 'Blog',
            slug: 'blog'
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
                                        <h4 className="heading mb-0">Manage Pages</h4>
                                    </div>
                                    <div id="pages-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button type="button" className="btn btn-primary" style={{ margin: "10px 0" }} onClick={() => setModalShow(true)}>Add New Page </button>
                                        </div>
                                        <AddModel
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                        <table id="pages-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="pages-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '200px' }}>Name</th>
                                                    <th style={{ width: '200px' }}>Slug</th>
                                                    <th style={{ width: '100px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => {
                                                    return (
                                                        <tr role="row" key={item?._id}>
                                                            <td>{(i + 1)}</td>
                                                            <td>{item?.name}</td>
                                                            <td>{item?.slug}</td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                        <i className="fa fa-pencil" />
                                                                    </Link>
                                                                    <Popconfirm
                                                                        title="Delete page!"
                                                                        description="Are you sure to delete?"
                                                                        // onConfirm={() => confirm(item?._id)}
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

export default ManagePages;
