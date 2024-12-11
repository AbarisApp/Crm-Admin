import React, { useState, useEffect } from 'react';
import { Button, DatePicker } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { cityAddCollageSelectList, clodinaryImage, countryList, getAccAddProjectById, getAccProjectBusinessCategoryByPage, getAllAssign, getcityUpdate, getListprojectScope, getTaxtype, getVentureByUser, listStagescount, listUserType, postAccAddProject, postAddBookCode, roleListAdmin, staffList, StateAddCollageSelectList, updateAccAddProjectById, updateAddBookCodeById } from '../../../../../api/login/Login';
import Loadar from '../../../../../common/loader/Loader'
import { baseUrlImage } from '../../../../../baseUrl';
function ProjectAddForm() {
    const navigate = useNavigate();
    const params = useParams();
    const [formData, setFormData] = useState({
        project_name: '',
        client: '',
        business_category: '',
        prj_address_line1: '',
        prj_address_line2: '',
        country: '',
        state: '',
        city: '',
        zip_code: '',
        currency: '',
        tax_type: '',
        time_zone: '',
        prj_scope: '',
        prj_estimate: '',
        prj_area_in_sqft: '',
        client_poc_name: '',
        client_poc_nmber: '',
        prj_stage: '',
        recce_due_date: null,
        expected_start_date: null,
        executation_due_date_assign_prj_user: null,
        assign_prj_user: [{ user: '', user_role: '' }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (name, date) => {
        setFormData({ ...formData, [name]: date });
    };
    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // Basic validation
        setLoad(true)
        const clone = { ...formData, doc_attachments: image }
        try {
            const response = params?.id
                ? await updateAccAddProjectById(params.id, clone)
                : await postAccAddProject(clone);

            if (response?.statusCode == "200") {
                toastSuccessMessage(params?.id ? "Updated successfully" : "Added successfully");
                setTimeout(() => {
                    navigate(`/projects`);
                    setLoad(false)
                }, 1000);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to submit form");
        }
        setTimeout(() => {

            setLoad(false)
        }, 1000);
    };

    const [masterStore, setMasterStore] = useState({
        business_category: [],
        client: [],
        country: [],
        state: [],
        city: [],
        zip_code: [],
        currency: [],
        tax_type: [],
        prj_scope: [],
        role: [],
        user: [],
    })

    const getAllMaster = async () => {
        const businescat = await getAccProjectBusinessCategoryByPage(0, 100)
        const clients = await getAllAssign(0, 100)
        const countrys = await countryList(0, 100)
        const currenc = await getcityUpdate(0, 100)
        const taxtype = await getTaxtype()
        const scope = await getListprojectScope()
        const roles = await listUserType()
        // const user = await getAllAssign()
        const stage = await listStagescount()

        const obj = {
            ...masterStore,
            business_category: businescat.data,
            client: clients.data,
            country: countrys.data,
            currency: currenc.data,
            tax_type: taxtype.data,
            prj_scope: scope.data,
            user: clients.data,
            role: roles.data,
            stages: stage.data,
        }
        setMasterStore(obj);
    };
    useEffect(() => {
        getAllMaster();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (params?.id) {
                    const response = await getAccAddProjectById(params.id);
                    setFormData(response?.data);
                    setImage(response.data.doc_attachments)
                } else {
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [params?.id]);

    const [loade, setLoad] = useState(false)
    const handleChangeLocation = async (str, id) => {
        setLoad(true)
        if (str == 'country') {
            const stat = await StateAddCollageSelectList(id)
            const obj = { ...masterStore, state: stat.data }
            setMasterStore(obj);
        }
        if (str == 'state') {
            const res = await cityAddCollageSelectList(id)
            const obj = { ...masterStore, city: res.data }
            setMasterStore(obj);
        }
        handleDateChange(str, id)
        setLoad(false)
    }



    const handleAddUser = () => {
        setFormData({
            ...formData,
            assign_prj_user: [...formData.assign_prj_user, { user: '', role: '' }]
        });
    };

    const handleRemoveUser = (index) => {
        const updatedUsers = formData.assign_prj_user.filter((_, i) => i !== index);
        setFormData({ ...formData, assign_prj_user: updatedUsers });
    };

    const [image, setImage] = useState()
    const changeImageHandle = async (e) => {
        const formData = new FormData()
        setLoad(true)
        formData.append('image', e.target.files[0])
        try {
            const res = await clodinaryImage(formData)
            setTimeout(() => {
                setImage(res.data?.data?.url)
            }, 1000);
        } catch (error) {

        }
        setLoad(false)
    }
    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={{ title_2: "Add Project" }} />
            <div style={{ margin: "14px" }}>
                {loade && <Loadar />}
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0" style={{ padding: "10px" }}>
                                    {params?.id ? "Update" : "Add"} Project
                                </h4>
                            </div>
                            <form onSubmit={handleSubmit} style={{ padding: "10px 0" }}>
                                <div className="row">
                                    {/* Basic Details */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Basic Details</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Name *</label>
                                        <input
                                            className="form-control"
                                            name="project_name"
                                            onChange={handleChange}
                                            value={formData.project_name}
                                            placeholder="Enter Project Name"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Select Client *</label>
                                        <select
                                            name="client"
                                            onChange={(e) => handleSelectChange("client", e.target.value)}
                                            value={formData.client}
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
                                            onChange={(e) => handleSelectChange("business_category", e.target.value)}
                                            value={formData.business_category}
                                            className="form-control"
                                        >
                                            <option value="">Select business_category</option>
                                            {masterStore.business_category?.map((item) => {
                                                return <option value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Stage </label>

                                        <select
                                            name="prj_stage"
                                            onChange={(e) => handleSelectChange("prj_stage", e.target.value)}
                                            value={formData.prj_stage}
                                            className="form-control"
                                        >
                                            <option value="">Select Stage</option>
                                            {masterStore.stages?.map((item) => {
                                                return <option value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Address Line 1 *</label>
                                        <input
                                            className="form-control"
                                            name="prj_address_line1"
                                            onChange={handleChange}
                                            value={formData.prj_address_line1}
                                            placeholder="Enter Project Address"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Address Line 2 *</label>
                                        <input
                                            className="form-control"
                                            name="prj_address_line2"
                                            onChange={handleChange}
                                            value={formData.prj_address_line2}
                                            placeholder="Enter Project Address"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Country *</label>
                                        <select
                                            name="country"
                                            onChange={(e) => handleChangeLocation("country", e.target.value)}
                                            value={formData.country}
                                            className="form-control"
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
                                            onChange={(e) => handleChangeLocation("state", e.target.value)}
                                            value={formData.state}
                                            className="form-control"
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
                                            onChange={(e) => handleChangeLocation("city", e.target.value)}
                                            value={formData.city}
                                            className="form-control"
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
                                            onChange={handleChange}
                                            value={formData.zip_code}
                                            placeholder="Enter Zip Code"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Currency *</label>
                                        <select
                                            name="currency"
                                            onChange={(e) => handleSelectChange("currency", e.target.value)}
                                            value={formData.currency}
                                            className="form-control"
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
                                            onChange={(e) => handleSelectChange("tax_type", e.target.value)}
                                            value={formData.tax_type}
                                            className="form-control"
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
                                            onChange={(e) => handleSelectChange("prj_scope", e.target.value)}
                                            value={formData.prj_scope}
                                            className="form-control"
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
                                            onChange={handleChange}
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
                                            onChange={handleChange}
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
                                            onChange={handleChange}
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
                                            onChange={handleChange}
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
                                            onChange={handleChange}
                                            value={formData.time_zone}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Recce Due Date</label>
                                        <input
                                            type='datetime-local'
                                            name="recce_due_date"
                                            onChange={handleChange}
                                            value={formData.recce_due_date}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Expected Start Date</label>
                                        <input
                                            type='datetime-local'
                                            name="expected_start_date"
                                            onChange={handleChange}
                                            value={formData.expected_start_date}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Execution Due Date</label>
                                        <input
                                            type='datetime-local'
                                            name="executation_due_date_assign_prj_user"
                                            onChange={handleChange}
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
                                                    onChange={(e) => {
                                                        const newUsers = [...formData.assign_prj_user];
                                                        newUsers[index].user = e.target.value;
                                                        setFormData({ ...formData, assign_prj_user: newUsers });
                                                    }}
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
                                                    onChange={(e) => {
                                                        const newUsers = [...formData.assign_prj_user];
                                                        newUsers[index].user_role = e.target.value;
                                                        setFormData({ ...formData, assign_prj_user: newUsers });
                                                    }}
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
                                            {formData.assign_prj_user.length > 1 && (
                                                <div>
                                                    <button
                                                        type="button"
                                                        style={{ width: "80px", height: "40px", margin: "10px 0" }}
                                                        onClick={() => handleRemoveUser(index)}
                                                        className="btn btn-danger"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <button type="button" style={{ width: "80px" }} onClick={handleAddUser} className="btn btn-success">
                                        Add User
                                    </button>
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Documents and attachments</h5>
                                    <div className="col-xl-6 mb-3">
                                        <input
                                            className='form-control'
                                            type='file'
                                            onChange={changeImageHandle}
                                        />
                                        {image && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${image}`} />}
                                    </div>



                                    {/* Submit Button */}
                                    <div className="col-12 mt-3">
                                        <Button type="submit" onClick={handleSubmit} className="btn btn-primary">
                                            {params?.id ? "Update" : "Add"} Project
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectAddForm;
