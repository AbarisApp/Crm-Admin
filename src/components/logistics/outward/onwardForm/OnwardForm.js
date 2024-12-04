import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import CustomInputField from '../../../../common/CustomInputField';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import { UserTypeUpdate, addUserType, getUserType, listUserType } from '../../../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import CustomTextArea from '../../../../common/CustomTextArea';
import { Empty } from 'antd';

const OnwardForm = () => {
    const params = useParams();
    const breadCrumbsTitle = {
        id: "132",
        title_1: "LOGISTICS",
        title_2: `${params?.id ? "UPDATE" : "ADD"} OUTWARD`,
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
                                        {params?.id ? "UPDATE" : "ADD"} OUTWARD
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
                                                    <div className="col-xl-3 mb-3">
                                                        <label htmlFor="entry-date">Entry Date</label>
                                                        <CustomInputField
                                                            type="date"
                                                            value={values.entry_date}
                                                            hasError={errors.entry_date && touched.entry_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={touched.entry_date && errors.entry_date}
                                                            autoFocus={true}
                                                            id="entry-date"
                                                            name="entry-date"
                                                            placeholder="Entry Date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <label htmlFor="inward_type">Invoice / DC Entry No.</label>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.supplierCustomerName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="supplierCustomerName"
                                                            name="supplierCustomerName"
                                                            placeholder="Invoice / DC Entry No."
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <div className='d-flex align-items-end'>
                                                            <div>
                                                                <label htmlFor="dcEntryNo">Transporter Name *</label>
                                                                <CustomInputField
                                                                    type="text"
                                                                    value={values.barcode}
                                                                    hasError={errors.barcode && touched.barcode}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={touched.barcode && errors.barcode}
                                                                    id="barcode"
                                                                    name="barcode"
                                                                    placeholder="Transporter Name"
                                                                />
                                                            </div>
                                                            <div>
                                                                <Link to="/transport-master" className='btn btn-outline-primary'>+</Link>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-xl-3 mb-3">
                                                        <label htmlFor="dcEntryNo">Inward No.</label>
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.dcEntryNo}
                                                            onChange={handleChange}
                                                            id="dcEntryNo"
                                                            name="dcEntryNo"
                                                            // placeholder="DC Entry No."
                                                            disable={true}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-xl-6'>
                                                        <div className='card'>
                                                            <div className='row'>
                                                                <div className="col-xl-6 mb-3">
                                                                    <select
                                                                        className="form-select"
                                                                        id="scanningType"
                                                                        name="scanningType"
                                                                        value={values.scanningType}
                                                                        onChange={handleChange}
                                                                    >
                                                                        <option disabled>---Select---</option>
                                                                        <option value={true}>Serial Wise</option>
                                                                        <option value={true}>Barcode Wise</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-xl-6 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        value={values.barcode}
                                                                        hasError={errors.barcode && touched.barcode}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={touched.barcode && errors.barcode}
                                                                        id="barcode"
                                                                        name="barcode"
                                                                        placeholder="Barcode"
                                                                    />
                                                                </div>

                                                                <div className="col-xl-6 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        value={values.serialNo}
                                                                        hasError={errors.serialNo && touched.serialNo}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={touched.serialNo && errors.serialNo}
                                                                        id="serialNo"
                                                                        name="serialNo"
                                                                        placeholder="SerialNo"
                                                                    />
                                                                </div>

                                                                <div className="col-xl-6 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        value={values.totalQty}
                                                                        hasError={errors.totalQty && touched.totalQty}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={touched.totalQty && errors.totalQty}
                                                                        id="totalQty"
                                                                        name="totalQty"
                                                                        disable={true}
                                                                    // placeholder="totalQty"
                                                                    />
                                                                    <small>TotalQty</small>

                                                                </div>
                                                                <div className="col-xl-6 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        value={values.totalQty}
                                                                        hasError={errors.totalQty && touched.totalQty}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={touched.totalQty && errors.totalQty}
                                                                        id="totalQty"
                                                                        name="totalQty"
                                                                        disable={true}
                                                                    // placeholder="totalQty"
                                                                    />
                                                                    <small>Balance Qty</small>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='card'>
                                                            <div className="table-responsive active-projects style-1">
                                                                <div className="tbl-caption mb-3">
                                                                    <h4 className="heading mb-0"><b>Outward  ProDucts Details</b></h4>
                                                                </div>
                                                            </div>
                                                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                                                <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                                    <thead>
                                                                        <tr role='row'>
                                                                            <th> Sr. No.	</th>
                                                                            <th>Product</th>
                                                                            <th>Serial No.	</th>
                                                                            <th >Qty</th>


                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {/* {aepsData?.data?.map((item, i) => {

                                                    return <tr role="row" className="odd" key={i} style={{ cursor: "pointer" }} onClick={() => { ChangeRouts(item._id) }}>
                                                        <td>{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + " , " + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td>
                                                        <td>{item?.refer_id}</td>
                                                        <td>{item?.mobile}</td>
                                                        <td>{item?.shop_name ? item?.shop_name : item?.name}</td>

                                                        <td>{item?.refer_code}</td>
                                                        <td>{item?.subject}</td>
                                                        <td>{item?.department_id}</td>
                                                        <td>{item?.priority}</td>
                                                        <td><span className="badge badge-success text-light border-0 w-100" style={{ backgroundColor: `${item?.status === "pending" ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.status === "success" ? '0.8rem' : ''}` }}>{item?.status == "success" ? 'Success' : 'Pending'}</span></td>
                                                        <td>{item?.lastReply}</td>

                                                        <td className='text-center'>

                                                            <Link className='btn btn-warning color2' to={`/disputes/view/${item._id}`}>Reply</Link>
                                                        </td>
                                                    </tr>
                                                })} */}

                                                                        <tr>
                                                                            <td colSpan={4}>
                                                                                <Empty />
                                                                            </td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-xl-12'>
                                                        <strong>Invoice Detail</strong>
                                                        <div className='card'>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-xl-12'>
                                                        <CustomTextArea
                                                            type="text"
                                                            value={values.remarkNarration}
                                                            hasError={errors.remarkNarration && touched.remarkNarration}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={touched.remarkNarration && errors.remarkNarration}
                                                            id="remarkNarration"
                                                            name="remarkNarration"
                                                            placeholder="Remark / Narration"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to="/outward-list" className="btn btn-danger light ms-1">
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

export default OnwardForm;
