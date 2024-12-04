
import { Pagination, Popconfirm } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
function AllRequest({ data, totalCount, page, count, onChangeVal, confirm, cancel }) {
   
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                  
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    S.No
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Request Date


                                                </th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px', textAlign: 'center' }}>
                                                    Request Type
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Requested by
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Status
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Requested Amount
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Payment Done
                                                </th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.map((item, i) => {
                                                return <tr role="row" className="odd">
                                                    <td>
                                                        {(i + 1) + (page * count)}
                                                    </td>

                                                    <td>
                                                        {item?.name}
                                                    </td>
                                                    <td>
                                                        {item?.sales_acc_id?.name}
                                                    </td>
                                                    <td>
                                                        {item?.tax_master?.name}
                                                    </td>
                                                    <td>
                                                        {item?.tax_type}
                                                    </td>
                                                    <td>
                                                        {item?.form_name}
                                                    </td>


                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            <Popconfirm
                                                                title="Delete !"
                                                                description="Are you sure to delete ?"
                                                                onConfirm={() => confirm(item?._id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                            </Popconfirm>
                                                        </div>

                                                    </td>

                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                        < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {0} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}

                                                defaultCurrent={1}
                                            // onChange={onChangeVal}
                                            // total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default AllRequest
