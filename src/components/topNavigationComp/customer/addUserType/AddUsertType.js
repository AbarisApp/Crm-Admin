import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import CustomInputField from '../../../../common/CustomInputField';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import { UserTypeUpdate, addUserType, getUserType, listUserType } from '../../../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';

const AddUsertType = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        user_type: "",
        lockedAmount: "",
        is_active: false,
        parent_user_type: "",
        role_prefix: "",
        isSponsored: false,
        s_no: ""
    });

    const validate = (values) => {
        let errors = {};
        if (!values.user_type) {
            errors.user_type = "User Type is required";
        }
        if (!values.s_no) {
            errors.s_no = "Serial Number is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} User Type Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await addUserType(values);
                if (res.statusCode == '200') {
                    toastSuccessMessage();
                }
                setTimeout(() => {
                    navigate('/user-type');
                }, 5000);
            } else {
                const res = await UserTypeUpdate(params.id, values);
                if (res.statusCode == '200') {
                    toastSuccessMessage();
                }
                setTimeout(() => {
                    navigate('/user-type');
                }, 5000);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {

        const fetchUserType = async () => {
            try {
                if (params?.id) {
                    const response = await getUserType(params.id);
                    const userTypeData = response.data;
                    setInitialValues(userTypeData);
                } else {
                    setInitialValues({
                        user_type: "",
                        lockedAmount: "",
                        is_active: false,
                        parent_user_type: "",
                        role_prefix: "",
                        isSponsored: false,
                        s_no: ""
                    });
                }
            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchUserType();
    }, [params?.id]);


    const [listusers, setUsers] = useState()
    useEffect(() => {

        const fetchUserType = async () => {
            try {
                const response = await listUserType();
                const userTypeData = response.data;
                setUsers(userTypeData);

            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchUserType();
    }, []);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"} USER TYPE
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
                                            isValid,
                                            dirty,
                                        } = formik;
                                        return (
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="user_type">User Type</label>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.user_type}
                                                            hasError={errors.user_type && touched.user_type}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={touched.user_type && errors.user_type}
                                                            autoFocus={true}
                                                            id="user_type"
                                                            name="user_type"
                                                            placeholder="User Type"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="lockedAmount">Locked Amount</label>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.lockedAmount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="lockedAmount"
                                                            name="lockedAmount"
                                                            placeholder="Locked Amount"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="is_active">Is Active</label>
                                                        <select
                                                            className="form-select"
                                                            id="is_active"
                                                            name="is_active"
                                                            value={values.is_active}
                                                            onChange={handleChange}
                                                        >
                                                            <option value={false}>No</option>
                                                            <option value={true}>Yes</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="parent_user_type">Parent User Type</label>
                                                        <select
                                                            className="form-select"
                                                            id="parent_user_type"
                                                            name="parent_user_type"
                                                            value={values.parent_user_type}
                                                            onChange={handleChange}
                                                        >
                                                            <option >Select Option</option>
                                                            {listusers && listusers?.map((item) => {
                                                                return <option value={item._id}>{item?.user_type}</option>
                                                            })}

                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="role_prefix">Role Prefix</label>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.role_prefix}
                                                            onChange={handleChange}
                                                            id="role_prefix"
                                                            name="role_prefix"
                                                            placeholder="Role Prefix"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="isSponsored">Is Sponsored</label>
                                                        <select
                                                            className="form-select"
                                                            id="isSponsored"
                                                            name="isSponsored"
                                                            value={values.isSponsored}
                                                            onChange={handleChange}
                                                        >
                                                            <option value={false}>No</option>
                                                            <option value={true}>Yes</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="s_no">Serial Number</label>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.s_no}
                                                            hasError={errors.s_no && touched.s_no}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={touched.s_no && errors.s_no}
                                                            id="s_no"
                                                            name="s_no"
                                                            placeholder="Serial Number"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to="/user-type" className="btn btn-danger light ms-1">
                                                        Cancel
                                                    </Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </form>
                                        );
                                    }}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default AddUsertType;
