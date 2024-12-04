import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import ExportPdf from '../../common/exportPdf/ExportPdf';

function InterBankStockTransferList() {
    return (
        <>
            <ToastContainer />
            <section className="ListDistributer mx-4 expdf ">
                <div className="text-end">

                </div>

                <div className="row m-4">
                    <div className="col-xl-12" style={{ padding: "0" }}>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0"><b>Filter</b></h4>
                                    </div>
                                    <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>


                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Invoice Entry No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Invoice Entry No'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Entry Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder='Enter Date'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Transfer To</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Transfer To'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Product</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Product'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Qty</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Qty'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">PO No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter PO No'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Final Total</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Final Total'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-12 mt-3">
                                            <button type="button" className="btn btn-warning float-end">
                                                RESET
                                            </button>
                                            <button type="button" className="btn btn-primary float-end">
                                                Filter
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12" >
                        <div className="card" >
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Inter Branch Stock Transfer Note</b></h4>
                                        <div>
                                            <ExportPdf />
                                            <Link className="btn btn-primary btn-sm" to="/ele-inter-bank-stock-transfer/create" role="button" aria-controls="offcanvasExample">+ CREATE BANK STORE</Link>
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Download Distributer</span>
                                            </button>
                                        </div>
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th>Sr.No</th>
                                                    <th>Invoice Entry No</th>
                                                    <th>Entry Date</th>
                                                    <th>Transfer To</th>
                                                    <th>Product</th>
                                                    <th>Qty</th>
                                                    <th>PO No</th>
                                                    <th>Final Total</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">1</td>
                                                    <td className="sorting_1">	HO212212BTN0073</td>
                                                    <td className="sorting_1">31-Dec-2021</td>
                                                    <td className="sorting_1">MP BRONCH OCCOUNT</td>
                                                    <td className="sorting_1">IFB W/M DIVA AQUA SX, IFB WM NEO DIVA SX 7KG -24511</td>
                                                    <td className="sorting_1">2.00</td>
                                                    <td className="sorting_1">	MP212212PO0460</td>
                                                    <td className="sorting_1">	28,732.00</td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">2</td>
                                                    <td className="sorting_1">	HO212212BTN0073</td>
                                                    <td className="sorting_1">31-Dec-2021</td>
                                                    <td className="sorting_1">MP BRONCH OCCOUNT</td>
                                                    <td className="sorting_1">IFB W/M DIVA AQUA SX, IFB WM NEO DIVA SX 7KG -24511</td>
                                                    <td className="sorting_1">2.00</td>
                                                    <td className="sorting_1">	MP212212PO0460</td>
                                                    <td className="sorting_1">	28,732.00</td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">3</td>
                                                    <td className="sorting_1">	HO212212BTN0073</td>
                                                    <td className="sorting_1">31-Dec-2021</td>
                                                    <td className="sorting_1">MP BRONCH OCCOUNT</td>
                                                    <td className="sorting_1">IFB W/M DIVA AQUA SX, IFB WM NEO DIVA SX 7KG -24511</td>
                                                    <td className="sorting_1">2.00</td>
                                                    <td className="sorting_1">	MP212212PO0460</td>
                                                    <td className="sorting_1">	28,732.00</td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">4</td>
                                                    <td className="sorting_1">	HO212212BTN0073</td>
                                                    <td className="sorting_1">31-Dec-2021</td>
                                                    <td className="sorting_1">MP BRONCH OCCOUNT</td>
                                                    <td className="sorting_1">IFB W/M DIVA AQUA SX, IFB WM NEO DIVA SX 7KG -24511</td>
                                                    <td className="sorting_1">2.00</td>
                                                    <td className="sorting_1">	MP212212PO0460</td>
                                                    <td className="sorting_1">	28,732.00</td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">5</td>
                                                    <td className="sorting_1">	HO212212BTN0073</td>
                                                    <td className="sorting_1">31-Dec-2021</td>
                                                    <td className="sorting_1">MP BRONCH OCCOUNT</td>
                                                    <td className="sorting_1">IFB W/M DIVA AQUA SX, IFB WM NEO DIVA SX 7KG -24511</td>
                                                    <td className="sorting_1">2.00</td>
                                                    <td className="sorting_1">	MP212212PO0460</td>
                                                    <td className="sorting_1">	28,732.00</td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default InterBankStockTransferList