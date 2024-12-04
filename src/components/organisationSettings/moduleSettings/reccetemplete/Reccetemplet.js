import React, { useEffect, useState } from 'react';
import { Accordion, Form, Button, Dropdown } from 'react-bootstrap';
import { addOrganisationSettingsMdlsttingTemp, deleteOrganisationSettingsMdlsttingTemp, getAllAssign, getByOrganisationSettingsMdlsttingTempId, getListOrganisationSettingsMdlsttingTemp, updateOrganisationSettingsMdlsttingTemp } from '../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Select from 'react-select';
function Reccetemplet() {
    const [show, setShow] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState([]);
    const [staffdata, setStaffData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [templeteId, setTempleteId] = useState(false);
    const [page, setPage] = useState(0);

    const [initialValues, setInitialValues] = useState({
        module_id: "66b5ca29faf49a2bd9a44ec2", 
        name: "",
        isActive: true,
        sort_no: 1,
        assigned_to: [],
        stack_holders: [],
        instructions: "",
    });

    const toastSuccessMessage = (message) => toast.success(message, { position: "top-right" });
    const toastErrorMessage = (message) => toast.error(message, { position: "top-right" });

    const getListData = async (page) => {
        setLoading(true);
        try {
            const res = await getListOrganisationSettingsMdlsttingTemp(page, 10);
            setData(res?.data);
            setPage(page);
        } catch (error) {
            toastErrorMessage("Failed to load templates.");
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleMultiSelectChange = (name, selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setInitialValues((prevValues) => ({ ...prevValues, [name]: selectedValues }));
    };

    const submitForm = async (e) => {
        e.preventDefault();
    
        // Check if module_id is valid or required
        if (!initialValues.module_id || initialValues.module_id === "") {
            toastErrorMessage("Module ID is required and should be a valid ObjectId.");
            return;
        }
    
        try {
            if (!initialValues._id) {
                const res = await addOrganisationSettingsMdlsttingTemp(initialValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Template Added Successfully");
                    // Reset form values, keeping module_id if needed
                    setInitialValues({ module_id: "66b5ca29faf49a2bd9a44ec2", name: "", isActive: true, sort_no: 1, assigned_to: [], stack_holders: [], instructions: "" });
                    getListData(page);
                    setShow(false);
                } else {
                    toastErrorMessage("Failed to Add Template");
                }
            } else {
                const res = await updateOrganisationSettingsMdlsttingTemp(initialValues._id, initialValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Template Updated Successfully");
                    getListData(page);
                    setShow(false);
                } else {
                    toastErrorMessage("Failed to Update Template");
                }
            }
        } catch (error) {
            toastErrorMessage("Error processing the form.");
        }
    };

    const setUpdateData = async (id) => {
        try {
            if (id) {
                const response = await getByOrganisationSettingsMdlsttingTempId(id);
                if (response?.statusCode === "200") {
                    setInitialValues(response?.data);
                    setShow(true);
                }

            }
            else {
                const response = await getByOrganisationSettingsMdlsttingTempId(id);
                if (response?.statusCode === "200") {
                    setInitialValues(response?.data);
                }
            }
        } catch (error) {
            toastErrorMessage("Failed to fetch template data.");
        }
    };

    const handleAddTemplate = () => {
        setInitialValues({
            module_id: "",
            name: "",
            isActive: true,
            sort_no: 1,
            assigned_to: [],
            stack_holders: [],
            instructions: "",
        });
        setShow(true);
    };

    const deleteBlockAdd = async (id) => {
        setLoading(true);
        try {
            await deleteOrganisationSettingsMdlsttingTemp(id);
            getListData(page);
            toastSuccessMessage("Template Deleted Successfully");
        } catch (error) {
            toastErrorMessage("Failed to delete template.");
        }
        setLoading(false);
    };
    useEffect(() => {
        getListData(page);
    }, [page]);

    const assignStaff = async (id) => {
        setTempleteId(id)
        try {
            const response = await getAllAssign();
            setStaffData(response?.data)

        } catch (error) {
            console.error("Error fetching assigned staff:", error);
        }
    };

    return (
        <>
            <div className='col-xl-4'>
                <div className='card ' style={{ height: "77vh", overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}>
                    <div className=''>
                        <div className='border-bottom'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className=''>
                                    <h6>Recce Template</h6>
                                </div>
                                <div className=''>
                                    <button className='btn btn-sm btn-outline-primary' onClick={handleAddTemplate}> + Add Template</button>
                                </div>
                            </div>
                        </div>
                        {loading ? (
                            "Loading..."
                        ) : (
                            data?.map((item, i) => (
                                <div key={i} className="my-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span onClick={() => assignStaff(item?._id)} className='cursor-pointer'>
                                            <b>{item?.name}</b>
                                        </span>
                                        <span>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    {/* Icon or button here */}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => setUpdateData(item?._id)}>
                                                        <i className="fas fa-pen"></i> Rename
                                                    </Dropdown.Item>
                                                    <Dropdown.Item onClick={() => deleteBlockAdd(item?._id)}>
                                                        <i className="fas fa-trash"></i> Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}



                        {show && (
                            <div className='my-3'>
                                <form onSubmit={submitForm}>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className='w-75'>
                                            <input
                                                type='text'
                                                placeholder='Enter Template Name'
                                                className='px-2 py-0 w-100'
                                                name='name'
                                                value={initialValues.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className=''>
                                            <button
                                                type="submit"
                                                style={{ border: "none", backgroundColor: "inherit", color: "#000", padding: "0 4px" }}
                                            >
                                                <i className="fa-sharp fa-regular fa-circle-check"></i>
                                            </button>
                                            &nbsp;
                                            <span onClick={() => setShow(false)}>
                                                <i className="fa-sharp fa-regular fa-circle-xmark"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <div className='col-xl-5'>
                <div className='card' >
                    <div className='' style={{ height: "67vh", overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}>
                        <div className='border-bottom'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className=''>
                                    <h6>Recce Template Details</h6>
                                </div>
                            </div>
                        </div>

                        <div className='accor-btn '>
                            <Accordion defaultActiveKey="0">
                                {/* Recce Detail Section */}
                                <Accordion.Item eventKey="0" className='border-0 mb-0 '>
                                    <Accordion.Header onClick={() => setExpanded(!expanded)} className='p-0'>
                                        Recce Detail
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Form.Group controlId="assignRecce">
                                                <Form.Label>Assign Recce to (will receive Recce Link)</Form.Label>

                                                <Select
                                                    options={staffdata.map(staff => ({ label: staff.name, value: staff._id }))}
                                                    placeholder="Select Rloes"
                                                    value={initialValues.assigned_to.map(id => {
                                                        const item = staffdata.find(item => item._id === id);
                                                        return item ? { label: item.name, value: id } : null;
                                                    }).filter(Boolean)}
                                                    onChange={(selected) => handleMultiSelectChange("assigned_to", selected)}
                                                    isMulti
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="assignRecce">
                                                <Form.Label>Project Stakeholders details</Form.Label>
                                                <Select
                                                    options={staffdata.map(staff => ({ label: staff.name, value: staff._id }))}
                                                    placeholder="Select Rloes"
                                                    value={initialValues.stack_holders.map(id => {
                                                        const item = staffdata.find(item => item._id === id);
                                                        return item ? { label: item.name, value: id } : null;
                                                    }).filter(Boolean)}
                                                    onChange={(selected) => handleMultiSelectChange("stack_holders", selected)}
                                                    isMulti
                                                />
                                            </Form.Group>
                                            {/*  <Select
                                            options={staffdata.map(staff => ({ label: staff.name, value: staff._id }))}
                                            placeholder="Stack Holders"
                                            value={initialValues.stack_holders.map(id => ({ label: id, value: id }))}
                                            onChange={(selected) => handleMultiSelectChange("stack_holders", selected)}
                                            isMulti
                                        /> */}

                                            <textarea
                                                placeholder='Enter Instructions'
                                                className='form-control'
                                                name='instructions'
                                                value={initialValues.instructions}
                                                onChange={handleChange}
                                            />
                                        </Form>

                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* External Environment */}
                                <Accordion.Item eventKey="1" className='border-0 mb-0'>
                                    <Accordion.Header className='p-0'>
                                        External Environment
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Form.Group controlId="additionalDetails">
                                                <Form.Label><small>Section Guide Video</small></Form.Label>
                                                <Form.Control disabled={true} rows={3} placeholder="https://support.google.com/news" />
                                            </Form.Group>
                                            <small>External Photos and Videos</small>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* Internal Environment */}
                                <Accordion.Item eventKey="2" className='border-0 mb-0'>
                                    <Accordion.Header className='p-0'>
                                        Internal Environment
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Form.Group controlId="additionalDetails">
                                                <Form.Label><small>Section Guide Video</small></Form.Label>
                                                <Form.Control disabled={true} rows={3} placeholder="https://support.google.com/news" />
                                            </Form.Group>
                                            <small>Internal Photos and Videos</small>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* Capture Space */}
                                <Accordion.Item eventKey="4" className='border-0 mb-0'>
                                    <Accordion.Header className='p-0'>
                                        Capture Space
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <strong>My Space</strong>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* Signage And Facade */}
                                <Accordion.Item eventKey="5" className='border-0 mb-0'>
                                    <Accordion.Header className='p-0'>
                                        Signage And Facade
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Store Name</li>
                                            <li>Store GSTIN</li>
                                            <li>Signage contact number</li>
                                            <li>Local Language</li>
                                            <li>Store name in local language</li>
                                            {/* More list items... */}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <button className='btn btn-sm btn-primary' type='button' onClick={submitForm}>
                        Save
                    </button>
                </div>
                <ToastContainer className={"text-center"} />

            </div>
        </>
    );
}

export default Reccetemplet;
