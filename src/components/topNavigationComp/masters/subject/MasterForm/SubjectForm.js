import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { Button } from 'antd';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { postCallStatus, getCallByStatusId, updateCallStatusById, updateAddSubjectById, postAddSubject, getAddSubjectById } from '../../../../../api/login/Login';
import { toast } from 'react-toastify';

function SubjectForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Subject Master",
    };
    
    const [initialValues, setInitialValues] = useState({
        subject_name: "",
        status: "",
    });
    
    const params = useParams();
    const navigate = useNavigate();
    
    const validate = (values) => {
        let errors = {};
        if (!values.subject_name) {
            errors.subject_name = "Subject Name is required";
        }
        if (!values.status) {
            errors.status = "Status is required";
        }
        return errors;
    };
    
    const blankBtn = () => {
        setInitialValues({ subject_name: "", status: "" });
    };

    const toastSuccessMessage = (message) => {
        toast.success(` ${message}`, {
            position: "top-right",
        });
    };
    
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await postAddSubject(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage("added successfully");
                        navigate(`/subject_list`);
                    }
                    blankBtn();
                } catch (error) {
                    alert(error.message);
                }
            } else {
                try {
                    const res = await updateAddSubjectById(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage("updated successfully");
                        blankBtn();
                        navigate(`/subject_list`);
                    }
                } catch (error) {
                    alert(`Error: ${error}`);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (params?.id) {
                    const response = await getAddSubjectById(params.id);
                    setInitialValues({...response?.data,  status: response?.data?.status ? response?.data?.status : true});
                } else {
                    setInitialValues({
                        subject_name: "",
                        status: ""
                    });
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [params?.id]);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Subject
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
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
                                        isValid,
                                        dirty,
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-5 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.subject_name}
                                                        hasError={errors.subject_name && touched.subject_name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.subject_name}
                                                        autoFocus={true}
                                                        id="subject_name"
                                                        name="subject_name"
                                                        placeholder="Subject Name"
                                                    />
                                                </div>
                                                <div className="col-xl-5 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.status}
                                                        name="status"
                                                    >
                                                        <option value="" disabled>
                                                            Select Status
                                                        </option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select>
                                                    {errors.status && touched.status && (
                                                        <div className="error">{errors.status}</div>
                                                    )}
                                                </div>

                                                <div className="col-xl-2 mb-3">
                                                    <Link to='/subject_list' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        // disabled={!isValid || !dirty}
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
    );
}

export default SubjectForm;
