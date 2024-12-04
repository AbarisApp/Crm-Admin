import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../common/CustomInputField";
import JoditEditor from "jodit-react";
import "react-datepicker/dist/react-datepicker.css";

function CreateLink() {
    const breadCrumbsTitle = {
        title_1: "Create a New Link",
    };

    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        urlType: "internal", // Default to Internal Link
        urlTitle: "",
        url: "{{baseLink}}",
        status: "published",
        sortOrder: 1,
        targetAttribute: "none", // Default for target attribute
        relAttribute: "none", // Default for rel attribute
        showOnHeader: false,
        showOnFooter: false,
    });
    const params = useParams();

    const validate = (values) => {
        let errors = {};
        if (!values.urlTitle) {
            errors.urlTitle = "URL title is required";
        }
        if (!values.url) {
            errors.url = "URL is required";
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
                                        <div className="table-responsive">
                                            <div className="tbl-caption">
                                                <h3 className="heading mb-0">{params?.id ? "Edit Link" : "Create New Link"}</h3>
                                            </div>
                                            <form className="row" onSubmit={handleSubmit}>
                                                
                                                {/* URL Type */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="urlType" className="m-2"><b>URL Type</b></label>
                                                    <select
                                                        className="form-select"
                                                        name="urlType"
                                                        onChange={handleChange}
                                                        value={values.urlType}
                                                    >
                                                        <option value="internal">Internal Link</option>
                                                        <option value="external">External Link</option>
                                                    </select>
                                                </div>

                                                {/* URL Title */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="urlTitle" className="m-2"><b>URL Title</b></label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.urlTitle}
                                                        hasError={errors.urlTitle && touched.urlTitle}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.urlTitle}
                                                        id="urlTitle"
                                                        name="urlTitle"
                                                        placeholder="URL Title"
                                                    />
                                                </div>

                                                {/* URL */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="url" className="m-2"><b>URL</b></label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.url}
                                                        hasError={errors.url && touched.url}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.url}
                                                        id="url"
                                                        name="url"
                                                        placeholder="URL"
                                                    />
                                                    <small className="text-muted"> will be replaced with the website's base path</small>
                                                </div>

                                                {/* Status */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="status" className="m-2"><b>Status</b></label>
                                                    <select
                                                        className="form-select"
                                                        name="status"
                                                        onChange={handleChange}
                                                        value={values.status}
                                                    >
                                                        <option value="published">Published</option>
                                                        <option value="draft">Draft</option>
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
                                                    />
                                                </div>

                                                {/* Target Attribute */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="targetAttribute" className="m-2"><b> Attribute (Optional)</b></label>
                                                    <select
                                                        className="form-select"
                                                        name="targetAttribute"
                                                        onChange={handleChange}
                                                        value={values.targetAttribute}
                                                    >
                                                        <option value="none">None</option>
                                                        <option value="_blank">Open in New Tab</option>
                                                        <option value="_self">Open in Same Tab</option>
                                                    </select>
                                                </div>

                                                {/* Rel Attribute */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="relAttribute" className="m-2"><b> Attribute (Optional)</b></label>
                                                    <select
                                                        className="form-select"
                                                        name="relAttribute"
                                                        onChange={handleChange}
                                                        value={values.relAttribute}
                                                    >
                                                        <option value="none">None</option>
                                                        <option value="nofollow">No Follow</option>
                                                        <option value="noopener">No Opener</option>
                                                    </select>
                                                </div>

                                                {/* Display link on header */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="showOnHeader" className="m-2">
                                                        <input
                                                            type="checkbox"
                                                            name="showOnHeader"
                                                            checked={values.showOnHeader}
                                                            onChange={handleChange}
                                                            id="showOnHeader"
                                                        />{" "}
                                                        Display link on header menu bar
                                                    </label>
                                                </div>

                                                {/* Display link on footer */}
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="showOnFooter" className="m-2">
                                                        <input
                                                            type="checkbox"
                                                            name="showOnFooter"
                                                            checked={values.showOnFooter}
                                                            onChange={handleChange}
                                                            id="showOnFooter"
                                                        />{" "}
                                                        Display link on footer menu bar
                                                    </label>
                                                </div>

                                                {/* Submit and Cancel */}
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

export default CreateLink