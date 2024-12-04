import { Formik } from 'formik';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

function ReturnManagementReconcileFill() {
    const [initialValues, setInitialValues] = useState({})
    const validate = (values) => {
        let errors = {};

        if (!values.from) {
            errors.from = "From Date Name is required";
        }

        if (!values.to) {
            errors.to = "To Date is required";
        }
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
                                <div className="col-xl-12   ">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive active-projects style-1">
                                                <div className="tbl-caption tbl-caption-2">
                                                    <h4 className="heading mb-0">Return Management Reconcile
                                                    </h4>
                                                </div>
                                                <form className="tbl-captionn" onSubmit={submitForm}>
                                                    <div className="row">
                                                        <div className="col-xl-4 mb-3">
                                                            <small>Warehouse</small>
                                                            <select
                                                                className="form-select">
                                                                <option value="">Select Type</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <small>Brand Name</small>
                                                            <select
                                                                className="form-select">
                                                                <option value="">Select Type</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <small>Category</small>
                                                            <select
                                                                className="form-select">
                                                                <option value="">Select Type</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <small>Sub Category</small>
                                                            <select
                                                                className="form-select">
                                                                <option value="">Select Type</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <small>Show Diff. Qty. with Zero *</small>
                                                            <select
                                                                className="form-select">
                                                                <option value="">Select Type</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                                <option value="">Inward</option>
                                                                <option value="">Outward</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-lg-12 col-md-4 mg-t-10 mg-sm-t-25">
                                                            <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                                <FaSearch/> Search
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

export default ReturnManagementReconcileFill
