import React, { useEffect, useState } from 'react';
import { Button, Offcanvas, Spinner } from 'react-bootstrap';
import Select from 'react-select';
import { clodinaryImage, dmtDisputePriority, getAllAssign, getListTaskStageSelect, getListTaskTypeSelect } from '../../../api/login/Login';
import './createTask.css';
import { baseUrlImage } from '../../../baseUrl';
import { toast } from 'react-toastify';

function CreateTask({ editValue, show, handleClose, setInitialValues, initialValues, handleChange, formSubmit }) {
    const [priorityState, setPriorityState] = useState([]);
    const [staffData, setStaffData] = useState([]);
    const [taskType, setTaskType] = useState([]);
    const [taskStage, setTaskStage] = useState([]);
    const [imgloading, setimgloading] = useState(false);
    const toastSuccessMessageimg = (message) => toast.success(message, { position: "bottom-right" });
    const toastErrorMessageimg = (message) => toast.error(message, { position: "bottom-right" });
    const getPriorityData = async () => {
        try {
            const response = await dmtDisputePriority();
            setPriorityState(response?.data || []);
        } catch (error) {
            alert(`Failed to fetch priority data: ${error.message}`);
            console.error("Priority data fetch error:", error);
        }
    };
    useEffect(() => {
        if (editValue) {
            setInitialValues(editValue)
        }
    }, [editValue])
    const getStaffData = async () => {
        try {
            const response = await getAllAssign();
            const staffs = response?.data.map((item) => ({
                value: item._id,
                label: item.name,
            }));
            setStaffData(staffs);
            
        } catch (error) {
            console.error("Error fetching assigned staff:", error);
        }
    };



    const getTaskTypeSelect = async () => {
        try {
            const response = await getListTaskTypeSelect();
            setTaskType(response?.data || []);
        } catch (error) {
            console.error("Error fetching Task Type:", error);
        }
    };
    const getTaskStageSelect = async () => {
        try {
            const response = await getListTaskStageSelect();
            setTaskStage(response?.data || []);
        } catch (error) {
            console.error("Error fetching Task Stage:", error);
        }
    };

    useEffect(() => {
        getPriorityData();
        getStaffData();
        getTaskTypeSelect()
        getTaskStageSelect()
    }, []);


    const handleKeyPress = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const tag = e.target.value.trim();
            if (tag) {
                addTag(tag);
            }
        }
    };

    const addTag = (tag) => {
        if (!initialValues?.tags?.includes(tag)) {
            setInitialValues((prev) => ({
                ...prev,
                tags: [...prev.tags, tag],
            }));
            setInitialValues((prev) => ({ ...prev, tagsInput: "" }));
        }
    };

    const removeTag = (indexToRemove) => {
        const updatedTags = initialValues.tags.filter((_, index) => index !== indexToRemove);
        setInitialValues((prev) => ({ ...prev, tags: updatedTags }));
    };
    const handleFileUpload = async (event) => {
        const image = new FormData()
        if (!event.target.files) {
            return
        }
        image.append('image', event.target.files[0])
        const res = await clodinaryImage(image)
        setimgloading(true)
        if (res === "200") {
            toastSuccessMessageimg(res?.message)
            setimgloading(false)
        } else {
            toastErrorMessageimg(res?.message)
            setimgloading(false)
        }
        setTimeout(() => {
            setInitialValues((prev) => ({ ...prev, attach_files: res.data?.data?.url }));
        }, 2000);

    };


    const handleMultiSelectChange = (name) => (selectedOptions) => {
        const values = selectedOptions ? selectedOptions.map(option => option.value) : [];

        setInitialValues(prevValues => ({
            ...prevValues,
            [name]: values,
        }));
    };

    const isFormValid = () => {
        const requiredFields = [
            'task_name',
            'task_type_id',
            'task_stage_id',
            'task_description',
            'expect_due_date_time',
            'assignees',
        ];

        // return requiredFields?.every(field => initialValues[field] && initialValues[field].length !== 0);
    };


    const styles = {
        tagInputContainer: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            border: '1px solid #ddd',
            padding: '5px',
            borderRadius: '5px',
            gap: '5px',
        },
        tag: {
            display: 'flex',
            alignItems: 'center',
            background: '#e0e0e0',
            borderRadius: '3px',
            padding: '3px 8px',
            fontSize: '0.9em',
        },
        removeTag: {
            marginLeft: '5px',
            cursor: 'pointer',
            color: '#555',
        },
        input: {
            border: 'none',
            outline: 'none',
            flex: '1',
            fontSize: '0.9em',
            minWidth: '120px',
        },
    };

    const submitData = () => {
        formSubmit(initialValues)
    }
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end" className="responsive-offcanvas" style={{ width: "600px" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="text-white">Create Task</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form className="task-form" >
                        {/* Task Details */}
                        <div className="row">
                            <div className="form-group col-xl-4">
                                <label htmlFor="taskName">Task Name  <span classNmae="text-danger">*</span></label>
                                <input type="text" id="taskName" name="task_name" placeholder="Task Name" className="form-control"
                                    value={initialValues?.task_name || ''} onChange={handleChange} />
                            </div>
                            <div className="form-group col-xl-4">
                                <label htmlFor="task_type_id">Task Type  <span classNmae="text-danger">*</span></label>
                                <select id="task_type_id" className="w-100" name="task_type_id"
                                    value={initialValues?.task_type_id || ''} onChange={handleChange}>
                                    <option value="">Select Task Type</option>
                                    {taskType?.map((item, i) =>
                                        <option value={item?._id}>{item?.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group col-xl-4">
                                <label htmlFor="task_stage_id">Task Stage  <span classNmae="text-danger">*</span></label>
                                <select id="task_stage_id" className="w-100" name="task_stage_id"
                                    value={initialValues?.task_stage_id || ''} onChange={handleChange}>
                                    <option value="">Select Task Stage</option>
                                    {taskStage?.map((item, i) =>
                                        <option value={item?._id}>{item?.task_stage}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group col-xl-4">
                                <label htmlFor="subject">Subject </label>
                                <input type="text" id="subject" name="subject" placeholder="Subject" className="form-control"
                                    value={initialValues?.subject || ''} onChange={handleChange} />
                            </div>

                            <div className="form-group col-xl-4">
                                <label htmlFor="hourlyRate">Hourly Rate </label>
                                <input type="number" id="hourlyRate" name="hourly_rate" placeholder="Hourly Rate" className="form-control"
                                    value={initialValues?.hourly_rate || ''} onChange={handleChange} />
                            </div>

                            <div className="form-group col-xl-4">
                                <label htmlFor="repeatedNo">Repeated No </label>
                                <input type="text" id="repeatedNo" name="repeated_no" placeholder="Repeated No" className="form-control"
                                    value={initialValues?.repeated_no || ''} onChange={handleChange} />
                            </div>

                            <div className="form-group col-xl-3">
                                <label htmlFor="startDate">
                                    Start Date Time
                                </label>
                                <input
                                    type="date"
                                    name="start_date_time"
                                    id="startDate"
                                    className="form-control"
                                    value={
                                        initialValues?.start_date_time
                                            ? new Date(initialValues.end_date_time).toISOString().split('T')[0]
                                            : new Date().toISOString().split('T')[0]
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group col-xl-3">
                                <label htmlFor="endDate">
                                    End Date Time <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="endDate"
                                    name="end_date_time"
                                    className="form-control"
                                    value={
                                        initialValues?.end_date_time
                                            ? new Date(initialValues.end_date_time).toISOString().split('T')[0]
                                            : new Date().toISOString().split('T')[0]
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group col-xl-3">
                                <label htmlFor="complition_date_time">
                                    Completion Date 
                                </label>
                                <input
                                    type="date"
                                    id="complition_date_time"
                                    name="complition_date_time"
                                    className="form-control"
                                    value={
                                        initialValues?.complition_date_time
                                            ? new Date(initialValues.complition_date_time).toISOString().split('T')[0]
                                            : new Date().toISOString().split('T')[0]
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group col-xl-3">
                                <label htmlFor="dueDate">
                                    Expected Date <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="expect_due_date_time"
                                    id="dueDate"
                                    className="form-control"
                                    value={
                                        initialValues?.start_date_time
                                            ? new Date(initialValues.start_date_time).toISOString().split('T')[0]
                                            : new Date().toISOString().split('T')[0]
                                    }
                                    onChange={handleChange}
                                />
                            </div>


                            <div className="form-group col-xl-4">
                                <label htmlFor="repeat">Repeat Every </label>
                                <select id="repeat" className="w-100" name="repeat_every"
                                    value={initialValues?.repeat_every || ''} onChange={handleChange}>
                                    <option value={"day"} selected>Day</option>
                                    <option value={"week"}>Week</option>
                                    <option value={"month"}>Month</option>
                                    <option value={"year"}>Year</option>
                                    {/* {initialValues?.repeat_every?.enum?.map((item, i) => {
                                        return <option value={item}>{item}</option>
                                    })} */}

                                </select>
                            </div>

                            <div className="form-group col-xl-4">
                                <label htmlFor="priority">Priority </label>
                                <select id="priority" className="w-100" name="priority"
                                    value={
                                        initialValues?.priority ? initialValues?.priority : "" || ''} onChange={handleChange}>
                                    {priorityState?.map((item, i) =>
                                        <option value={item?._id}>{item?.priority}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group col-xl-4">
                                <label htmlFor="total_cycle">Total Cycle </label>
                                <input type="text" id="total_cycle" name="total_cycle" placeholder="Total Cycle" className="form-control"
                                    value={initialValues?.total_cycle || ''} onChange={handleChange} />
                            </div>
                            <div className="form-group col-xl-12">
                                <label htmlFor="tags">Tags </label>
                                <div style={styles.tagInputContainer}>
                                    {initialValues?.tags?.map((tag, index) => (
                                        <div key={index} style={styles.tag}>
                                            {tag}
                                            <span style={styles.removeTag} onClick={() => removeTag(index)}>
                                                &times;
                                            </span>
                                        </div>
                                    ))}
                                    <input
                                        type="text"
                                        name="tagsInput"
                                        value={initialValues?.tagsInput || ""}
                                        onChange={(e) => setInitialValues((prev) => ({ ...prev, tagsInput: e.target.value }))}
                                        onKeyDown={handleKeyPress}
                                        placeholder="Type a tag and press Enter"
                                        style={styles.input}
                                    />
                                </div>
                            </div>
                            

                            <div className="form-group col-xl-12">
                                <label htmlFor="assignee">
                                    Assignee <span className="text-danger">*</span>
                                </label>
                                <Select
                                    name="assignees"
                                    options={staffData}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    onChange={handleMultiSelectChange('assignees')}
                                    id="assignees"
                                    value={staffData.filter(option =>
                                        initialValues?.assignees?.includes(option.value)
                                    )}


                                />
                            </div>

                            <div className="form-group col-xl-12">
                                <label htmlFor="followers">Followers  <span classNmae="text-danger">*</span></label>
                                <select id="followers" className="w-100" name="followers"
                                    value={initialValues?.followers || ''} onChange={handleChange}>
                                    <option value="">Select Follower</option>
                                    {staffData.map((item, i) =>
                                        <option value={item?.value}>{item?.label}</option>
                                    )}
                                </select>
                            </div>

                            {/* Checkboxes */}
                            <div className="form-group col-xl-8 mt-4">
                                <div className="row">
                                    <div className="form-group col-xl-6 col-md-6 col-12">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                name="public"
                                                id="public"
                                                className="form-check-input"
                                                checked={initialValues?.public || false}
                                                onChange={() => handleChange({ target: { name: "public", value: !initialValues?.public } })}
                                            />
                                            <label htmlFor="public" className="form-check-label">Public  </label>
                                        </div>
                                    </div>
                                    <div className="form-group col-xl-6 col-md-6 col-12">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                id="billable"
                                                name="billable"
                                                className="form-check-input"
                                                checked={initialValues?.billable || false}
                                                onChange={() => handleChange({ target: { name: "billable", value: !initialValues?.billable } })}
                                            />
                                            <label htmlFor="billable" className="form-check-label">Billable  </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Task Description */}
                        <div className="form-group position-relative">
                            <label htmlFor="taskDescription">
                                {/* Task Description <span className="required"></span> */}
                                {/* <span classNmae="text-danger">*</span> */}
                            </label>
                            <textarea
                                id="taskDescription"
                                placeholder="Enter Task Description *"
                                name="task_description"
                                rows="4"
                                required
                                className="form-control border-bottom-0"
                                value={initialValues?.task_description || ''}
                                onChange={handleChange}
                            ></textarea>

                            {/* Hidden file input */}
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                name='attach_files'
                                // value={initialValues?.attach_files}
                                onChange={handleFileUpload}
                            />
                            {imgloading ? (
                                <Spinner animation="border" size="sm" />
                            ) : (
                                initialValues?.attach_files && (
                                    <img
                                        style={{ width: "100px", height: "100px" }}
                                        src={`${baseUrlImage}${initialValues?.attach_files}`}
                                        alt="Attachment"
                                    />
                                )
                            )}


                            {/* Icon buttons */}
                            <div
                                className="icon-group position-absolute"
                                style={{
                                    bottom: '10px',
                                    right: '10px',
                                    display: 'flex',
                                    gap: '8px',
                                    alignItems: 'center',
                                }}
                            >
                                <i
                                    className="bi bi-link cursor-pointer"
                                    onClick={() => document.getElementById('fileInput').click()}
                                    title="Attach a link"
                                    style={{ fontSize: '1.2em' }}
                                ></i>
                                <i
                                    className="bi bi-image cursor-pointer"
                                    onClick={() => document.getElementById('fileInput').click()}
                                    title="Attach an image"
                                    style={{ fontSize: '1.2em' }}
                                ></i>
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="button-group d-flex justify-content-end">
                            <Button type="button"
                                onClick={submitData} className="btn btn-primary">
                                Submit
                            </Button>
                            <Button type="button" variant="outline-secondary" onClick={handleClose} className="cancel-button">Cancel</Button>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CreateTask;
