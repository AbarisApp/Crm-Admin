import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import ExportPdf from '../../common/exportPdf/ExportPdf';

function SalesInvoiceList() {


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
                                            <label htmlFor="fromDate">Sales Invoice No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Sales Invoice No'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder='Enter Date'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Delivery From</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Delivery From'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Customer Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Customer Name'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">mobile 1 & 2</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter mobile 1 & 2'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Delivery/hold</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Delivery/hold'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Barcode</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Barcode'
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
                                            <label htmlFor="fromDate">Final Total</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Final Total'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">EInv</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter EInv'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">EWayBill</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter EWayBill'
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
                                        <h4 className="heading mb-0"><b>Sales Invoice</b></h4>
                                        <div>
                                            <ExportPdf />
                                            <Link className="btn btn-primary btn-sm" to="/ele-sales-invoice/create" role="button" aria-controls="offcanvasExample">+ Create Sales Ivoice</Link>
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
                                                    <th>Sales Invoice No</th>
                                                    <th>Date</th>
                                                    <th>Delivery From</th>
                                                    <th>Customer Name</th>
                                                    <th>Mobile 1 & 2</th>
                                                    <th>Delivery / Hold</th>
                                                    <th>Barcode</th>
                                                    <th>Product</th>
                                                    <th>Qty</th>
                                                    <th>Final Total</th>
                                                    <th>EInv</th>
                                                    <th>EWayBill</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">1</td>
                                                    <td className="sorting_1">HO222302W0001</td>
                                                    <td className="sorting_1">09-Feb-2023	</td>
                                                    <td className="sorting_1">KGM</td>
                                                    <td className="sorting_1">BEDOGE MOHODEO BOCOWONT (OWM)</td>
                                                    <td className="sorting_1">8976431455 /985063351</td>
                                                    <td className="sorting_1">Delivery</td>
                                                    <td className="sorting_1">8906037452794</td>
                                                    <td className="sorting_1">AO SMITH  WATERHEATER  HSE - SGS 6 LTR</td>
                                                    <td className="sorting_1">1.00</td>
                                                    <td className="sorting_1">15,000.00</td>
                                                    <td className="sorting_1">No GSTIN Detail</td>
                                                    <td className="sorting_1 text-primary">
                                                        EWayBill
                                                    </td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">2</td>
                                                    <td className="sorting_1">HO222302W0001</td>
                                                    <td className="sorting_1">09-Feb-2023	</td>
                                                    <td className="sorting_1">KGM</td>
                                                    <td className="sorting_1">BEDOGE MOHODEO BOCOWONT (OWM)</td>
                                                    <td className="sorting_1">8976431455 /985063351</td>
                                                    <td className="sorting_1">Delivery</td>
                                                    <td className="sorting_1">8906037452794</td>
                                                    <td className="sorting_1">AO SMITH  WATERHEATER  HSE - SGS 6 LTR</td>
                                                    <td className="sorting_1">1.00</td>
                                                    <td className="sorting_1">15,000.00</td>
                                                    <td className="sorting_1">No GSTIN Detail</td>
                                                    <td className="sorting_1 text-primary">
                                                        EWayBill
                                                    </td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">3</td>
                                                    <td className="sorting_1">HO222302W0001</td>
                                                    <td className="sorting_1">09-Feb-2023	</td>
                                                    <td className="sorting_1">KGM</td>
                                                    <td className="sorting_1">BEDOGE MOHODEO BOCOWONT (OWM)</td>
                                                    <td className="sorting_1">8976431455 /985063351</td>
                                                    <td className="sorting_1">Delivery</td>
                                                    <td className="sorting_1">8906037452794</td>
                                                    <td className="sorting_1">AO SMITH  WATERHEATER  HSE - SGS 6 LTR</td>
                                                    <td className="sorting_1">1.00</td>
                                                    <td className="sorting_1">15,000.00</td>
                                                    <td className="sorting_1">No GSTIN Detail</td>
                                                    <td className="sorting_1 text-primary">
                                                        EWayBill
                                                    </td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">4</td>
                                                    <td className="sorting_1">HO222302W0001</td>
                                                    <td className="sorting_1">09-Feb-2023	</td>
                                                    <td className="sorting_1">KGM</td>
                                                    <td className="sorting_1">BEDOGE MOHODEO BOCOWONT (OWM)</td>
                                                    <td className="sorting_1">8976431455 /985063351</td>
                                                    <td className="sorting_1">Delivery</td>
                                                    <td className="sorting_1">8906037452794</td>
                                                    <td className="sorting_1">AO SMITH  WATERHEATER  HSE - SGS 6 LTR</td>
                                                    <td className="sorting_1">1.00</td>
                                                    <td className="sorting_1">15,000.00</td>
                                                    <td className="sorting_1">No GSTIN Detail</td>
                                                    <td className="sorting_1 text-primary">
                                                        EWayBill
                                                    </td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">5</td>
                                                    <td className="sorting_1">HO222302W0001</td>
                                                    <td className="sorting_1">09-Feb-2023	</td>
                                                    <td className="sorting_1">KGM</td>
                                                    <td className="sorting_1">BEDOGE MOHODEO BOCOWONT (OWM)</td>
                                                    <td className="sorting_1">8976431455 /985063351</td>
                                                    <td className="sorting_1">Delivery</td>
                                                    <td className="sorting_1">8906037452794</td>
                                                    <td className="sorting_1">AO SMITH  WATERHEATER  HSE - SGS 6 LTR</td>
                                                    <td className="sorting_1">1.00</td>
                                                    <td className="sorting_1">15,000.00</td>
                                                    <td className="sorting_1">No GSTIN Detail</td>
                                                    <td className="sorting_1 text-primary">
                                                        EWayBill
                                                    </td>
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

export default SalesInvoiceList