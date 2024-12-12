import { Pagination } from "antd";
import { PDFViewer } from "@react-pdf/renderer";
import PdfBanks from "./pdfBank/PdfBanks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClientOrderNewOr } from "../../../../../api/login/Login";

const SalseOrder = () => {

    const [pdf, setPdf] = useState(false)

    const pdfGenerateDefault = () => {
        setPdf(!pdf)
    }
    const parems = useParams()
    const [data, setData] = useState(null)
    const getData = async () => {
        try {
            const res = await getClientOrderNewOr(parems.id)
            setData(res)
            console.log('getClientOrder', res);
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
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
                                        {data && data?.data?.map((item, i) => {
                                            return <tr>
                                                <td>{i + 1}</td>
                                                <td>{item?.order_no}</td>
                                                <td> --</td>
                                                <td> --</td>
                                                <td>{item?.createdBy.name}</td>
                                                <td>{item?.Date}</td>
                                                <td>{item?.dua_date}</td>
                                                <td>{item?.status}</td>
                                                <td>{item?.po_status}</td>
                                                <td> --</td>
                                                <td>{item?.total_amount}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-success ms-2" onClick={pdfGenerateDefault}>Print PDF</button>
                                                </td>
                                            </tr>
                                        })}

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
                                        <PdfBanks titlt='Client Orders' />
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