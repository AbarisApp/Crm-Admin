import { Pagination, Popconfirm } from "antd"

import { Link } from "react-router-dom"

export function TagWiseList({ data, page, count, onChangeVal, totalCount }) {
    const item = true
    return (
        <div className="row my-2 m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Tag Wise Report</h4>
                                <div>
                                    {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                <thead>
                                    <tr role="row">
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            S No.
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            Lead No.
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            Contact Name
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                            Mobile
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                            Tags
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            usernema
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Created Date
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data?.map((item, i) => {
                                        return <tr role="row" className="odd" key={item?._id}>
                                            <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                            <td>
                                                {item?.refer_code}
                                            </td>
                                            <td>
                                                {item?.first_name} {item?.last_name}
                                            </td>
                                            <td>
                                                {item?.mobile_number}
                                            </td>
                                            <td>
                                                {item?.tag?.trip_type}
                                            </td>
                                            <td>
                                                --
                                            </td>

                                            <td>
                                                {item?.createdAt}
                                            </td>

                                            {/* <td>
                                                <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.is_active === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.is_active === false ? '0.8rem' : ''}` }}>{item?.is_active == true ? 'ACTIVE' : 'IN ACTIVE'}</span>
                                            </td> */}

                                        </tr>
                                    })}
                                </tbody>
                            </table>
                                < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total {totalCount} entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        // showSizeChanger
                                        // onShowSizeChange={''}
                                        defaultCurrent={1}
                                        onChange={onChangeVal}
                                        total={totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}