// import { Pagination } from "antd";
// import { Link } from "react-router-dom";
// import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";

// import { PDFViewer } from "@react-pdf/renderer";
// import PdfBanks from "../pdfBank/PdfBanks";
// import { useState } from "react";

// const PurchaseChallan = () => {
//     const breadCrumbsTitle = {
//         id: "1",
//         title_1: "Transaction",
//         title_2: 'Challan',
//         title_3: `List Of Purchase Challan
// `,
//         path_2: ``
//     };
//     const [pdf, setPdf] = useState(false)

//     const pdfGenerateDefault = () => {
//         setPdf(!pdf)
//     }
//     return (
//         <>
//             <Breadcrumbs
//                 breadCrumbsTitle={breadCrumbsTitle} />
//             {/* <GroupSummaryFilter /> */}
//             <div style={{ margin: "14px" }}>
//                 <div className="card">
//                     <div className="card-body p-0">
//                         <div className="table-responsive active-projects style-1">
//                             <div className="tbl-caption">
//                                 <h4 className="heading mb-0">
//                                     List Of Purchase Challan
//                                 </h4>
//                                 <div>
//                                     <Link className="btn btn-primary btn-sm" to="/purchasechallan/add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
//                                 </div>
//                             </div>
//                             <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
//                                 <div className="dt-buttons">
//                                     <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
//                                         <span><i className="fa-solid fa-file-excel" /> Export Report</span>
//                                     </button>
//                                 </div>
//                                 <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
//                                     <thead>
//                                         <tr role="row">
//                                             <th style={{ width: '150px' }}>A</th>
//                                             <th style={{ width: '150px' }}>Date</th>
//                                             <th style={{ width: '150px' }}>No</th>
//                                             <th style={{ width: '150px' }}>Account Name</th>
//                                             <th style={{ width: '150px' }}>Amount</th>
//                                             <th style={{ width: '150px' }}>Created By</th>
//                                             <th style={{ width: '150px' }}>Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr role="row" className="odd" >
//                                             <td >
//                                                 ----
//                                             </td>
//                                             <td >
//                                                 ----
//                                             </td>
//                                             <td >
//                                                 ----
//                                             </td>
//                                             <td >
//                                                 ----
//                                             </td>
//                                             <td >
//                                                 ----
//                                             </td>
//                                             <td >
//                                                 ----
//                                             </td>
//                                             <td >
//                                                 <button className="btn btn-sm btn-success ms-2" onClick={pdfGenerateDefault}>Print PDF</button>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                                 {pdf && <div className="pdfcs">
//                                     <div className="loader-overlay">
//                                         <PDFViewer style={{ width: '100%', height: '100vh' }}>
//                                             <PdfBanks title='Purchase Challan'/>
//                                         </PDFViewer>
//                                     </div>

//                                 </div>}
//                                 <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
//                                     Total 0 entries
//                                 </div>
//                                 <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
//                                     <Pagination
//                                         defaultCurrent={1}
//                                     // onChange={onChangeVal}
//                                     // total={data?.totalCount}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default PurchaseChallan

import { Link } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import Loadar from "../../../../common/loader/Loader";
import { deletePurchaseChallanById, getPurchaseChallan } from "../../../../api/login/Login";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { message, Pagination, Popconfirm } from "antd";
import PurchaseChallanPdfs from "./purchaseChallanPdf/PurchaseChallanPdf";

const PurchaseChallan = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Challan',
        title_3: `Purchase Challan List `,
        path_2: ``
    };
    const [pdf, setPdf] = useState(false)
    const [val, setVal] = useState(null)

    const pdfGenerateDefault = (item) => {
        setLoading(true)
        setVal(item)
        setTimeout(() => {
            setLoading(false)
            setPdf(!pdf)
        }, 2000);
    }





    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()

    const getFloorMasters = async (page) => {

        setLoading(true)
        try {
            const res = await getPurchaseChallan(page, count)
            setTotalCount(res?.totalCount)
            setData(res?.data)
            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    // add Area
    const onChangeVal = (e) => {
        // console.log(e);
        getFloorMasters(e - 1)

    };
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deletePurchaseChallanById(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getFloorMasters(backList)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    const confirm = (id) => {
        console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    useEffect(() => {
        getFloorMasters(page)
    }, [])







    return (
        <>
            {loading && <Loadar />}
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            {/* <GroupSummaryFilter /> */}
            <div style={{ margin: "14px" }}>
                {pdf && <div className="pdfcs">
                    <div className="loader-overlay">
                        <PDFViewer style={{ width: '100%', height: '100vh' }}>
                            <PurchaseChallanPdfs val={val} />
                        </PDFViewer>
                    </div>

                </div>}
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Purchase Challan List
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/purchasechallan/add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
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
                                            <th style={{ width: '150px' }}>#</th>
                                            <th style={{ width: '150px' }}>Date</th>
                                            <th style={{ width: '150px' }}>No</th>
                                            <th style={{ width: '150px' }}>Account Name</th>
                                            <th style={{ width: '150px' }}>Amount</th>

                                            <th style={{ width: '150px' }}>Created By</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data?.map((item, i) => {
                                            return <tr role="row" className="odd" >
                                                <td>{i + 1}</td>
                                                <td>{item?.date}</td>
                                                <td>{item?.order_no}</td>
                                                <td> --</td>
                                                <td>{item?.product_amount}</td>
                                                <td>{item?.createdBy?.name}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-success ms-2" onClick={() => { pdfGenerateDefault(item) }}>Print PDF</button>
                                                    <div className="d-flex">
                                                        <Link to={`/purchasechallan/edit/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                        <Popconfirm
                                                            title="Delete group!"
                                                            description="Are you sure to delete?"
                                                            onConfirm={() => confirm(item?._id)}
                                                            onCancel={cancel}
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
                                </table>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PurchaseChallan