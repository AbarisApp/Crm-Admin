import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { NotificationHistoryFilter } from "./NotificationHistoryFilter";
import { Modal } from "react-bootstrap";
import { useState } from "react";




export const NotificationHistory = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: 'Notification History',
        path_2: ""
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <NotificationHistoryFilter />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Notification History
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
                                            <th style={{ width: '150px' }}>Sent	</th>
                                            <th style={{ width: '150px' }}>Sender</th>
                                            <th style={{ width: '150px' }}>Subject</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr role="row" className="odd" >
                                            <td><strong>User Name</strong>  <br /><a href="#">@username</a></td>
                                            <td>2024-08-31 11:00 AM
                                                2 weeks ago</td>
                                            <td>Email
                                                via php</td>
                                            <td>Password Reset</td>
                                            <td><button type="button" onClick={handleShow} className="btn btn-success">Details</button></td>
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
                                            <td><strong>User Name</strong>  <br /><a href="#">@username</a></td>
                                            <td>2024-08-31 11:00 AM
                                                2 weeks ago</td>
                                            <td>Email
                                                via php</td>
                                            <td>Password Reset</td>
                                            <td><button type="button" onClick={handleShow} className="btn btn-success">Details</button></td>

                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td><strong>User Name</strong>  <br /><a href="#">@username</a></td>
                                            <td>2024-08-31 11:00 AM
                                                2 weeks ago</td>
                                            <td>Email
                                                via php</td>
                                            <td>Password Reset</td>
                                            <td><button type="button" onClick={handleShow} className="btn btn-success">Details</button></td>
                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td><strong>User Name</strong>  <br /><a href="#">@username</a></td>
                                            <td>2024-08-31 11:00 AM
                                                2 weeks ago</td>
                                            <td>Email
                                                via php</td>
                                            <td>Password Reset</td>
                                            <td><button type="button" onClick={handleShow} className="btn btn-success">Details</button></td>
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


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Notification Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1 className="text-align-center">Hello User Name (username)</h1>
                    <p>We've received a request to reset the password for your account on 2024-08-31 11:00:04 AM. The request originated from the following IP address: 127.0.0.1, using Chrome on Windows 10.</p>
                    <p>

                        To proceed with the password reset, please use the following account recovery code: 354493</p>
                    <p>
                        If you did not initiate this password reset request, please disregard this message. Your account security remains our top priority, and we advise you to take appropriate action if you suspect any unauthorized access to your account.
                    </p>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
