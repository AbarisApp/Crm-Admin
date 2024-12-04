import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { getAccTaxMasterById, postAccTaxMaster, updateAccTaxMasterById } from '../../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';

function TaxAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Tax Master",
    };
    const [initialValues, setInitialValues] = useState({
        name: "",
        percentage: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.percentage) {
            errors.percentage = "Percentage is required";
        } else if (isNaN(values.percentage)) {
            errors.percentage = "Percentage must be a number";
        }
        return errors;
    };

    const blankBtn = () => {
        setInitialValues({
            name: "",
            percentage: "",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await postAccTaxMaster(values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Added successfully");
                    setTimeout(() => navigate(`/Tax-Master`), 2000);
                }
                blankBtn();
            } else {
                const res = await updateAccTaxMasterById(params.id, values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Updated successfully");
                    blankBtn();
                    setTimeout(() => navigate(`/Tax-Master`), 2000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (params?.id) {
                    const response = await getAccTaxMasterById(params.id);
                    setInitialValues(response?.data || initialValues);
                } else {
                    blankBtn();
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [params?.id]);

    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Tax Master
                                </h4>
                            </div>
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
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Nature"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.percentage}
                                                        hasError={errors.percentage && touched.percentage}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.percentage}
                                                        id="percentage"
                                                        name="percentage"
                                                        placeholder="Percentage"
                                                    />
                                                </div>
                                                <div className="col-xl-2 mb-3">
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaxAdd;
