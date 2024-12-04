import { Pagination, Popconfirm, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { listStages, listStagescount } from '../../../../../api/login/Login';

function CallStatusMasterList({ data, totalCount, page, count, onChangeVal, confirm, cancel ,getFloorMasters}) {
    const [activeTab, setActiveTab] = useState();
    const [stages, setStages] = useState()
    const getData = async () => {
        try {
            // const res = await listStages()
            const res1 = await listStagescount()
            setStages(res1.data)
            getFloorMasters(0 ,res1.data[0]._id)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    const changeStatus = (key) => {
        // Update the active tab
        setActiveTab(key);
        getFloorMasters(page,key)

        // Add logic to handle tab-specific actions here
        console.log(`Selected Tab: ${key}`);

        // Example: Fetch new data based on tab
        // You can call a function or API to update the data based on the active tab
        // fetchDataForTab(key);
    };

    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <Tabs
                                    activeKey={activeTab}
                                    onChange={changeStatus}
                                    style={{ marginBottom: 16 }}
                                >
                                    {stages && stages?.map((val)=>{
                                        return <Tabs.TabPane tab={`${val?.name} ${( val?.count )}`} key={val?._id}/>
                                    })}
                                  
                                    {/* <Tabs.TabPane tab="Project Created" key="created" />
                                    <Tabs.TabPane tab="Recce Pending" key="reccePending" />
                                    <Tabs.TabPane tab="Design Pending" key="designPending" />
                                    <Tabs.TabPane tab="Design Freeze" key="designFreeze" />
                                    <Tabs.TabPane tab="Scope Approval Awaited" key="scopeApprovalAwaited" />
                                    <Tabs.TabPane tab="Partial Scope Approved" key="partialScopeApproved" />
                                    <Tabs.TabPane tab="Full Scope Approved" key="fullScopeApproved" />
                                    <Tabs.TabPane tab="Execution In Progress" key="executionInProgress" />
                                    <Tabs.TabPane tab="Execution Completed" key="executionCompleted" />
                                    <Tabs.TabPane tab="Hold" key="hold" />
                                    <Tabs.TabPane tab="Lost" key="lost" />
                                    <Tabs.TabPane tab="Rectification" key="rectification" />
                                    <Tabs.TabPane tab="Archived" key="archived" /> */}
                                </Tabs>
                                <div className="table-responsive active-projects style-1" style={{ overflowX: 'auto' }}>
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0" style={{ padding: "10px" }}>Projects List</h4>
                                        <div>
                                            <Link
                                                className="btn btn-primary btn-sm"
                                                to="/add-projects"
                                                role="button"
                                                aria-controls="offcanvasExample"
                                            >
                                                + ADD Project
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button
                                                className="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                                                tabIndex={0}
                                                type="button"
                                            >
                                                <span>
                                                    <i className="fa-solid fa-file-excel" /> Export Report
                                                </span>
                                            </button>
                                        </div>
                                        <table
                                            className="table dataTable no-footer"
                                            role="grid"
                                            aria-describedby="projects-table_info"
                                        >
                                            <thead>
                                                <tr role="row">
                                                    <th>S.No</th>
                                                    <th>Job Id</th>
                                                    <th>Project Name</th>
                                                    <th>Client Name</th>
                                                    <th>Business Category</th>
                                                    <th>State</th>
                                                    <th>City</th>
                                                    <th>Project Scop</th>
                                                    <th>Project Estimate</th>
                                                    <th>Recce Due Date</th>
                                                    <th>Created On</th>
                                                    <th>Execution Due Date</th>
                                                    <th>Actual Completion Date</th>
                                                    <th>Created By</th>
                                                    <th>Recce Due Date</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => (
                                                    <tr key={item._id} role="row">
                                                        <td>{(i + 1) + (page * count)}</td>
                                                        <td>{item.job_id}</td>
                                                        <td><b><Link to={`/projects/${item._id}`}>{item.project_name}</Link></b></td>
                                                        <td>{item.client.name}</td>
                                                        <td>{item.business_category?.name}</td>
                                                        <td>{item.state.name}</td>
                                                        <td>{item.city.name}</td>
                                                        <td>{item.prj_scope}</td>
                                                        <td>{item.prj_estimate}</td>
                                                        <td>{item.recce_due_date}</td>
                                                        <td>{item.createdAt}</td>
                                                        <td>{item.executation_due_date_assign_prj_user}</td>
                                                        <td>{item.actual_completion_date}</td>
                                                        <td>{item.createdBy?.name}</td>
                                                        <td>{item.recce_due_date}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link
                                                                    to={`#`}
                                                                    style={{ width: "80px" }}
                                                                    className="btn btn-primary shadow btn-xs sharp me-1"
                                                                >
                                                                    Archive
                                                                </Link>
                                                                <Link
                                                                    to={`/add-projects/${item._id}`}
                                                                    className="btn btn-primary shadow btn-xs sharp me-1"
                                                                >
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete!"
                                                                    description="Are you sure to delete?"
                                                                    onConfirm={() => confirm(item._id)}
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
                                    </div>
                                </div>
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

export default CallStatusMasterList;
