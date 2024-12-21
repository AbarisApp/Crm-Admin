import { message, Pagination, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { PDFViewer } from "@react-pdf/renderer";
import PdfBanks from "./pdfBank/PdfBanks";
import { useEffect, useState } from "react";
import Loadar from "../../../common/loader/Loader";
import { deletetravelPurchase, getAllPurchaseData } from "../../../api/login/Login";

const GrowComp = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Short Godown Stock",
        title_3: `Short Godown Stock`,
        path_2: ``
    };

    const [pdf, setPdf] = useState(false);
    const [val, setVal] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(0);
    const [totalCount, setTotalCount] = useState(2); // Total entries count, set to 2 for dummy data
    const pdfGenerateDefault = (item) => {
        setLoading(true)
        setVal(item)
        setTimeout(() => {
            setLoading(false)
            setPdf(!pdf)
        }, 2000);
    }
    const dummyData = [
        {
            id: 1,
            lrDate: "2024-12-01",
            lrNo: "LR001",
            freightBy: "Road",
            city: "City A",
            toCity: "City B",
            consignorName: "Consignor A",
            consignorGstNo: "GST001",
            consigneeName: "Consignee A",
            consigneeGstNo: "GST002",
            truckNo: "TN001",
            article: "Goods A",
            weight: "100kg",
            freight: "₹5000",
            bc: "₹200",
            hamali: "₹50",
            subTotal: "₹5250",
            gstBy: "Self",
            gstAmount: "₹945",
            totalFreight: "₹6195"
        },
        {
            id: 2,
            lrDate: "2024-12-02",
            lrNo: "LR002",
            freightBy: "Air",
            city: "City C",
            toCity: "City D",
            consignorName: "Consignor B",
            consignorGstNo: "GST003",
            consigneeName: "Consignee B",
            consigneeGstNo: "GST004",
            truckNo: "TN002",
            article: "Goods B",
            weight: "200kg",
            freight: "₹8000",
            bc: "₹300",
            hamali: "₹100",
            subTotal: "₹8400",
            gstBy: "Company",
            gstAmount: "₹1512",
            totalFreight: "₹9912"
        }
    ];

    useEffect(() => {
        setData(dummyData); // Set dummy data
    }, []);

    const onChangeVal = (e) => {
        console.log(e);
    };

    return (
        <>

            {loading && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                {pdf && (
                    <div className="pdfcs">
                        <div className="loader-overlay">
                            <PDFViewer style={{ width: "100%", height: "100vh" }}>
                                <PdfBanks val={val} />
                            </PDFViewer>
                        </div>
                    </div>
                )}
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Short Godown Stock</h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/godown-stock-master/Add" role="button" aria-controls="offcanvasExample">
                                        + Add New
                                    </Link>
                                </div>
                            </div>
                            <div className="dataTables_wrapper no-footer">
                                <table className="table dataTable no-footer">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Lr Date</th>
                                            <th>Lr No</th>
                                            <th>Freight By</th>
                                            <th>City</th>
                                            <th>To City</th>
                                            <th>Consignor </th>
                                            <th>Consignee</th>
                                            <th>Article</th>
                                            <th>Weight</th>
                                            <th>Lr Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.lrDate}</td>
                                                <td>{item.lrNo}</td>
                                                <td>{item.freightBy}</td>
                                                <td>{item.city}</td>
                                                <td>{item.consignorGstNo}</td>
                                                <td>{item.consigneeName}</td>
                                                <td>{item.consigneeGstNo}</td>
                                                <td>{item.truckNo}</td>
                                               
                                                <td>{item.gstAmount}</td>
                                                <td>{item.totalFreight}</td>
                                                <td>
                                                    <button target='blanck' className="btn btn-sm btn-success ms-2" onClick={() => { pdfGenerateDefault(item) }}>Print PDF</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="dataTables_info" role="status" aria-live="polite">
                                    Total {totalCount} entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers">
                                    <Pagination defaultCurrent={1} total={totalCount} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GrowComp;
