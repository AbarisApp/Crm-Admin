import { Pagination, Popconfirm } from 'antd'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CiMail } from 'react-icons/ci'
import { FaRegFilePdf, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import ModalEmail from './modalEmail/ModalEmail'

import { PDFViewer } from "@react-pdf/renderer";
import { pdf } from "@react-pdf/renderer";
import InVoicePdf from './inVoicePdf/InVoicePdf'
import { getByIdaccount_invoice } from '../../../../api/login/Login'

function InvoiceSearchList({ params, totalCount, page, onChangeVal, data, count, confirm, cancel, loading }) {
    const [modalShow, setModalShow] = useState(false);
    const [modalidData, setModalIddata] = useState(null)
    const modelOpen = (id) => {
        setModalIddata(id)
        setModalShow(true)

    }

    // const [pdf, setPdf] = useState(false)
    const [pdfData, setPdfData] = useState(null)

    const getByIdData = async (id) => {
        try {
            const res = await getByIdaccount_invoice(id);
            if (res?.data) {
                setPdfData(res.data);
                openPdfInNewTab(res.data);
            }
        } catch (error) {
            console.error("Error fetching invoice data:", error);
        }
    };

    const openPdfInNewTab = async (data) => {
        const blob = await pdf(<InVoicePdf pdfData={data} />).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
    };

    const pdfGenerateDefault = (item) => {
        if (item?._id) {
            getByIdData(item._id);
        }
    };


    return (
        <>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0 p-2">Invoice List</h4>
                    <Link
                        className="btn btn-primary btn-sm"
                        to={`/create-billings-invoice/${params?.id}`}
                        role="button"
                        aria-controls="offcanvasExample"
                    >
                        <span><i className="fa-sharp fa-solid fa-plus"></i></span>
                        <span>Add Invoice</span>
                    </Link>
                </div>
                <table className="table table-bordered text-center align-middle">
                    <thead className='heading'>
                        <tr>
                            <th>S No.</th>
                            <th>PDF</th>
                            <th>Email</th>
                            <th>MSG</th>
                            <th>Bill Type</th>
                            <th>Bill No</th>
                            <th>Bill Date</th>
                            <th>Party</th>
                            <th>Bill Amount</th>
                            {/* <th>Copy</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Empty row for now */}
                        {data && data?.map((item, i) => {
                            return <tr key={item?._id}>
                                <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                <td className="text-center">
                                    <FaRegFilePdf style={{ color: 'red' }} onClick={() => pdfGenerateDefault(item)} />
                                </td>
                                <td className="text-center">
                                    <MdOutlineEmail onClick={() => modelOpen(item?._id)} />
                                </td>
                                <td className="text-center">
                                    <FaWhatsapp style={{ color: 'green' }} />
                                </td>
                                <td className="text-center">
                                    {item?.invoice_type}
                                </td>
                                <td className="text-center">
                                    {item?.invoice_no}
                                </td>
                                <td className="text-center">
                                    {item?.due_date}
                                </td>
                                <td className="text-center">
                                    --
                                </td>

                                <td className="text-center">
                                    {item && item?.invoices?.map((item) => {
                                        return <div key={item?._id}>
                                            <p>{item?.final_amt}</p>
                                        </div>
                                    })}
                                </td>
                                {/* <td className="text-center">
                                    --
                                </td> */}
                                <td>
                                    <div className="d-flex">
                                        {/* <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                            <TiTick style={{ marginBottom: '8px' }} />
                                        </Link> */}
                                        {/* <button type="button" className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                            <CiMail style={{ marginBottom: '8px' }} />
                                        </button> */}
                                        {/* <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <TiDownload style={{ marginBottom: '8px' }} />
                                    </Link> */}
                                        {/* <Button variant="" className="btn-sm py-1 px-2 bg-primary">
                                            <PDFDownloadLink style={{ color: 'white', textDecoration: 'none' }} document={<VoucherAfterPayment abc={'Downloaded pdf'} />} fileName="invoice.pdf">
                                                {({ loading }) => (loading ? 'Loading document...' : 'VOUCHER AFTER PAYMENT')}
                                            </PDFDownloadLink>
                                        </Button> */}
                                        <Link to={`/update-billings-invoice/${params?.id}/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                            <i className="fa fa-pencil" />
                                        </Link>
                                        <Popconfirm
                                            title="Delete Invoice!"
                                            description="Are you sure to Invoice List?"
                                            onConfirm={() => confirm(item?._id)}
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
                        })}
                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <td colSpan="9" className="text-end"><strong>Total:</strong></td>
                            <td colSpan="2"></td>
                        </tr>
                    </tfoot> */}
                </table>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="dataTables_info" role="status" aria-live="polite">
                        Total {totalCount} entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers">
                        <Pagination
                            defaultCurrent={1}
                            onChange={onChangeVal}
                            total={totalCount}
                        />
                    </div>
                </div>
                <ModalEmail
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    modalidData={modalidData}
                />
                {/* {pdf && pdfData && (
                    <div className="pdfcs">
                        <div className="loader-overlay">
                            <PDFViewer style={{ width: "100%", height: "100vh" }}>
                                <InVoicePdf pdfData={pdfData} />
                            </PDFViewer>
                        </div>
                    </div>
                )} */}


            </div>

        </>
    )
}

export default InvoiceSearchList