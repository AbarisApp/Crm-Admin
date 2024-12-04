import { Pagination } from "antd"



function RecentAccessHistory() {
    return (
        <>

            <div className="col-xl-12">
                <div className="table-responsive active-projects style-1">
                    <div id="empoloyees-tblwrapper_wrapper" className=" no-footer">
                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                            <thead>
                                <tr role='row'>
                                    <th>Tool Name</th>
                                    <th>
                                        User Query
                                    </th>
                                    <th>User Name</th>
                                    <th>User IP</th>
                                    <th>Date</th>
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
                                    <td>Alexa Rank Checker</td>
                                    <td>http://www.maroc.com</td>
                                    <td>Guest</td>
                                    <td>105.159.109.143</td>
                                    <td>12/08/2022 03:53:09AM</td>
                                </tr>
                                <tr>
                                    <td>Alexa Rank Checker</td>
                                    <td>http://www.maroc.com</td>
                                    <td>Guest</td>
                                    <td>105.159.109.143</td>
                                    <td>12/08/2022 03:53:09AM</td>
                                </tr>
                                <tr>
                                    <td>Alexa Rank Checker</td>
                                    <td>http://www.maroc.com</td>
                                    <td>Guest</td>
                                    <td>105.159.109.143</td>
                                    <td>12/08/2022 03:53:09AM</td>
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

        </>
    )
}
export default RecentAccessHistory