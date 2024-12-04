import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../../common/CustomInputField";
import JoditEditor from "jodit-react";

function CreateNewLanguage() {
    const breadCrumbsTitle = {
        title_1: "Create New Language",
        title_2: "Language Editor ",
    };

    const navigate = useNavigate();
    const [emailEngine, setEmailEngine] = useState("sendEmail");
    const [initialValues, setInitialValues] = useState({
        api: "",
        id: "",
    });
    const params = useParams();

    const validate = (values) => {
        let errors = {};
        if (!values.smtpPassword) {
            errors.smtpPassword = "SMTP Password is required";
        }
        if (!values.smtpServer) {
            errors.smtpServer = "SMTP Server is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} New API Successfully.`, {
            position: "top-center",
        });
    };

    const currencyIdGet = async () => {
        try {
            // Placeholder for API call to get currency IDs or other data
            // const data = await getCurrency();
            // setCombo(data?.data);
        } catch (error) {
            alert(error.message);
        }
    };

    const submitForm = async (values) => {
        console.log(values);

        try {
            if (!params?.id) {
                try {
                    /* const res = await ApiTransactionAdd(values);
                       if (res?.statusCode === "200") {
                         toastSuccessMessage();
                         setTimeout(() => {
                           navigate('/api-master');
                         }, 4000);
                       } */
                } catch (error) {
                    console.error("Add Error:", error);
                }
            } else {
                try {
                    // const res = await apiMasterUpdate(params.id, values);
                    // if (res?.statusCode === "200") {
                    //   toastSuccessMessage();
                    // }
                } catch (error) {
                    console.error("Update Error:", error);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        currencyIdGet();
    }, []);

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    // const response = await getApiMasterById(params.id);
                    // setInitialValues(response.data);
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);

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
                                                <h4 className="heading mb-0">Send Email to Customers</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>

                                                

                                                <div className="col-xl-12 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.languageName}
                                                        hasError={errors.languageName && touched.languageName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.languageName}
                                                        id="languageName"
                                                        name="languageName"
                                                        placeholder="Language Name"
                                                        
                                                    />
                                                </div>

                                                <div className="col-xl-12 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.typoflang}
                                                        hasError={errors.typoflang && touched.typoflang}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.typoflang}
                                                        id="typoflang"
                                                        name="typoflang"
                                                        placeholder="Language Code ( 2 Letter ISO 639-1 Language Code - Reference )"
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.typoflang}
                                                        hasError={errors.typoflang && touched.typoflang}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.typoflang}
                                                        id="typoflang"
                                                        name="typoflang"
                                                        placeholder="Type Your Name"
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <label className="m-2">
                                                        <b>Text Direction</b>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={emailEngine}
                                                        name="emailEngine"
                                                    >
                                                        <option disabled>Select Your Option</option>
                                                        <option value="sendEmail">Left To Right</option>
                                                        <option value="smtp">Right To Left</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <label className="m-2">
                                                        <b>Status</b>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={emailEngine}
                                                        name="emailEngine"
                                                    >
                                                        <option disabled>Select Your Option</option>
                                                        <option value="sendEmail">Active</option>
                                                        <option value="smtp">In Active</option>
                                                    </select>
                                                </div>
                                                
                                                <div>
                                                    <Link to="#" className="btn btn-primary  ms-1">
                                                        Create Language File
                                                    </Link>
                                                    <Link to="#" className="btn btn-danger  ms-1">
                                                        Cancel
                                                    </Link>
                                                    {/* <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Send" : "Save"}
                                                    </button> */}
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

export default CreateNewLanguage;
