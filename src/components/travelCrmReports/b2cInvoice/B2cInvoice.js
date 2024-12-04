



import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CiSaveUp1 } from "react-icons/ci";
import B2cInvoiceFilter from "./b2cInvoiceFilter/B2cInvoiceFilter";



const B2cInvoice = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'B2C Invoice Report',
        path_2: ``
    };

    const pdfDownload = () => {
        const capture = document.querySelector('.exppdf');
        html2canvas(capture).then((pdfCanvas) => {
            const pdfData = pdfCanvas.toDataURL('image/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const contentWidth = capture.offsetWidth;
            const contentHeight = capture.offsetHeight;
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = doc.internal.pageSize.getHeight();
            const widthRatio = pdfWidth / contentWidth;
            const heightRatio = pdfHeight / contentHeight;
            const ratio = Math.min(widthRatio, heightRatio);
            doc.addImage(pdfData, 'PNG', 0, 0, contentWidth * ratio, contentHeight * ratio);
            doc.save('PDF_Download');
        });
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <B2cInvoiceFilter />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">B2C Invoice Report</h4>
                                        <div onClick={pdfDownload} className="btn btn-primary btn-sm">
                                            EXPORT PDF
                                            <span><CiSaveUp1 className='fs-4 fw-bold text-white' /></span>
                                        </div>
                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="banner-tblwrapper" className="table dataTable no-footer exppdf" role="grid" aria-describedby="banner-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '150px' }}>Type</th>
                                                    <th style={{ width: '150px' }}>Place Of Supply</th>
                                                    <th style={{ width: '150px' }}>Rate</th>
                                                    <th style={{ width: '150px' }}>Taxable Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row" >
                                                    <td colSpan="14" className="text-center">No data available in table</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total 0 entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                                defaultCurrent={1}
                                            // onChange={onChangeVal}
                                            // total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default B2cInvoice