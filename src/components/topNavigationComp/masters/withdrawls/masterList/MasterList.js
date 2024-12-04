import { Pagination, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import StatusModel from './StatusModel';

function MasterList({ data, totalCount, page, count, onChangeVal, confirm, cancel, title, getFloorMasters }) {
    const [modalShow, setModalShow] = useState(false);
    const [datas, setDatass] = useState();
    const today = new Date().toISOString().split('T')[0];
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);

    const setDatas = (item) => {
        setDatass(item);
        setTimeout(() => {
            setModalShow(true);
        }, 1000);
    };

    const handleFilter = () => {
        // Implement the filter logic based on startDate and endDate
        // For example, make an API call or filter the data locally
        getFloorMasters(0, startDate, endDate);
        console.log("Filtering data from:", startDate, "to:", endDate);
    };

    return (
        <>
            <div>
                {modalShow && (
                    <StatusModel
                        getFloorMasters={getFloorMasters}
                        datas={datas}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                )}
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"> {title} List </h4>
                                    </div>

                                    {/* Filter Section */}
                                    <div className="filter-section mb-3" style={{margin:"20px"}}>
                                        <label>Start Date:</label>
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="form-control d-inline w-auto mx-2"
                                        />
                                        <label>End Date:</label>
                                        <input
                                            type="date"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            className="form-control d-inline w-auto mx-2"
                                        />
                                        <button onClick={handleFilter} className="btn btn-primary mx-2">
                                            Apply Filter
                                        </button>
                                    </div>

                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ textAlign: 'center' }}>S.No</th>
                                                <th style={{ textAlign: 'center' }}>Name</th>
                                                <th style={{ textAlign: 'center' }}>Member/User</th>
                                                <th style={{ textAlign: 'center' }}>Amount</th>
                                                <th style={{ textAlign: 'center' }}>Main Wallet</th>
                                                <th style={{ textAlign: 'center' }}>Status</th>
                                                <th style={{ textAlign: 'center' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.map((item, i) => (
                                                <tr key={i} role="row">
                                                    <td>{(i + 1) + (page * count)}</td>
                                                    <td>{item?.holder_name}</td>
                                                    <td>{item?.user_id?.name}</td>
                                                    <td>{item?.amount}</td>
                                                    <td>{item?.user_id?.main_wallet}</td>
                                                    <td>
                                                        <span
                                                            className="badge badge-success text-light border-0"
                                                            style={{
                                                                backgroundColor: item?.is_active ? 'blue' : '#bc3922ab',
                                                                fontSize: item?.status === false ? '0.8rem' : ''
                                                            }}
                                                        >
                                                            {item?.status}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to="#" onClick={() => setDatas(item)} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <i className="fa fa-pencil" />
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination defaultCurrent={1} onChange={onChangeVal} total={totalCount} />
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

export default MasterList;
