import React from 'react'
import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { Link } from "react-router-dom";

function VactionList() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Catalog",
        title_2: ' Vaccine List',
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
                                    Vaccine List
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/add-vaccine" role="button" aria-controls="offcanvasExample">+ Add New</Link>
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
                                            <th style={{ width: '150px' }}>S.No</th>
                                            <th style={{ width: '150px' }}>	Vaccine Name</th>
                                            <th style={{ width: '150px' }}>	Period (days))</th>
                                            <th style={{ width: '150px' }}>	Repeat Vaccine</th>
                                            <th style={{ width: '150px' }}>	Dose</th>
                                            <th style={{ width: '150px' }}>	Note</th>
                                            <th style={{ width: '150px' }}>	Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Anthrax</td>
                                            <td>120</td>
                                            <td>No</td>
                                            <td>Annually in endemic areas 2021</td>
                                            <td>4 months and above</td>
                                            <td><div className="d-flex">
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    {/* <Link to={`/sale-invoice-cow`} className="btn btn-primary shadow btn-xs sharp me-1" >
                                                        <FcViewDetails />
                                                    </Link>
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                                        <IoEyeSharp />
                                                    </Link> */}
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
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>BDV</td>
                                            <td>60</td>
                                            <td>No</td>
                                            <td></td>
                                            <td>Push this after 2 Months</td>
                                            <td><div className="d-flex">
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    {/* <Link to={`/sale-invoice-cow`} className="btn btn-primary shadow btn-xs sharp me-1" >
                                                        <FcViewDetails />
                                                    </Link>
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                                        <IoEyeSharp />
                                                    </Link> */}
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
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>BRSV</td>
                                            <td>365</td>
                                            <td>No</td>
                                            <td></td>
                                            <td>Once a Year Use 2.0 ml using Injection</td>
                                            <td><div className="d-flex">
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    {/* <Link to={`/sale-invoice-cow`} className="btn btn-primary shadow btn-xs sharp me-1" >
                                                        <FcViewDetails />
                                                    </Link>
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                                        <IoEyeSharp />
                                                    </Link> */}
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
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>BVD</td>
                                            <td>90</td>
                                            <td>Yes</td>
                                            <td>(Vial: 30 ml)</td>
                                            <td>Every 3 Months</td>
                                            <td><div className="d-flex">
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    {/* <Link to={`/sale-invoice-cow`} className="btn btn-primary shadow btn-xs sharp me-1" >
                                                        <FcViewDetails />
                                                    </Link>
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                                        <IoEyeSharp />
                                                    </Link> */}
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
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>PI3</td>
                                            <td>120</td>
                                            <td>No</td>
                                            <td>3ml, midneck injection push</td>
                                            <td>After 4 Months</td>
                                            <td><div className="d-flex">
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    {/* <Link to={`/sale-invoice-cow`} className="btn btn-primary shadow btn-xs sharp me-1" >
                                                        <FcViewDetails />
                                                    </Link>
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                                        <IoEyeSharp />
                                                    </Link> */}
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
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Vitamin A</td>
                                            <td>60</td>
                                            <td>Yes</td>
                                            <td>Oral Single Tablet</td>
                                            <td>Twice a Month</td>
                                            <td><div className="d-flex">
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    {/* <Link to={`/sale-invoice-cow`} className="btn btn-primary shadow btn-xs sharp me-1" >
                                                        <FcViewDetails />
                                                    </Link>
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                                        <IoEyeSharp />
                                                    </Link> */}
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
                                                </div></td>
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
export default VactionList
