import { Pagination } from "antd";
import AddSnag from "./AddSnag";
import { useState } from "react";
const Quatation = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>

            {/* <GroupSummaryFilter /> */}
            <div style={{ margin: "14px" }}>
                <AddSnag
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <div className="">
                    <div className="card-body p-0">
                        <button type="button" style={{ margin: "10px 0" }} className="btn btn-success" onClick={() => setModalShow(true)}>+ Add Snag</button>
                        <div className="table-responsive active-projects style-1">

                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">

                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '150px' }}>SI.No</th>
                                            <th style={{ width: '150px' }}>Snag Title & Description </th>
                                            <th style={{ width: '150px' }}>Snag Code</th>
                                            <th style={{ width: '150px' }}>Location</th>
                                            <th style={{ width: '150px' }}>Created By</th>
                                            <th style={{ width: '150px' }}>Exp. Date of closure</th>
                                            <th style={{ width: '150px' }}>Assigned Org</th>
                                            <th style={{ width: '150px' }}>Allotted Person</th>
                                            <th style={{ width: '150px' }}>Committed Date</th>
                                            <th style={{ width: '150px' }}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td >----</td>
                                            <td >----</td>
                                            <td >----</td>
                                            <td >----</td>
                                            <td >----</td>
                                            <td >----</td>
                                            <td >----</td>
                                            <td >----</td>
                                            <td >----</td>
                                            <td >----</td>

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
            </div>
        </>
    )
}

export default Quatation