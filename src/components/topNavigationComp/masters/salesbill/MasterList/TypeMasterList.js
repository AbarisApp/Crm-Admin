import { Pagination, Popconfirm } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrlImage } from '../../../../../baseUrl';
import { updatenews } from '../../../../../api/login/Login';


const toastSuccessMessage = (message) => {
    toast.success(`Update ${message}`, {
        position: "top-right",
    });
};
const toastErrorMessage = (message) => {
    toast.error(`${message}`, {
        position: "top-right",
    });
};
function TypeMasterList({ data, totalCount, page, count, onChangeVal, confirm, cancel, getFloorMasters }) {

    const chengeActive = async (id, status) => {
        const data = {
            ...id,
            isActive: status
        };

        try {
            const res = await updatenews(data._id, data);
            if (res.statusCode == 200) {
                toastSuccessMessage('Status Successfully');
                getFloorMasters(0)
            } else {

                toastErrorMessage('Status Not Update');
            }
        } catch (error) {

        }


    };
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">List Of Sales Invoice</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-sales-bill" role="button" aria-controls="offcanvasExample">+ ADD Sales Invoice </Link>
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="employees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="employees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>A</th>
                                                    <th style={{ width: '150px' }}>Date</th>
                                                    <th style={{ width: '150px' }}>Cash/Debit</th>
                                                    <th style={{ width: '150px' }}>No</th>
                                                    <th style={{ width: '150px' }}>Tax Type</th>
                                                    <th style={{ width: '200px' }}>Account Name</th>
                                                    <th style={{ width: '150px' }}>City</th>
                                                    <th style={{ width: '150px' }}>Total Amount</th>
                                                    <th style={{ width: '150px' }}>Created At</th>
                                                    <th style={{ width: '150px' }}>Sales Man</th>
                                                    <th style={{ width: '150px' }}>Invoice Date</th>
                                                    <th style={{ width: '100px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => {
                                                    return (
                                                        <tr role="row" key={item?._id}>
                                                            <td>{(i + 1) + (page * count)}</td>
                                                            <td>{item?.date}</td>
                                                            <td>{item?.cashOrDebit}</td>
                                                            <td>{item?.no}</td>
                                                            <td>{item?.taxType}</td>
                                                            <td>{item?.accountName}</td>
                                                            <td>{item?.city}</td>
                                                            <td>{item?.totalAmount}</td>
                                                            <td>{new Date(item?.createdAt).toLocaleDateString()}</td>
                                                            <td>{item?.salesMan}</td>
                                                            <td>{new Date(item?.invoiceDate).toLocaleDateString()}</td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <Link to={`/add-sales-bill/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                        <i className="fa fa-pencil" />
                                                                    </Link>
                                                                    <Popconfirm
                                                                        title="Delete Entry!"
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

export default TypeMasterList;
