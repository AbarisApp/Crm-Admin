import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../../../../../common/breadcrumb/Breadcrumbs';
import CustomInputField from '../../../../../../common/CustomInputField';
import CustomTextArea from '../../../../../../common/CustomTextArea';

const FormTransportMaster = () => {
    const params = useParams();
    const breadCrumbsTitle = {
        id: "132",
        title_1: "LOGISTIC",
        title_2: "INWARD",
        title_3: `${params?.id ? "UPDATE" : "ADD"} SKU MASTER`,
    };

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
        /*  if (!values.user_type) {
             errors.user_type = "User Type is required";
         }
         if (!values.s_no) {
             errors.s_no = "Serial Number is required";
         } */
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} User Type Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        /* try {
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
        } */
    };

    useEffect(() => {

        /* const fetchUserType = async () => {
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
        fetchUserType(); */
    }, [params?.id]);


    const [listusers, setUsers] = useState()
    useEffect(() => {

        /* const fetchUserType = async () => {
            try {
                const response = await listUserType();
                const userTypeData = response.data;
                setUsers(userTypeData);

            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchUserType(); */
    }, []);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-6">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"} SKU MASTER
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
                                                <div className='card'>
                                                    <div className="row">
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Transport Name </label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Transport Name"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Vehicle Number</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Vehicle Number"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Owner Name</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Owner Name"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Area of Working</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Area of Working"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">GST Number</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="GST Number"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">PAN NO</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="PAN NO"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Driver Name</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Driver Name *"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Driver Mobile Number</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Driver Mobile Number"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Address</label>
                                                            <CustomTextArea
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Address"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Remarks</label>
                                                            <CustomTextArea
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Remarks"
                                                            />
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className='card'>
                                                    <div className="tbl-caption tbl-caption-2">
                                                        <h4 className="heading mb-0">
                                                            Bank Details
                                                        </h4>
                                                    </div>
                                                    <div className='row'>

                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Name & Address of the Bank</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Name & Address of the Bank"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Bank A/c No</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Bank A/c No "
                                                            />
                                                        </div>

                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="inward_type">Type Of A/c</label>
                                                            <select
                                                                className="form-select"
                                                                id="inward_type"
                                                                name="inward_type"
                                                                value={values.inward_type}
                                                                onChange={handleChange}
                                                            >
                                                                <option disabled>- Type Of A/c -</option>
                                                                <option value="AC">Current </option>
                                                                <option value="AC">Saving</option>

                                                            </select>
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">Bank Branch RTGS / IFSC Code</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="Bank Branch RTGS / IFSC Code"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <label htmlFor="entry-date">MICR Code</label>
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.skuMaster}
                                                                hasError={errors.skuMaster && touched.skuMaster}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.skuMaster && errors.skuMaster}
                                                                autoFocus={true}
                                                                id="skuMaster"
                                                                name="skuMaster"
                                                                placeholder="MICR Code"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to="/transport-master" className="btn btn-danger light ms-1">
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

export default FormTransportMaster;

