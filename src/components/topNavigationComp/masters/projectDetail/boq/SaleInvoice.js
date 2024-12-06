import { PDFViewer } from '@react-pdf/renderer'
import { Pagination, Popconfirm } from 'antd'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import PdfBanks from './pdfBank/PdfBanks'
import { getClientInvoice } from '../../../../../api/login/Login'
import { useParams } from 'react-router-dom'

function SaleInvoice() {
    const [pdf, setPdf] = useState(false)

    const pdfGenerateDefault = () => {
        setPdf(!pdf)
    }
    const parems = useParams()
    const [data, setData] = useState(null)
    const getData = async () => {
        try {
            const res = await getClientInvoice(parems.id)
            setData(res)
            console.log('getClientInvoice', res);
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            {pdf && <div className="pdfcs">
                <div className="loader-overlay">
                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                        <PdfBanks titlt='Client Invoices' />
                    </PDFViewer>
                </div>

            </div>}
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">

                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    S.No
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Invoice Number

                                                </th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px', textAlign: 'center' }}>
                                                    Invoice Type
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Order No.

                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Invoice Date

                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Uploaded by

                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Status

                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Invoice Amount


                                                </th>

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px', textAlign: 'center' }}>
                                                    Credit Note Amount
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px', textAlign: 'center' }}>
                                                    Action
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data?.data?.map((item, i) => {
                                                return <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{item?.invoice_no}</td>
                                                    <td>{item?.invoice_type}</td>
                                                    <td>{item?.order_no}</td>
                                                    <td>{item?.invoice_date}</td>
                                                    <td>{item?.createdBy?.name}</td>
                                                    <td>{item?.status}</td>
                                                    <td>{item?.invoice__amount}</td>
                                                    <td>{item?. credit_note_amount}</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-success ms-2" onClick={pdfGenerateDefault}>Print PDF</button>
                                                    </td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                        < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {0} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}

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
                </div >
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default SaleInvoice
