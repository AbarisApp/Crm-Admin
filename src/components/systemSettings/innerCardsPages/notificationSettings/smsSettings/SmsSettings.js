import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../../../common/CustomInputField";
import TestSMSetup from "./testSmsSetup/TestSmsSetup";

function SmsSetting() {
    const navigate = useNavigate();
    const params = useParams();
    const [showModal, setShowModal] = useState(false);

    const [initialValues, setInitialValues] = useState({
        api: "",
        smtpUsername: "",
        smtpPassword: "",
        smtpServer: "",
        smtpPort: "",
        smtpSecurity: "ssl", // Default value
        emailEngine: "Clickatell" // Set default selection for dropdown
    });

    const validate = (values) => {
        const errors = {};
        // Add validation logic if necessary (e.g., required fields)
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} New API Successfully.`, {
            position: "top-center",
        });
    };

    const fetchInitialValues = async () => {
        try {
            if (params?.id) {
                // Fetch data based on ID
                // const response = await getapiMasterId(params.id);
                // setInitialValues(response.data);
            }
        } catch (error) {
            console.error("Error fetching initial values:", error);
        }
    };

    const submitForm = async (values) => {
        console.log(values);
        try {
            if (!params?.id) {
                // Add new API logic
                // const res = await ApiTransactionAdd(values);
            } else {
                // Update existing API logic
                // const res = await apiMasterUpdate(params.id, values);
            }
            toastSuccessMessage();
            setTimeout(() => {
                navigate('/api-master');
            }, 4000);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchInitialValues();
    }, [params?.id]);

    return (
        <>
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
                        <div className="row m-4">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">SMS Notification Settings</h4>
                                                <button className="btn bg-primary" onClick={() => setShowModal(!showModal)}>
                                                    <span className="pe-2"><i className="fa-solid fa-pen"></i></span>
                                                    Send Test SMS
                                                </button>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="m-2">
                                                    <label><b>Sms Send Method</b></label>
                                                    <select
                                                        className="form-select my-2"
                                                        onChange={handleChange}
                                                        value={values.emailEngine} // Controlled by Formik now
                                                        name="emailEngine"
                                                    >
                                                        <option value="Clickatell">Clickatell</option>
                                                        <option value="Infobib">Infobib</option>
                                                        <option value="Message Bird">Message Bird</option>
                                                        <option value="Nexmo">Nexmo</option>
                                                    </select>
                                                </div>

                                                {values.emailEngine === "Clickatell" && (
                                                    <div>
                                                        <div className="tbl-caption tbl-caption-2 mb-3">
                                                            <h4 className="heading mb-0">Clickatell Configuration</h4>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.smtpUsername}
                                                                hasError={errors.smtpUsername && touched.smtpUsername}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.smtpUsername}
                                                                id="smtpUsername"
                                                                name="smtpUsername"
                                                                placeholder="Api Key"
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                {values.emailEngine === "Infobib" && (
                                                    <div>
                                                        <div className="tbl-caption tbl-caption-2 mb-3">
                                                            <h4 className="heading mb-0">Infobip Configuration</h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-6">
                                                                <CustomInputField
                                                                    type="text"
                                                                    value={values.api}
                                                                    hasError={errors.api && touched.api}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.api}
                                                                    id="api"
                                                                    name="api"
                                                                    placeholder="Username"
                                                                />
                                                            </div>
                                                            <div className="col-xl-6">
                                                                <CustomInputField
                                                                    type="text"
                                                                    value={values.api}
                                                                    hasError={errors.api && touched.api}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.api}
                                                                    id="api"
                                                                    name="api"
                                                                    placeholder="Password"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {values.emailEngine === "Message Bird" && (
                                                    <div>
                                                        <div className="tbl-caption tbl-caption-2 mb-3">
                                                            <h4 className="heading mb-0">Message Bird Configuration</h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <CustomInputField
                                                                    type="text"
                                                                    value={values.api}
                                                                    hasError={errors.api && touched.api}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.api}
                                                                    id="api"
                                                                    name="api"
                                                                    placeholder="Api Public Key"
                                                                />
                                                            </div>
                                                           
                                                        </div>
                                                    </div>
                                                )}
                                                {values.emailEngine === "Nexmo" && (
                                                    <div>
                                                        <div className="tbl-caption tbl-caption-2 mb-3">
                                                            <h4 className="heading mb-0">Nexmo Configuration</h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-6">
                                                                <CustomInputField
                                                                    type="text"
                                                                    value={values.api}
                                                                    hasError={errors.api && touched.api}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.api}
                                                                    id="api"
                                                                    name="api"
                                                                    placeholder="Api Key"
                                                                />
                                                            </div>
                                                            <div className="col-xl-6">
                                                                <CustomInputField
                                                                    type="text"
                                                                    value={values.api}
                                                                    hasError={errors.api && touched.api}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.api}
                                                                    id="api"
                                                                    name="api"
                                                                    placeholder="Api Secret "
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="mt-3">
                                                    <Link to="#" className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Submit"}
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
            <TestSMSetup showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}

export default SmsSetting;
