import React, { useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CustomInputField from '../../common/CustomInputField';
import { Formik } from 'formik';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { FaTag } from "react-icons/fa6";

function AddNewTaskTemplateComp() {
    const [tags, setTags] = useState([]);

    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Task Template",
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


    const handleTagsChange = (newTags) => {
        setTags(newTags);
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
                                    {params?.id ? "UPDATE" : "ADD NEW"} Task Template
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
                                                                    Public
                                                                </label>
                                                            </div>
                                                            <div className="form-check ms-4">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                                    Billable
                                                                </label>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Attach Files</h6>
                                                        <CustomInputField
                                                            type="file"
                                                            value={values?.file}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="file"
                                                            name="file"
                                                            placeholder="file"
                                                        />
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
                                                        <h6>Hourly Rate</h6>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.hourly_rate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="hourly_rate"
                                                            name="hourly_rate"
                                                            placeholder="Hourly Rate"
                                                        />
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Due Date Duration (In Days)</h6>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.dueDateInDys}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="dueDateInDys"
                                                        />
                                                    </div>

                                                    

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Priority</h6>
                                                        <select
                                                            className="form-select"
                                                            name="priority"
                                                            value={values.priority}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="High">High</option>
                                                            <option value="Medium">Medium</option>
                                                            <option value="Low">Low</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Repeat every</h6>
                                                        <select
                                                            className="form-select"
                                                            name="repeat"
                                                            value={values.repeat}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="Week">Week</option>
                                                            <option value="2Week">2Week</option>
                                                            <option value="1Month">1Month</option>
                                                            <option value="1Month">1Month</option>
                                                            <option value="2Month">2Month</option>
                                                            <option value="3Month">3Month</option>
                                                            <option value="6Month">6Month</option>
                                                            <option value="1Year">1Year</option>
                                                            <option value="Custom">Custom</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Task Assignees</h6>
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
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Task Follower(s)</h6>
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
                                                    </div>


                                                    <div className="col-lg-12 mb-3">
                                                        <h6>
                                                            <FaTag />
                                                            Tags
                                                        </h6>
                                                        <TagsInput value={tags} onChange={handleTagsChange} />
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Task Description</h6>
                                                        <div class="form-group">
                                                            <textarea style={{ boxShadow: 'none' }} class="form-control" placeholder='Task Description' id="exampleFormControlTextarea1" rows="5"></textarea>
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

export default AddNewTaskTemplateComp