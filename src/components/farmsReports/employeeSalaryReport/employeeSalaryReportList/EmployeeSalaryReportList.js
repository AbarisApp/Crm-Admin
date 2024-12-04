import React from 'react'
import { Empty, Pagination } from 'antd'
function EmployeeSalaryReportList() {
    return (
        <>
            <section className="m-4">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption mb-3">
                                <h4 className="heading mb-0">
                                    Employee Salary Report List
                                </h4>
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
                                            <th style={{ width: '50px' }}>S No</th>
                                            <th style={{ width: '150px' }}>Date</th>
                                            <th style={{ width: '150px' }}>Expense Purpose	</th>
                                            <th style={{ width: '150px' }}>Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td colSpan={4}>
                                                <Empty />
                                                <h2 className='text-center'>Data Not Found</h2>
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
            </section>
        </>
    )
}

export default EmployeeSalaryReportList
