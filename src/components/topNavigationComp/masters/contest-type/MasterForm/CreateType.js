import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { postContestType, updateContestTypeById, getContestTypeById, getMarketTypeByPage, clodinaryImage } from '../../../../../api/login/Login';
import { baseUrlImage } from '../../../../../baseUrl';

function CreateType() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Contest Type",
    };

    const [initialValues, setInitialValues] = useState({
        title: "",
        type: '',
        isActive: false,
        Sno: '',
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.title) {
            errors.title = "Title is required";
        }
        if (!values.type) {
            errors.type = "Type is required";
        }
        if (values.Sno === '') {
            errors.Sno = "Sno is required";
        }
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {

        try {
            if (!params?.id) {
                // POST request to create a new contest type
                const res = await postContestType({ ...values, banner_image: image });
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Contest Type added successfully");
                    setTimeout(() => {
                        navigate(`/contest-type`);
                    }, 1000);
                }
            } else {
                // PUT request to update an existing contest type
                const res = await updateContestTypeById(params.id, { ...values, banner_image: image });
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Contest Type updated successfully");
                    setTimeout(() => {
                        navigate(`/contest-type`);
                    }, 1000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const [markType, setMarkType] = useState([]);
    const getDatas = async () => {
        try {
            const res = await getMarketTypeByPage(0, 100);
            setMarkType(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    const [image, setImage] = useState()
    const handleChangeImage = async (e) => {
        const image = new FormData()
        image.append('image', e.target.files[0])
        try {
            const res = await clodinaryImage(image)
            setTimeout(() => {
                setImage(res.data?.data?.url)
            }, 1000);
        } catch (error) {

        }
    }

    useEffect(() => {
        const fetchContestTypeData = async () => {
            if (params?.id) {
                const response = await getContestTypeById(params.id);
                setInitialValues(response?.data);
                setImage(response.data?.banner_image)
            }
        };

        fetchContestTypeData();
        getDatas();
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
                                    {params?.id ? "UPDATE" : "ADD"} Contest Type
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
                                                    <h6>Title</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        onBlur={handleBlur}
                                                        value={values.title}
                                                        onChange={handleChange}
                                                        name="title"
                                                    />
                                                    {touched.title && errors.title && (
                                                        <div className="text-danger">{errors.title}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Type</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        onBlur={handleBlur}
                                                        value={values.type}
                                                        onChange={handleChange}
                                                        name="type"
                                                    />
                                                    {touched.type && errors.type && (
                                                        <div className="text-danger">{errors.type}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Sno</h6>
                                                    <CustomInputField
                                                        type="number"
                                                        onBlur={handleBlur}
                                                        value={values.Sno}
                                                        onChange={handleChange}
                                                        name="Sno"
                                                    />
                                                    {touched.Sno && errors.Sno && (
                                                        <div className="text-danger">{errors.Sno}</div>
                                                    )}
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <h6>Market Type</h6>
                                                    <select
                                                        className="form-select"
                                                        name="market_type"
                                                        value={values.market_type}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="">Select option</option>
                                                        {markType.map((item) => (
                                                            <option key={item._id} value={item._id}>{item.name}</option>
                                                        ))}
                                                    </select>
                                                    {touched.market_type && errors.market_type && (
                                                        <div className="text-danger">{errors.market_type}</div>
                                                    )}
                                                </div>
                                               
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Active Status</h6>
                                                    <select
                                                        className="form-select"
                                                        name="isActive"
                                                        value={values.isActive}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value={false}>Inactive</option>
                                                        <option value={true}>Active</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Banner Image</h6>
                                                    <CustomInputField
                                                        type="file"
                                                        onChange={handleChangeImage}
                                                        onBlur={handleBlur}
                                                        name="image"
                                                    />
                                                    {image && <img style={{ width: "200px", height: '200px' }} src={`${baseUrlImage}${image}`} />}
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <Link to="/contest-type-list" className="btn btn-danger light ms-1">Cancel</Link>
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

export default CreateType;
