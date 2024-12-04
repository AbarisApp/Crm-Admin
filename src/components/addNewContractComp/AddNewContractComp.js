import React, { useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import CustomInputField from '../../common/CustomInputField';
import { IoSettings } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaRegQuestionCircle } from "react-icons/fa";

function AddNewContractComp() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Contract",
    };

    const params = useParams();
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        subject: "",
        customer: "",
        contractValue: "",
        contractType: "",
        startDate: "",
        endDate: "",
        status: "",
    });

    const validate = (values) => {
        let errors = {};
        if (!values.subject) {
            errors.subject = "Subject is required";
        }
        if (!values.customer) {
            errors.customer = "Customer is required";
        }
        if (!values.startDate) {
            errors.startDate = "Start Date is required";
        }
        return errors;
    };


    const submitForm = async (values) => {
        console.log('values---', values);
    };

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Contract
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className='col-lg-12'>
                                                    <div className="col-lg-12 mb-3">
                                                        <div style={{ display: 'flex' }}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                    <FaRegQuestionCircle />
                                                                    Trash
                                                                </label>
                                                            </div>
                                                            <div className="form-check ms-4">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                                    Hide from customer
                                                                </label>
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Customer <span className='text-danger'>*</span></h6>
                                                        <select
                                                            className="form-select"
                                                            name="customer"
                                                            value={values.customer}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="Free">Lead</option>
                                                            <option value="Paid">Customer</option>
                                                        </select>
                                                        {touched.customer && errors.customer && (
                                                            <div className="text-danger">{errors.customer}</div>
                                                        )}
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Subject <span className='text-danger'>*</span></h6>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.subject}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.subject}
                                                            id="subject"
                                                            name="subject"
                                                            placeholder="Subject"
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Contract Value</h6>
                                                        <CustomInputField
                                                            type="number"
                                                            value={values?.contractValue}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="contractValue"
                                                            name="contractValue"
                                                            placeholder="contract Value"
                                                        />
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Contract Type</h6>
                                                        <select
                                                            className="form-select"
                                                            name="contractType"
                                                            value={values.contractType}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="Free">Lead</option>
                                                            <option value="Paid">Customer</option>
                                                        </select>
                                                    </div>


                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Start Date <span className='text-danger'>*</span></h6>
                                                        <CustomInputField
                                                            type="date"
                                                            value={values?.startDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.startDate}
                                                            name="startDate"
                                                        />
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>End Date</h6>
                                                        <CustomInputField
                                                            type="date"
                                                            value={values?.endDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="endDate"
                                                        />
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Description</h6>
                                                        <div class="form-group">
                                                            <textarea style={{ boxShadow: 'none' }} class="form-control" placeholder='Description' id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                                    </div>



                                                </div>



                                                <div className="col-xl-12 mb-3">
                                                    <Link to="/approval" type="submit" className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
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
        </>
    )
}

export default AddNewContractComp