import { Pagination } from "antd"
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import { Link } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";


export const SaleMilk = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Milk Parlor",
        title_2: 'Sale Milk List',
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
                                    Sale Milk List
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/add-sale-milk" role="button" aria-controls="offcanvasExample">+ Sale New</Link>
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
                                            <th style={{ width: '50px' }}>Invoice</th>
                                            <th style={{ width: '150px' }}>Date</th>
                                            <th style={{ width: '150px' }}>Account No</th>
                                            <th style={{ width: '150px' }}>Name</th>
                                            <th style={{ width: '150px' }}>Contact</th>
                                            <th style={{ width: '150px' }}>Email</th>
                                            <th style={{ width: '150px' }}>Litre</th>
                                            <th style={{ width: '150px' }}>Price</th>
                                            <th style={{ width: '150px' }}>Total</th>
                                            <th style={{ width: '150px' }}>Total</th>
                                            <th style={{ width: '150px' }}>Due</th>
                                            <th style={{ width: '150px' }}>Sold By</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr role="row" className="odd" >
                                            <td>00029</td>
                                            <td>09/11/2024</td>
                                            <td>BK023323</td>
                                            <td>arjun munda</td>
                                            <td>0000000000	</td>
                                            <td>
                                                arjun@gmail.com
                                            </td>
                                            <td>
                                                2.00
                                            </td>
                                            <td>
                                                Rs.10.00
                                            </td>
                                            <td>
                                                Rs.20.00
                                            </td>
                                            <td>
                                                Rs.20.00
                                            </td>
                                            <td>
                                                Rs.0.00
                                            </td>
                                            <td>
                                                Artur (Super Admin)
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    <Link to={`/sale-milk-invoice`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <FaFileInvoice />
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
        </>
    )
}
