import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../common/loader/Loader';
import { baseUrlImage } from '../../baseUrl';

const CompanyDetail = ({ handleFileChange, formValues, setFormValues ,initialValues}) => {
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const params = useParams();

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? 'Update' : 'Add'} Company Successfully.`, {
            position: 'top-center',
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? 'Update' : 'Add'} Company Failed.`, {
            position: 'top-center',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, ...initialValues,[name]: value });
    };



    return (
        <>
            <ToastContainer />
            {loader && <Loadar />}
            {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? 'Edit Company' : 'Add Company'} Info
                                    </h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        {/* Logo field */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.logo ? 'has-error' : ''}`}>
                                                <label htmlFor="logo">Logo</label>
                                                {formValues.logo && (
                                                    <img
                                                        src={`${baseUrlImage}${formValues.logo}`}
                                                        // src={formValues.logo ? `${baseUrlImage}${formValues.logo}` : URL.createObjectURL(formValues.logo)}
                                                        alt="Logo Preview"
                                                        width="100"
                                                        height="100"
                                                        className="d-block mb-2"
                                                    />
                                                )}
                                                <input
                                                    type="file"
                                                    id="logo"
                                                    name="logo"
                                                    onChange={handleFileChange}
                                                    className="form-control"
                                                />
                                                {errors.logo && <div className="error">{errors.logo}</div>}
                                            </div>
                                        </div>

                                        {/* Sign Up Right Description */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.sign_up_right_desciption ? 'has-error' : ''}`}>
                                                <label htmlFor="sign_up_right_desciption">Sign Up Right Description</label>
                                                <textarea
                                                    id="sign_up_right_desciption"
                                                    name="sign_up_right_desciption"
                                                    value={formValues.sign_up_right_desciption}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Right Description"
                                                />
                                                {errors.sign_up_right_desciption && (
                                                    <div className="error">{errors.sign_up_right_desciption}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Sign Up Front Image */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.sign_up_front_image ? 'has-error' : ''}`}>
                                                <label htmlFor="sign_up_front_image">Sign Up Front Image</label>
                                                {formValues.sign_up_front_image && (
                                                    <img
                                                        src={formValues.sign_up_front_image ? `${baseUrlImage}${formValues.sign_up_front_image}` : URL.createObjectURL(formValues.sign_up_front_image)}

                                                        alt="Sign Up Front Preview"
                                                        width="100"
                                                        height="100"
                                                        className="d-block mb-2"
                                                    />
                                                )}
                                                <input
                                                    type="file"
                                                    id="sign_up_front_image"
                                                    name="sign_up_front_image"
                                                    onChange={handleFileChange}
                                                    className="form-control"
                                                />
                                                {errors.sign_up_front_image && (
                                                    <div className="error">{errors.sign_up_front_image}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Sign Up Background Image */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.sign_up_background_image ? 'has-error' : ''}`}>
                                                <label htmlFor="sign_up_background_image">Sign Up Background Image</label>
                                                {formValues.sign_up_background_image && (
                                                    <img
                                                        src={formValues.sign_up_background_image ? `${baseUrlImage}${formValues.sign_up_background_image}` : URL.createObjectURL(formValues.sign_up_background_image)}
                                                        // src={URL.createObjectURL(formValues.sign_up_background_image)}
                                                        alt="Sign Up Background Preview"
                                                        width="100"
                                                        height="100"
                                                        className="d-block mb-2"
                                                    />
                                                )}
                                                <input
                                                    type="file"
                                                    id="sign_up_background_image"
                                                    name="sign_up_background_image"
                                                    onChange={handleFileChange}
                                                    className="form-control"
                                                />
                                                {errors.sign_up_background_image && (
                                                    <div className="error">{errors.sign_up_background_image}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Sign Up Left Description */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.sign_up_left_description ? 'has-error' : ''}`}>
                                                <label htmlFor="sign_up_left_description">Sign Up Left Description</label>
                                                <textarea
                                                    id="sign_up_left_description"
                                                    name="sign_up_left_description"
                                                    value={formValues.sign_up_left_description}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Left Description"
                                                />
                                                {errors.sign_up_left_description && (
                                                    <div className="error">{errors.sign_up_left_description}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Sign Up Background Color Image */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.sign_up_backround_color_image ? 'has-error' : ''}`}>
                                                <label htmlFor="sign_up_backround_color_image">Sign Up Background Color Image</label>
                                                {formValues.sign_up_backround_color_image && (
                                                    <img
                                                        src={formValues.sign_up_backround_color_image ? `${baseUrlImage}${formValues.sign_up_backround_color_image}` : URL.createObjectURL(formValues.sign_up_backround_color_image)}
                                                        // src={URL.createObjectURL(formValues.sign_up_backround_color_image)}
                                                        alt="Sign Up Background Color Preview"
                                                        width="100"
                                                        height="100"
                                                        className="d-block mb-2"
                                                    />
                                                )}
                                                <input
                                                    type="file"
                                                    id="sign_up_backround_color_image"
                                                    name="sign_up_backround_color_image"
                                                    onChange={handleFileChange}
                                                    className="form-control"
                                                />
                                                {errors.sign_up_backround_color_image && (
                                                    <div className="error">{errors.sign_up_backround_color_image}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Sign Up Font Color */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.sign_up_font_color ? 'has-error' : ''}`}>
                                                <label htmlFor="sign_up_font_color">Sign Up Font Color</label>
                                                <input
                                                    type="color"
                                                    id="sign_up_font_color"
                                                    name="sign_up_font_color"
                                                    value={formValues.sign_up_font_color}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                />
                                                {errors.sign_up_font_color && (
                                                    <div className="error">{errors.sign_up_font_color}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Login Right Description */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.login_right_desciption ? 'has-error' : ''}`}>
                                                <label htmlFor="login_right_desciption">Login Right Description</label>
                                                <textarea
                                                    id="login_right_desciption"
                                                    name="login_right_desciption"
                                                    value={formValues.login_right_desciption}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Right Description"
                                                />
                                                {errors.login_right_desciption && (
                                                    <div className="error">{errors.login_right_desciption}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Login Background Image */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.login_background_image ? 'has-error' : ''}`}>
                                                <label htmlFor="login_background_image">Login Background Image</label>
                                                {formValues.login_background_image && (
                                                    <img
                                                        src={formValues.login_background_image ? `${baseUrlImage}${formValues.login_background_image}` : URL.createObjectURL(formValues.login_background_image)}
                                                        // src={URL.createObjectURL(formValues.login_background_image)}
                                                        alt="Login Background Preview"
                                                        width="100"
                                                        height="100"
                                                        className="d-block mb-2"
                                                    />
                                                )}
                                                <input
                                                    type="file"
                                                    id="login_background_image"
                                                    name="login_background_image"
                                                    onChange={handleFileChange}
                                                    className="form-control"
                                                />
                                                {errors.login_background_image && (
                                                    <div className="error">{errors.login_background_image}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Login Front Image */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.login_front_image ? 'has-error' : ''}`}>
                                                <label htmlFor="login_front_image">Login Front Image</label>
                                                {formValues.login_front_image && (
                                                    <img
                                                        src={formValues.login_front_image ? `${baseUrlImage}${formValues.login_front_image}` : URL.createObjectURL(formValues.login_front_image)}
                                                        // src={URL.createObjectURL(formValues.login_front_image)}
                                                        alt="Login Front Preview"
                                                        width="100"
                                                        height="100"
                                                        className="d-block mb-2"
                                                    />
                                                )}
                                                <input
                                                    type="file"
                                                    id="login_front_image"
                                                    name="login_front_image"
                                                    onChange={handleFileChange}
                                                    className="form-control"
                                                />
                                                {errors.login_front_image && (
                                                    <div className="error">{errors.login_front_image}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Login Left Description */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.login_left_description ? 'has-error' : ''}`}>
                                                <label htmlFor="login_left_description">Login Left Description</label>
                                                <textarea
                                                    id="login_left_description"
                                                    name="login_left_description"
                                                    value={formValues.login_left_description}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Left Description"
                                                />
                                                {errors.login_left_description && (
                                                    <div className="error">{errors.login_left_description}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Login Background Color Image */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.login_backround_color_image ? 'has-error' : ''}`}>
                                                <label htmlFor="login_backround_color_image">Login Background Color Image</label>
                                                {formValues.login_backround_color_image && (
                                                    <img
                                                        src={formValues.login_backround_color_image ? `${baseUrlImage}${formValues.login_backround_color_image}` : URL.createObjectURL(formValues.login_backround_color_image)}
                                                        // src={URL.createObjectURL(formValues.login_backround_color_image)}
                                                        alt="Login Background Color Preview"
                                                        width="100"
                                                        height="100"
                                                        className="d-block mb-2"
                                                    />
                                                )}
                                                <input
                                                    type="file"
                                                    id="login_backround_color_image"
                                                    name="login_backround_color_image"
                                                    onChange={handleFileChange}
                                                    className="form-control"
                                                />
                                                {errors.login_backround_color_image && (
                                                    <div className="error">{errors.login_backround_color_image}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Login Font Color */}
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.login_font_color ? 'has-error' : ''}`}>
                                                <label htmlFor="login_font_color">Login Font Color</label>
                                                <input
                                                    type="color"
                                                    id="login_font_color"
                                                    name="login_font_color"
                                                    value={formValues.login_font_color}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                />
                                                {errors.login_font_color && (
                                                    <div className="error">{errors.login_font_color}</div>
                                                )}
                                            </div>
                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompanyDetail;
