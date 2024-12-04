import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../common/CustomInputField";
import JoditEditor from "jodit-react";
import DatePicker from "react-datepicker"; // assuming you use this for Posted Date
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";

function CreatePages() {
    const breadCrumbsTitle = {
        title_1: "Create New Page",
    };

    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        title: "",
        name: "",
        url: "",
        postedDate: new Date(),
        metaDescription: "",
        metaKeywords: "",
        access: "all", // default option for access
        allLanguageUsers: false,
        status: "active", // assuming 'active' and 'inactive'
        sortOrder: 0,
        showOnHeader: false,
    });
    const params = useParams();

    const validate = (values) => {
        let errors = {};
        if (!values.title) {
            errors.title = "Page title is required";
        }
        if (!values.name) {
            errors.name = "Page name is required";
        }
        if (!values.url) {
            errors.url = "Page URL is required";
        }
        if (!values.metaDescription) {
            errors.metaDescription = "Meta description is required";
        }
        if (!values.metaKeywords) {
            errors.metaKeywords = "Meta keywords are required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Page Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            console.log("Submitted Values: ", values);
            toastSuccessMessage();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitForm}
                enableReinitialize
                className="tbl-captionn"
            >
                {(formik) => {
                    const {
                        values,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty,
                    } = formik;
                    return (
                        <div className="row m-4">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">{params?.id ? "Edit Page" : "Create New Page"}</h4>
                                            </div>
                                            <form className="row tbl-captionn" onSubmit={handleSubmit}>

                                                {/* Page Title */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="title" className="m-2"><b>Page Title</b></label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.title}
                                                        hasError={errors.title && touched.title}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.title}
                                                        id="title"
                                                        name="title"
                                                        placeholder="Page Title"
                                                    />
                                                </div>

                                                {/* Page Name */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="name" className="m-2"><b>Page Name</b></label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Page Name"
                                                    />
                                                </div>

                                                {/* Page URL */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="url" className="m-2"><b>Page URL</b></label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.url}
                                                        hasError={errors.url && touched.url}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.url}
                                                        id="url"
                                                        name="url"
                                                        placeholder="Page URL"
                                                    />
                                                </div>

                                                {/* Posted Date */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="postedDate" className="m-2"><b>Posted Date</b></label>
                                                    <CustomInputField
                                                        type="date"
                                                        value={values.postedDate}
                                                        hasError={errors.postedDate && touched.postedDate}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.postedDate}
                                                        id="postedDate"
                                                        name="postedDate"
                                                    />
                                                </div>

                                                {/* Meta Description */}
                                              

                                                {/* Meta Keywords */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="metaKeywords" className="m-2"><b>Meta Keywords</b></label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.metaKeywords}
                                                        hasError={errors.metaKeywords && touched.metaKeywords}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.metaKeywords}
                                                        id="metaKeywords"
                                                        name="metaKeywords"
                                                        placeholder="Meta Keywords (separated with commas)"
                                                    />
                                                </div>

                                                {/* Who can access this page? */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="access" className="m-2"><b>Who can access this page?</b></label>
                                                    <select
                                                        className="form-select"
                                                        name="access"
                                                        onChange={handleChange}
                                                        value={values.access}
                                                        id="access"
                                                    >
                                                        <option value="all">All Users</option>
                                                        <option value="admin">Admin Only</option>
                                                        <option value="registered">Registered Users</option>
                                                    </select>
                                                </div>

                                                {/* Status */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="status" className="m-2"><b>Status</b></label>
                                                    <select
                                                        className="form-select"
                                                        name="status"
                                                        onChange={handleChange}
                                                        value={values.status}
                                                        id="status"
                                                    >
                                                        <option value="active">Active</option>
                                                        <option value="inactive">Inactive</option>
                                                    </select>
                                                </div>

                                                {/* Sort Order */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="sortOrder" className="m-2"><b>Sort Order</b></label>
                                                    <CustomInputField
                                                        type="number"
                                                        value={values.sortOrder}
                                                        hasError={errors.sortOrder && touched.sortOrder}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.sortOrder}
                                                        id="sortOrder"
                                                        name="sortOrder"
                                                        placeholder="Sort Order"
                                                    />
                                                </div>

                                                {/* Display the page link on header menu bar */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="showOnHeader" className="m-2">
                                                        <input
                                                            type="checkbox"
                                                            name="showOnHeader"
                                                            checked={values.showOnHeader}
                                                            onChange={handleChange}
                                                            id="showOnHeader"
                                                        />
                                                        {" "}Display the page link on header menu bar?
                                                    </label>
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <label htmlFor="metaDescription" className="m-2"><b>Meta Description</b></label>
                                                    <JoditEditor
                                                        value={values.metaDescription}
                                                        tabIndex={1}
                                                        onBlur={(newContent) => setFieldValue("metaDescription", newContent)}
                                                        onChange={(newContent) => setFieldValue("metaDescription", newContent)}
                                                    />
                                                    {errors.metaDescription && touched.metaDescription && (
                                                        <div className="text-danger mt-1">{errors.metaDescription}</div>
                                                    )}
                                                </div>
                                                {/* Submit and Cancel Buttons */}
                                                <div className="col-xl-12">
                                                    <Link to="#" className="btn btn-danger light ms-1">
                                                        Cancel
                                                    </Link>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Create"}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Formik>
            <ToastContainer />
        </>
    );
}

export default CreatePages