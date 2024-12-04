import { Pagination } from "antd"


export const OverviewList = () => {
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Active Users</b></h4>
                                        <div>
                                            {/* Add any Export PDF or Excel functionality here */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role='row'>
                                                    <th>IP</th>
                                                    <th>Country</th>
                                                    <th>Customer</th>
                                                    <th>Browser</th>
                                                    <th>Last Page Visited</th>
                                                    <th>Referer</th>
                                                    <th>Last Click</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>197.239.10.199</td>
                                                    <td>Uganda <img src="https://icons.veryicon.com/png/Flag/Rounded%20World%20Flags/Uganda%20Flag.png" alt="" /></td>
                                                    <td>Guest</td>
                                                    <td>Firefox 130.0 <img src="https://s.cafebazaar.ir/images/icons/org.mozilla.firefox-7c5db775-5b6b-431a-8b09-a747546175d6_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" alt="" /></td>
                                                    <td><a href="#">	https://demo.atozseotools.com/find-dns-records/output</a></td>
                                                    <td>Direct</td>
                                                    <td>September 14th 2024 03:47:33 PM</td>
                                                </tr>
                                                <tr>
                                                    <td>197.239.10.199</td>
                                                    <td>India <img src="https://preview.redd.it/profile-photos-first-2-images-and-banner-last-image-v0-eszkqfw9b3h91.png?width=256&format=png&auto=webp&s=8539808a72a38ae8bccb0273744625630df44ae1" alt="" /></td>
                                                    <td>Guest</td>
                                                    <td>Firefox 130.0 <img src="https://s.cafebazaar.ir/images/icons/org.mozilla.firefox-7c5db775-5b6b-431a-8b09-a747546175d6_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" alt="" /></td>
                                                    <td><a href="#">	https://demo.atozseotools.com/find-dns-records/output</a></td>
                                                    <td>Direct</td>
                                                    <td>September 14th 2024 03:47:33 PM</td>
                                                </tr>
                                                <tr>
                                                    <td>197.239.10.199</td>
                                                    <td>Saudi <img src="https://www.shareicon.net/data/256x256/2015/11/13/164949_flag_256x256.png" alt="" /></td>
                                                    <td>Guest</td>
                                                    <td>Firefox 130.0 <img src="https://s.cafebazaar.ir/images/icons/org.mozilla.firefox-7c5db775-5b6b-431a-8b09-a747546175d6_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" alt="" /></td>
                                                    <td><a href="#">	https://demo.atozseotools.com/find-dns-records/output</a></td>
                                                    <td>Direct</td>
                                                    <td>September 14th 2024 03:47:33 PM</td>
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
