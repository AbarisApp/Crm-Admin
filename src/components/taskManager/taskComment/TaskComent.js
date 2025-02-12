import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Badge, Button, Form } from 'react-bootstrap';
import ReminderLater from './remainder/ReminderLater';
import { clodinaryImage, deleteCommentAccTask, deleteTaskById, getCommentAccTask, getCommentTaskById, GetUpdateCommentAccTaskByid, postCommentAccTask, updateCommentAccTask, updateTaskCreated } from '../../../api/login/Login';
import { baseUrlImage } from '../../../baseUrl';
import "./Taskcomment.css"
import CreateTask from './CreateTask';
import { message, Popconfirm } from 'antd';
function TaskComent({ mnualData }) {
    console.log(mnualData);

    const [editComment, setEditComment] = useState(false);
    const [show, setShow] = React.useState(false);
    const [count, setCount] = React.useState(100);
    const [page, setPage] = React.useState(0);
    const [state, setState] = React.useState([]);
    const handleCreateTask = () => setShow(!show);
    const handleClose = () => setShow(false);
    const taskId = window.localStorage.getItem("66565478543478654765376547")

    const [initialValues, setInitialValues] = useState({
        task_id: "",
        comment: "",
        attachments: [],
    });
    const [editValue, setEditValue] = useState(null)
    const [taskDetails, setTaskDetails] = useState(null);
    const [sendBtn, setSendBtn] = useState(false);

    const toastSuccessMessage = (message) => toast.success(message, { position: "top-right" });
    const toastErrorMessage = (message) => toast.error(message, { position: "top-right" });
    const getCommenetData = async (id) => {
        const response = await getCommentAccTask(count, page, id)
        setState(response?.data)
    }

    useEffect(() => {
        getCommenetData(taskId)
    }, [taskId])
    useEffect(() => {
        localStorage.removeItem("66565478543478654765376547");
    }, [])
    const handleTaskDetails = async (id) => {
        localStorage.setItem("66565478543478654765376547", id);
        localStorage.setItem("taskid", id);
        try {
            const resp = await getCommentTaskById(id);
            setEditValue(resp.data)

            if (resp?.data) {
                setTaskDetails(resp.data);
                setInitialValues((prev) => ({
                    ...prev,
                    task_id: resp.data[0]?._id || id,
                }));
            }
        } catch (error) {
            console.error("Network API Error:", error);
        }
    };

    const handleFileUpload = async (event) => {
        if (!event.target.files) return;

        const files = Array.from(event.target.files);
        const uploadedFiles = [];

        for (const file of files) {
            const formData = new FormData();
            formData.append("image", file);

            try {
                const res = await clodinaryImage(formData);
                if (res?.data?.data?.url) {
                    uploadedFiles.push(res.data.data.url);
                }
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }

        setTimeout(() => {
            setInitialValues((prev) => ({
                ...prev,
                attachments: [...(prev.attachments || []), ...uploadedFiles],
            }));
        }, 1000);

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        setEditValue((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        setSendBtn(true);
    };

    const formSubmits = async (e) => {
        e.preventDefault();
    
        try {
            const taskId = localStorage.getItem("66565478543478654765376547");
            if (!taskId) {
                toastErrorMessage("First Select Task");
                return;
            }
    
            // Prepare updatedInitialValues
            const updatedInitialValues = {
                ...initialValues,
                task_id: taskId,
            };
    
            // Remove _id field for adding new comments
            if (!editComment) {
                delete updatedInitialValues._id;
            }
    
            console.log(updatedInitialValues.task_id);
    
            if (!editComment) {
                // Add comment logic
                const res = await postCommentAccTask(updatedInitialValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Comment Added Successfully");
                    getCommenetData(taskId);
                    setInitialValues({
                        task_id: "",
                        comment: "",
                        attachments: [],
                    });
                } else {
                    toastErrorMessage("Failed to Add Comment");
                }
            } else {
                // Edit comment logic
                const res = await updateCommentAccTask(updatedInitialValues._id, updatedInitialValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Comment Edited Successfully");
                    getCommenetData(taskId);
                    setInitialValues({
                        task_id: taskId,
                        comment: "",
                        attachments: [],
                    });
                    setEditComment(false); // Reset edit mode after successful update
                } else {
                    toastErrorMessage("Failed to Edit Comment");
                }
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toastErrorMessage("Error processing the form.");
        }
    };
    


    const confirm = (id) => {
        deleteCommentAccTask(id);
        message.success(' Chat Delete Successful!');
        getCommenetData(localStorage.getItem(`66565478543478654765376547`))
    };

    const cancel = async (id) => {
        try {
            if (id) {
                const response = await GetUpdateCommentAccTaskByid(id);
                if (response?.data) {
                    setInitialValues(response.data);
                    setEditComment(true); // Set edit mode when editing
                } else {
                    toastErrorMessage("Failed to load comment for editing.");
                }
            } else {
                setInitialValues({
                    task_id: "",
                    comment: "",
                    attachments: [],
                });
                setEditComment(false); // Reset edit mode
            }
        } catch (error) {
            console.error("Error in cancel function:", error);
            toastErrorMessage("Error resetting form.");
        }
    };

    const taskDeleted = async (id) => {
        if (1) {
            try {
                const respo = await deleteTaskById(id)
                respo?.statusCode === "200" ? message.success("Task Deleted Successfull") : message.error("Task Deleted Failed")
            } catch (error) {
                message.error("Task Deleted Failed")
            }
        }
    }

    const formSubmit = async (update) => {
        console.log(update);
        try {

            const res = await updateTaskCreated(initialValues._id, update);
            if (res?.statusCode === "200") {
                toastSuccessMessage("Task Updated Successfully");
                // getListData(page);
                setShow(false);
            } else {
                toastErrorMessage("Failed to Update Task");
            }
        } catch (error) {
            toastErrorMessage("Error processing the form.");
        }

    }
    return (
        <>
            <div className='col-xl-4 h-100'>
                <div className="card overflow-y-scroll" style={{ height: "630px" }}>
                    <div className=''>
                        <div className='border-bottom'>
                            <div className=''>
                                <h6>Important</h6>
                                <small className=''>
                                    0 , Task &nbsp; 0,unread
                                </small>

                            </div>
                        </div>

                        <div className="my-3">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='border d-flex align-items-center  w-100'>
                                    <span>
                                        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                                    </span>
                                    <div className='w-100'>
                                        <input
                                            type='search'
                                            placeholder='search'
                                            className='px-2 py-0 w-100 border-0 w-100'
                                            name='name'
                                        />
                                    </div>
                                </div>
                                <div className=''>
                                    <button
                                        type="submit"
                                        style={{ border: "none", backgroundColor: "inherit", color: "#000", padding: "0 4px" }}
                                    >
                                        <i class="fa-sharp fa-solid fa-filter"></i>
                                    </button>
                                </div>
                            </div>
                            {mnualData?.length > 0 ? (
                                mnualData.map((data, i) => (
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            backgroundColor: '#f8f9fc', // light gray background
                                            padding: '10px 15px',
                                            borderRadius: '8px',
                                            margin: '6px 0',
                                            fontSize: '14px', // font size to match the example
                                            color: '#6c757d', // muted gray text color
                                        }}
                                        key={i}
                                        onClick={() => handleTaskDetails(data?._id)}
                                    >
                                        <div>
                                            <div style={{ fontWeight: '500', color: '#000' }}>
                                                {data?.createdBy?.name
                                                    ? `${data?.createdBy?.name} commented on a task`
                                                    : ''}
                                            </div>

                                            <div style={{ color: '#6c757d', fontSize: '12px' }}>
                                                {data?.task_description}
                                            </div>
                                        </div>

                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '12px', color: '#6c757d' }}>
                                                {data?.createdAt
                                                    ? new Date(data.createdAt).toLocaleString('en-GB', {
                                                        day: '2-digit',
                                                        month: 'short',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        hour12: true,
                                                    })
                                                    : ''}
                                            </div>

                                            <Badge
                                                style={{
                                                    backgroundColor: '#f0ad4e',
                                                    color: '#fff',
                                                    fontWeight: '500',
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevents triggering the parent div's onClick
                                                    taskDeleted(data?._id);
                                                }}
                                            >
                                                <i className='fa-sharp fa-solid fa-trash-can fa-2xs'></i>

                                            </Badge>
                                            <Badge
                                                style={{
                                                    backgroundColor: '#afe1af	',
                                                    color: '#fff',
                                                    fontWeight: '500',
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevents triggering the parent div's onClick
                                                    taskDeleted(data?._id);
                                                }}
                                            >
                                                <i class="fa-sharp fa-solid fa-clock fa-shake"></i>

                                            </Badge>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className=''>
                                    <small>
                                        <b>No Task</b>
                                    </small>
                                </div>
                            )}
                        </div>

                        <div className='my-3'>

                        </div>

                    </div>
                </div>
            </div>

            <div className='col-xl-5 h-100'>
                <div className="card " style={{ height: "630px" }}>
                    <div
                        className=""
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                padding: '20px',
                                fontFamily: 'Arial, sans-serif',
                                flexGrow: 1,
                            }}
                        >
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <Button variant="outline-secondary" size="sm" className="mr-2">Mark as Done</Button>
                                    {/* <Button variant="outline-secondary" size="sm" onClick={() => setModalShow(true)}>Remind Later</Button>
                                    <ReminderLater
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    /> */}
                                </div>
                                <Button className='btn-outline' variant="link" size="m" onClick={() => setShow(!show)}>
                                    Edit Task <i class="fa-solid fa-pen-to-square"></i>
                                </Button>
                            </div>

                            {/* Task Information */}


                            <div className="overflow-y-scroll tScrollbarHide" style={{ height: "320px", fontSize: "12px" }}>
                                {taskDetails?.createdBy && (
                                    <div
                                        style={{
                                            backgroundColor: '#f8f9fc',
                                            padding: '10px 15px',
                                            borderRadius: '8px',
                                            color: '#6c757d',
                                            fontSize: '14px',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        {`Task created for you by ${taskDetails?.createdBy?.name || "Unknown"}`}
                                    </div>
                                )}

                                <div
                                    className="mb-3 "
                                    style={{ fontSize: '14px' }}

                                >
                                    {taskDetails?.assignees && taskDetails.assignees?.length > 0 ? (
                                        <span>
                                            Assignee:{" "}
                                            {taskDetails?.assignees?.map((assignee, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        marginRight: "5px",
                                                    }}
                                                >
                                                    <Badge
                                                        bg="info"
                                                        style={{
                                                            borderRadius: "50%",
                                                            padding: "5px 10px",
                                                            marginRight: "5px",
                                                        }}
                                                    >
                                                        {assignee.name.charAt(0).toUpperCase()}
                                                    </Badge>
                                                    <b>{assignee.name}</b>
                                                </span>
                                            ))}
                                        </span>
                                    ) : (
                                        <span className='text-center'> <b>NO COMMENTS</b></span>
                                    )}
                                    {taskDetails?.expect_due_date_time ? <span>
                                        Due Date:{" "}
                                        {taskDetails?.expect_due_date_time
                                            ? new Intl.DateTimeFormat("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                hour12: true,
                                            }).format(new Date(taskDetails.expect_due_date_time))
                                            : ""}
                                    </span> : ""}


                                </div>



                                {/* Comments */}
                                <div className="mb-3">
                                    <div className="d-flex align-items-start">
                                        {/* <Badge bg="info" style={{ borderRadius: '50%', padding: '5px 10px', marginRight: '10px' }}>A</Badge> */}
                                        <div>
                                            {/* <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Abdul Quadir</div> */}
                                            {/* <div style={{ fontSize: '12px', color: '#6c757d' }}>5 Nov 2024, 04:48 PM</div> */}
                                            {taskDetails?.attach_files ? <div className='task-img'>
                                                <img src={`${baseUrlImage}${taskDetails?.attach_files}`} alt='image' />
                                            </div> : ""}
                                            {taskDetails?.task_description ?

                                                <div style={{ fontSize: '14px', marginTop: '5px' }}>

                                                    <div className={`message received`}>
                                                        <small>Task</small>
                                                        <p>{taskDetails?.task_description}</p>
                                                    </div>

                                                </div> : ""}
                                        </div>
                                    </div>
                                </div>
                                {state && state.length > 0 && state.every(item => item?.createdBy?.length > 0 && item?.comment && item?.createdAt) ? (
                                    state.map((item) => (
                                        <div key={item?.id || `item-${Math.random()}`} className="d-flex justify-content-end">
                                            {item?.createdBy.map((subItem) => (
                                                <div key={`${item?.id}-${subItem?.id || Math.random()}`}>
                                                    <div>
                                                        <Badge
                                                            bg="info"
                                                            style={{
                                                                borderRadius: "50%",
                                                                padding: "5px 10px",
                                                                marginRight: "5px",
                                                            }}
                                                        >
                                                            {subItem?.name?.charAt(0)?.toUpperCase() || "?"}
                                                        </Badge>
                                                        <b>{subItem?.name || "Unknown"}</b>
                                                        <p>
                                                            <small>{item?.createdAt || "Unknown date"}</small>
                                                        </p>
                                                    </div>

                                                    <div className={`message ${item?.isSelf ? "sent" : "received"}`}>
                                                        <p>{item?.comment || "No comment provided"}</p>
                                                        <span className="arrow-icon">
                                                            <Popconfirm
                                                                title="Edit or Delete Chat"
                                                                onConfirm={() => confirm(item?._id)}
                                                                onCancel={() => cancel(item?._id)}
                                                                okText={<i className="fa-solid fa-trash fa-2xs"></i>}
                                                                cancelText={<i className="fa-solid fa-pen fa-2xs"></i>}
                                                            >
                                                                <i className="fa-solid fa-angle-down"></i>
                                                            </Popconfirm>

                                                        </span>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center text-uppercase bg-primary rounded text-white">No Comment Available To Display.</div>
                                )}
                            </div>
                        </div>
                        {/* Reply Input */}
                        {taskDetails ? (
                            <form className="task-form" onSubmit={formSubmits}>
                                <Form.Group controlId="replyInput" style={{ marginTop: 'auto' }} >
                                    {/* <Form.Control
                                type="text"
                                placeholder="Reply or mention others with @..."
                                style={{ fontSize: '14px' }}
                            /> */}
                                    {/* Task Description */}
                                    {/* {initialValues?.attachments && initialValues?.attachments?.at((item) => {
                                        return <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${item}`} alt='hero' />
                                    })} */}
                                    <div className="form-group position-relative">
                                        <label htmlFor="taskDescription">
                                            Reply or mention others with @... <span className="required"></span>
                                            <span classNmae="text-danger">*</span></label>
                                        {/* Display uploaded files */}
                                        <div style={{ marginTop: '20px' }}>

                                        </div>
                                        <textarea
                                            id="taskDescription"
                                            placeholder="Enter Reply or mention others with @..."
                                            name="comment"
                                            rows="4"
                                            required
                                            className="form-control border-bottom-0"
                                            value={initialValues?.comment || ''}
                                            onChange={handleChange}
                                        />


                                        {/* Hidden file input */}
                                        <input
                                            type="file"
                                            id="fileInput"
                                            style={{ display: 'none' }}
                                            name="attach_files"
                                            multiple
                                            onChange={handleFileUpload}
                                        />

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

                                </Form.Group>
                                <div className="d-flex align-items-center">
                                    {initialValues?.attachments?.map((item, index) => (
                                        <img
                                            key={index}
                                            style={{ width: "30px", height: "30px", marginRight: "10px" }}
                                            src={`${baseUrlImage}${item}`}
                                            alt={`Uploaded file ${index + 1}`}
                                        />
                                    ))}

                                    {sendBtn && (
                                        <div className="text-end ms-auto"> {/* Ensures buttons align to the right */}
                                            <button className="btn btn-sm btn-danger me-2">
                                                Cancel
                                            </button>
                                            <button className="btn btn-sm btn-outline-primary">
                                                Send <i className="fa-sharp fa-solid fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    )}
                                </div>

                            </form>) : ""}

                        <div className='accor-btn'></div>
                    </div>


                </div>
                <ToastContainer className={"text-center"} />
            </div>
            <CreateTask
                placement="end"
                setShow={setShow}
                show={show}
                handleClose={handleClose}
                handleCreateTask={handleCreateTask}
                initialValues={editValue ? editValue : initialValues}
                setInitialValues={setInitialValues}
                handleChange={handleChange}
                formSubmit={formSubmit}
                editValue={editValue}
            />

        </>
    )
}

export default TaskComent