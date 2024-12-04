import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ContestParticipateList, DeleteParticipate, getContestTypeByPage } from '../../api/login/Login';
import ParticipateUpdate from './ParticipateUpdate';
import Loadar from '../../common/loader/Loader';
import { Pagination, Popconfirm, message } from 'antd';

function ContestParticipate() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    
    // Filter states
    const [filters, setFilters] = useState({
        is_dummy: '',
        contest_type: '',
        contest_name: '',
        reward: '',
        amount: '',
        start_date: '',
        end_date: '',
        filter_type: 'All'
    });

    const [contestType , setContestType] = useState([]);
    const getFloorMasters = async (page) => {
        setLoading(true);
        try {
            const res = await ContestParticipateList({ page, count, ...filters });
            const res1 = await getContestTypeByPage(0,100);
            setContestType(res1?.data);
            setTotalCount(res?.totalCount);
            setData(res?.data);
            setPage(page);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const onChangeVal = (e) => {
        getFloorMasters(e - 1);
    };

    useEffect(() => {
        getFloorMasters(0);
    }, []);

    const deleteBlockAdd = async (id) => {
        try {
            await DeleteParticipate(id);
            let backList = totalCount % 11 === 0 ? page - 1 : page;
            getFloorMasters(backList);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const confirm = (id) => {
        deleteBlockAdd(id);
        message.success('Delete Successful!');
    };

    const cancel = () => {
        message.error('Cancel Successful!');
    };

    const [modalShow, setModalShow] = useState(false);
    const [ids, setIds] = useState(null);
    
    const updateModelData = (id) => {
        setIds(id);
        setTimeout(() => {
            setModalShow(true);
        }, 1000);
    };

    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <>
            {loading && <Loadar />}
            <ParticipateUpdate
                data={ids}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="filter-section m-2 card">
                <div className="row p-3">
                    <div className="col-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Contest Name"
                            value={filters.contest_name}
                            onChange={(e) => handleFilterChange('contest_name', e.target.value)}
                        />
                    </div>
                    <div className="col-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Reward"
                            value={filters.reward}
                            onChange={(e) => handleFilterChange('reward', e.target.value)}
                        />
                    </div>
                    <div className="col-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                            value={filters.amount}
                            onChange={(e) => handleFilterChange('amount', e.target.value)}
                        />
                    </div>
                    <div className="col-4 mt-3">
                        <select
                            className="form-select"
                            value={filters.is_dummy}
                            onChange={(e) => handleFilterChange('is_dummy', e.target.value)}
                        >
                            <option value="">Is Dummy</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="col-4 mt-3">
                        <select
                            className="form-select"
                            value={filters.contest_type}
                            onChange={(e) => handleFilterChange('contest_type', e.target.value)}
                        >
                            <option value="">Contest Type</option>
                            {contestType?.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.type} ({item.title})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-4 mt-3">
                        <select
                            className="form-select"
                            value={filters.filter_type}
                            onChange={(e) => handleFilterChange('filter_type', e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Win">Win</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Live">Live</option>
                        </select>
                    </div>
                    <div className="col-4 mt-3">
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Start Date"
                            value={filters.start_date}
                            onChange={(e) => handleFilterChange('start_date', e.target.value)}
                        />
                    </div>
                    <div className="col-4 mt-3">
                        <input
                            type="date"
                            className="form-control"
                            placeholder="End Date"
                            value={filters.end_date}
                            onChange={(e) => handleFilterChange('end_date', e.target.value)}
                        />
                    </div>
                    <div className="col-4 mt-3">
                        <button type="button" className="btn btn-primary w-100" onClick={() => getFloorMasters(0)}>
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>

            <div className="row m-2">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0" style={{padding:"10px"}}>Contest Participate List</h4>
                                </div>
                                <table className="table dataTable no-footer" role="grid">
                                    <thead>
                                        <tr role="row">
                                            <th>S.No</th>
                                            <th>User Name</th>
                                            <th>Contest ID</th>
                                            <th>Participate</th>
                                            <th>Ranking</th>
                                            <th>Reward</th>
                                            <th>Approve</th>
                                            <th>Is Free</th>
                                            <th>Contest From Date</th>
                                            <th>Contest To Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((item, i) => (
                                            <tr role="row" key={item?._id}>
                                                <td>{i + 1}</td>
                                                <td>{item?.user_name}</td>
                                                <td>{item?.contestid}</td>
                                                <td>{item?.user_type}</td>
                                                <td>{item?.ranking}</td>
                                                <td>{item?.reward}</td>
                                                <td>{item?.approve ? 'Yes' : 'No'}</td>
                                                <td>{item?.isFree ? 'Yes' : 'No'}</td>
                                                <td>{item?.contest_from_date}</td>
                                                <td>{item?.contest_to_date}</td>
                                                <td>
                                                    <div className="d-flex">
                                                        <Link to="#" onClick={() => updateModelData(item._id)} className="btn btn-primary btn-sm me-1">
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                        <Popconfirm
                                                            title="Delete Participate!"
                                                            onConfirm={() => confirm(item?._id)}
                                                            onCancel={cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link to="#" className="btn btn-danger btn-sm">
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
            <ToastContainer className="text-center" />
        </>
    );
}

export default ContestParticipate;
