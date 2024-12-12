import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import CreateTask from '../taskComment/CreateTask';
import { addTaskType, getTaskById, taskCreatedByGet } from '../../../api/login/Login';
import { toast } from 'react-toastify';


function TaskManagerAside({ setManualData }) {
    const [activeKey, setActiveKey] = useState("Important");
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(100);
    const [page, setPage] = useState(0);

    const [initialValues, setInitialValues] = useState({
        task_name: "",
        task_type_id: { type: "", ref: "taskId" },
        task_stage_id: { type: "", ref: "taskStageMaster" },
        public: false,
        billable: false,
        attach_files: null,
        subject: "",
        hourly_rate: "",
        start_date_time: "",
        complition_date_time: "",
        end_date_time: "",
        expect_due_date_time: "",
        priority: { type: "", ref: "priority" },
        repeat_every: { type: "", enum: ["days", "week", "month", "year"] },
        repeated_no: null,
        assignees: [],
        followers: { type: "", ref: "staff" },
        tags: [], // Initialize as an empty array
        task_description: "",
        total_cycle: null,
    });

    const [expandedItems, setExpandedItems] = useState({});

    const handleCreateTask = () => {
        localStorage.removeItem('66565478543478654765376547')
        setShow(!show);
    }
    const toastSuccessMessage = (message) => toast.success(message, { position: "top-right" });
    const toastErrorMessage = (message) => toast.error(message, { position: "top-right" });
    const linkStyle = {
        fontSize: "16px",
        fontWeight: 700,
        color: "#000",
    };

    const activeLinkStyle = {
        ...linkStyle,
        color: "#fff",
        backgroundColor: "#007bff",
    };

    const navLinksData = [
        { label: "Important", icon: "fa-sharp fa-regular fa-star", route: "" },
        { label: "Reminders", icon: "fa-sharp fa-regular fa-clock", route: "reminders" },
        { label: "Mentions", icon: "fa-sharp fa-solid fa-at", route: "" },
        {
            id: "taskforme1234", label: "Task For me", icon: "fa-sharp fa-solid fa-clipboard-list", route: "task-for-me",
            /* subItems: [
                { label: "Active", count: 1 }, { label: "Archived", count: 0 }
            ] */
        },
        {
            id: "taskbyme678", label: "Task By me", icon: "fa-sharp fa-solid fa-clipboard", route: "task-by-me",
            /* subItems: [
                { label: "Active", count: 1 }, { label: "Archived", count: 0 }
            ] */
        },
        {
            label: "My Request", icon: "fa-sharp fa-regular fa-circle-check", route: "", subItems: [
                { label: "Pending Requests", count: 1 }, { label: "Draft Requests", count: 0 },
                { label: "Archived Requests", count: 0 }, { label: "Immediate", count: 0 }
            ]
        },
        {
            label: "My Approvals", icon: "fa-sharp fa-solid fa-circle-check fa-fade", route: "", subItems: [
                { label: "All Approvals", count: 0 }, { label: "Upcoming", count: 0 },
                { label: "Immediate", count: 0 }
            ]
        },
        { label: "My Comments", icon: "fa-solid fa-comments fa-bounce", route: "" }
    ];





    const handleNavClick = async (label, id) => {
        setActiveKey(label);
        setExpandedItems((prevExpanded) => ({
            ...prevExpanded,
            [label]: !prevExpanded[label] // Toggle the expanded state for the clicked label
        }));
        if (id) {
            if (id === "taskbyme678") {
                try {
                    const response = await taskCreatedByGet(page, count)
                    setManualData(response?.data)
                } catch (error) {

                }
            } else {

            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
    const formSubmit = async (add) => {
        // e.preventDefault()
        try {
            if (!initialValues._id) {
                const res = await addTaskType(add);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Task Create Successfully");
                    handleClose(!show)
                    handleNavClick("Task For me", "taskforme1234")
                    setInitialValues({
                        task_name: "",
                        task_type_id: { type: "", ref: 'taskId' },
                        task_stage_id: { type: "", ref: 'taskStageMaster' },
                        public: false,
                        billable: false,
                        attach_files: "",
                        subject: "",
                        hourly_rate: "",
                        start_date_time: "",
                        complition_date_time: "",
                        end_date_time: "",
                        expect_due_date_time: "",
                        priority: { type: "", ref: 'priority' },
                        repeat_every: { type: String, enum: [] },
                        repeated_no: null,
                        assignees: [{ type: [], ref: 'staff' }],
                        followers: { type: "", ref: 'staff' },
                        tags: [""],
                        task_description: "",
                        total_cycle: null,

                    });
                    // getListData(page);
                } else {
                    toastErrorMessage("Failed to Add Template");
                }
            }
        } catch (error) {
            toastErrorMessage("Error processing the form.");
        }

    }
    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (localStorage.getItem("66565478543478654765376547")) {
                    const response = await getTaskById(localStorage.getItem("66565478543478654765376547"));
                    setInitialValues(response.data);
                } else {
                    setInitialValues({
                        task_name: "",
                        task_type_id: { type: "", ref: "taskId" },
                        task_stage_id: { type: "", ref: "taskStageMaster" },
                        public: false,
                        billable: false,
                        attach_files: "",
                        subject: "",
                        hourly_rate: "",
                        start_date_time: "",
                        complition_date_time: "",
                        end_date_time: "",
                        expect_due_date_time: "",
                        priority: { type: "", ref: "priority" },
                        repeat_every: { type: "", enum: ["days", "week", "month", "year"] },
                        repeated_no: null,
                        assignees: [],
                        followers: { type: "", ref: "staff" },
                        tags: [], 
                        task_description: "",
                        total_cycle: null,

                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [localStorage.getItem("66565478543478654765376547")]);



    return (
        <>
            <div className='d-flex flex-column'>
                {/* Dropdown Button Group */}
                <Dropdown as={ButtonGroup} className="create-task-dropdown">
                    <Button variant="light" style={{ color: "red", borderColor: "red" }}>
                        <span>
                            <i className="fa-sharp fa-solid fa-pen fa-beat mr-3"></i>
                        </span>
                        <span style={{ fontWeight: "bold" }} onClick={handleCreateTask}>Create New Task</span>
                    </Button>
                    <Dropdown.Toggle
                        split
                        variant="light"
                        style={{ color: "red", borderColor: "red", marginLeft: "-1px" }}
                        id="dropdown-split-basic"
                    />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Task Option 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Task Option 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Task Option 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/* Scrollable Nav Container */}
                <div className='flex-grow-1' style={{ overflowY: "auto", scrollbarColor: "rgb(33 37 41)" }}>
                    <Nav
                        variant="pills"
                        className="flex-column mb-3 h-100"
                    >
                        {navLinksData.map((link, index) => (
                            <React.Fragment key={index}>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        to={link.subItems ? "" : link.route}
                                        style={activeKey === link.label ? activeLinkStyle : linkStyle}
                                        className="my-2 border"
                                        onClick={() => handleNavClick(link?.label, link?.id)}
                                    >
                                        <span>
                                            <i className={link.icon}></i>
                                        </span>
                                        &nbsp;
                                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                            {link.label}
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                {link.subItems && expandedItems[link.label] && (
                                    <div className="ml-3 pl-3 border-left">
                                        {link.subItems.map((subItem, subIndex) => (
                                            <Nav.Item key={subIndex} className="my-1">
                                                <Nav.Link
                                                    style={{
                                                        ...linkStyle,
                                                        fontSize: "14px",
                                                        fontWeight: "normal",
                                                        color: "#333",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis"
                                                    }}
                                                    disabled
                                                >
                                                    <span>{subItem.label}</span>
                                                    <span className="float-end">{subItem.count}</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </Nav>
                </div>
            </div>
            <CreateTask
                placement="end"
                setShow={setShow}
                show={show}
                handleClose={handleClose}
                handleCreateTask={handleCreateTask}
                initialValues={initialValues}
                setInitialValues={setInitialValues}
                handleChange={handleChange}
                formSubmit={formSubmit}
            />
        </>
    );
}

export default TaskManagerAside;


