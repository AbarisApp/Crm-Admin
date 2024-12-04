import { Pagination, Popconfirm } from "antd"
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { IoEyeSharp } from "react-icons/io5";

const LeaveApplication = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Leave Application',
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            {/* <Estimate_request_Filter /> */}
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Leave Application
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/leave-application-add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
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
                                            <th style={{ width: '150px' }}>Sr. No.</th>
                                            <th style={{ width: '150px' }}>Date</th>
                                            <th style={{ width: '150px' }}>	 Name</th>
                                            <th style={{ width: '150px' }}>	Entry Date</th>
                                            <th style={{ width: '150px' }}>	Leave From</th>
                                            <th style={{ width: '150px' }}>			Leave To</th>
                                            <th style={{ width: '150px' }}>		Remark</th>
                                            <th style={{ width: '150px' }}>		Care Taker</th>
                                            <th style={{ width: '150px' }}>Approve ./ Reject</th>

                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td>1</td>
                                            <td>		26-Mar-2024</td>
                                            <td>	Jay</td>
                                            <td>		26-Mar-2024</td>
                                            <td>26-Mar-2024</td>
                                            <td>26-Mar-2024</td>
                                            <td>	Family Function so take a leave</td>
                                            <td>.</td>
                                            <td>Approved</td>


                                            <td>
                                                <div className="d-flex">
                                                    <Link to={`/crm-electronic-details`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <IoEyeSharp />
                                                    </Link>

                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    <Popconfirm
                                                        title="Delete Blog Category"
                                                        description="Are you sure to delete?"
                                                        // onConfirm={() => confirm(item?.blog_id)}
                                                        // onCancel={cancel}
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
                                    </tbody>
                                </table>
                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total 0 entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        defaultCurrent={1}
                                    // onChange={onChangeVal}
                                    // total={data?.totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeaveApplication