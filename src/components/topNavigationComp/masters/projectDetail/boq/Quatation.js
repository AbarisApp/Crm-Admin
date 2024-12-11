import { Pagination } from "antd";
import PdfBanks from "./pdfBank/PdfBanks";
import { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { getClientOrder } from "../../../../../api/login/Login";
import { useParams } from "react-router-dom";

const Quatation = () => {
    const [pdf, setPdf] = useState(false)
    const [data, setData] = useState(null)
    const pdfGenerateDefault = () => {
        setPdf(!pdf)
    }
    const parems = useParams()
    const getData = async () => {
        try {
            const res = await getClientOrder(parems.id)
            console.log('getProposalsForClient', res);
            setData(res)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>

            {/* <GroupSummaryFilter /> */}
            <div style={{ margin: "14px" }}>
                <div className="">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">

                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">

                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '150px' }}>SI.No</th>
                                            <th style={{ width: '150px' }}>Reference No.</th>
                                            <th style={{ width: '150px' }}>Proposal Request Type</th>
                                            <th style={{ width: '150px' }}>Proposal For</th>
                                            <th style={{ width: '150px' }}>Created By</th>
                                            <th style={{ width: '150px' }}>Created Date</th>
                                            <th style={{ width: '150px' }}>Status</th>
                                            <th style={{ width: '150px' }}>Amount (₹)</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.data?.map((item, i) => {
                                            return <tr role="row" className="odd" >
                                                <td >{i + 1}</td>
                                                <td >{item?.quotationNo}</td>
                                                <td >----</td>
                                                <td >----</td>
                                                <td >{item?.createdBy?.name}</td>
                                                <td >{item?.createdAt}</td>
                                                <td >----</td>
                                                <td >----</td>
                                                <td ><button className="btn btn-sm btn-success ms-2" onClick={pdfGenerateDefault}>Print PDF</button></td>
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
                                    total={data?.totalCount}
                                    />
                                </div>
                            </div> {pdf && <div className="pdfcs">
                                <div className="loader-overlay">
                                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                                        <PdfBanks title='Proposals For Client' />
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

export default Quatation