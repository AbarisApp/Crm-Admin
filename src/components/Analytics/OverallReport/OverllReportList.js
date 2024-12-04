import { Pagination } from "antd"




export const OverllReportList = () => {
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Agent Deposit Request List</b></h4>
                                        <div>
                                            {/* Add any Export PDF or Excel functionality here */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role='row'>
                                                    <th>#</th>
                                                    <th>Task</th>
                                                    <th>Overall Stats</th>
                                                    {/* <th>Agent Name</th>
                                                    <th>Amount</th>
                                                    <th>PG Info</th>
                                                    <th>Payment Date</th>
                                                    <th>Transaction Id</th>
                                                    <th>Status</th>
                                                    <th>Mode</th>
                                                    <th>Admin Remark</th>
                                                    <th>Action</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Active SEO Tools</td>
                                                    <td>61</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>	Inactive SEO Tools</td>
                                                    <td>61</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Users</td>
                                                    <td>61</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Banned Users</td>
                                                    <td>Unverified Users</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Active SEO Tools</td>
                                                    <td>61</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total 0 entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                            // defaultCurrent={1}
                                            // onChange={onChangeVal}
                                            // total={tableData.length}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
