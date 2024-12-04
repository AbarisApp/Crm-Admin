import { Pagination } from "antd"






export const TenDaysOverallReport = () => {
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Last 10 days Pageview status</b></h4>
                                        <div>
                                            {/* Add any Export PDF or Excel functionality here */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role='row'>
                                                    <th>#</th>
                                                    <th>Date</th>
                                                    <th>Unique Visitors</th>
                                                    <th>Sessions</th>
                                                    <th>Page Views</th>
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
                                                    <td>September 14th 2024</td>
                                                    <td>34</td>
                                                    <td>36</td>
                                                    <td>87</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>September 14th 2024</td>
                                                    <td>34</td>
                                                    <td>36</td>
                                                    <td>87</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>September 14th 2024</td>
                                                    <td>34</td>
                                                    <td>36</td>
                                                    <td>87</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>September 14th 2024</td>
                                                    <td>34</td>
                                                    <td>36</td>
                                                    <td>87</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>September 14th 2024</td>
                                                    <td>34</td>
                                                    <td>36</td>
                                                    <td>87</td>
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
