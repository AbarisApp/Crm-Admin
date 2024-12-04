import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import display from '../../../../assets/images/kyc/default-photo.jpg'
import { Formik } from 'formik';
import CustomInputField from '../../../../common/CustomInputField';
import CustomTextArea from '../../../../common/CustomTextArea';
import JoditEditor from 'jodit-react';
import { Button } from 'react-bootstrap';

function MaintenanceMode() {
    const submitForm = () => {

    }
    const editor = useRef(null);
    const [content, setContent] = useState('');
    return (
        <>
            <div className="container my-4">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1 mb-3">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Maintenance Mode
                                        </h4>
                                    </div>
                                </div>
                                <div className="text-endS">
                                    <div className=''>
                                        <p><label>Status</label></p>
                                        <select>
                                            <option>---Select Status------</option>
                                            <option>Active</option>
                                            <option>Ina Active</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='card'><div className='row'>
                                    <div className='col-lg-4'>
                                        <div>
                                            <img src={display} alt="img" className='w-100 h-100 rounded-0' />
                                        </div>
                                        <Button variant="primary" className="upload-btn mt-2" style={{ borderRadius: '50%' }}>
                                            <i className="bi bi-upload"></i>
                                        </Button>
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
                                                                <div className='form-group'>
                                                                    <label htmlFor="content">Description</label>
                                                                    <JoditEditor
                                                                        ref={editor}
                                                                        value={content}
                                                                        onChange={newContent => setContent(newContent)}

                                                                    />
                                                                </div>
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
                                </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MaintenanceMode

