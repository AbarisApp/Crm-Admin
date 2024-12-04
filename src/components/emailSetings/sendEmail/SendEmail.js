import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../../common/CustomInputField";
import JoditEditor from "jodit-react";

function SendEmail() {
    const breadCrumbsTitle = {
        title_1: "E-mail Setup",
        title_2: "E-mail send",
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
                                                    <label className="m-2">
                                                        <b>Custom Email</b>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={emailEngine}
                                                        name="emailEngine"
                                                    >
                                                        <option disabled>Select Your Option</option>
                                                        <option value="sendEmail">Custom Email</option>
                                                        <option value="smtp">Email To customer</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-12 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        value={values?.to}
                                                        hasError={errors.to && touched.to}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.to}
                                                        id="to"
                                                        name="to"
                                                        placeholder="To"
                                                    />
                                                </div>

                                                <div className="col-xl-12 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.subject}
                                                        hasError={errors.subject && touched.subject}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.subject}
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="Subject"
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">

                                                    <JoditEditor
                                                        value={"hi"}
                                                        onChange={handleChange}
                                                        tabIndex={1}
                                                        config={{
                                                            readonly: false,
                                                            toolbarSticky: false,
                                                            toolbarAdaptive: false,
                                                        }}
                                                    />
                                                </div>
                                                <div>
                                                    <Link to="#" className="btn btn-danger light ms-1">
                                                        Cancel
                                                    </Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Send" : "Save"}
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

export default SendEmail;
