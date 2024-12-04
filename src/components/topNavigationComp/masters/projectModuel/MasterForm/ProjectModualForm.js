import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast , ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { updateMarketTypeById, postMarketType, getMarketTypeById, postAccProjectModule, updateAccProjectModuleById, deleteAccProjectModuleById, getAccProjectModuleById } from '../../../../../api/login/Login';

function ProjectModualForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Project Module ",
    };

    const [initialValues, setInitialValues] = useState({
        isActive: "",
        name: '',
        slug: '',
        sort_no: '',  // Added sort_no field
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.isActive) {
            errors.isActive = "Project Module status is required";
        }
        if (!values.name) {
            errors.name = "Project Module name is required";
        }
        if (!values.slug) {
            errors.slug = "Project Module slug is required";
        }
        if (!values.sort_no) {
            errors.sort_no = "Sort number is required";  // Validation for sort_no field
        } else if (isNaN(values.sort_no)) {
            errors.sort_no = "Sort number must be a number";
        }
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {
        const payload = {
            name: values.name,
            sort_no: values.sort_no,  // Ensure sort_no is an integer
            slug: values.slug,
            isActive: values.isActive,   // Convert to Boolean
        };

        try {
            if (!params?.id) {
                const res = await postAccProjectModule(payload);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Project Module added successfully");
                    setTimeout(() => {
                        navigate(`/project-module`);
                    }, 1000);
                }
            } else {
                const res = await updateAccProjectModuleById(params.id, payload);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Project Module updated successfully");
                    setTimeout(() => {
                        navigate(`/project-module`);
                    }, 1000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchMarketTypeData = async () => {
            if (params?.id) {
                const response = await getAccProjectModuleById(params.id);
                if (response?.data) {
                    setInitialValues(response.data);
                }
            }
        };

        fetchMarketTypeData();
    }, [params?.id]);

    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0" style={{padding:"10px"}}>
                                    {params?.id ? "UPDATE" : "ADD"} Project Module 
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
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Project Module Name</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        onBlur={handleBlur}
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        name="name"
                                                    />
                                                    {touched.name && errors.name && (
                                                        <div className="text-danger">{errors.name}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Project Module Slug</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        onBlur={handleBlur}
                                                        value={values.slug}
                                                        onChange={handleChange}
                                                        name="slug"
                                                    />
                                                    {touched.slug && errors.slug && (
                                                        <div className="text-danger">{errors.slug}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Sort Number</h6>
                                                    <CustomInputField
                                                        type="number"
                                                        onBlur={handleBlur}
                                                        value={values.sort_no}
                                                        onChange={handleChange}
                                                        name="sort_no"
                                                    />
                                                    {touched.sort_no && errors.sort_no && (
                                                        <div className="text-danger">{errors.sort_no}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Project Module Status</h6>
                                                    <select
                                                        className="form-select"
                                                        name="isActive"
                                                        value={values.isActive}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="">Select Status</option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select>
                                                    {touched.isActive && errors.isActive && (
                                                        <div className="text-danger">{errors.isActive}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <Link to="#" className="btn btn-danger light ms-1">
                                                        Cancel
                                                    </Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!(isValid && dirty)}
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

export default ProjectModualForm;
