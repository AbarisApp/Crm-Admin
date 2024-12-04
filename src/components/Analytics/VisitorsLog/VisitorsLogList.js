import { Pagination } from "antd"




export const VisitorsLogList = () => {
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Visitor Log</b></h4>
                                        <div>
                                            {/* Add any Export PDF or Excel functionality here */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role='row'>
                                                    <th>Visitor Details</th>
                                                    <th>OS/Browser Details</th>
                                                    <th>Pages Viewed</th>
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
                                                    <td>
                                                        <div className="visitor">
                                                            <div className="country">
                                                                <img src="https://cdn-icons-png.freepik.com/256/11416/11416255.png?semt=ais_hybrid" alt="Egypt Flag" />
                                                                <span>Egypt</span>
                                                            </div>
                                                            <div className="details">
                                                                <p><strong>September 14th 2024 01:54:04 PM</strong></p>
                                                                <p>Username: Guest Visitor</p>
                                                                <p>Page Views: 1</p>
                                                                <p className="ip">IP: <span className="ip-address">154.183.162.252</span></p>
                                                                <p>Entry: <a href="#">api.prothemes.biz</a></p>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td>
                                                        <div className="os-browser">
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS543eab4EztBaLdO0B-PewqBobZ7ypetAd7A&s" alt="Windows" />
                                                            <img src="https://static.macupdate.com/products/32956/l/google-chrome-logo.webp?v=1670503741" alt="Chrome" />
                                                            <img src="https://cdn-icons-png.freepik.com/256/6778/6778666.png?semt=ais_hybrid" alt="Desktop" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="pages-viewed">
                                                            <a href="https://demo.atozseotools.com/">https://demo.atozseotools.com/</a>
                                                            <p>Hits: 1</p>
                                                            <p>Last Visit: 01:54:04 PM</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="visitor">
                                                            <div className="country">
                                                                <img src="https://eaes.eu/wp-content/uploads/2018/11/if_Flag_of_Romania_96182.png" alt="Egypt Flag" />
                                                                <span>Romania</span>
                                                            </div>
                                                            <div className="details">
                                                                <p><strong>September 14th 2024 01:54:04 PM</strong></p>
                                                                <p>Username: Guest Visitor</p>
                                                                <p>Page Views: 1</p>
                                                                <p className="ip">IP: <span className="ip-address">154.183.162.252</span></p>
                                                                <p>Entry: <a href="#">api.prothemes.biz</a></p>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td>
                                                        <div className="os-browser">
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS543eab4EztBaLdO0B-PewqBobZ7ypetAd7A&s" alt="Windows" />
                                                            <img src="https://static.macupdate.com/products/32956/l/google-chrome-logo.webp?v=1670503741" alt="Chrome" />
                                                            <img src="https://cdn-icons-png.freepik.com/256/6778/6778666.png?semt=ais_hybrid" alt="Desktop" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="pages-viewed">
                                                            <a href="https://demo.atozseotools.com/">https://demo.atozseotools.com/</a>
                                                            <p>Hits: 1</p>
                                                            <p>Last Visit: 01:54:04 PM</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="visitor">
                                                            <div className="country">
                                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkOVEUQTcRfUsgET3QjxD4Dkh1bPA9GH54gA&s" alt="Egypt Flag" />
                                                                <span>United States of America</span>
                                                            </div>
                                                            <div className="details">
                                                                <p><strong>September 14th 2024 01:54:04 PM</strong></p>
                                                                <p>Username: Guest Visitor</p>
                                                                <p>Page Views: 1</p>
                                                                <p className="ip">IP: <span className="ip-address">154.183.162.252</span></p>
                                                                <p>Entry: <a href="#">api.prothemes.biz</a></p>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td>
                                                        <div className="os-browser">
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS543eab4EztBaLdO0B-PewqBobZ7ypetAd7A&s" alt="Windows" />
                                                            <img src="https://static.macupdate.com/products/32956/l/google-chrome-logo.webp?v=1670503741" alt="Chrome" />
                                                            <img src="https://cdn-icons-png.freepik.com/256/6778/6778666.png?semt=ais_hybrid" alt="Desktop" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="pages-viewed">
                                                            <a href="https://demo.atozseotools.com/">https://demo.atozseotools.com/</a>
                                                            <p>Hits: 1</p>
                                                            <p>Last Visit: 01:54:04 PM</p>
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
