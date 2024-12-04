import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import { Pagination } from "antd";
import { ManageUsersFilter } from "./ManageUsersFilter";
import '../ManageUsers/ManageUsers.css'



export const ManageUsers = () => {
    const location = useLocation();
    // console.log(location);

    const getBreadCrumbTitle = () => {
        if (location.pathname.includes("banned")) {
            return "Banned Users";
        } else if (location.pathname.includes("email-unverified")) {
            return "Email Unverified Users";
        } else if (location.pathname.includes("mobile-unverified")) {
            return "Mobile Unverified Users";
        } else if (location.pathname.includes("with-balance")) {
            return "Users with Balance";
        } else if (location.pathname.includes("users")) {
            return "All Users";
        }
        else {
            return "Active Users";
        }
    };

    const breadCrumbsTitle = {
        id: "1",
        title_1: "Manage Users",
        title_2: getBreadCrumbTitle(),
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ManageUsersFilter />

            {/* {loading && <Loadar />} */}
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    {getBreadCrumbTitle()}
                                </h4>
                                {/* <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-blog" role="button" aria-controls="offcanvasExample">+ Blog Master</Link>
                                    </div> */}
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
                                            <th style={{ width: '50px' }}>User</th>
                                            <th style={{ width: '150px' }}>Email-Mobile</th>
                                            <th style={{ width: '150px' }}>Country</th>
                                            <th style={{ width: '150px' }}>Joined At</th>
                                            <th style={{ width: '150px' }}>Action</th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr role="row" className="odd" >
                                            <td>Prakash Patel <br /> <a href="#">@hvsardhara</a></td>
                                            <td>[Email is protected for the demo] <br />[Mobile is protected for the demo]</td>
                                            <td>IN</td>
                                            <td>2024-09-20 08:27 AM
                                                2 hours ago</td>
                                            <td>
                                                <Link to="/users/detail" className="btn btn-success">Details</Link>
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

                                        <tr role="row" className="odd" >
                                            <td>Prakash Patel <br /> <a href="#">@hvsardhara</a></td>
                                            <td>[Email is protected for the demo] <br />[Mobile is protected for the demo]</td>
                                            <td>IN</td>
                                            <td>2024-09-20 08:27 AM
                                                2 hours ago</td>
                                            <td>
                                                <Link to="/users/detail" className="btn btn-success">Details</Link>
                                            </td>



                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td>Prakash Patel <br /> <a href="#">@hvsardhara</a></td>
                                            <td>[Email is protected for the demo] <br />[Mobile is protected for the demo]</td>
                                            <td>IN</td>
                                            <td>2024-09-20 08:27 AM
                                                2 hours ago</td>
                                            <td>
                                                <Link to="/users/detail" className="btn btn-success">Details</Link>
                                            </td>



                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td>Prakash Patel <br /> <a href="#">@hvsardhara</a></td>
                                            <td>[Email is protected for the demo] <br />[Mobile is protected for the demo]</td>
                                            <td>IN</td>
                                            <td>2024-09-20 08:27 AM
                                                2 hours ago</td>
                                            <td>
                                                <Link to="/users/detail" className="btn btn-success">Details</Link>
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
