import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../../../../../common/breadcrumb/Breadcrumbs';
import CustomInputField from '../../../../../../common/CustomInputField';

const FormSkuMaster = () => {
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
            <div className="row m-4">
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
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="entry-date">SKU Name</label>
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
                                                            placeholder="SKU Name *"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="entry-date">Barcode *</label>
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
                                                            placeholder="Barcode"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="inward_type">Brand Name </label>
                                                        <select
                                                            className="form-select"
                                                            id="inward_type"
                                                            name="inward_type"
                                                            value={values.inward_type}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">- Select -</option>
                                                            <option value="AIRTEL">AIRTEL</option>
                                                            <option value="AO-SMITH">AO-SMITH</option>
                                                            <option value="APPLE">APPLE</option>
                                                            <option value="AQUAGUARD">AQUAGUARD</option>
                                                            <option value="AQUASURE">AQUASURE</option>
                                                            <option value="ASUS">ASUS</option>
                                                            <option value="BAJAJ">BAJAJ</option>
                                                            <option value="BLUE STAR">BLUE STAR</option>
                                                            <option value="BOSCH">BOSCH</option>
                                                            <option value="BOSS">BOSS</option>
                                                            <option value="CANON">CANON</option>
                                                            <option value="CARVAN">CARVAN</option>
                                                            <option value="CENTRIFUGAL">CENTRIFUGAL</option>
                                                            <option value="CROMPTON">CROMPTON</option>
                                                            <option value="DAIKIN">DAIKIN</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="inward_type">Select Category</label>
                                                        <select
                                                            className="form-select"
                                                            id="inward_type"
                                                            name="inward_type"
                                                            value={values.inward_type}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">- Select -</option>
                                                            <option value="AC">AC</option>
                                                            <option value="ACCESSORIES">ACCESSORIES</option>
                                                            <option value="AIR COOLER">AIR COOLER</option>
                                                            <option value="AIR PURIFIER">AIR PURIFIER</option>
                                                            <option value="AIRPODS">AIRPODS</option>
                                                            <option value="ATTA CHAKKI">ATTA CHAKKI</option>
                                                            <option value="BOWL SET">BOWL SET</option>
                                                            <option value="BYK SET">BYK SET</option>
                                                            <option value="CHIMANI">CHIMANI</option>
                                                            <option value="CLOTH DRYER">CLOTH DRYER</option>
                                                            <option value="COOKER">COOKER</option>
                                                            <option value="COOKER HOOD">COOKER HOOD</option>
                                                            <option value="CTV">CTV</option>
                                                            <option value="DF">DF</option>
                                                            <option value="DIGITAL PRODUCT">DIGITAL PRODUCT</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="inward_type">Sub Category *</label>
                                                        <select
                                                            className="form-select"
                                                            id="inward_type"
                                                            name="inward_type"
                                                            value={values.inward_type}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">- Select -</option>
                                                            <option value="AC">AC</option>
                                                            <option value="ACCESSORIES">ACCESSORIES</option>
                                                            <option value="AIR COOLER">AIR COOLER</option>
                                                            <option value="AIR PURIFIER">AIR PURIFIER</option>
                                                            <option value="AIRPODS">AIRPODS</option>
                                                            <option value="ATTA CHAKKI">ATTA CHAKKI</option>
                                                            <option value="BOWL SET">BOWL SET</option>
                                                            <option value="BYK SET">BYK SET</option>
                                                            <option value="CHIMANI">CHIMANI</option>
                                                            <option value="CLOTH DRYER">CLOTH DRYER</option>
                                                            <option value="COOKER">COOKER</option>
                                                            <option value="COOKER HOOD">COOKER HOOD</option>
                                                            <option value="CTV">CTV</option>
                                                            <option value="DF">DF</option>
                                                            <option value="DIGITAL PRODUCT">DIGITAL PRODUCT</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label htmlFor="inward_type">Serial Applicable </label>
                                                        <select
                                                            className="form-select"
                                                            id="inward_type"
                                                            name="inward_type"
                                                            value={values.inward_type}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">- Serial Applicable  -</option>
                                                            <option value="AC">AC</option>
                                                            <option value="ACCESSORIES">ACCESSORIES</option>
                                                            <option value="AIR COOLER">AIR COOLER</option>
                                                            <option value="AIR PURIFIER">AIR PURIFIER</option>
                                                            <option value="AIRPODS">AIRPODS</option>
                                                            <option value="ATTA CHAKKI">ATTA CHAKKI</option>
                                                            <option value="BOWL SET">BOWL SET</option>
                                                            <option value="BYK SET">BYK SET</option>
                                                            <option value="CHIMANI">CHIMANI</option>
                                                            <option value="CLOTH DRYER">CLOTH DRYER</option>
                                                            <option value="COOKER">COOKER</option>
                                                            <option value="COOKER HOOD">COOKER HOOD</option>
                                                            <option value="CTV">CTV</option>
                                                            <option value="DF">DF</option>
                                                            <option value="DIGITAL PRODUCT">DIGITAL PRODUCT</option>
                                                        </select>
                                                    </div>
                                                    

                                                </div>


                                                <div>
                                                    <Link to="/inward-sku-master" className="btn btn-danger light ms-1">
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

export default FormSkuMaster;

