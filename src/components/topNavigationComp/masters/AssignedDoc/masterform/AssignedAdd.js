import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import CustomInputField from '../../../../../common/CustomInputField';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { toast, ToastContainer } from 'react-toastify';
import { getAccAvailableExpenseListById, postAccAvailableExpenseList, updateAccAvailableExpenseListById } from '../../../../../api/login/Login';

function AssignedAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Assigned Documents ",
    };

    const [initialValues, setInitialValues] = useState({
        document: null,
        name: "",
        category: "",
        storage: "Local Disk (Default)",
        description: "",
        metaTags: "",
        roles: "",
        users: ""
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }
        return errors;
    };

    const blankBtn = () => {
        setInitialValues({
            document: null,
            name: "",
            category: "",
            storage: "Local Disk (Default)",
            description: "",
            metaTags: "",
            roles: "",
            users: ""
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await postAccAvailableExpenseList(values);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Document successfully added");
                    setTimeout(() => navigate(`/Expense-Master`), 2000);
                }
                blankBtn();
            } else {
                const res = await updateAccAvailableExpenseListById(params.id, values);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Document successfully updated");
                    setTimeout(() => navigate(`/Expense-Master`), 2000);
                }
                blankBtn();
            }
        } catch (error) {
            console.error("Error:", error);
            alert(error.message);
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(message, { position: "top-right" });
    };

    useEffect(() => {
        const fetchDocumentData = async () => {
            try {
                if (params?.id) {
                    const response = await getAccAvailableExpenseListById(params.id);
                    setInitialValues(response?.data);
                } else {
                    blankBtn();
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchDocumentData();
    }, [params?.id]);

    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-4">{params?.id ? "Update" : "Add"} Document</h4>
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
                                    setFieldValue,
                                    handleSubmit,
                                    errors,
                                    touched,
                                    handleBlur
                                } = formik;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label>Document Upload</label>
                                                <input
                                                    type="file"
                                                    name="document"
                                                    onChange={(event) => {
                                                        setFieldValue("document", event.currentTarget.files[0]);
                                                    }}
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                            <label>Name</label>
                                                <CustomInputField
                                                    type="text"
                                                    value={values.name}
                                                    hasError={errors.name && touched.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.name}
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label>Category</label>
                                                <select
                                                    name="category"
                                                    value={values.category}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control"
                                                >
                                                    <option value="">Select Category</option>
                                                    {/* Add options here */}
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label>Storage</label>
                                                <select
                                                    name="storage"
                                                    value={values.storage}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control"
                                                >
                                                    <option value="Local Disk (Default)">Local Disk (Default)</option>
                                                    {/* Add other storage options here */}
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label>Description</label>
                                                <textarea
                                                    name="description"
                                                    value={values.description}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control"
                                                    rows="3"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label>Meta Tags</label>
                                                <input
                                                    type="text"
                                                    name="metaTags"
                                                    value={values.metaTags}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control"
                                                    placeholder="Meta Tags"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label>Assign/share with roles</label>
                                                <select
                                                    name="roles"
                                                    value={values.roles}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control"
                                                >
                                                    <option value="">Select Role</option>
                                                    {/* Add role options here */}
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label>Assign/share with users</label>
                                                <select
                                                    name="users"
                                                    value={values.users}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control"
                                                >
                                                    <option value="">Select User</option>
                                                    {/* Add user options here */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-2">
                                                <button className="btn btn-success w-100" type="submit">
                                                    Save
                                                </button>
                                            </div>
                                            <div className="col-md-2">
                                                <button className="btn btn-danger w-100" type="button" onClick={blankBtn}>
                                                    Cancel
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
        </>
    );
}

export default AssignedAdd;
