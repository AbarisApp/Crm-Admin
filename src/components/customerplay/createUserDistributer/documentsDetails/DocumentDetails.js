import React from 'react';
import { Card } from 'react-bootstrap';
import CustomInputField from '../../../../common/CustomInputField';
import { Formik } from 'formik/dist';

function DocumentDetails({ initialValues, state, value, handleInputDocumnetDetail, submitForm }) {
    console.log('state----', state);

    const validate = (values) => {
        let errors = {};

        if (!values.adhaar_number) {
            errors.adhaar_number = "Adhaar Number";
        }

        if (!values.is_adhaar_verified) {
            errors.is_adhaar_verified = "Verified Required";
        }

        if (!values.pan_number) {
            errors.pan_number = "pan_number is required";
        }

        if (!values.is_pan_verified) {
            errors.state = "is_pan_verified is required";
        }
        return errors;
    };

    return (
        <div className="row m-4  res-card" id='res-card'>
            <div className="col-12">
                <div className='row'>
                    {/* Aadhar Details */}
                    <div className='col-lg-6 col-md-12 mb-4'>
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption bg-primary text-center">
                                    <h4 className="heading mb-0 border p-1 rounded udtfont"><b>Aadhar Details</b></h4>
                                </div>
                                <div className="card mt-3">
                                    <div className=''>
                                        <h2 className='text-center'>Document</h2>
                                    </div>
                                    <Formik
                                        initialValues={value}
                                        validate={validate}
                                        onSubmit={submitForm}
                                        className="tbl-captionn"
                                        enableReinitialize
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
                                                <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                    <div className='row' style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
                                                        <div className="col-12 mb-3">
                                                            <label className='ms-2'>Adhaar Number</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values?.adhaar_number}
                                                                hasError={errors.adhaar_number && touched.adhaar_number}
                                                                onChange={handleInputDocumnetDetail}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.adhaar_number}
                                                                autoFocus={true}
                                                                defaultValue={''}
                                                                id="adhaar_number"
                                                                name='adhaar_number'
                                                                placeholder="Adhaar Number"
                                                            />
                                                        </div>
                                                        <div className="col-12 mb-3">
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <label className='ms-2 mb-0'>Adhaar Name: </label>
                                                                <h4 className='ms-2 mb-0' style={{ color: 'gray', textTransform: "uppercase" }}>{state?.adhaar_name}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 mb-3">
                                                            <label className='ms-2'>Is Verified</label>
                                                            <select className="form-select" aria-label="Default select example" value={values?.is_adhaar_verified} name="is_adhaar_verified" onChange={handleInputDocumnetDetail}>
                                                                <option value={true}>Yes</option>
                                                                <option value={false}>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                            );
                                        }}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pancard Details */}
                    <div className='col-lg-6 col-md-12 mb-4'>
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption bg-primary text-center">
                                    <h4 className="heading mb-0 border p-1 rounded udtfont"><b>Pancard Details</b></h4>
                                </div>
                                <div className="card mt-3">
                                    <div className=''>
                                        <h2 className='text-center'>Document</h2>
                                    </div>
                                    <Formik
                                        initialValues={value}
                                        validate={validate}
                                        onSubmit={submitForm}
                                        className="tbl-captionn"
                                        enableReinitialize
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
                                                <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                    <div className='row' style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
                                                        <div className="col-12 mb-3">
                                                            <label className='ms-2'>Pan Number</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values?.pan_number}
                                                                hasError={errors.pan_number && touched.pan_number}
                                                                onChange={handleInputDocumnetDetail}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.pan_number}
                                                                autoFocus={true}
                                                                defaultValue={''}
                                                                id="pan_number"
                                                                name="pan_number"
                                                                placeholder="PAN Number"
                                                            />
                                                        </div>
                                                        <div className="col-12 mb-3">
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <label className='ms-2 mb-0'>Pan Name: </label>
                                                                <h4 className='ms-2 mb-0' style={{ color: 'gray' }}>{state?.pan_name}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 mb-3">
                                                            <label className='ms-2'>Is Verified</label>
                                                            <select className="form-select" aria-label="Default select example" value={values?.is_pan_verified} name="is_pan_verified" onChange={handleInputDocumnetDetail}>
                                                                <option value={true}>Yes</option>
                                                                <option value={false}>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                            );
                                        }}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocumentDetails;
