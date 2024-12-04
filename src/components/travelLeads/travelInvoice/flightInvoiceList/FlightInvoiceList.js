import { PDFDownloadLink } from "@react-pdf/renderer"
import { Pagination, Popconfirm } from "antd"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { TravelAgencyPdfPrint } from "../../../../common/travelAgencyPdf/travelAgencyPdf/TravelAgencyPdf"

const FlightInvoiceList = () => {
    return (
        <>
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
                            <th style={{ width: '150px' }}>Invoice Number</th>
                            <th style={{ width: '150px' }}>Added By</th>
                            <th style={{ width: '150px' }}>Created Date</th>
                            <th style={{ width: '150px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr role="row" >
                            <td className="text-center" colSpan={4}>No data available in table</td>
                            <td>
                                <div className="d-flex">
                                    {/* <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <TiTick style={{ marginBottom: '8px' }} />
                                    </Link>
                                    <button type="button" className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                        <CiMail style={{ marginBottom: '8px' }} />
                                    </button>
                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <TiDownload style={{ marginBottom: '8px' }} />
                                    </Link> */}
                                    <Button variant="" className="btn-sm py-1 px-2 bg-primary">
                                        <PDFDownloadLink style={{ color: 'white', textDecoration: 'none' }} document={<TravelAgencyPdfPrint abc={'Downloaded pdf'} />} fileName="invoice.pdf">
                                            {({ loading }) => (loading ? 'Loading document...' : 'PDF')}
                                        </PDFDownloadLink>
                                    </Button>
                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <i className="fa fa-pencil" />
                                    </Link>
                                    <Popconfirm
                                        title="Delete cow feed!"
                                        description="Are you sure to delete?"
                                        // onConfirm={() => confirm(item?._id)}
                                        // onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                            <i className="fa fa-trash" />
                                        </Link>
                                    </Popconfirm>
                                </div>
                            </td>
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
        </>
    )
}

export default FlightInvoiceList