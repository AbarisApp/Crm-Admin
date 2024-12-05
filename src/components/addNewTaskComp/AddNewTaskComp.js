// import React, { useState } from 'react'
// import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import CustomInputField from '../../common/CustomInputField';
// import { Formik } from 'formik';
// import TagsInput from 'react-tagsinput';
// import 'react-tagsinput/react-tagsinput.css';
// import { FaTag } from "react-icons/fa6";

// function AddNewTaskComp() {
//     const [tags, setTags] = useState([]);

//     const breadCrumbsTitle = {
//         title_1: "master",
//         title_2: "Add Task",
//     };

//     const params = useParams();
//     const navigate = useNavigate();

//     const [initialValues, setInitialValues] = useState({
//         subject: "",
//         file: "",
//         hourly_rate: "",
//         startDate: "",
//         dueDate: "",
//         priority: "",
//         repeat: "",
//         relatedTo: "",
//         assignees: "",
//         followers: "",
//         repeat: "",
//     });

//     const validate = (values) => {
//         let errors = {};
//         if (!values.subject) {
//             errors.subject = "Subject is required";
//         }
//         if (!values.startDate) {
//             errors.startDate = "Start Date is required";
//         }
//         return errors;
//     };


//     const handleTagsChange = (newTags) => {
//         setTags(newTags);
//     };


//     const submitForm = async (values) => {
//         console.log('values---', values);
//     };

//     return (
//         <>
//             <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
//             <div style={{ margin: "14px" }}>
//                 <div className="card">
//                     <div className="card-body p-0">
//                         <div className="table-responsive active-projects style-1">
//                             <div className="tbl-caption tbl-caption-2">
//                                 <h4 className="heading mb-0">
//                                     {params?.id ? "UPDATE" : "ADD NEW"} Task
//                                 </h4>
//                             </div>
//                             <Formik
//                                 initialValues={initialValues}
//                                 validate={validate}
//                                 onSubmit={submitForm}
//                                 enableReinitialize
//                             >
//                                 {(formik) => {
//                                     const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
//                                     return (
//                                         <form className="tbl-captionn" onSubmit={handleSubmit}>
//                                             <div className="row">
//                                                 <div className='col-lg-12'>
//                                                     <div className="col-lg-12 mb-3">
//                                                         <div style={{ display: 'flex' }}>
//                                                             <div className="form-check">
//                                                                 <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
//                                                                 <label className="form-check-label" htmlFor="flexCheckDefault">
//                                                                     Public
//                                                                 </label>
//                                                             </div>
//                                                             <div className="form-check ms-4">
//                                                                 <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
//                                                                 <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                                     Billable
//                                                                 </label>
//                                                             </div>
//                                                         </div>

//                                                     </div>

//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Attach Files</h6>
//                                                         <CustomInputField
//                                                             type="file"
//                                                             value={values?.file}
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             id="file"
//                                                             name="file"
//                                                             placeholder="file"
//                                                         />
//                                                     </div>

//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Subject <span className='text-danger'>*</span></h6>
//                                                         <CustomInputField
//                                                             type="text"
//                                                             value={values?.subject}
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             errorMsg={errors.subject}
//                                                             id="subject"
//                                                             name="subject"
//                                                             placeholder="Subject"
//                                                         />
//                                                     </div>

//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Hourly Rate</h6>
//                                                         <CustomInputField
//                                                             type="text"
//                                                             value={values?.hourly_rate}
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             id="hourly_rate"
//                                                             name="hourly_rate"
//                                                             placeholder="Hourly Rate"
//                                                         />
//                                                     </div>

//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Start Date <span className='text-danger'>*</span></h6>
//                                                         <CustomInputField
//                                                             type="date"
//                                                             value={values?.startDate}
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             errorMsg={errors.startDate}
//                                                             name="startDate"
//                                                         />
//                                                     </div>

//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Due Date</h6>
//                                                         <CustomInputField
//                                                             type="date"
//                                                             value={values?.dueDate}
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             name="dueDate"
//                                                         />
//                                                     </div>

