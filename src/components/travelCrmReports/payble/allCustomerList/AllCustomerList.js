import { PDFViewer } from '@react-pdf/renderer';
import { Empty, Pagination } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PurchaseQuotationPdf from '../purchaseQuotationPdf/PurchaseQuotationPdf';

function AllCustomerList() {
    // Sample data for one entry
    const data1 = [
        {
            id: 1,
            accountName: 'John Doe',
            alias: 'JDoe',
            closing: 1500,
            clDC: 'D',
            mobile: '123-456-7890',
            city: 'New York',
            state: 'NY',
        },
    ];
    const [loading, setLoading] = useState(false);
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
    const data = {
        entries: [
            { date: '01/04/2024', particular: 'Opening', credit: '0.00', debit: '0.00', closing: '0.00 Db' },
            { date: '30/03/2025', particular: 'DIESEL EXP\nJournal 1\nTrip Entry (Exp) No: 17', credit: '300.00', debit: '0.00', closing: '300.00 Cr' },
        ],
        totalCredit: '300.00',
        totalDebit: '0.00',
        closingBalance: '300.00',
    };
    return (
        <>
            {pdf && <div className="pdfcs">
                <div className="loader-overlay">
                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                        <PurchaseQuotationPdf data={data} />
                    </PDFViewer>
                </div>

            </div>}
            <section className='mx-4'>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Payable Master</h4>
                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '150px' }}># </th>
                                                    <th style={{ width: '150px' }}>Account Name</th>
                                                    <th style={{ width: '150px' }}>Alias</th>
                                                    <th style={{ width: '150px' }}>Closing</th>
                                                    <th style={{ width: '150px' }}>Cl D/C</th>
                                                    <th style={{ width: '150px' }}>Mobile</th>
                                                    <th style={{ width: '150px' }}>City</th>
                                                    <th style={{ width: '150px' }}>State</th>
                                                    <th style={{ width: '150px' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data1.length > 0 ? (
                                                    data1.map((item) => (
                                                        <tr key={item.id} role="row">
                                                            <td>{item.id}</td>
                                                            <td>{item.accountName}</td>
                                                            <td>{item.alias}</td>
                                                            <td>{item.closing}</td>
                                                            <td>{item.clDC}</td>
                                                            <td>{item.mobile}</td>
                                                            <td>{item.city}</td>
                                                            <td>{item.state}</td>
                                                            <td>
                                                                <Link to={`/payable-month-view/1`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <button target='blanck' className="btn btn-sm btn-success ms-2" onClick={() => { pdfGenerateDefault(item) }}>Print PDF</button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr role="row">
                                                        <td colSpan="8" className="text-center">
                                                            <Empty />
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total {data.length} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                                defaultCurrent={1}
                                                total={data.length}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AllCustomerList;
