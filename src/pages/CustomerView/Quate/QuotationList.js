import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteAccLedgerById, getAccLedgerByPage } from "../../../api/login/Login";
import { Pagination } from "antd";
import Loadar from "../../../common/loader/Loader";
import { PDFViewer } from "@react-pdf/renderer";
import PdfBanks from "./pdfBank/PdfBanks";

const dummyData = [
    {
        id: 1,
        ledgerName: "ABC Ltd",
        ledgerAlias: "ABC",
        acName: "John Doe",
        acNo: "123456789",
        mobile: "9876543210",
        email: "john.doe@example.com",
        address: "123 Street, City",
        bankDetail: "XYZ Bank, IFSC: XYZ0001234",
    },
    {
        id: 2,
        ledgerName: "XYZ Corp",
        ledgerAlias: "XYZ",
        acName: "Jane Smith",
        acNo: "987654321",
        mobile: "8765432109",
        email: "jane.smith@example.com",
        address: "456 Avenue, Town",
        bankDetail: "ABC Bank, IFSC: ABCD0005678",
    },
    // Add more dummy data here if needed
];

const QuotationList = ({ title }) => {
    const paremss = useParams()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()


    // ----------list Api----------
    const param = useParams()
    const getFloorMasters = async (page) => {

        setLoading(true)
        try {
            const res = await getAccLedgerByPage(page, count)
            setTotalCount(res?.totalCount)
            setData(res?.data)
            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteAccLedgerById(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getFloorMasters(backList)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        // getFloorMasters(page)
    }, [])
    const onChangeVal = (e) => {
        // console.log(e);
        getFloorMasters(e - 1)

    };
    const [pdf, setPdf] = useState(false)

    const pdfGenerateDefault = () => {
        setPdf(!pdf)
    }
    return (
        <div style={{ width: "1000px" }}>
            {loading && <Loadar />}
            <h4>{title}</h4>
            <div className="container mt-4 card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Link className="btn btn-primary" to={`/customer-view/${paremss.id}/add-quotation`} >
                        + New {title}
                    </Link>
                    <div className="form-group">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search.."
                            style={{ width: "250px" }}
                        />
                    </div>
                </div>
                <div className="" style={{ overflow: "auto" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Date</th>
                                <th scope="col">No</th>
                                <th scope="col">AC Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Narration</th>
                                <th scope="col">Created By</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[{}]?.map((ledger, i) => (
                                <tr key={ledger.id}>
                                    <td>{i + 1}</td>
                                    <td>{ledger.name}</td>
                                    <td>{ledger.alias}</td>
                                    <td>{ledger.AC_name}</td>
                                    <td>{ledger.AC_no}</td>
                                    <td>{ledger.mobile}</td>
                                    <td>{ledger.Email}</td>
                                    <td>
                                        <button className="btn btn-sm btn-success ms-2" onClick={pdfGenerateDefault}>Print PDF</button>
                                        <Link className="btn btn-sm btn-warning" to={`/customer-view/${paremss.id}/add-quotation/${ledger._id}`}>Edit</Link>
                                        <button className="btn btn-sm btn-danger ms-2" onClick={() => { deleteBlockAdd(ledger._id) }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        defaultCurrent={1}
                        onChange={onChangeVal}
                        total={totalCount}
                    />
                </div>
            </div>
            {pdf && <div className="pdfcs">
                <div className="loader-overlay">
                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                        <PdfBanks />
                    </PDFViewer>
                </div>

            </div>}
        </div>
    );
};

export default QuotationList;
