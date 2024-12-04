import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { getBlock, getBooking, getCreVenture, getNatureById, getProperty, postNature, updateNatureById } from '../../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';

function BuildAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Building Master",
    };

    const [initialValues, setInitialValues] = useState({
        name: "",
        venture: "",
        property: "",
        block: "",
        booking: "",
    });

    const [ventures, setVentures] = useState([]);   // For venture options
    const [properties, setProperties] = useState([]); // For property options
    const [blocks, setBlocks] = useState([]);       // For block options
    const [bookings, setBookings] = useState([]);   // For booking options

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.venture) {
            errors.venture = "Venture is required";
        }
        if (!values.property) {
            errors.property = "Property is required";
        }
        if (!values.block) {
            errors.block = "Block is required";
        }
        if (!values.booking) {
            errors.booking = "Booking is required";
        }
        return errors;
    };

    const blankBtn = () => {
        setInitialValues({
            name: "",
            venture: "",
            property: "",
            block: "",
            booking: "",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await postNature(values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Building added successfully");
                    setTimeout(() => {
                        navigate(`/building-list`);
                    }, 2000);
                }
            } else {
                const res = await updateNatureById(params.id, values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Building updated successfully");
                    setTimeout(() => {
                        navigate(`/building-list`);
                    }, 2000);
                }
            }
            blankBtn();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };

    const fetchDatas = async () => {
        try {
            const res = await getCreVenture(0, 100)
            const res2 = await getProperty(0, 100)
            const res3 = await getBlock(0, 100)
            const res4 = await getBooking(0, 100)
            setVentures(res.data);
            setProperties(res2.data);
            setBlocks(res3.data);           
            setBookings(res4.data);   
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (params?.id) {
                    const response = await getNatureById(params.id);
                    setInitialValues(response?.data || {});
                } else {
                    blankBtn();
                }


            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        fetchDatas()
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
                                    {params?.id ? "UPDATE" : "ADD"} Building Master
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
                                                    <input
                                                        type="text"
                                                        value={values?.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Name"
                                                        className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
                                                    />
                                                    {errors.name && touched.name && (
                                                        <div className="error">{errors.name}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        value={values?.venture}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        id="venture"
                                                        name="venture"
                                                        className={`form-control ${errors.venture && touched.venture ? 'is-invalid' : ''}`}
                                                    >
                                                        <option value="">Select Venture</option>
                                                        {ventures?.map((venture, index) => (
                                                            <option key={index} value={venture}>{venture}</option>
                                                        ))}
                                                    </select>
                                                    {errors.venture && touched.venture && (
                                                        <div className="error">{errors.venture}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        value={values?.property}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        id="property"
                                                        name="property"
                                                        className={`form-control ${errors.property && touched.property ? 'is-invalid' : ''}`}
                                                    >
                                                        <option value="">Select Property</option>
                                                        {properties?.map((property, index) => (
                                                            <option key={index} value={property}>{property}</option>
                                                        ))}
                                                    </select>
                                                    {errors.property && touched.property && (
                                                        <div className="error">{errors.property}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        value={values?.block}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        id="block"
                                                        name="block"
                                                        className={`form-control ${errors.block && touched.block ? 'is-invalid' : ''}`}
                                                    >
                                                        <option value="">Select Block</option>
                                                        {blocks?.map((block, index) => (
                                                            <option key={index} value={block}>{block}</option>
                                                        ))}
                                                    </select>
                                                    {errors.block && touched.block && (
                                                        <div className="error">{errors.block}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        value={values?.booking}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        id="booking"
                                                        name="booking"
                                                        className={`form-control ${errors.booking && touched.booking ? 'is-invalid' : ''}`}
                                                    >
                                                        <option value="">Select Booking</option>
                                                        {bookings?.map((booking, index) => (
                                                            <option key={index} value={booking}>{booking}</option>
                                                        ))}
                                                    </select>
                                                    {errors.booking && touched.booking && (
                                                        <div className="error">{errors.booking}</div>
                                                    )}
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

export default BuildAdd;
