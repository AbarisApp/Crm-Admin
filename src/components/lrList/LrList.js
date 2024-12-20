import { Pagination, Popconfirm } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import Loadar from '../../common/loader/Loader';

function LrList() {
    const [loading, setLoading] = useState(false);
    const [pdf, setPdf] = useState(false);
    const [val, setVal] = useState(null);
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Lr',
        title_3: `Lr List `,
        path_2: ``
    };

    const pdfGenerateDefault = (item) => {
        setLoading(true)
        setVal(item)
        setTimeout(() => {
            setLoading(false)
            setPdf(!pdf)
        }, 2000);
    }

    return (
        <>
            {loading && <Loadar />}
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            {/* <GroupSummaryFilter /> */}
            <div style={{ margin: "14px" }}>
                {pdf && <div className="pdfcs">
                    <div className="loader-overlay">
                        {/* <PDFViewer style={{ width: '100%', height: '100vh' }}>
                            <PurchaseChallanPdfs val={val} />
                        </PDFViewer> */}
                    </div>

                </div>}
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Lr List
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/lr/add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
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
                                            <th style={{ width: '150px' }}>Lr Date</th>
                                            <th style={{ width: '150px' }}>Lr No</th>
                                            <th style={{ width: '150px' }}>From City</th>
                                            <th style={{ width: '150px' }}>To City</th>
                                            <th style={{ width: '150px' }}>Consiqner</th>
                                            <th style={{ width: '150px' }}>Consiqnee</th>
                                            <th style={{ width: '150px' }}>Total Freight</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td>1</td>
                                            <td>27/05/2024</td>
                                            <td>0098</td>
                                            <td>Delhi</td>
                                            <td>Delhi</td>
                                            <td>Self</td>
                                            <td>Laxmi Power</td>
                                            <td>400</td>
                                            <td>
                                                <button className="btn btn-sm btn-success ms-2" onClick={() => { pdfGenerateDefault('item') }}>Print PDF</button>
                                                <div className="d-flex">
                                                    {/* <Link to={`/purchasechallan/edit/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"> */}
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    <Popconfirm
                                                        title="Delete group!"
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
                                    // defaultCurrent={1}
                                    // onChange={onChangeVal}
                                    // total={totalCount}
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

export default LrList