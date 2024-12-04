import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../../../common/CustomInputField";
import TestMailSetup from "./testMailSetup/TestMailSetup";

function EmailNotificationSetting() {
    const navigate = useNavigate();
    const params = useParams();
    const [showModal, setShowModal] = useState(false);


    const [emailEngine, setEmailEngine] = useState("smtp");
    const [initialValues, setInitialValues] = useState({
        api: "",
        id: "",
        smtpUsername: "",
        smtpPassword: "",
        smtpServer: "",
        smtpPort: "",
        smtpSecurity: "ssl" // Default value
    });

    const validate = (values) => {
        const errors = {};
        // Add validation logic as needed
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
                                                <h4 className="heading mb-0">Email Notification Settings</h4>
                                                <button className="btn bg-primary" onClick={() => setShowModal(!showModal)}>
                                                    <span className="pe-2"><i className="fa-solid fa-pen"></i></span>
                                                    Send Test Mail
                                                </button>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="m-2">
                                                    <label><b>Email Engine</b></label>
                                                    <select
                                                        className="form-select my-2"
                                                        onChange={(e) => {
                                                            setEmailEngine(e.target.value);
                                                            handleChange(e);
                                                        }}
                                                        value={emailEngine}
                                                        name="emailEngine"
                                                    >
                                                        <option value="smtp">SMTP</option>
                                                        <option value="Send Grid Api">Send Grid Api</option>
                                                        <option value="Malijet Api">Malijet Api</option>
                                                    </select>
                                                </div>

                                                {emailEngine === "smtp" && (
                                                    <div>
                                                        <div className="tbl-caption tbl-caption-2 mb-3">
                                                            <h4 className="heading mb-0">SMTP Configuration</h4>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-6 mb-3">
                                                                <CustomInputField
                                                                    type="password"
                                                                    value={values.smtpPassword}
                                                                    hasError={errors.smtpPassword && touched.smtpPassword}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.smtpPassword}
                                                                    id="smtpPassword"
                                                                    name="smtpPassword"
                                                                    placeholder="SMTP Password"
                                                                />
                                                            </div>
                                                            <div className="col-xl-6 mb-3">
                                                                <select
                                                                    className="form-select my-2"
                                                                    onChange={handleChange}
                                                                    value={values.smtpSecurity}
                                                                    name="smtpSecurity"
                                                                >
                                                                    <option value="ssl">SSL</option>
                                                                    <option value="tsl">TSL</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-xl-6 mb-3">
                                                                <CustomInputField
                                                                    type="text"
                                                                    value={values.smtpServer}
                                                                    hasError={errors.smtpServer && touched.smtpServer}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.smtpServer}
                                                                    id="smtpServer"
                                                                    name="smtpServer"
                                                                    placeholder="SMTP Server"
                                                                />
                                                            </div>
                                                            <div className="col-xl-6 mb-3">
                                                                <CustomInputField
                                                                    type="text"
                                                                    value={values.smtpPort}
                                                                    hasError={errors.smtpPort && touched.smtpPort}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.smtpPort}
                                                                    id="smtpPort"
                                                                    name="smtpPort"
                                                                    placeholder="SMTP Port"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {emailEngine === "Send Grid Api" && (
                                                    <div>
                                                        <div className="tbl-caption tbl-caption-2 mb-3">
                                                            <h4 className="heading mb-0">SendGrid API Configuration</h4>
                                                        </div>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.api}
                                                            hasError={errors.api && touched.api}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.api}
                                                            id="api"
                                                            name="api"
                                                            placeholder="App Key"
                                                        />
                                                    </div>
                                                )}
                                                {emailEngine === "Malijet Api" && (
                                                    <div>
                                                        <div className="tbl-caption tbl-caption-2 mb-3">
                                                            <h4 className="heading mb-0">Malijet API Configuration</h4>
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
                                                                    placeholder="Api Public Key"
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
                                                                    placeholder="Api Secret Key"
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
                        </div >
                    );
                }}
            </Formik >

            <ToastContainer />
            <TestMailSetup showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}

export default EmailNotificationSetting;
