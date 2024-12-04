import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { LoginHistoryFilter } from "./LoginHistoryFilter";


function LoginHistory() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: 'User Login History',
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <LoginHistoryFilter />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    User Login History
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
                                            <th style={{ width: '150px' }}>Login at	</th>
                                            <th style={{ width: '150px' }}>IP</th>
                                            <th style={{ width: '150px' }}>Location</th>
                                            <th style={{ width: '150px' }}>Browser | OS	</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr role="row" className="odd" >
                                            <td><strong>Mateus Paiano ) (Math)</strong>  <br /><a href="#">@paiano</a></td>
                                            <td>2024-09-20 08:39 PM
                                                12 hours ago</td>
                                            <td><a href="#">24.152.101.140</a></td>
                                            <td>Lindoeste
                                                Brazil</td>
                                            <td>Chrome
                                                Windows 10</td>
                                            {/* <td>
                                                <span style={{ backgroundColor: 'rgba(255, 159, 67, 0.1)', border: '1px solid #ff9f43', color: '#ff9f43', padding: '2px 15px' }}>Pending</span>
                                            </td> */}


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
                                            <td><strong>Mateus Paiano ) (Math)</strong>  <br /><a href="#">@paiano</a></td>
                                            <td>2024-09-20 08:39 PM
                                                12 hours ago</td>
                                            <td><a href="#">2001:818:e71b:d800:b0ab:6488:a70:c1a7</a></td>
                                            <td>Lindoeste
                                                Brazil</td>
                                            <td>Chrome
                                                Windows 10</td>

                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td><strong>Mateus Paiano ) (Math)</strong>  <br /><a href="#">@paiano</a></td>
                                            <td>2024-09-20 08:39 PM
                                                12 hours ago</td>
                                            <td><a href="#">24.152.101.140</a></td>
                                            <td>Lindoeste
                                                Brazil</td>
                                            <td>Chrome
                                                Windows 10</td>
                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td><strong>Mateus Paiano ) (Math)</strong>  <br /><a href="#">@paiano</a></td>
                                            <td>2024-09-20 08:39 PM
                                                12 hours ago</td>
                                            <td><a href="#">2001:818:e71b:d800:b0ab:6488:a70:c1a7	</a></td>
                                            <td>Lindoeste
                                                Brazil</td>
                                            <td>Chrome
                                                Windows 10</td>
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
export default LoginHistory