//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Priority</h6>
//                                                         <select
//                                                             className="form-select"
//                                                             name="priority"
//                                                             value={values.priority}
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                         >
//                                                             <option value="High">High</option>
//                                                             <option value="Medium">Medium</option>
//                                                             <option value="Low">Low</option>
//                                                         </select>
//                                                     </div>

//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Repeat every</h6>
//                                                         <select
//                                                             className="form-select"
//                                                             name="repeat"
//                                                             value={values.repeat}
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                         >
//                                                             <option value="Week">Week</option>
//                                                             <option value="2Week">2Week</option>
//                                                             <option value="1Month">1Month</option>
//                                                             <option value="1Month">1Month</option>
//                                                             <option value="2Month">2Month</option>
//                                                             <option value="3Month">3Month</option>
//                                                             <option value="6Month">6Month</option>
//                                                             <option value="1Year">1Year</option>
//                                                             <option value="Custom">Custom</option>
//                                                         </select>
//                                                     </div>

//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Related To</h6>
//                                                         <select
//                                                             className="form-select"
//                                                             name="relatedTo"
//                                                             value={values.relatedTo}
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                         >
//                                                             <option value="Project">Project</option>
//                                                             <option value="Customer">Customer</option>
//                                                             <option value="Invoice">Invoice</option>
//                                                             <option value="Contract">Contract</option>
//                                                             <option value="Ticket">Ticket</option>
//                                                             <option value="Expense">Expense</option>
//                                                             <option value="Lead">Lead</option>
//                                                             <option value="Proposal">Proposal</option>
//                                                             <option value="Estimate">Estimate</option>
//                                                         </select>
//                                                     </div>
//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Assignees</h6>
//                                                         <select
//                                                             className="form-select"
//                                                             name="assignees"
//                                                             value={values.assignees}
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                         >
//                                                             <option value="Widal Ward">Widal Ward</option>
//                                                             <option value="Oran Simonis">Oran Simonis</option>
//                                                             <option value="Merle Hill">Merle Hill</option>
//                                                             <option value="Giovani King">Giovani King</option>
//                                                         </select>
//                                                     </div>
//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Followers</h6>
//                                                         <select
//                                                             className="form-select"
//                                                             name="followers"
//                                                             value={values.followers}
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                         >
//                                                             <option value="Widal1 Ward">Widal Ward</option>
//                                                             <option value="Oran1 Simonis">Oran Simonis</option>
//                                                             <option value="Merle1 Hill">Merle Hill</option>
//                                                             <option value="Giovani1 King">Giovani King</option>
//                                                         </select>
//                                                     </div>


//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>
//                                                             <FaTag />
//                                                             Tags
//                                                         </h6>
//                                                         <TagsInput value={tags} onChange={handleTagsChange} />
//                                                     </div>

//                                                     <div className="col-lg-12 mb-3">
//                                                         <h6>Task Description</h6>
//                                                         <div class="form-group">
//                                                             <textarea style={{ boxShadow: 'none' }} class="form-control" placeholder='Task Description' id="exampleFormControlTextarea1" rows="5"></textarea>
//                                                         </div>
//                                                     </div>



//                                                 </div>



//                                                 <div className="col-xl-12 mb-3">
//                                                     <Link to="/approval" type="submit" className="btn btn-danger light ms-1">Cancel</Link>
//                                                     <button
//                                                         className="btn btn-primary me-1"
//                                                         type="submit"
//                                                         disabled={!isValid || !dirty}
//                                                     >
//                                                         {params?.id ? "Update" : "Add"}
//                                                     </button>
//                                                 </div>

//                                             </div>


//                                         </form>
//                                     );
//                                 }}
//                             </Formik>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AddNewTaskComp


import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import CustomInputField from '../../common/CustomInputField';
import { clodinaryImage, getAllAssign, getTaskById, getTaskPriorities, postTask, updateTaskById } from '../../api/login/Login';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrlImage } from '../../baseUrl';
// import CustomInputField from './CustomInputField'; // Assuming you have a custom input field component

