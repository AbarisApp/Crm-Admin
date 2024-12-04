import { Pagination } from "react-bootstrap"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { CiSaveUp1 } from "react-icons/ci";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
export function Availableholidayhotels() {
    const item = true
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Available hotels for your holiday</h4>
                                <div>
                                    {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button bg-success btn-sm btn cusxel"
                                        table="table-to-xlsx"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Download Excel sheet" />
                                        <div onClick={pdfDownload} className="btn btn-primary btn-sm">
                                            EXPORT PDF
                                            <span><CiSaveUp1 className='fs-4 fw-bold text-white' /></span>
                              </div>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div>
                            <table id="table-to-xlsx"  className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                <thead>
                                    <tr role="row">
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            S.No
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            Hotel (Recommended First)
                                        </th>
                                        <th></th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            Ratings
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                            Room and Meal plan
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                            From
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" className="odd" >
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Jumeirah Al Naseem Dubai
                                        </td>
                                        <td>
                                            <span className="p-1 bg-primary rounded-2">Dynamic</span>
                                        </td>
                                        <td>
                                            N/A
                                        </td>
                                        <td>
                                            <h3 className="fs-6 m-0">Palm House Garden Room</h3>
                                            <p className="fs-6 m-0">Room Only,room Only</p>
                                        </td>
                                        <td>
                                            <h3 className="fs-6 m-0">AED10,936.10 <span className="p-1 bg-success rounded-2">AV</span></h3>
                                            <p className="fs-6 m-0 text-danger">Non Refundable</p>
                                        </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr role="row" className="odd" >
                                        <td>
                                            2
                                        </td>
                                        <td>
                                            Jumeirah Dar Al Masyaf
                                        </td>
                                        <td>
                                            <span className="p-1 bg-primary rounded-2">Dynamic</span>
                                        </td>
                                        <td>
                                            <span>
                                                <i class="fa-solid fa-star text-warning fs-6"></i>
                                                <i class="fa-solid fa-star text-warning fs-6"></i>
                                                <i class="fa-solid fa-star text-warning fs-6"></i>
                                                <i class="fa-solid fa-star text-warning fs-6"></i>
                                            </span>
                                        </td>
                                        <td>
                                            <h3 className="fs-6 m-0">Family Superior Room</h3>
                                            <p className="fs-6 m-0">Room Only,room Only</p>
                                        </td>
                                        <td>
                                            <h3 className="fs-6 m-0">AED15,741.96 <span className="p-1 bg-success rounded-2">AV</span></h3>
                                            <p className="fs-6 m-0 text-danger">Non Refundable</p>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr role="row" className="odd" >
                                        <td>
                                            3
                                        </td>
                                        <td>
                                            Jumeirah Al Qasr Dubai
                                        </td>
                                        <td>
                                            <span className="p-1 bg-primary rounded-2">Dynamic</span>
                                        </td>
                                        <td>
                                            <span>
                                                <i class="fa-solid fa-star text-warning fs-6"></i>
                                                <i class="fa-solid fa-star text-warning fs-6"></i>
                                                <i class="fa-solid fa-star text-warning fs-6"></i>
                                            </span>
                                        </td>
                                        <td>
                                            <h3 className="fs-6 m-0">Ocean Deluxe</h3>
                                            <p className="fs-6 m-0">Room Only,room Only</p>
                                        </td>
                                        <td>
                                            <h3 className="fs-6 m-0">AED10,501.52 <span className="p-1 bg-success rounded-2">AV</span></h3>
                                            <p className="fs-6 m-0 text-success">Refundable</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    {/* Total {totalCount} entries */}
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        // showSizeChanger
                                        // onShowSizeChange={''}
                                        defaultCurrent={1}
                                        onChange=""
                                        total=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}