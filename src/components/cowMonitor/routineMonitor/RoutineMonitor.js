import { Pagination } from "antd";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { IoEyeSharp } from "react-icons/io5";
import { ServicesDetails } from "./servicesDeatils/ServicesDetails";
import { useState } from "react";


function RoutineMonitor() {
    const [modalShow, setModalShow] = useState(false);
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Cow Monitor",
        title_2: 'Cow Monitor List',
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Cow Monitor List
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/cow-monitor/create" role="button" aria-controls="offcanvasExample">+ Add New</Link>
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
                                            <th style={{ width: '150px' }}>Date</th>
                                            <th style={{ width: '150px' }}>Stall No</th>
                                            <th style={{ width: '150px' }}>Animal ID</th>
                                            <th style={{ width: '150px' }}>Note</th>
                                            <th style={{ width: '150px' }}>Health Status</th>
                                            <th style={{ width: '150px' }}>Reported by</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                            {/* <th style={{ width: '150px' }}>Total</th>
                                            <th style={{ width: '150px' }}>Collected From</th>
                                            <th style={{ width: '150px' }}>Added By</th>
                                            <th style={{ width: '150px' }}>Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr role="row" className="odd" >
                                            <td>Apr 13, 2020</td>
                                            <td>Stall-001</td>
                                            <td>00017</td>
                                            <td>All perfect.</td>
                                            <td>Good Condition</td>
                                            <td>
                                                86 /100
                                                Artur (Super Admin)
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                                        <IoEyeSharp />
                                                    </Link>
                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                        <i className="fa fa-trash" />
                                                    </Link>
                                                    {/* <Popconfirm
                                                        title="Delete Blog Category"
                                                        description="Are you sure to delete?"
                                                        onConfirm={() => confirm(item?.blog_id)}
                                                        onCancel={cancel}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                            <i className="fa fa-trash" />
                                                        </Link>
                                                    </Popconfirm> */}
                                                </div>
                                            </td>

                                            {/* <td>{item?.description}</td>
                                                    <td>
                                                        <img style={{ width: "100px" }} src={`${baseUrlImage}${item?.attachment}`} alt="Meta" />
                                                    </td>
                                                    <td>
                                                        <img style={{ width: "100px" }} src={`${baseUrlImage}${item?.meta_image}`} alt="Meta" />
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/edit-blog/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <i className="fa fa-pencil" />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete Blog Category"
                                                                description="Are you sure to delete?"
                                                                onConfirm={() => confirm(item?.blog_id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                    <i className="fa fa-trash" />
                                                                </Link>
                                                            </Popconfirm>
                                                        </div>
                                                    </td> */}
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

            <ServicesDetails
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
export default RoutineMonitor