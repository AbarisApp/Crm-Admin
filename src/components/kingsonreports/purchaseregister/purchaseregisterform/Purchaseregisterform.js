import React, { useState } from 'react'
import CustomTextArea from '../../../../common/CustomTextArea';
import { Formik } from 'formik';
import CustomInputField from '../../../../common/CustomInputField';

function Purchaseregisterform() {
    const [initialValues, setInitialValues] = useState({})
    const validate = (values) => {
        let errors = {};

        /* if (!values.from) {
            errors.from = "From Date Name is required";
        }

        if (!values.to) {
            errors.to = "To Date is required";
        } */
        return errors;
    };
    const submitForm = (values) => {
        console.log(values);
    };


    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitForm}
                className="tbl-captionn"
            >
                {(formik) => {
                    const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty,
                    } = formik;
                    return (
                        <section>
                            <div className="row m-4">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive active-projects style-1">
                                                <div className="tbl-caption tbl-caption-2">
                                                    <h4 className="heading mb-0">View GST Expense Entry
                                                    </h4>
                                                </div>
                                                <form className="tbl-captionn" onSubmit={submitForm}>
                                                    <div className="row">
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="date"
                                                                placeholder="Date"
                                                                value={values.to}
                                                                hasError={errors.to && touched.to}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.to}
                                                                autoFocus={true}
                                                                id="to"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Vocher No"
                                                                value={values.to}
                                                                hasError={errors.to && touched.to}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.to}
                                                                autoFocus={true}
                                                                id="to"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <select
                                                                className="form-select">
                                                                <option value="">Doc Type</option>
                                                                <option value="">Input services</option>
                                                                <option value="">Inputs</option>
                                                                <option value="">Capital Goods</option>
                                                                <option value="">Ineligible</option>
                                                                <option value="">Exempted</option>
                                                                <option value="">URD</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Doc No"
                                                                value={values.to}
                                                                hasError={errors.to && touched.to}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.to}
                                                                autoFocus={true}
                                                                id="to"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="date"
                                                                placeholder="Doc Date"
                                                                value={values.to}
                                                                hasError={errors.to && touched.to}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.to}
                                                                autoFocus={true}
                                                                id="to"
                                                            />
                                                        </div>

                                                        <div className="card m-2">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive active-projects style-1">

                                                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                                            <thead>
                                                                                <tr role="row">
                                                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                                                    Expense A/c
                                                                                    </th>
                                                                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                                                    Product
                                                                                    </th>
                                                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                                                    HSN Code
                                                                                    </th>
                                                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                                                    Commodity
                                                                                    </th>
                                                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                                                    Amount
                                                                                    </th>

                                                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                                                        Action
                                                                                    </th>

                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {/* {data?.invoices.map((invoice, index) => (
                                                                                                <tr role="row" key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                                                                                                    <td className="sorting_1"><span>{index + 1}</span></td>
                                                                                                    <td>{invoice.invNo}</td>
                                                                                                    <td>{invoice.purchaseDate}</td>
                                                                                                    <td>{invoice.supplier}</td>
                                                                                                    <td>{invoice.productName}</td>
                                                                                                    <td>{invoice.barcode}</td>
                                                                                                    <td>{invoice.purQty}</td>
                                                                                                    <td>{invoice.recoPurchaseQty}</td>
                                                                                                    <td>{invoice.recoPurchaseQty}</td>
                                                                                                    <td>{invoice.recoPurchaseQty}</td>
                                                                                                    <td>
                                                                                                        <button className="btn btn-sm btn-light showBtn mx-1" title="Delete">
                                                                                                            <i className="fa-solid fa-trash text-danger"></i>
                                                                                                        </button>
                                                                                                    </td>

                                                                                                </tr>
                                                                                            ))} */}
                                                                            </tbody>
                                                                        </table>
                                                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div><div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate"><a className="paginate_button previous disabled" aria-controls="empoloyees-tblwrapper" data-dt-idx={0} tabIndex={0} id="empoloyees-tblwrapper_previous"><i className="fa-solid fa-angle-left" /></a><span><a className="paginate_button current" aria-controls="empoloyees-tblwrapper" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="empoloyees-tblwrapper" data-dt-idx={2} tabIndex={0}>2</a></span><a className="paginate_button next" aria-controls="empoloyees-tblwrapper" data-dt-idx={3} tabIndex={0} id="empoloyees-tblwrapper_next"><i className="fa-solid fa-angle-right" /></a></div></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-12'>
                                                            <div className='row'>
                                                                <div className='col-lg-6'>
                                                                    <CustomTextArea
                                                                        type="text"
                                                                        placeholder="Naration"
                                                                        value={values.to}
                                                                        hasError={errors.to && touched.to}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.to}
                                                                        autoFocus={true}
                                                                        id="to"
                                                                    />
                                                                </div>
                                                                <div className='col-lg-6'>
                                                                    <div className="table-responsive active-projects style-1">
                                                                        <div className="tbl-caption">
                                                                            <h4 className="heading mb-0">Expanse and Taxes

                                                                            </h4>
                                                                            <div>
                                                                                {/* <Link className="btn btn-primary btn-sm" to="/add-pending-transaction-report" role="button" aria-controls="offcanvasExample">+ PENDING TRANSACTION REPORT</Link> */}
                                                                                {/* <button type="button" className="btn btn-secondary btn-sm" ></button> */}
                                                                            </div>
                                                                        </div>
                                                                        <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                                                            <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                                                <thead>
                                                                                    <tr role="row">
                                                                                        <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                                                        Name
                                                                                        </th>
                                                                                        <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                                                        Account Name
                                                                                        </th>
                                                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                                                        Rate
                                                                                        </th>
                                                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                                                        Amount</th>
                                                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                                                                            Action
                                                                                        </th>

                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    {/* {data?.invoices.map((invoice, index) => (
                                                                                        <tr role="row" key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                                                                                            <td className="sorting_1"><span>{index + 1}</span></td>
                                                                                            <td>{invoice.invNo}</td>
                                                                                            <td>{invoice.purchaseDate}</td>
                                                                                            <td>{invoice.supplier}</td>
                                                                                            <td>{invoice.productName}</td>
                                                                                            <td>{invoice.barcode}</td>
                                                                                            <td>{invoice.purQty}</td>
                                                                                            <td>{invoice.recoPurchaseQty}</td>
                                                                                            <td>{invoice.recoPurchaseQty}</td>
                                                                                            <td>{invoice.recoPurchaseQty}</td>
                                                                                            <td>
                                                                                                <button className="btn btn-sm btn-light showBtn mx-1" title="Delete">
                                                                                                    <i className="fa-solid fa-trash text-danger"></i>
                                                                                                </button>
                                                                                            </td>

                                                                                        </tr>
                                                                                    ))} */}
                                                                                </tbody>
                                                                            </table>
                                                                            <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div><div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate"><a className="paginate_button previous disabled" aria-controls="empoloyees-tblwrapper" data-dt-idx={0} tabIndex={0} id="empoloyees-tblwrapper_previous"><i className="fa-solid fa-angle-left" /></a><span><a className="paginate_button current" aria-controls="empoloyees-tblwrapper" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="empoloyees-tblwrapper" data-dt-idx={2} tabIndex={0}>2</a></span><a className="paginate_button next" aria-controls="empoloyees-tblwrapper" data-dt-idx={3} tabIndex={0} id="empoloyees-tblwrapper_next"><i className="fa-solid fa-angle-right" /></a></div></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                                            <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                                Update
                                                            </button>
                                                            {/* <button
                                                                className="btn btn-danger pd-x-20"
                                                                type="button"
                                                                data-toggle="modal"
                                                                data-target="#transaction_download_model"
                                                                onClick={handleShow}
                                                                aria-label="Download"
                                                            >
                                                                <FaDownload /> Download
                                                            </button> */}
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                }}
            </Formik>
        </>
    )
}

export default Purchaseregisterform