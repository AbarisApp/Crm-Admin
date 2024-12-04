import { Pagination } from "antd";
import { useState } from "react";
const Quatation = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>

            {/* <GroupSummaryFilter /> */}
            <div style={{ margin: "14px" }}>
               
                <div className="">
                    <div className="card-body p-0">
                        {/* <button type="button" style={{ margin: "10px 0" }} className="btn btn-success" onClick={() => setModalShow(true)}>+ Add Snag</button> */}
                        <div className="table-responsive active-projects style-1">

                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">

                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '150px' }}>SI.No</th>
                                            <th style={{ width: '150px' }}>Name of File</th>
                                            <th style={{ width: '150px' }}>Type of File </th>
                                            <th style={{ width: '150px' }}>Uploaded by</th>
                                            <th style={{ width: '150px' }}>Uploaded On</th>
                                            <th style={{ width: '150px' }}>Status</th>
                                            <th style={{ width: '150px' }}>Action</th>
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