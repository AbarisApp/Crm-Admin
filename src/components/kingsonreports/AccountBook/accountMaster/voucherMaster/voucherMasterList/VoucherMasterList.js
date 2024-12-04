import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getvoucherMaster, voucherMasterDelete } from '../../../../../../api/login/Login';
import { message, Pagination, Popconfirm } from 'antd';

function VoucherMasterList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10); // Number of items per page
    const [page, setPage] = useState(1); // Start from page 1 (not 0-based)
    const [totalCount, setTotalCount] = useState(0);

    const getVoucherTypeDataList = async (currentPage = page) => {
        setLoading(true);
        try {
            const response = await getvoucherMaster(currentPage - 1, count); 
            setData(response?.data || []);
            setTotalCount(response?.totalCount || 0);
        } catch (error) {
            message.error(error.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        getVoucherTypeDataList();
    }, [page, count]);

    const handlePageChange = (newPage) => {
        setPage(newPage); // Pagination component is 1-based
    };

    const deleteBlockAdd = async (id) => {
        setLoading(true);
        try {
            await voucherMasterDelete(id);
            message.success('Delete Successful!');
            getVoucherTypeDataList(page);
        } catch (error) {
            message.error(error.message);
        }
        setLoading(false);
    };

    const confirm = (id) => {
        deleteBlockAdd(id);
    };

    const cancel = () => {
        message.info('Delete Canceled!');
    };

    return (
        <section>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption d-flex justify-content-between align-items-center">
                                    <h4 className="heading mb-0">Voucher Type List</h4>
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        to="/voucher-type/add"
                                        role="button"
                                        aria-controls="offcanvasExample"
                                    >
                                        <span><i className="fa-sharp fa-solid fa-plus"></i></span>
                                        <span>Add Voucher type</span>
                                    </Link>
                                </div>
                                <div id="employees-tblwrapper" className="dataTables_wrapper no-footer">
                                    <table
                                        id="table-to-xls"
                                        className="table dataTable no-footer"
                                        role="grid"
                                        aria-describedby="employees-tblwrapper_info"
                                    >
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '122px', textAlign: "start" }}>Voucher Type Name</th>
                                                <th style={{ width: '122px', textAlign: "start" }}>Status</th>
                                                <th style={{ width: '122px', textAlign: "start" }}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr>
                                                    <td colSpan="3" className="text-center">Loading...</td>
                                                </tr>
                                            ) : (
                                                data.map((item, i) => (
                                                    <tr role="row" key={i}>
                                                        <td className="text-center">{item?.name}</td>
                                                        <td className="text-center">
                                                            <span
                                                                className="badge text-light border-0"
                                                                style={{
                                                                    backgroundColor: item?.selected ? 'blue' : '#bc3922ab',
                                                                    fontSize: item?.selected ? '' : '0.8rem',
                                                                }}
                                                            >
                                                                {item?.selected ? 'Active' : 'Inactive'}
                                                            </span>
                                                        </td>
                                                        <td className="text-center">
                                                            <Link
                                                                to={`/voucher-type/edit/${item?._id}`}
                                                                className="btn btn-sm btn-light mx-1"
                                                                title="Edit"
                                                            >
                                                                <i className="fa-solid fa-pen-to-square text-primary"></i>
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete Voucher Type!"
                                                                description="Are you sure you want to delete?"
                                                                onConfirm={() => confirm(item?._id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <button className="btn btn-danger shadow btn-xs sharp">
                                                                    <i className="fa fa-trash" />
                                                                </button>
                                                            </Popconfirm>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" role="status" aria-live="polite">
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <Pagination
                                            current={page}
                                            pageSize={count}
                                            total={totalCount}
                                            onChange={handlePageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VoucherMasterList;
