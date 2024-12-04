import { Pagination, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ConfigureModel from './ConfigureModel';
import ConfigureHelp from './ConfigureHelp';

function SocialLoginCredentials({ totalCount, page, count, onChangeVal, confirm, cancel }) {
    const data = [
        {
            _id: '1',
            title: 'Google Login',
            clientId: 'google-client-id-12345',
            status: 'Active'
        },
        {
            _id: '2',
            title: 'Facebook Login',
            clientId: 'facebook-client-id-67890',
            status: 'Active'
        },
        {
            _id: '3',
            title: 'Twitter Login',
            clientId: 'twitter-client-id-54321',
            status: 'Inactive'
        },
        {
            _id: '4',
            title: 'GitHub Login',
            clientId: 'github-client-id-98765',
            status: 'Active'
        }
    ];

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);

    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Social Login Credentials</h4>
                                    </div>
                                    <div id="credentials-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        {/* <div className="dt-buttons">
                                            <button type="button" className="btn btn-primary" style={{ margin: "10px 0" }} onClick={() => setModalShow(true)}>Add New Credential</button>
                                        </div> */}
                                        <ConfigureModel
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                        <ConfigureHelp
                                            show={modalShow2}
                                            onHide={() => setModalShow2(false)}
                                        />
                                        <table id="credentials-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="credentials-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '200px' }}>Title</th>
                                                    <th style={{ width: '200px' }}>Client ID</th>
                                                    <th style={{ width: '150px' }}>Status</th>
                                                    <th style={{ width: '150px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => {
                                                    return (
                                                        <tr role="row" key={item?._id}>
                                                            <td>{(i + 1)}</td>
                                                            <td>{item?.title}</td>
                                                            <td>{item?.clientId}</td>
                                                            <td>{item?.status}</td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <Link to={`#`} className="btn btn-primary" onClick={() => setModalShow(true)}>
                                                                        Configure
                                                                    </Link>
                                                                    <Link to={`#`} className="btn btn-info" onClick={() => setModalShow2(true)}>
                                                                        Help
                                                                    </Link>
                                                                    <Popconfirm
                                                                        title="Disable social login!"
                                                                        description="Are you sure to disable this login method?"
                                                                        onConfirm={() => confirm(item?._id)}
                                                                        onCancel={cancel}
                                                                        okText="Yes"
                                                                        cancelText="No"
                                                                    >
                                                                        <Link to="#" className="btn btn-warning ">
                                                                            Disable
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

export default SocialLoginCredentials;
