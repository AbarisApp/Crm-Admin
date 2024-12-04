import React, { useState } from 'react';
import { Formik } from 'formik';
import CustomInputField from '../../../common/CustomInputField';
import CustomTextArea from '../../../common/CustomTextArea';


function BranchMasterForm() {
    const [initialValues, setInitialValues] = useState({
        from: '',
        to: '',
        voucherNo: '',
        docType: '',
        docNo: '',
        docDate: '',
        narration: ''
    });

    const validate = (values) => {
        let errors = {};

        if (!values.from) {
            errors.from = "From Date is required";
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
                } = formik;

                return (
                    <section>
                        <div className="row m-4">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2 p-2">
                                                <h4 className="heading mb-0">Branch Master</h4>
                                            </div>
                                            <form onSubmit={handleSubmit} className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Branch Name"
                                                            value={values.from}
                                                            name="from"
                                                            hasError={errors.from && touched.from}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.from}
                                                            id="from"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Branch Code"
                                                            value={values.voucherNo}
                                                            name="voucherNo"
                                                            hasError={errors.voucherNo && touched.voucherNo}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.voucherNo}
                                                            id="voucherNo"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            name="docType"
                                                            value={values.docType}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value=""> Type</option>
                                                            <option value="Input services">Input services</option>
                                                            <option value="Inputs">Inputs</option>
                                                            <option value="Capital Goods">Capital Goods</option>
                                                            <option value="Ineligible">Ineligible</option>
                                                            <option value="Exempted">Exempted</option>
                                                            <option value="URD">URD</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            name="docType"
                                                            value={values.docType}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Branch Account</option>
                                                            <option value="Input services">Input services</option>
                                                            <option value="Inputs">Inputs</option>
                                                            <option value="Capital Goods">Capital Goods</option>
                                                            <option value="Ineligible">Ineligible</option>
                                                            <option value="Exempted">Exempted</option>
                                                            <option value="URD">URD</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="City "
                                                            value={values.docNo}
                                                            name="docNo"
                                                            hasError={errors.docNo && touched.docNo}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.docNo}
                                                            id="docNo"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="State"
                                                            value={values.docDate}
                                                            name="docDate"
                                                            hasError={errors.docDate && touched.docDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.docDate}
                                                            id="docDate"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="PIN Code"
                                                            value={values.docDate}
                                                            name="docDate"
                                                            hasError={errors.docDate && touched.docDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.docDate}
                                                            id="docDate"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Mobile No"
                                                            value={values.docDate}
                                                            name="docDate"
                                                            hasError={errors.docDate && touched.docDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.docDate}
                                                            id="docDate"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            name="docType"
                                                            value={values.docType}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Center</option>
                                                            <option value="Input services">Input services</option>
                                                            <option value="Inputs">Inputs</option>
                                                            <option value="Capital Goods">Capital Goods</option>
                                                            <option value="Ineligible">Ineligible</option>
                                                            <option value="Exempted">Exempted</option>
                                                            <option value="URD">URD</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-8 mb-3">
                                                        <CustomInputField
                                                            type="email"
                                                            placeholder="Branch Email"
                                                            value={values.docDate}
                                                            name="docDate"
                                                            hasError={errors.docDate && touched.docDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.docDate}
                                                            id="docDate"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="form-check me-3">
                                                                <label className="form-check-label" htmlFor="adminbranch">
                                                                    Admin Branch ?
                                                                </label>
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="adminbranch"
                                                                    name="adminbranch"
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                            <div className="col-lg-12">
                                                                <CustomTextArea
                                                                    type="text"
                                                                    placeholder="Address"
                                                                    value={values.narration}
                                                                    name="narration"
                                                                    hasError={errors.narration && touched.narration}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.narration}
                                                                    id="narration"
                                                                />
                                                            </div>
                                                    <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                                        <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                            Update
                                                        </button>
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
    );
}

export default BranchMasterForm;
