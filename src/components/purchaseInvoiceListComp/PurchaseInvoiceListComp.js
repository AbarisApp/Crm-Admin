import React from 'react'
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import ExportPdf from '../../common/exportPdf/ExportPdf';

function PurchaseInvoiceListComp() {
    return (
        <>
            <ToastContainer />
            <section className="ListDistributer mx-4 expdf ">

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
                                            <label htmlFor="fromDate">Invoice No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter invoice No'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Invoice Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder='Enter Date'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Supplier Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Supplier Name'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Supplier Inv No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Supplier Inv No'
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
                                            <label htmlFor="fromDate">Final Total</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Final Total'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Inward Link</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Inward Link'
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
                                        <h4 className="heading mb-0"><b>Purchase Invoice</b></h4>
                                        <div>
                                            <ExportPdf />
                                            <Link className="btn btn-primary btn-sm" to="/ele-purchase-return/create" role="button" aria-controls="offcanvasExample">+ CREATE PURCHASE INVOICE</Link>
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
                                                    <th>Invoice No</th>
                                                    <th>Invoice Date</th>
                                                    <th>Supplier Name</th>
                                                    <th>Supplier Inv No</th>
                                                    <th>Barcode</th>
                                                    <th>Product</th>
                                                    <th>Final Total</th>
                                                    <th>Inward Link</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">1</td>
                                                    <td className="sorting_1">	HO212212CN0042</td>
                                                    <td className="sorting_1">02-Mar-2023 12:00 AM</td>
                                                    <td className="sorting_1">BHOVYK CHOCHYKONT GONDHY</td>
                                                    <td className="sorting_1">MAP2236521186046</td>
                                                    <td className="sorting_1">8906037452794</td>
                                                    <td className="sorting_1">AO SMITH  WATERHEATER  HSE - SGS 6 LTR</td>
                                                    <td className="sorting_1">59,000.00</td>
                                                    <td className="sorting_1 text-primary">
                                                        Update
                                                    </td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">2</td>
                                                    <td className="sorting_1">	HO212212CN0042</td>
                                                    <td className="sorting_1">02-Mar-2023 12:00 AM</td>
                                                    <td className="sorting_1">BHOVYK CHOCHYKONT GONDHY</td>
                                                    <td className="sorting_1">MAP2236521186046</td>
                                                    <td className="sorting_1">8906037452794</td>
                                                    <td className="sorting_1">AO SMITH  WATERHEATER  HSE - SGS 6 LTR</td>
                                                    <td className="sorting_1">59,000.00</td>
                                                    <td className="sorting_1 text-primary">
                                                        Update
                                                    </td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">3</td>
                                                    <td className="sorting_1">	HO212212CN0042</td>
                                                    <td className="sorting_1">02-Mar-2023 12:00 AM</td>
                                                    <td className="sorting_1">BHOVYK CHOCHYKONT GONDHY</td>
                                                    <td className="sorting_1">MAP2236521186046</td>
                                                    <td className="sorting_1">8906037452794</td>
                                                    <td className="sorting_1">AO SMITH  WATERHEATER  HSE - SGS 6 LTR</td>
                                                    <td className="sorting_1">59,000.00</td>
                                                    <td className="sorting_1 text-primary">
                                                        Update
                                                    </td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">4</td>
                                                    <td className="sorting_1">	HO212212CN0042</td>
                                                    <td className="sorting_1">02-Mar-2023 12:00 AM</td>
                                                    <td className="sorting_1">BHOVYK CHOCHYKONT GONDHY</td>
                                                    <td className="sorting_1">MAP2236521186046</td>
                                                    <td className="sorting_1">8906037452794</td>
                                                    <td className="sorting_1">AO SMITH  WATERHEATER  HSE - SGS 6 LTR</td>
                                                    <td className="sorting_1">59,000.00</td>
                                                    <td className="sorting_1 text-primary">
                                                        Update
                                                    </td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">5</td>
                                                    <td className="sorting_1">	HO212212CN0042</td>
                                                    <td className="sorting_1">02-Mar-2023 12:00 AM</td>
                                                    <td className="sorting_1">BHOVYK CHOCHYKONT GONDHY</td>
                                                    <td className="sorting_1">MAP2236521186046</td>
                                                    <td className="sorting_1">8906037452794</td>
                                                    <td className="sorting_1">AO SMITH  WATERHEATER  HSE - SGS 6 LTR</td>
                                                    <td className="sorting_1">59,000.00</td>
                                                    <td className="sorting_1 text-primary">
                                                        Update
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

export default PurchaseInvoiceListComp