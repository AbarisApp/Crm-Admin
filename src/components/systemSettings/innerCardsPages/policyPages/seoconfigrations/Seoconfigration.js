import React from 'react'
import { Link } from 'react-router-dom'
import display from '../../../../../assets/images/kyc/default-photo.jpg'
import { Formik } from 'formik';
import CustomInputField from '../../../../../common/CustomInputField';
import CustomTextArea from '../../../../../common/CustomTextArea';

function Seoconfigration() {
    const submitForm = () => {

    }
    return (
        <>
            <div className="container my-4">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1 mb-3">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Policy Pages
                                        </h4>
                                        <div className=''>
                                            <Link to="/policy" className='bg-primary btn btn-sm text-white'>Back</Link >
                                        </div>
                                    </div>
                                </div>

                                <div className="table-responsive active-projects style-1 mb-3 bg-primary px-3    rounded">
                                    <p className='text-white'>The SEO setting is optional for this page. If you don't configure SEO here, the global SEO contents will work for this page, which you can configure</p>
                                </div>
                                <div className='card'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div>
                                                <img src={display} alt="img" className='w-100 h-100 rounded-0' />
                                            </div>
                                            <div className='px-3'><small>
                                                Supported Files: <b>.png</b>, <b>.jpg</b>, <b>.jpeg</b><b>.Image</b> will be resized into <b>1180x600px</b>
                                            </small></div>
                                        </div>
                                        <div className='col-lg-8'>
                                            <Formik
                                                initialValues={""}
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
                                                            <div className="row">
                                                                <div className="col-xl-12 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        placeholder="Meta Keywords Separate multiple keywords by ,(comma) or enter key"
                                                                        name="MetaKeywords"
                                                                        value={values.MetaKeywords}
                                                                        hasError={errors.MetaKeywords && touched.MetaKeywords}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.MetaKeywords}
                                                                        id="MetaKeywords"
                                                                    />
                                                                </div>
                                                                <div className="col-xl-12 mb-3">
                                                                    <CustomTextArea
                                                                        type="text"
                                                                        placeholder="Meta Description"
                                                                        name="MetaDescription"
                                                                        value={values.MetaDescription}
                                                                        hasError={errors.MetaDescription && touched.MetaDescription}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.MetaDescription}
                                                                        id="MetaDescription"
                                                                    />
                                                                </div>

                                                                <div className="col-xl-12 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        placeholder="Social Title"
                                                                        name="MetaKeywords"
                                                                        value={values.MetaKeywords}
                                                                        hasError={errors.MetaKeywords && touched.MetaKeywords}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.MetaKeywords}
                                                                        id="MetaKeywords"
                                                                    />
                                                                </div>
                                                                <div className="col-xl-12 mb-3">
                                                                    <CustomTextArea
                                                                        type="text"
                                                                        placeholder="Social Description"
                                                                        name="MetaDescription"
                                                                        value={values.MetaDescription}
                                                                        hasError={errors.MetaDescription && touched.MetaDescription}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.MetaDescription}
                                                                        id="MetaDescription"
                                                                    />
                                                                </div>


                                                                <div className="col-lg-12 col-md-4">
                                                                    <div className='d-flex justify-content-start'>
                                                                        <button className="btn btn-primary pd-x-20 color2 w-100" type="submit">
                                                                            Submit
                                                                        </button>
                                                                    </div>
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
            </div>
        </>
    )
}

export default Seoconfigration
