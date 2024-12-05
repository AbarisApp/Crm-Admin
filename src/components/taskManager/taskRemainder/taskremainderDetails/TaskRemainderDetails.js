import React from 'react'

function TaskRemainderDetails() {
    return (
        <>
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
                                    <Button variant="outline-secondary" size="sm" onClick={() => setModalShow(true)}>Remind Later</Button>
                                    <ReminderLater
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
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
                                                                title="Edit Delete Chat"
                                                                // description="Are you sure to delete?"
                                                                onConfirm={() => confirm(item?._id)}
                                                                onCancel={() => cancel(item?._id)}
                                                                okText={<i class="fa-solid fa-trash fa-2xs"></i>}
                                                                cancelText={<i class="fa-solid fa-pen fa-2xs"></i>}
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
        </>
    )
}

export default TaskRemainderDetails
