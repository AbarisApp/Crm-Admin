import { Pagination, Popconfirm } from "antd"
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";


const PriceMaster = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Account Master",
        title_2: 'List Of Price',
        path_2: ``
    };

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-2">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">List Of Price</h4>
                                    <div className="d-flex" style={{ alignItems: "center" }}>
                                        <Link
                                            className="btn btn-primary btn-sm"
                                            to="/pricemaster/add"
                                        >
                                            <FaPlus className="fs-5 mb-1" /> Add
                                        </Link>

                                        {/* <span className="btn btn-primary btn-sm">
                                            <IoSearch />
                                            <input
                                                type="text"
                                                className="from-control"
                                                placeholder="Search..."
                                            />
                                        </span>

                                        <span>
                                            <ExportFile />
                                        </span> */}
                                    </div>
                                </div>
                                <div className="dataTables_wrapper no-footer">
                                    <table className="table dataTable no-footer" role="grid">
                                        <thead>
                                            <tr role="row">
                                                <th>
                                                    {/* <input
                            type="checkbox"
                            onChange={handleSelectAll}
                            checked={selectedReceipts.size === receipts.length}
                          /> */}
                                                </th>

                                                <th>Name</th>
                                                <th>Form Date</th>
                                                <th>To Date</th>
                                                <th>Sale / Purch</th>
                                                <th>Type</th>
                                                <th>Active</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr role="row">
                                                <td>
                                                    {/* <input
                              type="checkbox"
                              checked={selectedReceipts.has(receipt.id)}
                              onChange={() => handleCheckboxChange(receipt.id)}
                            /> */}
                                                </td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>


                                                {/* <td>
                                                    <div className="d-flex">
                                                        <Link
                                                            to="addTCS-master"
                                                            className="btn btn-primary shadow btn-xs sharp me-1"
                                                        >
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="btn btn-secondary shadow btn-xs sharp me-1"
                                                        >
                                                            <IoEyeSharp className="fa fa-pencil " />
                                                        </Link>
                                                        <Popconfirm
                                                            title="Delete banner!"
                                                            description="Are you sure to delete?"
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link
                                                                to="#"
                                                                className="btn btn-danger shadow btn-xs sharp"
                                                            >
                                                                <i className="fa fa-trash" />
                                                            </Link>
                                                        </Popconfirm>
                                                    </div>
                                                </td> */}
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div
                                        className="dataTables_info"
                                        role="status"
                                        aria-live="polite"
                                    >
                                        Total {0} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <Pagination defaultCurrent={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceMaster