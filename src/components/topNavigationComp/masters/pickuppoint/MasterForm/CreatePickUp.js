import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import {
    postContestType,
    updateContestTypeById,
    getContestTypeById,
    clodinaryImage,
    getPickupById,
    postPickupPonit,
    updatePickupById,
    getAllAssign,
} from '../../../../../api/login/Login';
import { baseUrlImage } from '../../../../../baseUrl';
import Loadar from '../../../../../common/loader/Loader';

function CreatePickUp() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Pickup Point",
    };

    const [initialValues, setInitialValues] = useState({
        avatar: "",
        address: "",
        location: { long: "", lat: "" },
        province: "",
        phone: "",
        email: "",
        pickupPoint_name: "",
        pickUpPointStatus: false,
        pickUpManagerSchema: "",
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.pickupPoint_name) {
            errors.pickupPoint_name = "Pickup Point Name is required";
        }
        if (!values.address) {
            errors.address = "Address is required";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!values.location.lat || !values.location.long) {
            errors.location = "Both latitude and longitude are required";
        }
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const [load, setLoad] = useState(false)
    const submitForm = async (values) => {
        setLoad(true)
        try {
            if (!params?.id) {
                const res = await postPickupPonit({ ...values, avatar: image });
                if (res?.data?.address) {
                    setLoad(false)
                    toastSuccessMessage("Pickup Point added successfully");
                    setTimeout(() => navigate(`/pickup-point`), 1000);
                }
            } else {
                const res = await updatePickupById(params.id, { ...values, avatar: image });
                if (res?.data?.address) {
                    setLoad(false)
                    toastSuccessMessage("Pickup Point updated successfully");
                    setTimeout(() => navigate(`/pickup-point`), 1000);
                }
            }
            setLoad(false)
        } catch (error) {
            console.error("Error:", error);
        }
        setLoad(false)
    };

    const [image, setImage] = useState();
    const handleChangeImage = async (e) => {
        const image = new FormData();
        image.append('image', e.target.files[0]);
        try {
            const res = await clodinaryImage(image);
            setImage(res.data?.data?.url);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };
    const [staffList, setStaffList] = useState(null)
    const getData = async () => {
        const res = await getAllAssign()
        setStaffList(res.data)
    }
    useEffect(() => {
        const fetchData = async () => {
            if (params?.id) {
                const response = await getPickupById(params.id);
                setInitialValues(response?.data);
                setImage(response.data?.avatar);
            }
        };
        fetchData();
        getData();
    }, [params?.id]);



    return (
        <>
            <ToastContainer />
            {load && <Loadar/>}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Pickup Point
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Pickup Point Name</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        name="pickupPoint_name"
                                                        value={values.pickupPoint_name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {touched.pickupPoint_name && errors.pickupPoint_name && (
                                                        <div className="text-danger">{errors.pickupPoint_name}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Address</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        name="address"
                                                        value={values.address}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {touched.address && errors.address && (
                                                        <div className="text-danger">{errors.address}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Phone</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        name="phone"
                                                        value={values.phone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {touched.phone && errors.phone && (
                                                        <div className="text-danger">{errors.phone}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Email</h6>
                                                    <CustomInputField
                                                        type="email"
                                                        name="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {touched.email && errors.email && (
                                                        <div className="text-danger">{errors.email}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Province</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        name="province"
                                                        value={values.province}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Latitude</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        name="location.lat"
                                                        value={values.location.lat}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Longitude</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        name="location.long"
                                                        value={values.location.long}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Pickup Point Status</h6>
                                                    <select
                                                        className="form-select"
                                                        name="pickUpPointStatus"
                                                        value={values.pickUpPointStatus}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value={false}>Inactive</option>
                                                        <option value={true}>Active</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Select Staff</h6>
                                                    <select
                                                        className="form-select"
                                                        name="pickUpManagerSchema"
                                                        value={values.pickUpManagerSchema}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        {staffList && staffList?.map((item) => {
                                                            return <option value={item._id}>{item.name}</option>
                                                        })}

                                                    </select>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Avatar</h6>
                                                    <CustomInputField
                                                        type="file"
                                                        onChange={handleChangeImage}
                                                    />
                                                    {image && <img style={{ width: "200px", height: '200px' }} src={`${baseUrlImage}${image}`} />}
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <Link to="/pickup-point" className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
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

export default CreatePickUp;
