import React from 'react'
import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../../../common/CustomInputField";
import UloadConfigFile from './uploadConfigFile/UloadConfigFile';

function PushNotificationSettings() {
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
                                                <h4 className="heading mb-0">Push Notification Settings</h4>
                                                <div >
                                                    <button className="btn bg-primary btn-sm" onClick={() => setShowModal(!showModal)}>
                                                        <span className="pe-2"><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
                                                        <span>Upload Config File</span>
                                                    </button>
                                                    <button className="btn bg-primary btn-sm" >
                                                        <span className="pe-2"><i class="fa-solid fa-handshake-angle"></i></span>
                                                        <span>Help</span>
                                                    </button>
                                                    <button className="btn bg-primary btn-sm" >
                                                        <span className="pe-2"><i class="fa-solid fa-down-long"></i></span>
                                                        <span>Download  File</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div>
                                                    <div className="py-1 px-4 mb-3 bg-info rounded">
                                                        <p className='text-white '>If you want to send push notification by the firebase, Your system must be SSL certified</p>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-4 mb-3">
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
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.smtpUsername}
                                                                hasError={errors.smtpUsername && touched.smtpUsername}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.smtpUsername}
                                                                id="smtpUsername"
                                                                name="smtpUsername"
                                                                placeholder="Auth Domain "
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.smtpUsername}
                                                                hasError={errors.smtpUsername && touched.smtpUsername}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.smtpUsername}
                                                                id="smtpUsername"
                                                                name="smtpUsername"
                                                                placeholder="Project Id "
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.smtpUsername}
                                                                hasError={errors.smtpUsername && touched.smtpUsername}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.smtpUsername}
                                                                id="smtpUsername"
                                                                name="smtpUsername"
                                                                placeholder="Storage Bucket "
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.smtpUsername}
                                                                hasError={errors.smtpUsername && touched.smtpUsername}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.smtpUsername}
                                                                id="smtpUsername"
                                                                name="smtpUsername"
                                                                placeholder="Messaging Sender Id "
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.smtpUsername}
                                                                hasError={errors.smtpUsername && touched.smtpUsername}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.smtpUsername}
                                                                id="smtpUsername"
                                                                name="smtpUsername"
                                                                placeholder="App Id"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.smtpUsername}
                                                                hasError={errors.smtpUsername && touched.smtpUsername}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.smtpUsername}
                                                                id="smtpUsername"
                                                                name="smtpUsername"
                                                                placeholder="Measurement Id "
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

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
            <UloadConfigFile showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default PushNotificationSettings
