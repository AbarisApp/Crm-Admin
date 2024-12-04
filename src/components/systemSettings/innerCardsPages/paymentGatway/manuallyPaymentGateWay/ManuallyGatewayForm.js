import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import JoditEditor from "jodit-react";
import CustomInputField from "../../../../../common/CustomInputField";
import defPhto from "../../../../../assets/images/kyc/default-photo.jpg"
import { Button } from "react-bootstrap";
import GenerateNewForm from "./generateNewForm/enerateNewForm";

function ManuallyGatewayForm({ setShowUpdateMGateway, showUpdateMGateway }) {
    const [show, setShow] = useState(false);
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
    const editor = useRef(null);
    const [content, setContent] = useState('');


    return (
        <>
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
                                            <div className="tbl-caption tbl-caption-2 d-flex justify-content-between align-items-center">
                                                <h4 className="heading mb-0">Add Manual Gateway</h4>
                                                <div>
                                                    <button className="btn btn-primary" onClick={() => setShowUpdateMGateway(!showUpdateMGateway)}>Back</button>
                                                </div>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row align-items-center">
                                                    <div className="col-xl-3 mb-3">
                                                        <div className="card">
                                                            <img src={defPhto} alt="def" className="rounded" style={{ width: "100%", height: "100%" }} />
                                                        </div>
                                                        <Button variant="primary" className="upload-btn mt-2" style={{ borderRadius: '50%' }}>
                                                            <i className="bi bi-upload"></i>
                                                        </Button>
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={"-----"}
                                                            hasError={errors.subject && touched.subject}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.subject}
                                                            id="subject"
                                                            name="subject"
                                                            placeholder="Gateway Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={"-----"}
                                                            hasError={errors.subject && touched.subject}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.subject}
                                                            id="subject"
                                                            name="subject"
                                                            placeholder="Currency"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={"-----"}
                                                            hasError={errors.subject && touched.subject}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.subject}
                                                            id="subject"
                                                            name="subject"
                                                            placeholder="Rate"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="card">
                                                            <div className="table-responsive active-projects style-1 mb-3 ">
                                                                <div className="tbl-caption tbl-caption-2 d-flex justify-content-between align-items-center">
                                                                    <h4 className="heading mb-0">Range</h4>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <CustomInputField
                                                                    type="number"
                                                                    value={"-----"}
                                                                    hasError={errors.subject && touched.subject}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.subject}
                                                                    id="subject"
                                                                    name="subject"
                                                                    placeholder="Minimum Amount"
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <CustomInputField
                                                                    type="number"
                                                                    value={"-----"}
                                                                    hasError={errors.subject && touched.subject}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.subject}
                                                                    id="subject"
                                                                    name="subject"
                                                                    placeholder="Maximum Amount"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="card">
                                                            <div className="table-responsive active-projects style-1 mb-3">
                                                                <div className="tbl-caption tbl-caption-2 d-flex justify-content-between align-items-center">
                                                                    <h4 className="heading mb-0">Charge</h4>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <CustomInputField
                                                                    type="number"
                                                                    value={"-----"}
                                                                    hasError={errors.subject && touched.subject}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.subject}
                                                                    id="subject"
                                                                    name="subject"
                                                                    placeholder="Fixed Charge"
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <CustomInputField
                                                                    type="number"
                                                                    value={"-----"}
                                                                    hasError={errors.subject && touched.subject}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={errors.subject}
                                                                    id="subject"
                                                                    name="subject"
                                                                    placeholder="Percent Charge"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="row">
                                                        <div className="table-responsive active-projects style-1 mb-3 ">
                                                            <div className="tbl-caption tbl-caption-2 d-flex justify-content-between align-items-center">
                                                                <h4 className="heading mb-0">Deposit Instruction
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={content}
                                                            // config={config}
                                                            tabIndex={1} // tabIndex of textarea
                                                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                            onChange={newContent => { }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="row">
                                                        <div className="table-responsive active-projects style-1 mb-3">
                                                            <div className="tbl-caption tbl-caption-2 d-flex justify-content-between align-items-center">
                                                                <h4 className="heading mb-0">User Data</h4>
                                                                <div>
                                                                    <button className="btn btn-primary" onClick={() => setShow(!show)}>+ ADD NEW</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-12">
                                                        <div className="p-4">

                                                        </div>
                                                    </div>
                                                </div>

                                                <div>

                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Send" : "Submit"}
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
            <GenerateNewForm show={show} setShow={setShow} />
        </>
    )
}

export default ManuallyGatewayForm

