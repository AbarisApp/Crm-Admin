import { message, Pagination, Popconfirm } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CustomInputField from '../../common/CustomInputField';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { FaTag } from "react-icons/fa6";
import { Formik } from 'formik';
import { deleteTaskById, getTaskList } from '../../api/login/Login';
import { baseUrlImage } from '../../baseUrl';

function TasksListComp({ style }) {
    const [show, setShow] = useState(false);
    const [tags, setTags] = useState([]);
    const params = useParams();

    const [initialValues, setInitialValues] = useState({
        subject: "",
        file: "",
        hourly_rate: "",
        startDate: "",
        dueDate: "",
        priority: "",
        repeat: "",
        relatedTo: "",
        assignees: "",
        followers: "",
        repeat: "",
    });

    const validate = (values) => {
        let errors = {};
        if (!values.subject) {
            errors.subject = "Subject is required";
        }
        if (!values.startDate) {
            errors.startDate = "Start Date is required";
        }
        return errors;
    };


    const handleTagsChange = (newTags) => {
        setTags(newTags);
    };


    const submitForm = async (values) => {
        console.log('values---', values);
    };
    const parems = useParams()

    const [count, setCount] = useState(10)
    const [data, setData] = useState([])
    const getFloorMasters = async (page) => {
        /* try {
            const res = await getTaskList(page, count, params.id)
            setData(res?.data)
        } catch (error) {

        } */
    }
    useEffect(() => {
        // getFloorMasters(0)
    }, [])
    // add Area
    const formatDate = (dateStr) => {
        const dateObj = new Date(dateStr);
        return dateObj.toISOString().split('T')[0]; // Formats date as YYYY-MM-DD
    };
    const deleteBlockAdd = async (id) => {
        try {
            await deleteTaskById(id)
            getFloorMasters(0)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
    }

    const confirm = (id) => {
        console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };



    return (
        <>
            <div style={style && { width: "1050px" }}>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className='row mt-3 mb-3'>
                                    <div className='col-lg-12 mt-3 mb-3' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to={`/customer-view/${parems?.id}/task/create`} role="button" aria-controls="offcanvasExample">+ New Task</Link>
                                        </div>
                                        <div>
                                            <Link className="btn btn-success btn-sm" to="/task/overview" role="button" aria-controls="offcanvasExample">Task Overview</Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <h3>Tasks Summary</h3>
                                    </div>
                                </div>

                                {/* <div className='row mt-5 mb-5'>
                                    <div className='col-lg-2' style={{ borderRight: '1px solid gray' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>
                                            <p style={{ fontWeight: '700', fontSize: '20px' }}>9</p>
                                            <p className='text-secondary ms-3'>Not started</p>
                                        </div>
                                        <p className='m-0'>Tasks assigned to me: 3</p>
                                    </div>
                                    <div className='col-lg-2' style={{ borderRight: '1px solid gray' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>
                                            <p style={{ fontWeight: '700', fontSize: '20px' }}>14</p>
                                            <p className='text-primary ms-3'>In Progress</p>
                                        </div>
                                        <p className='m-0'>Tasks assigned to me: 4</p>
                                    </div>
                                    <div className='col-lg-2' style={{ borderRight: '1px solid gray' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>
                                            <p style={{ fontWeight: '700', fontSize: '20px' }}>13</p>
                                            <p className='text-primary ms-3'>Testing</p>
                                        </div>
                                        <p className='m-0'>Tasks assigned to me: 3</p>
                                    </div>
                                    <div className='col-lg-2' style={{ borderRight: '1px solid gray' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>
                                            <p style={{ fontWeight: '700', fontSize: '20px' }}>9</p>
                                            <p className='ms-3' style={{ color: '#84cc16' }}>Awaiting Feedback</p>
                                        </div>
                                        <p className='m-0'>Tasks assigned to me: 6</p>
                                    </div>
                                    <div className='col-lg-2'>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>
                                            <p style={{ fontWeight: '700', fontSize: '20px' }}>17</p>
                                            <p className='text-success ms-3'>Complete</p>
                                        </div>
                                        <p className='m-0'>Tasks assigned to me: 7</p>
                                    </div>
                                </div> */}

                                <div className='row mt-3 mb-3'>
                                    <div className='col-lg-8'>
                                        <div className='row'>
                                            <div className='col-lg-2 p-0'>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option value={235}>25</option>
                                                    <option value={130}>10</option>
                                                    <option value={323233}>50</option>
                                                    <option value={3233233}>100</option>
                                                    <option value={'all'}>All</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-3 p-0'>
                                                <button style={{ border: '1px solid gray', color: 'black', padding: '10px 12px' }} type='button' className="btn btn-sm" role="button" aria-controls="offcanvasExample">Export</button>
                                            </div>
                                            <div className='col-lg-4 p-0'>
                                                <button style={{ border: '1px solid gray', color: 'black', padding: '10px 12px' }} type='button' onClick={() => setShow(true)} className="btn btn-sm" role="button" aria-controls="offcanvasExample">Bulk Action</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-4'>
                                        <div className='col-lg-6 float-end'>
                                            <input style={{ boxShadow: 'none' }} type='text' placeholder='search...' className="form-control" aria-label="Default select example" />
                                        </div>
                                    </div>
                                </div>


                                <div className="table-responsive active-projects style-1">
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>#</th>
                                                    <th style={{ width: '150px' }}>Name</th>
                                                    {/* <th style={{ width: '300px' }}>Status</th> */}
                                                    <th style={{ width: '150px' }}>Start Date</th>
                                                    <th style={{ width: '150px' }}>Due Date</th>
                                                    <th style={{ width: '150px' }}>Assignees</th>
                                                    <th style={{ width: '150px' }}>Assigned To</th>
                                                    <th style={{ width: '150px' }}>Tags</th>
                                                    <th style={{ width: '250px' }}>Priority</th>
                                                    <th style={{ width: '250px' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {/* {false && data?.map((item, i) => {
                                                    return <tr>
                                                        <td>{i + 1}</td>
                                                        <td>
                                                            <span className='text-primary'>{item?.task_name}  </span>
                                                        </td>
                                                     
                                                        <td>{formatDate(item?.start_date)}</td>
                                                        <td>{formatDate(item?.due_date)}</td>
                                                        <td>{item?.assignees?.map((item) => item.name)}</td>
                                                        <td>
                                                            <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src={`${baseUrlImage}${item?.attach_files}`} />

                                                        </td>
                                                        <td style={{ display: 'flex' }}>
                                                            <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>{item?.tags}</span>

                                                        </td>
                                                        <td>
                                                            {item?.priority?.name}
                                                        </td>
                                                        <td>
                                                            <Link to={`/customer-view/${parems.id}/task/update/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            <Popconfirm
                                                                title="Delete !"
                                                                description="Are you sure to delete ?"
                                                                onConfirm={() => confirm(item?._id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                            </Popconfirm>
                                                        </td>

                                                    </tr>
                                                })} */}




                                                {/* <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <span className='text-primary'>Gryphon added; Come,let's hear.</span>
                                                        <p>Emilie Legros - moen.bart@example.org</p>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'Not Started'}>
                                                                Not Started
                                                            </option>
                                                            <option value={'In Progress'} >
                                                                In Progress
                                                            </option>
                                                            <option value={'Testing'} >Testing</option>
                                                            <option value={'Awaiting Feedback'}>Awaiting Feedback</option>
                                                            <option value={'Awaiting Feedback'}>Complete</option>
                                                        </select>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                    <td style={{ display: 'flex' }}>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Today</span>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Tomorrow</span>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'High'}>
                                                                High
                                                            </option>
                                                            <option value={'Medium'} >
                                                                Medium
                                                            </option>
                                                            <option value={'Low'} >Low</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <span className='text-primary'>Alice; all I know is, it would be a lesson to.  </span>
                                                        <p>Emilie Legros - moen.bart@example.org</p>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'Not Started'}>
                                                                Not Started
                                                            </option>
                                                            <option value={'In Progress'} >
                                                                In Progress
                                                            </option>
                                                            <option value={'Testing'} >Testing</option>
                                                            <option value={'Awaiting Feedback'}>Awaiting Feedback</option>
                                                            <option value={'Awaiting Feedback'}>Complete</option>
                                                        </select>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                    <td style={{ display: 'flex' }}>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Today</span>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Tomorrow</span>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'High'}>
                                                                High
                                                            </option>
                                                            <option value={'Medium'} >
                                                                Medium
                                                            </option>
                                                            <option value={'Low'} >Low</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>
                                                        <span className='text-primary'>Alice; all I know is, it would be a lesson to.  </span>
                                                        <p>#3 - Brochure Design - Flatley-Legros</p>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'Not Started'}>
                                                                Not Started
                                                            </option>
                                                            <option value={'In Progress'} >
                                                                In Progress
                                                            </option>
                                                            <option value={'Testing'} >Testing</option>
                                                            <option value={'Awaiting Feedback'}>Awaiting Feedback</option>
                                                            <option value={'Awaiting Feedback'}>Complete</option>
                                                        </select>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                    <td style={{ display: 'flex' }}>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Today</span>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Tomorrow</span>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'High'}>
                                                                High
                                                            </option>
                                                            <option value={'Medium'} >
                                                                Medium
                                                            </option>
                                                            <option value={'Low'} >Low</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>
                                                        <span className='text-primary'>Alice; all I know is, it would be a lesson to.  </span>
                                                        <p>#4 - Website Redesign - Kemmer and Sons</p>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'Not Started'}>
                                                                Not Started
                                                            </option>
                                                            <option value={'In Progress'} >
                                                                In Progress
                                                            </option>
                                                            <option value={'Testing'} >Testing</option>
                                                            <option value={'Awaiting Feedback'}>Awaiting Feedback</option>
                                                            <option value={'Awaiting Feedback'}>Complete</option>
                                                        </select>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                    <td style={{ display: 'flex' }}>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Today</span>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Tomorrow</span>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'High'}>
                                                                High
                                                            </option>
                                                            <option value={'Medium'} >
                                                                Medium
                                                            </option>
                                                            <option value={'Low'} >Low</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>
                                                        <span className='text-primary'>Alice; all I know is, it would be a lesson to.  </span>
                                                        <p>#1 - Build Website - Senger</p>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'Not Started'}>
                                                                Not Started
                                                            </option>
                                                            <option value={'In Progress'} >
                                                                In Progress
                                                            </option>
                                                            <option value={'Testing'} >Testing</option>
                                                            <option value={'Awaiting Feedback'}>Awaiting Feedback</option>
                                                            <option value={'Awaiting Feedback'}>Complete</option>
                                                        </select>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                    <td style={{ display: 'flex' }}>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Today</span>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Tomorrow</span>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'High'}>
                                                                High
                                                            </option>
                                                            <option value={'Medium'} >
                                                                Medium
                                                            </option>
                                                            <option value={'Low'} >Low</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>
                                                        <span className='text-primary'>Alice; all I know is, it would be a lesson to.  </span>
                                                        <p>#1 - Build Website - Senger</p>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'Not Started'}>
                                                                Not Started
                                                            </option>
                                                            <option value={'In Progress'} >
                                                                In Progress
                                                            </option>
                                                            <option value={'Testing'} >Testing</option>
                                                            <option value={'Awaiting Feedback'}>Awaiting Feedback</option>
                                                            <option value={'Awaiting Feedback'}>Complete</option>
                                                        </select>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                    <td style={{ display: 'flex' }}>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Today</span>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Tomorrow</span>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'High'}>
                                                                High
                                                            </option>
                                                            <option value={'Medium'} >
                                                                Medium
                                                            </option>
                                                            <option value={'Low'} >Low</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>
                                                        <span className='text-primary'>Alice; all I know is, it would be a lesson to.  </span>
                                                        <p>Emilie Legros - moen.bart@example.org</p>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'Not Started'}>
                                                                Not Started
                                                            </option>
                                                            <option value={'In Progress'} >
                                                                In Progress
                                                            </option>
                                                            <option value={'Testing'} >Testing</option>
                                                            <option value={'Awaiting Feedback'}>Awaiting Feedback</option>
                                                            <option value={'Awaiting Feedback'}>Complete</option>
                                                        </select>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                    <td style={{ display: 'flex' }}>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Today</span>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', marginRight: '3px', border: '1px solid gray', color: 'black' }}>Tomorrow</span>
                                                    </td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'High'}>
                                                                High
                                                            </option>
                                                            <option value={'Medium'} >
                                                                Medium
                                                            </option>
                                                            <option value={'Low'} >Low</option>
                                                        </select>
                                                    </td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                        {/* <div className="dataTables_info" role="status" aria-live="polite">
                                            Total 00 entries
                                        </div> */}
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                                defaultCurrent={1}
                                            // onChange={onChangeVal}
                                            // total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-50w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Bulk Actions
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className='col-lg-12'>
                                                    <div className="col-lg-12 mb-3">
                                                        <div style={{ display: 'flex' }}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                    Mass Delete
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Status</h6>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'Not Started'}>
                                                                Not Started
                                                            </option>
                                                            <option value={'In Progress'} >
                                                                In Progress
                                                            </option>
                                                            <option value={'Testing'} >Testing</option>
                                                            <option value={'Awaiting Feedback'}>Awaiting Feedback</option>
                                                            <option value={'Awaiting Feedback'}>Complete</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Priority</h6>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>select</option>
                                                            <option value={'High'}>
                                                                High
                                                            </option>
                                                            <option value={'Medium'} >
                                                                Medium
                                                            </option>
                                                            <option value={'Low'} >Low</option>
                                                            <option value={'Urgent'} >Urgent</option>
                                                        </select>
                                                    </div>



                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Assigned to</h6>
                                                        <select
                                                            className="form-select"
                                                            name="assignees"
                                                            value={values.assignees}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="Widal Ward">Widal Ward</option>
                                                            <option value="Oran Simonis">Oran Simonis</option>
                                                            <option value="Merle Hill">Merle Hill</option>
                                                            <option value="Giovani King">Giovani King</option>
                                                        </select>
                                                    </div>



                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Billable</h6>
                                                        <select
                                                            className="form-select"
                                                            name="tax2"
                                                            value={values.tax2}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="Yes">Yes</option>
                                                            <option value="No">No</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>
                                                            <FaTag />
                                                            Tags
                                                        </h6>
                                                        <TagsInput value={tags} onChange={handleTagsChange} />
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 mb-3">
                                                    <Link onClick={() => setShow(false)} type="button" className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </Modal.Body>
                        {/* <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShow(false)}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => setShow(false)}>
                                Save
                            </Button>
                        </Modal.Footer> */}
                    </Modal>

                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default TasksListComp