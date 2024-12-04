import { Pagination } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

function PrintInvoiceslist() {
    const data = [
        {
            Sr_No: 1,
            Sales_Invoice_No: "HO222302W0001",
            Date: "09-Feb-2023",
            Delivery_From: "KGM",
            Customer_Name: "BEDOGE MOHODEO BOCOWONT (OWM)",
            Mobile_1_2: "8976431455 / 985063351",
            Product: "AO SMITH WATERHEATER HSE - SGS 6 LTR",
            Qty: 1.00,
            Final_Total: "15,000.00",
            EInv: "No GSTIN Detail"
        }
    ];
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption mb-3">
                                        <h4 className="heading mb-0"><b>Print Invoices</b></h4>
                                        <div>
                                            {/* <ExportPdf /> */}
                                            {/* {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                        </CSVLink>) : ""} */}
                                        </div>
                                        <div>
                                            <Link
                                                className="btn btn-primary btn-sm"
                                                to="/create-inward"
                                                role="button"
                                                aria-controls="offcanvasExample"
                                            >
                                                + print
                                            </Link>
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role='row'>
                                                    <th>Sr. No.</th>
                                                    <th>Sales Invoice No.</th>
                                                    <th>Date</th>
                                                    <th>Delivery From</th>
                                                    <th>Customer Name</th>
                                                    <th>Mobile 1 & 2</th>
                                                    <th>Product</th>
                                                    <th>Qty.</th>
                                                    <th>Final Total</th>
                                                    <th>EInv</th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {/* {aepsData?.data?.map((item, i) => {

                                                    return <tr role="row" className="odd" key={i} style={{ cursor: "pointer" }} onClick={() => { ChangeRouts(item._id) }}>
                                                        <td>{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + " , " + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td>
                                                        <td>{item?.refer_id}</td>
                                                        <td>{item?.mobile}</td>
                                                        <td>{item?.shop_name ? item?.shop_name : item?.name}</td>

                                                        <td>{item?.refer_code}</td>
                                                        <td>{item?.subject}</td>
                                                        <td>{item?.department_id}</td>
                                                        <td>{item?.priority}</td>
                                                        <td><span className="badge badge-success text-light border-0 w-100" style={{ backgroundColor: `${item?.status === "pending" ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.status === "success" ? '0.8rem' : ''}` }}>{item?.status == "success" ? 'Success' : 'Pending'}</span></td>
                                                        <td>{item?.lastReply}</td>

                                                        <td className='text-center'>

                                                            <Link className='btn btn-warning color2' to={`/disputes/view/${item._id}`}>Reply</Link>
                                                        </td>
                                                    </tr>
                                                })} */}
                                                {data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.Sr_No}</td>
                                                        <td>{item.Sales_Invoice_No}</td>
                                                        <td>{item.Date}</td>
                                                        <td>{item.Delivery_From}</td>
                                                        <td>{item.Customer_Name}</td>
                                                        <td>{item.Mobile_1_2}</td>
                                                        <td>{item.Product}</td>
                                                        <td>{item.Qty}</td>
                                                        <td>{item.Final_Total}</td>
                                                        <td>{item.EInv}</td>
                                                    </tr>
                                                ))}

                                                {/* <tr>
                                                    <td colSpan={10}>
                                                        <Empty />
                                                    </td>
                                                </tr> */}

                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {""} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                            /* showSizeChanger
                                            onShowSizeChange={''} */

                                            // defaultCurrent={1}
                                            // onChange={onChangeVal}
                                            // total={aepsData?.totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section>
        </>
    )
}

export default PrintInvoiceslist
