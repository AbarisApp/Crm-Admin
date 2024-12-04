import { Link } from "react-router-dom";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { Pagination } from "antd";
import { IoEyeSharp } from "react-icons/io5";



const WarehouseStockTransfer = () => {

    const breadCrumbsTitle = {
        id: "1",
        title_1: "Logistics",
        title_2: 'Warehouse stock transfer',
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
                                    Warehouse stock transfer
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/warehouse-stock-transfer-add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
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
                                            <th style={{ width: '150px' }}>Id</th>
                                            <th style={{ width: '150px' }}>Entry Date</th>
                                            <th style={{ width: '150px' }}>Transfer To</th>
                                            <th style={{ width: '150px' }}>Serial No.</th>
                                            <th style={{ width: '150px' }}>Barcode</th>
                                            <th style={{ width: '150px' }}>	Barcode</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td >1</td>
                                            <td >	2</td>
                                            <td >08-Jun-2024</td>
                                            <td >MP DEFECTIVE</td>
                                            <td >190301476FR00390</td>
                                            <td >52141501SD01476</td>
                                            <td >GODREJ REF R T EON VESTA 485MDI 3.4 PL STL -01476</td>
                                            <td>
                                                <div className="d-flex">
                                                    <Link to={`/vehicle-loading-sheet-deatils`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <IoEyeSharp />
                                                    </Link>

                                                    {/* <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
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
                                                    </Popconfirm> */}
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

export default WarehouseStockTransfer