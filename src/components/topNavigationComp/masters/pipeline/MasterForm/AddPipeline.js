import { Formik, FieldArray } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { getPrizeDistributionById, postPrizeDistribution, updatePrizeDistributionById } from '../../../../../api/login/Login';
import Select from 'react-select'; // Import react-select

function AddPipeline() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add New Pipeline",
    };

    const [initialValues, setInitialValues] = useState({
        pipelineName: "",
        stages: [{ name: "India" }, { name: "Sri Lanka" }, { name: "Nepal" }],
        access: "all",
        people: [],
    });

    const [peopleOptions, setPeopleOptions] = useState([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Mike Johnson" },
    ].map(person => ({ value: person.id, label: person.name }))); // Updated to match react-select format

    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [stageName, setStageName] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.pipelineName) {
            errors.pipelineName = "Pipeline Name is required";
        }
        if (values.access === "selectPeople" && values.people.length === 0) {
            errors.people = "Please select at least one person";
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
                const res = await postPrizeDistribution(values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Pipeline added successfully");
                    setTimeout(() => {
                        navigate(`/list-pipeline`);
                    }, 1000);
                }
            } else {
                const res = await updatePrizeDistributionById(params.id, values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Pipeline updated successfully");
                    setTimeout(() => {
                        navigate(`/list-pipeline`);
                    }, 1000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (params?.id) {
                const response = await getPrizeDistributionById(params.id);
                setInitialValues({
                    pipelineName: response?.data?.pipelineName || "",
                    stages: response?.data?.stages || [{ name: "Stage 1" }, { name: "Stage 2" }, { name: "Stage 3" }],
                    access: response?.data?.access || "all",
                    people: response?.data?.people?.map(person => ({ value: person.id, label: person.name })) || [],
                });
            }
        };

        // fetchData();
    }, [params?.id]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setStageName("");
        setEditIndex(null);
    };

    const handleAddOrEditStage = (push, replace) => {
        if (stageName.trim() === "") return;
        if (editIndex !== null) {
            replace(editIndex, { name: stageName });
        } else {
            push({ name: stageName });
        }
        handleCloseModal();
    };

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
                                    {params?.id ? "UPDATE" : "ADD"} Pipeline
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {({ values, handleChange, handleSubmit, errors, touched, handleBlur, setFieldValue }) => (
                                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                                        <div className="row">
                                            {/* Pipeline Name */}
                                            <div className="col-xl-4 mb-3">
                                                <h6>Pipeline Name</h6>
                                                <CustomInputField
                                                    type="text"
                                                    value={values.pipelineName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="pipelineName"
                                                />
                                                {touched.pipelineName && errors.pipelineName && (
                                                    <div className="text-danger">{errors.pipelineName}</div>
                                                )}
                                            </div>

                                            {/* Pipeline Stages */}
                                            <div className="col-xl-12 mb-3">
                                                <h6>Pipeline Stages</h6>
                                                <FieldArray name="stages">
                                                    {({ insert, remove, push, replace }) => (
                                                        <>
                                                            {values.stages.map((stage, index) => (
                                                                <div key={index} className="row mb-3">
                                                                    <div className="col-xl-6">
                                                                        <CustomInputField
                                                                            type="text"
                                                                            value={stage.name}
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                    <div className="col-xl-2">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-warning"
                                                                            onClick={() => {
                                                                                setEditIndex(index);
                                                                                setStageName(stage.name);
                                                                                handleShowModal();
                                                                            }}
                                                                        >
                                                                            Edit
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-danger"
                                                                            onClick={() => remove(index)}
                                                                        >
                                                                            Delete
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={handleShowModal}
                                                            >
                                                                Add New Stage
                                                            </button>

                                                            {/* Stage Modal */}
                                                            <Modal show={showModal} onHide={handleCloseModal}>
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>{editIndex !== null ? "Edit" : "Add"} Stage</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <input
                                                                        type="text"
                                                                        value={stageName}
                                                                        onChange={(e) => setStageName(e.target.value)}
                                                                        placeholder="Enter stage name"
                                                                        className="form-control"
                                                                    />
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleCloseModal}>
                                                                        Close
                                                                    </Button>
                                                                    <Button
                                                                        variant="primary"
                                                                        onClick={() => handleAddOrEditStage(push, replace)}
                                                                    >
                                                                        {editIndex !== null ? "Save Changes" : "Add Stage"}
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>
                                                        </>
                                                    )}
                                                </FieldArray>
                                            </div>

                                            {/* Access Control */}
                                            <div className="col-xl-12 mb-3">
                                                <h6>Access</h6>
                                                <div>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="access"
                                                            value="all"
                                                            checked={values.access === "all"}
                                                            onChange={handleChange}
                                                        />{" "}
                                                        All
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="access"
                                                            value="selectPeople"
                                                            checked={values.access === "selectPeople"}
                                                            onChange={handleChange}
                                                        />{" "}
                                                        Select People
                                                    </label>
                                                </div>
                                            </div>

                                            {/* People Selector with react-select */}
                                            {values.access === "selectPeople" && (
                                                <div className="col-xl-12 mb-3">
                                                    <h6>Select People</h6>
                                                    <Select
                                                        isMulti
                                                        name="people"
                                                        closeMenuOnSelect={false}
                                                        options={peopleOptions}
                                                        value={values.people} // ensure react-select is controlled
                                                        onChange={(selectedOptions) => setFieldValue("people", selectedOptions)}
                                                    />
                                                    {touched.people && errors.people && (
                                                        <div className="text-danger">{errors.people}</div>
                                                    )}
                                                </div>
                                            )}

                                            <div className="col-xl-12">
                                                <button type="submit" className="btn btn-primary">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddPipeline;
