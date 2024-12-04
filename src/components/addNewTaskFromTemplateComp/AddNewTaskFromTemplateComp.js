import React, { useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CustomInputField from '../../common/CustomInputField';
import { Formik } from 'formik';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { FaTag } from "react-icons/fa6";
import Select from 'react-select';

function AddNewTaskFromTemplateComp() {
    const [selectedOption, setSelectedOption] = useState(null);

    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Task From Template",
    };

    const params = useParams();
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        subject: "",
        file: "",
        hourly_rate: "",
        dueDateInDys: "",
        dueDate: "",
        priority: "",
        repeat: "",
        relatedTo: "",
        assignees: "",
        followers: "",
        repeat: "",
    });

    const validate = (values) => {
        let errors = {};
        if (!values.subject) {
            errors.subject = "Subject is required";
        }
        return errors;
    };





    const submitForm = async (values) => {
        console.log('values---', values);
    };


    const options = [
        { value: 'apple', label: 'Abc' },
        { value: 'banana', label: 'Def' },
        { value: 'cherry', label: 'Ghi' },
        { value: 'mango', label: 'Jkl' },
        { value: 'grape', label: 'Mno' }
    ];

    const handleSelectorChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(`Selected: ${selectedOption.label}`);
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
                                    {params?.id ? "UPDATE" : "ADD NEW"} Task From Template
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
                                                        <h6>Select Task Template</h6>
                                                        <Select
                                                            value={selectedOption} 
                                                            onChange={handleSelectorChange} 
                                                            options={options} 
                                                            isSearchable 
                                                            placeholder="Select or search..."
                                                        />
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
                                                        <h6>Related To</h6>
                                                        <select
                                                            className="form-select"
                                                            name="assignees"
                                                            value={values.assignees}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="Widal Ward">Widal Ward</option>
                                                            <option value="Oran Simonis">Oran Simonis</option>
                                                            <option value="Merle Hill">Merle Hill</option>
                                                            <option value="Giovani King">Giovani King</option>
                                                        </select>
                                                    </div>
                                                    {/* <div className="col-lg-12 mb-3">
                                                        <h6>Contract</h6>
                                                        <select
                                                            className="form-select"
                                                            name="followers"
                                                            value={values.followers}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="Widal1 Ward">Widal Ward</option>
                                                            <option value="Oran1 Simonis">Oran Simonis</option>
                                                            <option value="Merle1 Hill">Merle Hill</option>
                                                            <option value="Giovani1 King">Giovani King</option>
                                                        </select>
                                                    </div> */}
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

export default AddNewTaskFromTemplateComp