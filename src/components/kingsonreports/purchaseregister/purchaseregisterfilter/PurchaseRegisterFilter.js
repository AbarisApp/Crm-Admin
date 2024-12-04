import { Formik } from 'formik';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import CustomInputField from '../../../../common/CustomInputField';

function PurchaseRegisterFilter() {
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
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive active-projects style-1">
                                                <div className="tbl-caption tbl-caption-2">
                                                    <h4 className="heading mb-0">Purchase Register                                                     </h4>
                                                </div>
                                                <form className="tbl-captionn" onSubmit={submitForm}>
                                                    <div className="row">
                                                        <div className="col-xl-3 mb-3">
                                                            <CustomInputField
                                                                type="date"
                                                                placeholder="From"
                                                                value={values.to}
                                                                hasError={errors.to && touched.to}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.to}
                                                                autoFocus={true}
                                                                id="to"
                                                            />
                                                        </div>
                                                        <div className="col-xl-3 mb-3">
                                                            <CustomInputField
                                                                type="date"
                                                                placeholder="To"
                                                                value={values.to}
                                                                hasError={errors.to && touched.to}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.to}
                                                                autoFocus={true}
                                                                id="to"
                                                            />
                                                        </div>
                                                        <div className="col-xl-3 mb-3">
                                                        <select
                                                                className="form-select">
                                                                <option value="">Purchase Register (Tax Slab)</option>
                                                                <option value="">Purchase Register (Tax Details)</option>
                                                                <option value="">Filled / Empty</option>
                                                                <option value="">Purchase Register</option>
                                                                <option value="">Purchase Register (Detail)</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-xl-3 mg-t-10 mg-sm-t-25">
                                                            <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                                <FaSearch /> Search
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
        </>
    )
}

export default PurchaseRegisterFilter