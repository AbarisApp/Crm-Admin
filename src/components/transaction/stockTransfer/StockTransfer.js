import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { Link } from "react-router-dom";
import StockTransferPdf from "./stockTransferPdf/StockTransferPdf";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";


const StockTransfer = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'List Of Stock Tranfer',
        path_2: ``
    };
    const [pdf, setPdf] = useState  (false)

    const pdfGenerateDefault = () => {
        setPdf(!pdf)
    }
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            {/* <GroupSummaryFilter /> */}
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    List Of Stock Tranfer
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/stocktransfer/add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
                                    <button className="btn btn-sm btn-success ms-2" onClick={pdfGenerateDefault}>Print PDF</button>
                                </div>
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
                                            <th style={{ width: '150px' }}>A</th>
                                            <th style={{ width: '150px' }}>Date</th>
                                            <th style={{ width: '150px' }}>No</th>
                                            <th style={{ width: '150px' }}>Quantity</th>
                                            <th style={{ width: '150px' }}>Created By</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>----</td>
                                            <td>----</td>
                                            <td>----</td>
                                            <td>----</td>
                                            <td>----</td>
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
                        </div>
                    </div>
                </div>
            </div>
            {pdf && <div className="pdfcs">
                <div className="loader-overlay">
                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                        <StockTransferPdf />
                    </PDFViewer>
                </div>

            </div>}
        </>
    )
}

export default StockTransfer