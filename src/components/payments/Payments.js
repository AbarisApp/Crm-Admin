import { Pagination } from "antd";
import { Link, useLocation } from "react-router-dom";
import { PaymentFilter } from "./PaymentFilter";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import '../payments/payment.css'
import { AllPaymentHeading } from "./allPaymentHeading/AllPaymentHeading";




export const Payments = () => {
    const location = useLocation();
    console.log(location);

    const getBreadCrumbTitle = () => {
        if (location.pathname.includes("pending")) {
            return "Pending Payments";
        } else if (location.pathname.includes("approved")) {
            return "Approved Payments";
        } else if (location.pathname.includes("successful")) {
            return "Successful Payments";
        }
        else if (location.pathname.includes("rejected")) {
            return "Rejected Payments";
        }
        else if (location.pathname.includes("initiated")) {
            return "Initiated Payments";
        }
        else if (location.pathname.includes("all")) {
            return "Payment History";
        }
        else {
            return "Pending Payments";
        }
    };

    const breadCrumbsTitle = {
        id: "1",
        title_1: "Payments",
        title_2: getBreadCrumbTitle(),
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PaymentFilter />
            {location.pathname.includes("all") && <AllPaymentHeading />}


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
                                            <th style={{ width: '50px' }}>Gateway | Transaction</th>
                                            <th style={{ width: '150px' }}>Initiated</th>
                                            <th style={{ width: '150px' }}>User</th>
                                            <th style={{ width: '150px' }}>Amount</th>
                                            <th style={{ width: '150px' }}>Conversion</th>
                                            <th style={{ width: '150px' }}>Status</th>
                                            <th style={{ width: '150px' }}>Action</th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr role="row" className="odd" >
                                            <td><strong>Bank Transfer</strong>  <br />VJZKDNPR4AUY</td>
                                            <td>2024-09-16 07:41 PM
                                                3 days ago</td>
                                            <td>Anatol Jeket <br /> <a href="#">@anatol</a></td>
                                            <td>$75.00 USD + $1.75 USD
                                                $76.75 USD</td>
                                            <td>$1.00 USD = 1.00 USD
                                                76.75 USD</td>
                                            <td>
                                                <span style={{ backgroundColor: 'rgba(255, 159, 67, 0.1)', border: '1px solid #ff9f43', color: '#ff9f43', padding: '2px 15px' }}>Pending</span>
                                            </td>
                                            <td>

                                                <Link to="/deposit/details" className="btn btn-success">Details</Link>
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
                                            <td><strong>Bank Transfer</strong>  <br />VJZKDNPR4AUY</td>
                                            <td>2024-09-16 07:41 PM
                                                3 days ago</td>
                                            <td>Anatol Jeket <br /> <a href="#">@anatol</a></td>
                                            <td>$75.00 USD + $1.75 USD
                                                $76.75 USD</td>
                                            <td>$1.00 USD = 1.00 USD
                                                76.75 USD</td>
                                            <td>
                                                <span style={{ backgroundColor: 'rgba(255, 159, 67, 0.1)', border: '1px solid #ff9f43', color: '#ff9f43', padding: '2px 15px' }}>Pending</span>
                                            </td>
                                            <td>

                                                <Link to="/deposit/details" className="btn btn-success">Details</Link>
                                            </td>



                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td><strong>Bank Transfer</strong>  <br />VJZKDNPR4AUY</td>
                                            <td>2024-09-16 07:41 PM
                                                3 days ago</td>
                                            <td>Anatol Jeket <br /> <a href="#">@anatol</a></td>
                                            <td>$75.00 USD + $1.75 USD
                                                $76.75 USD</td>
                                            <td>$1.00 USD = 1.00 USD
                                                76.75 USD</td>
                                            <td>
                                                <span style={{ backgroundColor: 'rgba(255, 159, 67, 0.1)', border: '1px solid #ff9f43', color: '#ff9f43', padding: '2px 15px' }}>Pending</span>
                                            </td>
                                            <td>

                                                <Link to="/deposit/details" className="btn btn-success">Details</Link>
                                            </td>



                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td><strong>Bank Transfer</strong>  <br />VJZKDNPR4AUY</td>
                                            <td>2024-09-16 07:41 PM
                                                3 days ago</td>
                                            <td>Anatol Jeket <br /> <a href="#">@anatol</a></td>
                                            <td>$75.00 USD + $1.75 USD
                                                $76.75 USD</td>
                                            <td>$1.00 USD = 1.00 USD
                                                76.75 USD</td>
                                            <td>
                                                <span style={{ backgroundColor: 'rgba(255, 159, 67, 0.1)', border: '1px solid #ff9f43', color: '#ff9f43', padding: '2px 15px' }}>Pending</span>
                                            </td>
                                            <td>

                                                <Link to="/deposit/details" className="btn btn-success">Details</Link>
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
