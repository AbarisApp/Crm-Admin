import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import CustomInputField from '../../../../../common/CustomInputField';
import { addCompanyType, getDefaultDashboard, getupdateCompanyTypeId, updateCompanyType } from '../../../../../api/login/Login';
import TagsInput from 'react-tagsinput';
function CompanyTypeMasterForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Company Type  Master",
    }
    const [tags, setTags] = useState([]);
    const [initialValues, setInitialValues] = useState({
        name: "",
        field_two: "",
        field_one: "",
        default_dashboard: "",
        isActive: "",
        default_user_type: ""
    });
    const [state, setState] = useState(null)

    const params = useParams();
    const navigate = useNavigate();
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Company Type  Is Required";
        }
        if (!values.field_two) {
            errors.field_two = "Course Is Required";
        }
        if (!values.field_one) {
            errors.field_one = "Stream Is Required";
        }
        if (!values.isActive) {
            errors.isActive = "Status Is Required";
        }
        if (!values.default_dashboard) {
            errors.default_dashboard = "Dasboard Is Required";
        }
        return errors;
    };



    const blankBtn = () => {
        setInitialValues({ name: "", field_one: "", field_two: "" });
    }
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const submitForm = async (values) => {

        try {
            if (!params?.id) {
                try {
                    const res = await addCompanyType({ ...values, default_user_type: tags });
                    if (res?.statusCode == "200") {
                        toastSuccessMessage(" Company Type Successfully");
                        setTimeout(() => {
                            navigate(`/company-type-master`)
                        }, 1000);
                    }
                    blankBtn()
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateCompanyType(params.id, { ...values, default_user_type: tags });

                    if (res?.statusCode == "200") {
                        toastSuccessMessage("Company Type Successfully");
                        blankBtn()
                        setTimeout(() => {
                            navigate(`/company-type-master`)
                        }, 1000);
                    }
                    if (res?.statusCode == "403") {
                        toastSuccessMessage("Company Type Successfully");
                        blankBtn()
                    }

                } catch (error) {
                    alert(`Error`, error)
                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    const defaultDashboard = async () => {
        try {
            const res = await getDefaultDashboard("dashboard")
            setState(res.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        defaultDashboard()
    }, [])


    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getupdateCompanyTypeId(params.id);
                    setInitialValues({ ...response?.data, field_one: response.data?.field_one ? response.data?.field_one : response.data?.course, field_two: response.data?.field_two ? response.data?.field_two : response.data?.stream });
                    setTags(response.data?.default_user_type)

                } else {
                    setInitialValues({
                        name: "",
                        type: ""
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);
    const handleTagsChange = (newTags) => {
        setTags(newTags);

    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Company Type
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
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Company Type"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.field_one}
                                                        hasError={errors.field_one && touched.field_one}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.field_one}
                                                        autoFocus={true}
                                                        id="field_one"
                                                        name="field_one"
                                                        placeholder="Major Field 1"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.field_two}
                                                        hasError={errors.field_two && touched.field_two}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.field_two}
                                                        autoFocus={true}
                                                        id="field_two"
                                                        name="field_two"
                                                        placeholder="Major Field 2"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.default_dashboard}
                                                        name="default_dashboard"
                                                    >
                                                        <option value="" disabled>
                                                            Default Dashboard
                                                        </option>
                                                        {state?.map((item) => {
                                                            return <option value={item?._id} >
                                                                {item?.name}
                                                            </option>
                                                        })}

                                                    </select>
                                                    {errors.isActive && touched.default_dashboard && (
                                                        <div className="error">{errors.default_dashboard}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <label htmlFor="fromDate">Default User Type</label>
                                                    <TagsInput value={tags} onChange={handleTagsChange} />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.isActive}
                                                        name="isActive"
                                                    >
                                                        <option value="" disabled>
                                                            Select Status
                                                        </option>
                                                        <option value={true} >
                                                            Active
                                                        </option>
                                                        <option value={false} >
                                                            In Active
                                                        </option>

                                                    </select>
                                                    {errors.isActive && touched.isActive && (
                                                        <div className="error">{errors.isActive}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <Link to='/company-type-master' type='submit' className="btn btn-danger light ms-1">Cancel</Link>
                                                    {/* <Button className="btn btn-danger light ms-1" onClick={() => cancelBtn()}>Cancel</Button> */}
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
    )
}

export default CompanyTypeMasterForm
