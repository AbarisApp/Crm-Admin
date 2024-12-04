import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import JoditEditor from "jodit-react";
// import defPhto from "../../../../../assets/images/kyc/default-photo.jpg"
import { Button } from "react-bootstrap";
import CustomInputField from "../../../../../../common/CustomInputField";

function EmailSentTemp() {
    const fullname = "John Doe";
    const username = "johndoe123";
    const message = "This is your system-generated message.";
    const siteName = "ViserLab";

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const [emailEngine, setEmailEngine] = useState("sendEmail");
    const [initialValues, setInitialValues] = useState({
        api: "",
        id: "",
    });
    const params = useParams();
    const config = {
        height: 350, // Adjust this value to increase the height
        // other configuration options...
    };
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
                                <div className="card-body p-0">
                                    <div className="table-responsive active-projects style-1">
                                        
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row align-items-center">

                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        value={"-----"}
                                                        hasError={errors.subject && touched.subject}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.subject}
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="Email Sent From - Name "
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        value={"-----"}
                                                        hasError={errors.subject && touched.subject}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.subject}
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="Email Sent From - Email "
                                                    />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={content}
                                                        config={config} // Pass the config object with the height set
                                                        tabIndex={1} // tabIndex of textarea
                                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                        onChange={newContent => { }}
                                                    />

                                                </div>
                                                <div className="col-xl-6">
                                                    <div style={styles.emailContainer}>
                                                        <div style={styles.header}>
                                                            <h4>This is a System Generated Email</h4>
                                                        </div>
                                                        <div style={styles.logoContainer}>
                                                            <img src="/path-to-your-logo.png" alt="ViserLab Logo" style={styles.logo} />
                                                            <h2 style={styles.logoText}>viserlab</h2>
                                                        </div>
                                                        <div style={styles.body}>
                                                            <p>Hello <strong>{fullname}</strong> (<strong>{username}</strong>)</p>
                                                            <p style={styles.message}>{message}</p>
                                                        </div>
                                                        <div style={styles.footer}>
                                                            <p>&copy; 2024 {siteName}. All Rights Reserved.</p>
                                                        </div>
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
                    );
                }}
            </Formik>

        </>
    )
}
const styles = {
    emailContainer: {
        fontFamily: 'Arial, sans-serif',
        border: '1px solid #ddd',
        borderRadius: '5px',
        maxWidth: '600px',
        padding: '0px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        fontSize: '18px',
    },
    logoContainer: {
        backgroundColor: '#fff',
        padding: '20px 0',
        borderBottom: '1px solid #ddd',
    },
    logo: {
        width: '60px',
        height: '60px',
    },
    logoText: {
        margin: '10px 0 0 0',
        fontWeight: 'bold',
        fontSize: '24px',
        color: '#007bff',
    },
    body: {
        padding: '20px',
        backgroundColor: '#fff',
    },
    message: {
        marginTop: '20px',
        padding: '10px 0',
        color: '#333',
        fontSize: '16px',
    },
    footer: {
        backgroundColor: '#f1f1f1',
        padding: '10px 0',
        color: '#999',
        fontSize: '12px',
    },
};

export default EmailSentTemp
