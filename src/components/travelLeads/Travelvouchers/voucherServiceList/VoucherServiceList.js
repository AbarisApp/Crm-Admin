import { Pagination, Popconfirm } from "antd"
import { CiMail } from "react-icons/ci"
import { TiDownload, TiTick } from "react-icons/ti"
import { Link } from "react-router-dom"


const VoucherServiceList = () => {
    return (
        <>
            <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                <div className="dt-buttons">
                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                    </button>
                </div>
                <table id="banner-tblwrapper" className="table dataTable no-footer exppdf" role="grid" aria-describedby="banner-tblwrapper_info">
                    <thead>
                        <tr role="row">
                            <th style={{ width: '50px' }}>S.No</th>
                            <th style={{ width: '150px' }}>Voucher Number</th>
                            <th style={{ width: '150px' }}>Travel Date</th>
                            <th style={{ width: '150px' }}>Adults</th>
                            <th style={{ width: '150px' }}>Child</th>
                            <th style={{ width: '150px' }}>Infant</th>
                            <th style={{ width: '150px' }}>Create Date</th>
                            <th style={{ width: '150px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr role="row" >
                            <td className="text-center" colSpan={7}>No data available in table</td>
                            <td>
                                <div className="d-flex">
                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <TiTick style={{ marginBottom: '8px' }} />
                                    </Link>
                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <TiDownload style={{ marginBottom: '8px' }} />
                                    </Link>
                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <i className="fa fa-pencil" />
                                    </Link>
                                    <Popconfirm
                                        title="Delete cow feed!"
                                        description="Are you sure to delete?"
                                        // onConfirm={() => confirm(item?._id)}
                                        // onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                            <i className="fa fa-trash" />
                                        </Link>
                                    </Popconfirm>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="dataTables_info" role="status" aria-live="polite">
                    Total 0 entries
                </div>
                <div className="dataTables_paginate paging_simple_numbers">
                    <Pagination
                        defaultCurrent={1}
                    // onChange={onChangeVal}
                    // total={totalCount}
                    />
                </div>
            </div>
        </>
    )
}

export default VoucherServiceList