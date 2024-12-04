import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../../common/CustomInputField";
import JoditEditor from "jodit-react";

function SiteMap() {
    const breadCrumbsTitle = {
        title_1: "map",
        title_1: "Sitemap Build",
    }
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
                                                <h4 className="heading mb-0">Build Sitemap</h4>
                                            </div>
                                            <div class="p-3 mx-2">
                                                <div class="row border">
                                                    <div class="col-xl-6 p-2">
                                                        <p class="mb-0">Sitemap URL</p>
                                                        <small>(Use the link to submit sitemap into search engines)</small>
                                                    </div>
                                                    <div class="col-xl-6 p-2 text-right">
                                                        <p class="mb-0">https://demo.atozseotools.com/sitemap.xml</p>
                                                    </div>
                                                </div>

                                                <div class="row border mt-2">
                                                    <div class="col-xl-6 p-2">
                                                        <p class="mb-0">Sitemap File</p>
                                                    </div>
                                                    <div class="col-xl-6 p-2 text-right">
                                                        <p class="mb-0">File Found</p>
                                                        <button class="btn btn-success btn-sm mt-1">
                                                            <i class="fas fa-link"></i> View Sitemap File
                                                        </button>
                                                    </div>
                                                </div>

                                                <div class="row border mt-2">
                                                    <div class="col-xl-6 p-2">
                                                        <p class="mb-0">Build your sitemap</p>
                                                    </div>
                                                    <div class="col-xl-6 p-2 text-right">
                                                        <button class="btn btn-info btn-sm">
                                                            <i class="fas fa-sync"></i> Rebuild Sitemap
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row mt-2 border-bottom">
                                                    <div className="col-xl-12">
                                                        <div className="">
                                                            <h5>Sitemap Options</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>

                                                <div className="col-xl-6 mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <input
                                                            type="checkbox"
                                                            id="gzip"
                                                            style={{ transform: 'scale(2)', marginRight: '10px' }}
                                                        />
                                                        <label htmlFor="gzip">
                                                            <small>Compress sitemap files using Gzip</small>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <input
                                                            type="checkbox"
                                                            id="Job"
                                                            checked={true}
                                                            style={{ transform: 'scale(2)', marginRight: '10px', borderRadius: "0" }}
                                                        />
                                                        <label htmlFor="Job">
                                                            <small> Automatically rebuild sitemap using Cron Job
                                                            </small>
                                                        </label>
                                                    </div>
                                                </div>


                                                <div className="col-xl-6 mb-3">
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
                                                        <option value="sendEmail">Re build Daily</option>
                                                        <option value="sendEmail">Re build Weekly</option>
                                                        <option value="sendEmail">Re build Monthly</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <input
                                                            type="checkbox"
                                                            id="indexing"
                                                            style={{ transform: 'scale(2)', marginRight: '10px' }}
                                                        />
                                                        <label htmlFor="indexing">
                                                            <small> Enable multilingual link indexing</small>

                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <input
                                                            type="checkbox"
                                                            id="frequency"
                                                            checked={true}
                                                            style={{ transform: 'scale(2)', marginRight: '10px', borderRadius: "0" }}
                                                        />
                                                        <label htmlFor="frequency">
                                                            <small> Auto calculate priority level and change frequency</small>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <label className="m-2">
                                                        <b>Default Change Frequency</b>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={emailEngine}
                                                        name="emailEngine"
                                                    >
                                                        <option value="always">Always</option>
                                                        <option value="hourly">Hourly</option>
                                                        <option selected="" value="daily">Daily</option>
                                                        <option value="weekly">Weekly</option>
                                                        <option value="monthly">Monthly</option>
                                                        <option value="yearly">Yearly</option>
                                                        <option value="never">Never</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        value={0.9}
                                                        hasError={errors.subject && touched.subject}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.subject}
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="Default Priority Level"
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
                                                        {params?.id ? "Send" : "Save Settings"}
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
    )
}

export default SiteMap
