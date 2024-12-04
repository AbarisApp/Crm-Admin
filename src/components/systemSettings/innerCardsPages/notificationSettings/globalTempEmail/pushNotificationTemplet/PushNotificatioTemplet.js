import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomInputField from "../../../../../../common/CustomInputField";
import CustomTextArea from "../../../../../../common/CustomTextArea";

function PushNotificationTemplet() {
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
                        <>
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">

                                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                                        <div className="row align-items-center">

                                            <div className="col-xl-12 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    value={"-----"}
                                                    hasError={errors.subject && touched.subject}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.subject}
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Notification Title  "
                                                />
                                            </div>
                                            <div className="col-xl-12 mb-3">
                                                <CustomTextArea
                                                    type="text"
                                                    value={"-----"}
                                                    hasError={errors.subject && touched.subject}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.subject}
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Push Notification Body"
                                                />
                                            </div>

                                        </div>
                                        <div>

                                            <button
                                                className="btn btn-primary me-1 w-100"
                                                type="submit"
                                                disabled={!isValid || !dirty}
                                            >
                                                {params?.id ? "Send" : "Submit"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    );
                }}
            </Formik>

        </>
    )
}
export default PushNotificationTemplet
