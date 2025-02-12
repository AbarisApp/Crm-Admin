import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { getLeadTypeList, getServiceCategory, getStaffpermisionall, leadenquiryStatusMasterListAll, leadSubStatusMasterListAll, reailerDistIdAgainstAll, updateLeadBulkEdit } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import { Select } from 'antd';
const { Option } = Select;

function BulkAssignedModel(props) {
    const [data, setData] = useState(props?.selectedUsers);
    console.log(data);

    const [stream, setStream] = useState([]);
    const [staff, setStaff] = useState([]);
    const [courses, setCourses] = useState([]);
    const [leadTypes, setLeadTypes] = useState([]);
    const [leadStatuses, setLeadStatuses] = useState([]);
    const [leadSubStatuses, setLeadSubStatuses] = useState([]);

    useEffect(() => {
        const arrayObj = props?.selectedUsers?.map((item) => {
            return {
                ...item,
                course_id: item?.course_id?.map((item) => { return { ...item, value: item?._id, lable: item?.service_name } }),
                assignTo: item?.assignTo?.map((item) => { return { ...item, value: item?._id, lable: item?.name } }),
                stream_id: item?.stream_id?.map((item) => { return { ...item, value: item?._id, lable: item?.name } })
            }
        })
        // console.log(arrayObj);
        setData(arrayObj);
        getAllCrud();
    }, [props]);



    const getAllCrud = async () => {
        try {
            const res = await getServiceCategory();
            const res1 = await reailerDistIdAgainstAll();
            const res2 = await getStaffpermisionall({ page: 0, count: 100 });
            const res3 = await leadSubStatusMasterListAll();
            const res4 = await leadenquiryStatusMasterListAll();
            const res5 = await getLeadTypeList(0, 100)
            setStream(res?.data);
            setLeadTypes(res5.data)
            setCourses(res1.data);
            setStaff(res2.data);
            setLeadSubStatuses(res3.data);
            setLeadStatuses(res4.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFormChange = (name, value) => {
        setData(prevData =>
            prevData.map((item) => ({
                ...item,
                [name]: value,
            }))
        );
    };

    const handleInputChange = (index, field, value) => {
        setData(prevData =>
            prevData.map((row, i) =>
                i === index ? { ...row, [field]: value } : row
            )
        );
    };

    const toastSuccessMessage = () => {
        toast.success(`Lead Edit Updated Successfully.`, {
            position: "top-center",
        });
    };
    const errorMessage = () => {
        toast.error(`Lead Edit Not Updated.`, {
            position: "top-center"
        })
    }

    const handleMultiSelectChange = (value, name, rowIndex) => {
        setData((prevState) => {
            const updatedData = [...prevState];
            updatedData[rowIndex] = {
                ...updatedData[rowIndex],
                [name]: value,
            };
            return updatedData;
        });
    };

    const submitdata = async () => {
        const maped = data?.map((item) => {
            return { ...item, lead_status: item?.lead_status, assignTo: item?.assignTo, lead_sub_status: item?.lead_sub_status, course_id: item?.course_id, stream_id: item?.stream_id }
        }
        )
        // console.log(maped);
        const res = await updateLeadBulkEdit({ leads: maped })
        if (res && res.statusCode == "200") {
            toastSuccessMessage();
        } else {
            errorMessage();
        }
    }


    return (
        <Modal
            {...props}
            size="xl"
            fullscreen={true}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ToastContainer />
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Mass Lead Editing
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ overflow: "auto" }}>
                <Container fluid>
                    <div className="container mt-5">
                        <form className='row'>
                            <div className="mb-3 col-3">
                                <label htmlFor="leadAssign" className="form-label">Lead Assign</label>
                                <select
                                    className="form-select"
                                    id="leadAssign"
                                    name="leadAssign"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Lead Assign</option>
                                    {staff?.map((staf) => (
                                        <option key={staf._id} value={staf._id}>{staf.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3 col-3">
                                <label htmlFor="leadType" className="form-label">Lead Type</label>
                                <select
                                    className="form-select"
                                    id="leadType"
                                    name="leadType"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Lead Type</option>
                                    {leadTypes?.map((subst) => {
                                        return <option key={subst._id} value={subst._id}>{subst.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="mb-3 col-3">
                                <label htmlFor="leadStatus" className="form-label">Lead Status</label>
                                <select
                                    className="form-select"
                                    id="leadStatus"
                                    name="leadStatus"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Lead Status</option>
                                    {leadStatuses?.map((subst) => {
                                        return <option key={subst._id} value={subst._id}>{subst.name}</option>
                                    })}

                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="leadSubStatus" className="form-label">Lead Sub Status</label>
                                <select
                                    className="form-select"
                                    id="leadSubStatus"
                                    name="leadSubStatus"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Lead Sub Status</option>
                                    {leadSubStatuses?.map((subst) => {
                                        return <option key={subst._id} value={subst._id}>{subst.name}</option>
                                    })}

                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="streams" className="form-label">{props.dynemicFields?.field_one}</label>
                                <select
                                    className="form-select"
                                    id="streams"
                                    name="streams"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Stream</option>
                                    {stream?.map((stream) => (
                                        <option key={stream._id} value={stream._id}>{stream.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="courses" className="form-label">{props.dynemicFields?.field_two}</label>
                                <select
                                    className="form-select"
                                    id="courses"
                                    name="courses"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Course</option>
                                    {courses?.map((course) => (
                                        <option key={course._id} value={course._id}>{course.service_name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="isApproved" className="form-label">KYC Status</label>
                                <select
                                    className="form-select"
                                    id="isApproved"
                                    name="isApproved"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select KYC Status</option>
                                    <option value={true}>Approved</option>
                                    <option value={false}>Not Approved</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <Table responsive bordered>
                        <thead className="table" style={{ width: "1500px" }}>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Member Type</th>
                                <th>Name</th>
                                <th>{props.dynemicFields?.field_one}</th>
                                <th>{props.dynemicFields?.field_two}</th>
                                <th>Lead Assign</th>
                                <th>Lead Type</th>
                                <th>Lead Status</th>
                                <th>Lead Sub Status</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Main Balance</th>
                                <th>KYC Status</th>
                            </tr>
                        </thead>
                        <tbody className='tbodyCustom'>
                            {data?.map((row, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.member_type}
                                            onChange={(e) => handleInputChange(index, 'member_type', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.name}
                                            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        {/* <Form.Select
                                            value={row.streams}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'streams', e.target.value)}
                                        >
                                            <option value="">Select Stream</option>
                                            {stream.map((item) => (
                                                <option key={item._id} value={item._id}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </Form.Select> */}

                                        <Select
                                            showSearch
                                            mode="multiple"
                                            style={{ width: "200px", height: '40px' }}
                                            placeholder="Select Agent Class "
                                            optionFilterProp="children"
                                            className=""
                                            value={row.stream_id || []}
                                            onChange={(value) => handleMultiSelectChange(value, "stream_id", index)}
                                            getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                        >
                                            {stream?.map((loc) => (
                                                <Option key={loc._id} value={loc._id}>
                                                    {loc.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </td>
                                    <td>
                                        {/* <Form.Select
                                            value={row.courses}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'courses', e.target.value)}
                                        >
                                            <option value="">Select Course</option>
                                            {courses.map((course) => (
                                                <option key={course._id} value={course._id}>
                                                    {course.service_name}
                                                </option>
                                            ))}
                                        </Form.Select> */}
                                        <Select
                                            showSearch
                                            mode="multiple"
                                            style={{ width: "200px", height: '40px' }}
                                            placeholder="Select Agent Class "
                                            optionFilterProp="children"
                                            className=""
                                            value={row.course_id || []}
                                            onChange={(value) => handleMultiSelectChange(value, "course_id", index)}
                                            getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                        >
                                            {courses?.map((loc) => (
                                                <Option key={loc._id} value={loc._id}>
                                                    {loc.service_name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </td>
                                    <td>
                                        {/* <Form.Select
                                            style={{ width: "200px" }}
                                            value={row.leadAssign}
                                            onChange={(e) => handleInputChange(index, 'leadAssign', e.target.value)}
                                        >
                                            <option value="">Select Assign</option>
                                            {staff?.map((staf) => (
                                                <option key={staf._id} value={staf._id}>{staf.name}</option>
                                            ))}
                                        </Form.Select> */}

                                        <Select
                                            showSearch
                                            mode="multiple"
                                            style={{ width: "200px", height: '40px' }}
                                            placeholder="Select Agent Class "
                                            optionFilterProp="children"
                                            className=""
                                            value={row.assignTo || []}
                                            onChange={(value) => handleMultiSelectChange(value, "assignTo", index)}
                                            getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                        >
                                            {staff?.map((loc) => (
                                                <Option key={loc._id} value={loc._id}>
                                                    {loc.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.leadType}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'leadType', e.target.value)}
                                        >
                                            <option value="">Select Lead Type</option>
                                            {leadTypes?.map((subst) => {
                                                return <option key={subst._id} value={subst._id}>{subst.name}</option>
                                            })}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.lead_status}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'lead_status', e.target.value)}
                                        >
                                            <option value="">Select Lead Status</option>
                                            {leadStatuses?.map((subst) => {
                                                return <option key={subst._id} value={subst._id}>{subst.name}</option>
                                            })}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.lead_sub_status}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'lead_sub_status', e.target.value)}
                                        >
                                            <option value="">Select Lead Sub Status</option>
                                            {leadSubStatuses?.map((subst) => {
                                                return <option key={subst._id} value={subst._id}>{subst.name}</option>
                                            })}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.mobile}
                                            onChange={(e) => handleInputChange(index, 'mobile', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.email}
                                            onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.main_balance}
                                            onChange={(e) => handleInputChange(index, 'main_balance', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.is_approved}
                                            onChange={(e) => handleInputChange(index, 'is_approved', e.target.value)}
                                        >
                                            <option value={true}>Approved</option>
                                            <option value={false}>Not Approved</option>
                                        </Form.Select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={submitdata} > Submit</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BulkAssignedModel;
