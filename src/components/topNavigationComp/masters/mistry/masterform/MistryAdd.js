import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { getAccLedgerByPage, getAddMistryById, paginationstaffMaster, postAddMistry, staffList, updateAddMistryById } from '../../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';

function MistryAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Mistry Master",
    };
    const [initialValues, setInitialValues] = useState({
        mistry_name: "",
        mobile: "",
        account: "",
        detail: "",
    });
    const [accountOptions, setAccountOptions] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.mistry_name) {
            errors.mistry_name = "Mistry Name is required";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile number is required";
        } else if (isNaN(values.mobile)) {
            errors.mobile = "Mobile number must be a number";
        }
        if (!values.account) {
            errors.account = "Account selection is required";
        }
        return errors;
    };

    const blankBtn = () => {
        setInitialValues({
            mistry_name: "",
            mobile: "",
            account: "",
            detail: "",
            user_id: ""
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await postAddMistry(values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Added successfully");
                    setTimeout(() => navigate(`/mistry-list`), 2000);
                }
                blankBtn();
            } else {
                const res = await updateAddMistryById(params.id, values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Updated successfully");
                    blankBtn();
                    setTimeout(() => navigate(`/mistry-list`), 2000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(` ${message}`, {
            position: "top-right",
        });
    };
    const [staff , setStaff] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (params?.id) {
                    const response = await getAddMistryById(params.id);
                    setInitialValues(response?.data || initialValues);
                } else {
                    // blankBtn();
                }
                const response = await getAccLedgerByPage(0 ,100);
                // const response2 = await paginationstaffMaster(0 ,100);
                // setStaff(response2.data);
                setAccountOptions(response.data);
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
                                    {params?.id ? "UPDATE" : "ADD"} Mistry Master
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
                                                        value={values.mistry_name}
                                                        hasError={errors.mistry_name && touched.mistry_name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mistry_name}
                                                        id="mistry_name"
                                                        name="mistry_name"
                                                        placeholder="Mistry Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.mobile}
                                                        hasError={errors.mobile && touched.mobile}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mobile}
                                                        id="mobile"
                                                        name="mobile"
                                                        placeholder="Mobile"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                  
                                                    <select
                                                        className="form-select"
                                                        value={values.account}
                                                        name='account'
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select Account</option>
                                                        {accountOptions?.map((taxMaster) => (
                                                            <option key={taxMaster._id} value={taxMaster._id}>
                                                                {taxMaster.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                {/* <div className="col-xl-4 mb-3">
                                                  
                                                    <select
                                                        className="form-select"
                                                        value={values.user_id}
                                                        name='user_id'
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select User</option>
                                                        {staff?.map((taxMaster) => (
                                                            <option key={taxMaster._id} value={taxMaster._id}>
                                                                {taxMaster.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div> */}
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.detail}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        id="detail"
                                                        name="detail"
                                                        placeholder="Detail"
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

export default MistryAdd;
