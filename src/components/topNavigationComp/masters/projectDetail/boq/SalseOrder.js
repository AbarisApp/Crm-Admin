import { Pagination } from "antd";
import { PDFViewer } from "@react-pdf/renderer";
import PdfBanks from "./pdfBank/PdfBanks";
import { useState } from "react";

const SalseOrder = () => {
   
    const [pdf, setPdf] = useState(false)

    const pdfGenerateDefault = () => {
        setPdf(!pdf)
    }
    return (
        <>
            <div style={{ margin: "14px" }}>
                <div className="">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                           
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                             
                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '150px' }}>S.no</th>
                                            <th style={{ width: '150px' }}>Order No.</th>
                                            <th style={{ width: '150px' }}>Order Type</th>
                                            <th style={{ width: '150px' }}>Order From</th>
                                            <th style={{ width: '150px' }}>Issued By</th>
                                            <th style={{ width: '150px' }}>Issue Date</th>
                                            <th style={{ width: '150px' }}>Due Date</th>
                                            <th style={{ width: '150px' }}>Order Status</th>
                                            <th style={{ width: '150px' }}>PO Status</th>
                                            <th style={{ width: '150px' }}>Progress Update</th>
                                            <th style={{ width: '150px' }}>Amount (₹)</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> --</td>
                                            <td> --</td>
                                            <td> --</td>
                                            <td> --</td>
                                            <td> --</td>
                                            <td> --</td>
                                            <td> --</td>
                                            <td> --</td>
                                            <td> --</td>
                                            <td> --</td>
                                            <td> --</td>
                                            <td>
                                                <button className="btn btn-sm btn-success ms-2" onClick={pdfGenerateDefault}>Print PDF</button>
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
                            {pdf && <div className="pdfcs">
                                <div className="loader-overlay">
                                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                                        <PdfBanks titlt='Client Orders'/>
                                    </PDFViewer>
                                </div>

                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalseOrder