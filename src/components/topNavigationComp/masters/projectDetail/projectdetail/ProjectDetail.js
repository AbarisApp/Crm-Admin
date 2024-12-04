import React, { useState, useEffect } from 'react';
import { Input, Button, DatePicker } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Tab, Tabs } from "react-bootstrap";
import { getVoucherTypeData, postAddBookCode, updateAddBookCodeById } from '../../../../../api/login/Login';
import { MyOrganisation } from './MyOrganisation';
import { OtherOrganisation } from './OtherOrganisation';
import { baseUrlImage } from '../../../../../baseUrl';

function ProjectDetail({ formData, masterStore }) {
    const navigate = useNavigate();
    // const params = useParams();
    // const [clientOptions, setClientOptions] = useState([]);
    // // const [formData, setFormData] = useState({
    // //     projectName: 'Abaris Office Interior Work',
    // //     client: 'Abaris Client',
    // //     businessCategory: 'Commercial',
    // //     projectAddress: '98B, II Floor, NFC',
    // //     state: 'Delhi',
    // //     city: 'New Delhi',
    // //     projectScope: 'Design and Build',
    // //     projectEstimate: '1000000',
    // //     projectArea: '500',
    // //     clientPOCName: '',
    // //     clientPOCNumber: '',
    // //     recceDueDate: null,
    // //     expectedStartDate: null,
    // //     executionDueDate: null,
    // //     projectUsers: [{ user: '', role: '' }]
    // // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSelectChange = (name, value) => {
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleDateChange = (name, date) => {
    //     setFormData({ ...formData, [name]: date });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Basic validation
    //     if (!formData.projectName || !formData.client || !formData.projectAddress || !formData.projectEstimate) {
    //         toast.error("All required fields must be filled");
    //         return;
    //     }

    //     try {
    //         const response = params?.id
    //             ? await updateAddBookCodeById(params.id, formData)
    //             : await postAddBookCode(formData);

    //         if (response?.statusCode === "200") {
    //             toast.success(params?.id ? "Updated successfully" : "Added successfully");
    //             navigate(`/project-list`);
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         toast.error("Failed to submit form");
    //     }
    // };

    // useEffect(() => {
    //     const fetchOptions = async () => {
    //         const voucherData = await getVoucherTypeData('', 0, 100, '', '');
    //         const options = voucherData.data.voucher.map((item) => ({
    //             value: item?.accLedgerId?.name,
    //             label: item?.voucherType?.name,
    //         }));
    //         setClientOptions(options);
    //     };

    //     fetchOptions();
    // }, []);

    // const handleAddUser = () => {
    //     setFormData({
    //         ...formData,
    //         projectUsers: [...formData.projectUsers, { user: '', role: '' }]
    //     });
    // };

    // const handleRemoveUser = (index) => {
    //     const updatedUsers = formData.projectUsers.filter((_, i) => i !== index);
    //     setFormData({ ...formData, projectUsers: updatedUsers });
    // };

    // const fakeUsers = [
    //     { id: '1', name: 'John Doe', label: 'John Doe', value: 'John Doe' },
    //     { id: '2', name: 'Jane Smith', label: 'Jane Smith', value: 'Jane Smith' },
    //     { id: '3', name: 'David Johnson', label: 'David Johnson', value: 'David Johnson' }
    // ];

    // const fakeRoles = [
    //     { id: '1', role: 'Manager', label: 'Manager', value: 'Manager' },
    //     { id: '2', role: 'Developer', label: 'Developer', value: 'Developer' },
    //     { id: '3', role: 'Designer', label: 'Designer', value: 'Designer' }
    // ];

    return (
        <>
            <div style={{ margin: "14px" }}>
                <div className="row">
                    <div className="card-body p-0 col-8">
                        <div className="table-responsive active-projects style-1">
                            <form  style={{ padding: "10px 0" }}>
                                <div className="row">
                                    {/* Basic Details */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Basic Details</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Name *</label>
                                        <input
                                            className="form-control"
                                            name="project_name"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.project_name}
                                            placeholder="Enter Project Name"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Select Client *</label>
                                        <select
                                            name="client"
                                            // onChange={(e) => handleSelectChange("client", e.target.value)}
                                            value={formData.client}
                                            disabled
                                            className="form-control"
                                        >
                                            <option value="">Select Client</option>
                                            {masterStore.client?.map((item) => {
                                                return <option value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Business Category</label>

                                        <select
                                            name="business_category"
                                            // onChange={(e) => handleSelectChange("business_category", e.target.value)}
                                            value={formData.business_category}
                                            disabled
                                            className="form-control"
                                        >
                                            <option value="">Select business_category</option>
                                            {masterStore.business_category?.map((item) => {
                                                return <option value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Address Line 1 *</label>
                                        <input
                                            className="form-control"
                                            name="prj_address_line1"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.prj_address_line1}
                                            placeholder="Enter Project Address"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Address Line 2 *</label>
                                        <input
                                            className="form-control"
                                            name="prj_address_line2"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.prj_address_line2}
                                            placeholder="Enter Project Address"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Country *</label>
                                        <select
                                            name="country"
                                            // onChange={(e) => handleChangeLocation("country", e.target.value)}
                                            value={formData.country}
                                            className="form-control"
                                            disabled
                                        >
                                            <option value="">Select country</option>
                                            {masterStore.country?.map((item) => {
                                                return <option value={item.id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>State *</label>
                                        <select
                                            name="state"
                                            // onChange={(e) => handleChangeLocation("state", e.target.value)}
                                            value={formData.state}
                                            className="form-control"
                                            disabled
                                        >
                                            <option value="">Select State</option>
                                            {masterStore.state?.map((item) => {
                                                return <option value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>City *</label>
                                        <select
                                            name="city"
                                            // onChange={(e) => handleChangeLocation("city", e.target.value)}
                                            value={formData.city}
                                            className="form-control"
                                            disabled
                                        >
                                            <option value="">Select City</option>
                                            {masterStore.city?.map((item) => {
                                                return <option value={item._id}>{item.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Zip Code *</label>

                                        <input
                                            className="form-control"
                                            type="number"
                                            name="zip_code"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.zip_code}
                                            placeholder="Enter Zip Code"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Currency *</label>
                                        <select
                                            name="currency"
                                            // onChange={(e) => handleSelectChange("currency", e.target.value)}
                                            value={formData.currency}
                                            className="form-control"
                                            disabled
                                        >
                                            <option value="">Select currency</option>
                                            {masterStore.currency?.map((item) => {
                                                return <option value={item._id}>{item.currency_name} </option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Tax Type *</label>
                                        <select
                                            name="tax_type"
                                            // onChange={(e) => handleSelectChange("tax_type", e.target.value)}
                                            value={formData.tax_type}
                                            className="form-control"
                                            disabled
                                        >
                                            <option value="">Select Tax Type</option>
                                            {masterStore.tax_type?.map((item) => {
                                                return <option value={item._id}>{item.name}</option>
                                            })}
                                        </select>
                                    </div>

                                    {/* Project Scope */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Project Scope</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Scope *</label>
                                        <select
                                            name="prj_scope"
                                            // onChange={(e) => handleSelectChange("prj_scope", e.target.value)}
                                            value={formData.prj_scope}
                                            className="form-control"
                                            disabled
                                        >
                                            <option value="">Enter Project Scope</option>
                                            {masterStore.prj_scope?.map((item) => {
                                                return <option value={item._id}>{item.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Estimate (in INR) *</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            name="prj_estimate"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.prj_estimate}
                                            placeholder="Enter Project Estimate"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Area (in SQFT)</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            name="prj_area_in_sqft"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.prj_area_in_sqft}
                                            placeholder="Enter Project Area"
                                        />
                                    </div>

                                    {/* Client Point of Contact */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Client Point of Contact</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Client POC Name</label>
                                        <input
                                            className="form-control"
                                            name="client_poc_name"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.client_poc_name}
                                            placeholder="Enter Client POC Name"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Client POC Number</label>
                                        <input
                                            className="form-control"
                                            type="tel"
                                            name="client_poc_nmber"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.client_poc_nmber}
                                            placeholder="Enter Client POC Number"
                                        />
                                    </div>

                                    {/* Due Dates */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Due Dates</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Time Zone</label>
                                        <input
                                            name="time_zone"
                                            type='time'
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.time_zone}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Recce Due Date</label>
                                        <input
                                            type='datetime-local'
                                            name="recce_due_date"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.recce_due_date}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Expected Start Date</label>
                                        <input
                                            type='datetime-local'
                                            name="expected_start_date"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.expected_start_date}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Execution Due Date</label>
                                        <input
                                            type='datetime-local'
                                            name="executation_due_date_assign_prj_user"
                                            // onChange={handleChange}
                                            disabled
                                            value={formData.executation_due_date_assign_prj_user}
                                            className="form-control"
                                        />
                                    </div>

                                    {/* Project Users */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Project Users</h5>

                                    {formData?.assign_prj_user?.map((user, index) => (
                                        <div key={index} className="row mb-3">
                                            <div className='col-xl-5'>
                                                <label>User</label>
                                                <select
                                                    name={`assign_prj_user[${index}].user`}
                                                    value={user.user}
                                                    disabled
                                                    // onChange={(e) => {
                                                    //     const newUsers = [...formData.assign_prj_user];
                                                    //     newUsers[index].user = e.target.value;
                                                    //     setFormData({ ...formData, assign_prj_user: newUsers });
                                                    // }}
                                                    className="form-control"
                                                >
                                                    <option value="">Select User</option>
                                                    {masterStore.user?.map((u) => (
                                                        <option key={u._id} value={u._id}>
                                                            {u.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className='col-xl-5'>
                                                <label>Role</label>
                                                <select
                                                    name={`assign_prj_user[${index}].user_role`}
                                                    value={user.user_role}
                                                    disabled
                                                    // onChange={(e) => {
                                                    //     const newUsers = [...formData.assign_prj_user];
                                                    //     newUsers[index].user_role = e.target.value;
                                                    //     setFormData({ ...formData, assign_prj_user: newUsers });
                                                    // }}
                                                    className="form-control"
                                                >
                                                    <option value="">Select Role</option>
                                                    {masterStore.role?.map((u) => (
                                                        <option key={u._id} value={u._id}>
                                                            {u.user_type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            
                                        </div>
                                    ))}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Documents and attachments</h5>
                                    <div className="col-xl-6 mb-3">
                                    {formData?.doc_attachments && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${formData?.doc_attachments}`} />}
                                    </div>



                                    {/* Submit Button */}
                                    {/* <div className="col-12 mt-3">
                                        <Button type="submit" onClick={handleSubmit} className="btn btn-primary">
                                            {params?.id ? "Update" : "Add"} Project
                                        </Button>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-4' style={{ marginTop: "16px" }}>
                        <Tabs
                            defaultActiveKey="My Organisation"
                            id="uncontrolled-tab-example"
                            className="mb-3 cusnav"
                            style={{ padding: "5px" }}

                        >
                            <Tab eventKey="My Organisation" title="My Organisation">
                                <MyOrganisation />
                            </Tab>
                            <Tab eventKey="Other Organisation" title="Other Organisation">
                                <OtherOrganisation />
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectDetail;
