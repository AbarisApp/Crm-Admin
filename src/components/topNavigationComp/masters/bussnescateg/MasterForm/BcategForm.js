import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { postAccProjectModule, updateAccProjectModuleById, getAccProjectModuleById, updateAccProjectBusinessCategoryById, postAccProjectBusinessCategory, getAccProjectBusinessCategoryById } from '../../../../../api/login/Login';

function BcategForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Business Category",
    };

    const [initialValues, setInitialValues] = useState({
        isActive: "",
        name: '',
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.isActive) {
            errors.isActive = "Business Category status is required";
        }
        if (!values.name) {
            errors.name = "Business Category name is required";
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
            isActive: values.isActive,  // Convert to Boolean
        };

        try {
            if (!params?.id) {
                const res = await postAccProjectBusinessCategory(payload);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Business Category added successfully");
                    setTimeout(() => {
                        navigate(`/business-category`);
                    }, 1000);
                }
            } else {
                const res = await updateAccProjectBusinessCategoryById(params.id, payload);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Business Category updated successfully");
                    setTimeout(() => {
                        navigate(`/business-category`);
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
                const response = await getAccProjectBusinessCategoryById(params.id);
                if (response?.data) {
                    setInitialValues({
                        name: response.data.name,
                        isActive: response.data.isActive,
                    });
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
                                <h4 className="heading mb-0" style={{ padding: "10px" }}>
                                    {params?.id ? "UPDATE" : "ADD"} Business Category
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
                                                    <h6> Name</h6>
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
                                                    <h6>Status</h6>
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

export default BcategForm;
