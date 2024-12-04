import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import CustomInputField from '../../../../../common/CustomInputField';
import { clodinaryImage, getAllAssign, getTaskById, getTaskPriorities, postTask, updateTaskById } from '../../../../../api/login/Login';
import { useNavigate, useParams } from 'react-router-dom';
import { toast , ToastContainer } from 'react-toastify';
import { baseUrlImage } from '../../../../../baseUrl';
// import CustomInputField from './CustomInputField'; // Assuming you have a custom input field component

const TaskAdd = () => {
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

    const [priorityOptions , setPriorityOptions] = useState([])

    const repeatOptions = [
        { value: 'days', label: 'Days' },
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month' },
        { value: 'year', label: 'Year' },
    ];

    const navigate = useNavigate()
    const [assigneeOptions, setAssigneeOptions] = useState([]);
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const getData = async () => {
        try {
            const res = await getAllAssign();
            const res1 =await getTaskPriorities(0 ,100)
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
        const transformedValues = {
            ...formValues,
            priority: formValues.priority._id,
            attach_files: image,
            repeat_every: formValues.repeat_every.value,
            assignees: formValues.assignees.map((assignee) => assignee._id),
            followers: formValues.followers.map((follower) => follower._id),
        };
        console.log(transformedValues);

        try {
            if (!params?.id) {
                const res = await postTask(transformedValues);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Task Successfully Added");
                    setTimeout(() => navigate(`/task_master`), 2000);
                }
            } else {
                const res = await updateTaskById(params.id, transformedValues);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Task Successfully Updated");
                    setTimeout(() => navigate(`/task_master`), 2000);
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
                    const response = await getTaskById(params.id);
                    setFormValues(response?.data);
                }
            } catch (error) {
                console.error("Error fetching task:", error);
            }
        };

        fetchTask();
    }, [params?.id]);


   
    const handleFileChange =async (e) => {
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
        <div className='card'>
            <ToastContainer/>
            <h1>{params?.id ? "Update Task" : "Add Task"}</h1>
            <form onSubmit={submitForm}>
                <div className="row">
                    {/* Task Name */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="task_name">Task Name</label>
                        <CustomInputField
                            type="text"
                            value={formValues.task_name}
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
                                checked={formValues.public}
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
                                checked={formValues.billable}
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
                         {image && <img style={{width:"100px" , height:"100px"}} src={`${baseUrlImage}${image}`} />}
                    </div>

                    {/* Subject */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="subject">Subject</label>
                        <CustomInputField
                            type="text"
                            value={formValues.subject}
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
                            value={formValues.hourly_rate}
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
                            value={formValues.repeated_no}
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
                            value={formValues.start_date}
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
                            value={formValues.due_date}
                            onChange={handleChange}
                            id="due_date"
                            name="due_date"
                        />
                    </div>

                    {/* Priority */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="priority">Priority</label>
                        <Select
                            options={priorityOptions}
                            onChange={(option) => setFormValues(prev => ({ ...prev, priority: option }))}
                            id="priority"
                            name="priority"
                            value={formValues.priority}
                        />
                    </div>

                    {/* Repeat */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="repeat_every">Repeat</label>
                        <Select
                            options={repeatOptions}
                            onChange={(option) => setFormValues(prev => ({ ...prev, repeat_every: option }))}
                            id="repeat_every"
                            name="repeat_every"
                            value={formValues.repeat_every}
                        />
                    </div>

                    {/* Assignees */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="assignees">Assignees</label>
                        <Select
                            options={assigneeOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            onChange={handleMultiSelectChange('assignees')}
                            id="assignees"
                            name="assignees"
                            value={formValues.assignees}
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
                            value={formValues.followers}
                        />
                    </div>

                    {/* Tags */}
                    <div className="col-xl-4 mb-3">
                        <label htmlFor="tags">Tags</label>
                        <CustomInputField
                            type="text"
                            value={formValues.tags}
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
                            value={formValues.task_description}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    {params?.id ? "Update Task" : "Add Task"}
                </button>
            </form>
        </div>
    );
};

export default TaskAdd;
