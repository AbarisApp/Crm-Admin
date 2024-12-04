import { Pagination } from "antd"
import { Link } from "react-router-dom"
import { ReturnManagementModal } from "./returnManagementModal/ReturnManagementModal";
import { useState } from "react";
import { Estimate_request_Filter } from "../../estimate_request/Estimate_request_Filter";


export const ReturnManagement = () => {
    

    const [modalShow, setModalShow] = useState(false);
    const [title, setTitle] = useState('')
    const openModatl = (titles) => {
        setTitle(titles)
        setModalShow(true)
    }
    return (

        <>
            
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Return Management
                                </h4>
                                {/* <div>
                                    <Link className="btn btn-primary btn-sm" to="/vehicle-loading-sheet-add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
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
                                            <th style={{ width: '150px' }}>Sr. No.</th>
                                            <th style={{ width: '150px' }}>Inward No.</th>
                                            <th style={{ width: '150px' }}>Customer Name</th>
                                            <th style={{ width: '150px' }}>SKU</th>
                                            <th style={{ width: '150px' }}>Barcode</th>
                                            <th style={{ width: '150px' }}>	Serial No.</th>
                                            <th style={{ width: '150px' }}>Category</th>
                                            <th style={{ width: '150px' }}>Brand</th>
                                            <th style={{ width: '150px' }}>Call. NO.</th>
                                            <th style={{ width: '150px' }}>Service Status</th>
                                            <th style={{ width: '150px' }}>Company Status</th>
                                            <th style={{ width: '150px' }}>Party Status</th>
                                            {/* <th style={{ width: '150px' }}>Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td >1</td>
                                            <td >763</td>
                                            <td >01-Aug-2024</td>
                                            <td >BADAMIKAR AND SONS (OWN STOCK)</td>
                                            <td >LIEBHERR REF DB 2224-20</td>
                                            <td >4059303000299</td>
                                            <td >190040157001090062951</td>
                                            <td >REFRIGERATOR</td>
                                            {/* <td >	Brand</td> */}
                                            <td >VD0924-0102</td>
                                            <td ><button type="button" className="btn btn-success" onClick={() => openModatl('Register complaint')}>Pending</button></td>
                                            <td ><button type="button" className="btn btn-success" onClick={() => openModatl('Company Status')}>Pending</button></td>
                                            <td ><button type="button" className="btn btn-success" onClick={() => openModatl('Account Status')}>Pending</button></td>

                                            {/* <td>
                                                <div className="d-flex">
                                                    <Link to={`/vehicle-loading-sheet-deatils`} className="btn btn-primary shadow btn-xs sharp me-1">
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

            <ReturnManagementModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={title}
            />

        </>

    )
}
