import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../../common/CustomInputField";
import JoditEditor from "jodit-react";
import AccountActivaytionMailTemp from "./accountActivationMailTemplet/AccountActivaytionMailTemp";
import PasswordResetMailTemplet from "./passwordResetMailTemplet/PasswordResetMailTemplet";

function EmailTemplet() {
    const breadCrumbsTitle = {
        title_1: "E-mail Setup",
        title_2: "Email Templets",
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
        // if (!values.smtpPassword) {
        //     errors.smtpPassword = "SMTP Password is required";
        // }
        // if (!values.smtpServer) {
        //     errors.smtpServer = "SMTP Server is required";
        // }
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
                                        <div className="table-responsive active-projects style-1 ">
                                            <div className="tbl-caption tbl-caption-2 mb-4">
                                                <h4 className="heading mb-0"> Email Templates  </h4>
                                            </div>
                                            <div className="tbl-caption tbl-caption-2 bg-info p-3 rounded">
                                                <h4 className="heading mb-0"> <small>Note: Short Codes also supported inside mail templates!
                                                </small> </h4>
                                            </div>
                                            <div className=" border-bottom border-dark pb-5">
                                                <div className="row ">
                                                    <div className="col-xl-8">
                                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                            <AccountActivaytionMailTemp values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
                                                        </form>
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <label>Replacement Codes</label>
                                                        <div className="border card">
                                                            <div className="well  p-2">
                                                                <p><b>{'{'}SiteName{'}'}</b> - Returns your site name<br /></p>
                                                                <p><b>{'{'}FullName{'}'}</b> - Returns customers name<br /></p>
                                                                <p><b>{'{'}UserName{'}'}</b> - Returns customers username<br /></p>
                                                                <p><b>{'{'}VerificationUrl{'}'}</b> - Returns verification link<br /></p>
                                                                <p><b>{'{'}UserEmailId{'}'}</b> - Returns customers mail id<br /></p>
                                                                <p><b>{'{'}CustomerIp{'}'}</b> - Returns account registered IP<br /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" border-bottom border-dark pb-5">
                                                <div className="row ">
                                                    <div className="col-xl-8">
                                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                            <PasswordResetMailTemplet values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
                                                        </form>
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <label>Replacement Codes</label>
                                                        <div className="border card">
                                                            <div className="well  p-2">
                                                                <p><b>{'{'}SiteName{'}'}</b> - Returns your site name<br /></p>
                                                                <p><b>{'{'}FullName{'}'}</b> - Returns customers name<br /></p>
                                                                <p><b>{'{'}UserName{'}'}</b> - Returns customers username<br /></p>
                                                                <p><b>{'{'}VerificationUrl{'}'}</b> - Returns verification link<br /></p>
                                                                <p><b>{'{'}UserEmailId{'}'}</b> - Returns customers mail id<br /></p>
                                                                <p><b>{'{'}CustomerIp{'}'}</b> - Returns account registered IP<br /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-sucess mt-4"
                                                type="submit"
                                                disabled={!isValid || !dirty}
                                            >
                                                Update Templete
                                            </button>
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

export default EmailTemplet
