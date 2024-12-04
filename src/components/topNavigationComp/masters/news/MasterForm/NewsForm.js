import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { clodinaryImage, usersList, getAllAssign, postNewss, updatenews, getNewsById } from '../../../../../api/login/Login';
import Select from 'react-select'; // Import Select from react-select
import { baseUrlImage } from '../../../../../baseUrl';
import Loadar from '../../../../../common/loader/Loader';

function NewsForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add News",
    };

    const [initialValues, setInitialValues] = useState({
        subject: '',
        description: '',
        banner_image: '',
        icon_image: '',
        news_type: '', // Single-select for news type
        isActive: false, // Boolean for active status
        user_id: [], // Multi-select for user IDs
        staff_id: [], // Multi-select for staff IDs
    });

    const params = useParams();
    const navigate = useNavigate();

    const newsTypeOptions = [
        { value: 'staff_all', label: 'Staff All' },
        { value: 'user_all', label: 'User All' },
        { value: 'particular_user', label: 'Particular User' },
        { value: 'particular_staff', label: 'Particular Staff' }
    ];

    const [userOptions, setUserOptions] = useState([]); // Initialize as an empty array
    const [staffOptions, setStaffOptions] = useState([]); // Initialize as an empty array

    const getDatas = async () => {
        try {
            const res2 = await usersList();
            const users = res2.data.map((item) => ({
                ...item, value: item.name, label: item.name // Assuming item.id and item.name exist
            }));
            setUserOptions(users); // Set user options correctly

            const res = await getAllAssign();
            const staff = res.data?.map((item) => ({
                ...item, value: item.name, label: item.name // Assuming item.id and item.name exist
            }));
            setStaffOptions(staff); // Set staff options correctly

        } catch (error) {
            console.error("Error fetching users and staff:", error);
        }
    };

    useEffect(() => {
        getDatas();
    }, []);

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const toastErrorMessage = (message) => {
        toast.error(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const [loading, setLoading] = useState(false)
    const submitForm = async (values) => {
        console.log("Submitting form with values:", values);
        setLoading(true)
        try {
            const payload = {
                subject: values.subject,
                description: values.description,
                banner_image: values.banner_image,
                icon_image: values.icon_image,
                news_type: values.news_type.value, // Now a single value
                isActive: values.isActive,
                user_id: values.user_id.map(option => option._id),
                staff_id: values.staff_id.map(option => option._id),
            };

            if (!params?.id) {
                const res = await postNewss(payload);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("News added successfully");
                    setTimeout(() => {
                        navigate(`/List-News`);
                    }, 1000);
                }
                else {
                    toastErrorMessage(res.message)
                }
            } else {
                const res = await updatenews(params.id, payload);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("News updated successfully");
                    setTimeout(() => {
                        navigate(`/List-News`);
                    }, 1000);
                }
                else {
                    toastErrorMessage(res.message)
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
        setLoading(false)
    };

    useEffect(() => {
        const fetchMarketTypeData = async () => {
            if (params?.id) {
                const response = await getNewsById(params.id);
                if (response?.data) {
                    setInitialValues(prevValues => ({
                        ...prevValues,
                        ...response.data,
                        news_type: { value: response.data.news_type, label: response.data.news_type }, // Adjust for single select
                        user_id: response.data.user_id.map(id => ({ ...id, value: id.name, label: id.name })), // Adjust if necessary
                        staff_id: response.data.staff_id.map(id => ({ ...id, value: id.name, label: id.name })) // Adjust if necessary
                    }));
                }
            }
        };

        fetchMarketTypeData();
    }, [params?.id]);

    const handleChangeImage = async (e) => {
        const image = new FormData();
        image.append('image', e.target.files[0]);
        try {
            const res = await clodinaryImage(image);
            setTimeout(() => {
                setInitialValues(prevValues => ({ ...prevValues, [e.target.name]: res.data.data.url }));
            }, 1000);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    // Separate handler for single-select field
    const handleNewsTypeChange = (selectedOption) => {
        setInitialValues(prevValues => ({ ...prevValues, news_type: selectedOption }));
    };

    const handleUserChange = (selectedOptions) => {
        setInitialValues(prevValues => ({ ...prevValues, user_id: selectedOptions }));
    };

    const handleStaffChange = (selectedOptions) => {
        setInitialValues(prevValues => ({ ...prevValues, staff_id: selectedOptions }));
    };

    return (
        <>
            {loading && <Loadar />}
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} News
                                </h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={(e) => {
                                e.preventDefault();
                                submitForm(initialValues);
                            }}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <h6>Subject</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            value={initialValues.subject}
                                            onChange={(e) => setInitialValues(prevValues => ({ ...prevValues, subject: e.target.value }))}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Description</h6>
                                        <textarea
                                            className="form-control"
                                            name="description"
                                            value={initialValues.description}
                                            onChange={(e) => setInitialValues(prevValues => ({ ...prevValues, description: e.target.value }))}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>News Type</h6>
                                        <Select
                                            options={newsTypeOptions}
                                            value={initialValues.news_type}
                                            onChange={handleNewsTypeChange} // Use the custom handler
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>User ID</h6>
                                        <Select
                                            isMulti
                                            closeMenuOnSelect={false}
                                            options={userOptions}
                                            value={initialValues.user_id}
                                            onChange={handleUserChange} // Use the custom handler
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Staff ID</h6>
                                        <Select
                                            isMulti
                                            options={staffOptions}
                                            closeMenuOnSelect={false}
                                            value={initialValues.staff_id}
                                            onChange={handleStaffChange} // Use the custom handler
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Is Active</h6>
                                        <input
                                            type="checkbox"
                                            checked={initialValues.isActive}
                                            onChange={(e) => setInitialValues(prevValues => ({ ...prevValues, isActive: e.target.checked }))}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Banner Image</h6>
                                        <input
                                            type="file"
                                            onChange={handleChangeImage}
                                            name="banner_image"
                                            className="form-control"
                                        />
                                        {initialValues.banner_image && <img src={`${baseUrlImage}${initialValues.banner_image}`} alt="Banner Preview" />}
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Icon Image</h6>
                                        <input
                                            type="file"
                                            onChange={handleChangeImage}
                                            name="icon_image"
                                            className="form-control"
                                        />
                                        {initialValues.icon_image && <img src={`${baseUrlImage}${initialValues.icon_image}`} alt="Icon Preview" />}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <button className="btn btn-primary me-2">
                                        {params?.id ? "Update" : "Submit"}
                                    </button>
                                    <Link to="/List-News" className="btn btn-outline-primary me-2">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewsForm;
