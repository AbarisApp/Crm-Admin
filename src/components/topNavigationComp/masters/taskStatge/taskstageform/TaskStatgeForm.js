import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CustomInputField from '../../../../../common/CustomInputField';
import { Button } from 'antd';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { toast } from 'react-toastify';
import { addTaskStageMaster, getByTaskStageMasterId, updateTaskStageMaster } from '../../../../../api/login/Login';

function TaskStageForm
() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Task Stage",
    }
    const [initialValues, setInitialValues] = useState({
        task_stage: "",
        isActive: null,
    });
    const params = useParams();
    const navigate = useNavigate()
    const validate = (values) => {
        let errors = {};
        if (!values.task_stage) {
            errors.task_stage = "Task Statge Is Required";
        }
        if (!values.isActive) {
            errors.isActive = "Task Stage Is Required";
        }
        return errors;
    };
    const blankBtn = () => {
        setInitialValues({ task_stage: "", isActive: "" });
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
                    const res = await addTaskStageMaster(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage(" Task Stage Successfully");
                        navigate(`/task-stage`)
                    }
                    blankBtn()
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateTaskStageMaster(params.id, values);

                    if (res?.statusCode == "200") {
                        toastSuccessMessage("Task Stage Successfully");
                        blankBtn()
                        navigate(`/task-stage`)
                    }
                    if (res?.statusCode == "403") {
                        toastSuccessMessage("Task Stage Successfully");
                        blankBtn()
                    }
                    // getFloorMasters(page)

                } catch (error) {
                    alert(`Error`, error)
                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };



    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getByTaskStageMasterId(params.id);
                    setInitialValues(response?.data);

                } else {
                    setInitialValues({
                        task_stage: "",
                        isActive: ""
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Task Stage
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
                                                <div className="col-xl-5 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.task_stage}
                                                        hasError={errors.task_stage && touched.task_stage}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.task_stage}
                                                        autoFocus={true}
                                                        id="task_stage"
                                                        name="task_stage"
                                                        placeholder="Task Stage"
                                                    />
                                                </div>
                                                <div className="col-xl-5 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.isActive}
                                                        name="isActive"
                                                    >
                                                        <option value="" disabled>
                                                            Select  Status
                                                        </option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select>
                                                    {errors.isActive && touched.isActive && (
                                                        <div className="error">{errors.isActive}</div>
                                                    )}
                                                </div>

                                                <div className="col-xl-2 mb-3">
                                                    <Link to='/affilated-by' type='submit' className="btn btn-danger light ms-1">Cancel</Link>
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

export default TaskStageForm

