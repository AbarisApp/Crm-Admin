import React, { useState } from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import { Formik } from 'formik';

function GeneralSettings() {
    const [initialValues, setIntialValues] = useState({

    })
    const submitForm = () => {

    }
    return (
        <>
            <section className='m-4'>
                <div className="table-responsive active-projects style-1 mb-3">
                    <div className="tbl-caption tbl-caption-2">
                        <h4 className="heading mb-0"><b> General Setting
                        </b></h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <Formik
                                initialValues={initialValues}
                                onSubmit={submitForm}
                                className="tbl-captionn"
                            >
                                {(formik) => {
                                    const {
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        resetForm,
                                        errors,
                                        touched,
                                        handleBlur,
                                        isValid,
                                        dirty,
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className='row'>
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Site Title"
                                                        name="Site Title"
                                                        value={""}
                                                        onChange={handleChange}
                                                        id="Site Title"
                                                    />
                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Currency"
                                                        name="Currency"
                                                        value={""}
                                                        onChange={handleChange}
                                                        id="Currency"
                                                    />
                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Currency Symbol"
                                                        name="Currency Symbol"
                                                        value={""}
                                                        onChange={handleChange}
                                                        id="Currency Symbol"
                                                    />
                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Timezone"
                                                        name="Timezone"
                                                        value={""}
                                                        onChange={handleChange}
                                                        id="Timezone"
                                                    />
                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="color"
                                                        placeholder="Site Base Color"
                                                        name="Site Base Color"
                                                        value={""}
                                                        onChange={handleChange}
                                                        id="Site Base Color"
                                                    />
                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="color"
                                                        placeholder="Site Secondary Color"
                                                        name="otpForDelivery"
                                                        value="#0ef104"
                                                        onChange={handleChange}
                                                        id="otpForDelivery"
                                                    />
                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                        value={values.ServiceProvider}
                                                        hasError={errors.ServiceProvider && touched.ServiceProvider}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}>
                                                        <option >Record to Display Per page</option>
                                                        <option value={1}>Journey Type</option>
                                                        <option value={2}>Origin</option>
                                                        <option value={3}>Date Range</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                        value={values.ServiceProvider}
                                                        hasError={errors.ServiceProvider && touched.ServiceProvider}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}>
                                                        <option >Currency Showing Format</option>
                                                        <option value={1}>Journey Type</option>
                                                        <option value={2}>Origin</option>
                                                        <option value={3}>Date Range</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Cart Automatic Remove Duration"
                                                        name="otpForDelivery"
                                                        value={""}
                                                        onChange={handleChange}
                                                        id="otpForDelivery"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary me-1"
                                                type="submit"
                                                disabled={!isValid || !dirty}
                                            >
                                                Submit
                                                {/* {params?.id ? "Send" : "Submit"} */}
                                            </button>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GeneralSettings