const AddNewTaskComp = () => {
    // Initial state
    const [formValues, setFormValues] = useState({
        task_name: '',
        public: false,
        billable: false,
        attach_files: null,
        subject: '',
        hourly_rate: '',
        start_date: '',
        due_date: '',
        repeated_no: '',
        priority: null,
        repeat_every: null,
        assignees: [],
        followers: [],
        tags: '',
        task_description: ''
    });

    const [priorityOptions, setPriorityOptions] = useState([])

    const repeatOptions = [
        { value: 'days', label: 'Days' },
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month' },
        { value: 'year', label: 'Year' },
    ];

    const navigate = useNavigate()
    const [assigneeOptions, setAssigneeOptions] = useState([]);
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.update ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const getData = async () => {
        try {
            const res = await getAllAssign();
            const res1 = await getTaskPriorities(0, 100)
            const staffs = res?.data.map((item) => ({
                ...item,
                value: item.name,
                label: item.name,
            }));
            console.log(res1?.data);

            const staff2s = res1?.data.map((item) => ({
                ...item,
                value: item.name,
                label: item.name,
            }));
            setPriorityOptions(staff2s)
            setAssigneeOptions(staffs);
        } catch (error) {
            console.error("Error fetching staff list:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : value
        }));
    };



    const handleMultiSelectChange = (name) => (selectedOptions) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: selectedOptions
        }));
    };
    const [image, setImage] = useState(null);
    // Handle form submission
    const params = useParams()
    const submitForm = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formValues);

        const transformedValues = {
            ...formValues,
            priority: formValues?.priority?._id ? formValues?.priority?._id : formValues?.priority,
            attach_files: image,
            user_id: params?.id,
            repeat_every: formValues?.repeat_every?.value ? formValues?.repeat_every?.value : formValues?.repeat_every,
            assignees: formValues.assignees.map((assignee) => assignee._id),
            followers: formValues.followers.map((follower) => follower._id),
        };

        try {

            if (!params?.update) {
                const res = await postTask(transformedValues);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Task Successfully Added");
                    setTimeout(() => navigate(`/customer-view/${params?.id}/tasks-view`), 2000);
                }
            } else {
                const res = await updateTaskById(params.update, transformedValues);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Task Successfully Updated");
                    setTimeout(() => navigate(`/customer-view/${params?.id}/tasks-view`), 2000);
                }
            }
        } catch (error) {
            console.error("Error submitting form:", error);

        }

    };

    useEffect(() => {
        const fetchTask = async () => {
            try {
                if (params?.id) {
                    const response = await getTaskById(params.update);
                    setImage(response?.data.attach_files);

                    const staff2s = response?.data.assignees.map((item) => ({
                        ...item,
                        value: item.name,
                        label: item.name,
                    }));
                    const staff2sf = response?.data.followers.map((item) => ({
                        ...item,
                        value: item.name,
                        label: item.name,
                    }));
                    const transformedValues = {
                        ...response?.data,
                        priority: response?.data.priority._id,
                        user_id: params?.id,
                        repeat_every: response?.data.repeat_every,
                        assignees: staff2s,
                        followers: staff2sf,
                    };
                    setFormValues(transformedValues);
                }
            } catch (error) {
                console.error("Error fetching task:", error);
            }
        };

        fetchTask();
    }, [params?.id]);



    const handleFileChange = async (e) => {
        const image = new FormData()
        image.append('image', e.target.files[0])
        try {
            const res = await clodinaryImage(image)
            setTimeout(() => {
                setImage(res.data?.data?.url)
            }, 1000);
        } catch (error) {

        }
    };

    return (
        <div className='card' style={{ width: "1000px" }}>
            <ToastContainer />
            <h1>{params?.update ? "Update Task" : "Add Task"}</h1>
            <form onSubmit={submitForm}>
                <div className="row">
                    {/* Task Name */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="task_name">Task Name</label>
                        <CustomInputField
                            type="text"
                            value={formValues?.task_name}
                            onChange={handleChange}
                            id="task_name"
                            name="task_name"
                            placeholder="Task Name"
                        />
                    </div>

                    {/* Public Checkbox */}
                    <div className="col-xl-2 mb-3">
                        <label htmlFor="public">Public</label>
                        <div>
                            <input
                                type="checkbox"
                                checked={formValues?.public}
                                onChange={handleChange}
                                id="public"
                                name="public"
                            />
                        </div>
                    </div>

                    {/* Billable Checkbox */}
                    <div className="col-xl-2 mb-3">
                        <label htmlFor="billable">Billable</label>
                        <div>
                            <input
                                type="checkbox"
                                checked={formValues?.billable}
                                onChange={handleChange}
                                id="billable"
                                name="billable"
                            />
                        </div>
                    </div>

                    {/* Attach Files */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="attach_files">Attach Files</label>
                        <input
                            type="file"
                            className='form-control'
                            onChange={handleFileChange}
                            id="attach_files"
                            name="attach_files"
                        />
                        {image && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${image}`} />}
                    </div>

                    {/* Subject */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="subject">Subject</label>
                        <CustomInputField
                            type="text"
                            value={formValues?.subject}
                            onChange={handleChange}
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                        />
                    </div>

                    {/* Hourly Rate */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="hourly_rate">Hourly Rate</label>
                        <CustomInputField
                            type="number"
                            value={formValues?.hourly_rate}
                            onChange={handleChange}
                            id="hourly_rate"
                            name="hourly_rate"
                            placeholder="Hourly Rate"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="hourly_rate">Repeated No</label>
                        <CustomInputField
                            type="number"
                            value={formValues?.repeated_no}
                            onChange={handleChange}
                            id="repeated_no"
                            name="repeated_no"
                        />
                    </div>

                    {/* Start Date */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="start_date">Start Date</label>
                        <CustomInputField
                            type="date"
                            value={formValues?.start_date}
                            onChange={handleChange}
                            id="start_date"
                            name="start_date"
                        />
                    </div>

                    {/* Due Date */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="due_date">Due Date</label>
                        <CustomInputField
                            type="date"
                            value={formValues?.due_date}
                            onChange={handleChange}
                            id="due_date"
                            name="due_date"
                        />
                    </div>

                    {/* Priority */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="priority">Priority</label>
                        <select
                            id="priority"
                            name="priority"
                            className='form-control'
                            value={formValues?.priority}
                            onChange={(e) => setFormValues(prev => ({ ...prev, priority: e.target.value }))}>
                            <option value="">Select Priority</option>
                            {priorityOptions.map((option, index) => (
                                <option key={index} value={option._id}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                    </div>

                    {/* Repeat */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="repeat_every">Repeat</label>
                        <select
                            id="repeat_every"
                            className='form-control'
                            name="repeat_every"
                            value={formValues?.repeat_every}
                            onChange={(e) => setFormValues(prev => ({ ...prev, repeat_every: e.target.value }))}>
                            <option value="">Select Repeat Option</option>
                            {repeatOptions.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                    </div>

                    {/* Assignees */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="assignees">Assignees</label>
                        {console.log(formValues?.assignees)
                        }
                        <Select
                            options={assigneeOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            onChange={handleMultiSelectChange('assignees')}
                            id="assignees"
                            name="assignees"
                            value={formValues?.assignees}
                            defaultValue={formValues?.assignees}
                        />
                    </div>

                    {/* Followers */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="followers">Followers</label>
                        <Select
                            options={assigneeOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            onChange={handleMultiSelectChange('followers')}
                            id="followers"
                            name="followers"
                            value={formValues?.followers}
                        />
                    </div>

                    {/* Tags */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="tags">Tags</label>
                        <CustomInputField
                            type="text"
                            value={formValues?.tags}
                            onChange={handleChange}
                            id="tags"
                            name="tags"
                            placeholder="Tags"
                        />
                    </div>

                    {/* Task Description */}
                    <div className="col-xl-12 mb-3">
                        <label htmlFor="task_description">Task Description</label>
                        <textarea
                            className='form-control'
                            id="task_description"
                            name="task_description"
                            value={formValues?.task_description}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    {params?.update ? "Update Task" : "Add Task"}
                </button>
            </form>
        </div>
    );
};

export default AddNewTaskComp;
