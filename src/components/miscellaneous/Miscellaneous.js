import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Alert } from "antd";

function Miscellaneous() {
    const navigate = useNavigate();

    const [emailEngine, setEmailEngine] = useState("sendEmail");
    const [initialValues, setInitialValues] = useState({
        api: "",
        id: "",
    });
    const params = useParams();

    const validate = (values) => {
        let errors = {};
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} New Api Successfully.`, {
            position: "top-center",
        });
    };

    const curencyidget = async () => {
        try {
            // const data = await getCountryAdd()
            // setCombo(data?.data)
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
                       if (res?.statusCode == "200") {
                       toastSuccessMessage();
                       setTimeout(() => {
                         navigate('/api-master')
                       }, [4000])
                     } */
                } catch (error) { }
            } else {
                try {
                    // const res = await apiMasterUpdate(params.id, values);
                    // if (res?.statusCode == "200") {
                    //   toastSuccessMessage();
                    // }
                } catch (error) { }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        curencyidget();
    }, []);

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    // const response = await getapiMasterId(params.id);
                    // const currencyData = response.data;
                    // setInitialValues(currencyData);
                } else {
                    // setInitialValues({
                    //     name: "",
                    //     code: "",
                    //     curruncy_id: "",
                    // });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);

    const handleEmailEngineChange = (event) => {
        setEmailEngine(event.target.value);
    };

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
                                            <div className="tbl-caption tbl-caption-2 mb-3">
                                                <h4 className="heading mb-0">Miscellaneous</h4>
                                            </div>
                                            <div className="tbl-caption tbl-caption-2 bg-primary rounded">
                                                <h4 className="heading mb-0">Miscellaneous Task
                                                </h4>
                                            </div>
                                            <div className="m-5">
                                                <Alert showIcon={false} message="Warning! All actions are irreversible!
" banner />
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="text-center">
                                                    <label className="m-2">
                                                        <b>Select your action</b>
                                                    </label>
                                                </div>
                                                <div className="col-xl-8 m-auto">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={(e) => {
                                                            handleEmailEngineChange(e);
                                                            handleChange(e);
                                                        }}
                                                        value={emailEngine}
                                                        name="emailEngine"
                                                    >
                                                        <option value="temp">Clean up all temporary directories</option>
                                                        <option value="screen">Clean up all cached screenshots</option>
                                                        <option value="recent">Clear all recent history data</option>
                                                        <option value="analytics">Clear all analytics data</option>
                                                        <option value="admin">Clear all admin login history data</option>
                                                        <option value="unverified">Clear all unverified users accounts</option>
                                                        <option value="users">Clear all users accounts</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <button
                                                        className="btn btn-success me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "send" : "Process"}
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
            </Formik >

            <ToastContainer />
        </>
    );
}

export default Miscellaneous;
