import { Popconfirm } from "antd"
import { Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"

export function SearchList() {
    const item = true
    return (
        <div className="row my-4">
            <div className="col-xl-12">
                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"></div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                    <thead>
                        <tr role="row">
                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                Name
                            </th>
                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                Passport
                            </th>
                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                Passport Expiry
                            </th>
                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                Status
                            </th>
                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                Remark </th>
                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr role="row" className="odd" >
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.is_active === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.is_active === false ? '0.8rem' : ''}` }}>{item?.is_active == true ? 'ACTIVE' : 'IN ACTIVE'}</span>
                            </td>
                            <td style={{ width: "200rem" }}>
                                <span className='text-nowrap' >{item?.remark ? item?.remark : 'No Remark Available'}</span>
                            </td>
                            <td>
                                <div className="d-flex">
                                    <Link to={`/newvblock/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                    <Popconfirm
                                        title="Delete Block!"
                                        description="Are you sure to delete ?"
                                        onConfirm=""
                                        onCancel=""
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                    </Popconfirm>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                    < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                        {/* Total {totalCount} entries */}
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                        <Pagination
                            // showSizeChanger
                            // onShowSizeChange={''}
                            defaultCurrent={1}
                            onChange=""
                            total=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}