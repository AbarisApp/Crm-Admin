import { Pagination } from 'antd'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import { GrAttachment } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function TasksOverviewComp() {
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">

                                <div className='row mt-4 mb-4'>
                                    <div className='col-lg-2'>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/tasks" role="button" aria-controls="offcanvasExample">Back To Tasks List</Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-2'>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>All Staff Members</option>
                                            <option value={1}>Vidal Ward</option>
                                            <option value={2}>Oran Simons</option>
                                            <option value={3}>Merle Hill</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-2'>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>January</option>
                                            <option value={11}>February</option>
                                            <option value={211}>March</option>
                                            <option value={31}>April</option>
                                            <option value={32}>May</option>
                                            <option value={33}>June</option>
                                            <option value={34}>July</option>
                                            <option value={35}>August</option>
                                            <option value={36}>September</option>
                                            <option value={37}>October</option>
                                            <option value={38}>November</option>
                                            <option value={39}>December</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-2'>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>All</option>
                                            <option value={10}>Not Started</option>
                                            <option value={20}>In Progress</option>
                                            <option value={30}>Testing</option>
                                            <option value={307}>Testing</option>
                                            <option value={365}>Awaiting Feedback</option>
                                            <option value={3453}>Complete</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-2'>
                                        <select className="form-select" aria-label="Default select example">
                                            <option value={131}>2020</option>
                                            <option value={132}>2021</option>
                                            <option value={1313}>2022</option>
                                            <option value={12123}>2023</option>
                                            <option value={312132132}>2024</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-2'>
                                        <div>
                                            <button type='button' className="btn btn-primary btn-sm" to="/task/create" role="button" aria-controls="offcanvasExample">Filter</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mt-3 mb-3'>
                                    <div className='col-lg-12'>
                                        <h2 className='text-success'>October</h2>
                                    </div>
                                </div>

                                <div className='row mt-3 mb-3'>
                                    <div className='col-lg-6'>
                                        <div className='row'>
                                            <div className='col-lg-3'>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option value={235}>25</option>
                                                    <option value={130}>10</option>
                                                    <option value={323233}>50</option>
                                                    <option value={3233233}>100</option>
                                                    <option value={'all'}>All</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-3'>
                                                <button style={{ border: '1px solid gray', color: 'black',padding: '10px 12px' }} type='button' className="btn btn-sm" role="button" aria-controls="offcanvasExample">Export</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-5'>
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
                                                    <th style={{ width: '150px' }}>Start Date</th>
                                                    <th style={{ width: '150px' }}>Due Date</th>
                                                    <th style={{ width: '300px' }}>Status</th>
                                                    <th style={{ width: '150px' }}>Total Attachments added</th>
                                                    <th style={{ width: '250px' }}>Total Comments</th>
                                                    <th style={{ width: '250px' }}>Checklist Items</th>
                                                    <th style={{ width: '250px' }}>Total Logged Time</th>
                                                    <th style={{ width: '250px' }}>Finished On Time?</th>
                                                    <th style={{ width: '150px' }}>Assigned To</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td style={{ width: '300px' }}>
                                                        <span className='text-primary'>Add a Test Case for the GCI Website </span>
                                                        <p>Add a Test Case for the GCI Website<br></br>  Related To: #1 - Build Website - Senger, <br></br>Muller and Stiedemann</p>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
                                                    <td style={{ width: '300px' }}>
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

                                                    <td style={{ textAlign: 'center', }}>
                                                        <GrAttachment style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <FaRegComments style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span className='text-danger'>0/2</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span style={{ padding: '5px 8px', borderRadius: '5px', border: '1px solid gray' }}>00:00</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        Yes
                                                    </td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <span className='text-primary'>Alice; all I know is, it would be a lesson to.  </span>
                                                        <p>Related To: #2 - SEO Optimization<br></br>   Haley, Krajcik and Crona</p>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
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

                                                    <td style={{ textAlign: 'center', }}>
                                                        <GrAttachment style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <FaRegComments style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span className='text-danger'>0/2</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span style={{ padding: '5px 8px', borderRadius: '5px', border: '1px solid gray' }}>00:00</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        Yes
                                                    </td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <span className='text-primary'>Alice; all I know is, it would be a lesson to.  </span>
                                                        <p>Related To: #3 - Brochure<br></br>  Design - Flatley-Legros</p>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
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

                                                    <td style={{ textAlign: 'center', }}>
                                                        <GrAttachment style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <FaRegComments style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span className='text-danger'>0/2</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span style={{ padding: '5px 8px', borderRadius: '5px', border: '1px solid gray' }}>00:00</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        Yes
                                                    </td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>
                                                        <span className='text-primary'>Alice; all I know is, it would be a lesson to.  </span>
                                                        <p>Related To: #4 - Website<br></br> Redesign - Kemmer and Sons</p>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
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

                                                    <td style={{ textAlign: 'center', }}>
                                                        <GrAttachment style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <FaRegComments style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span className='text-danger'>0/2</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span style={{ padding: '5px 8px', borderRadius: '5px', border: '1px solid gray' }}>00:00</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        Yes
                                                    </td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>
                                                        <span className='text-primary'>Find/fix 10 broken links in the RTEMS Wiki </span>
                                                        <p>Related To: #6 - Form Lead</p>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
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

                                                    <td style={{ textAlign: 'center', }}>
                                                        <GrAttachment style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <FaRegComments style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span className='text-danger'>0/2</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span style={{ padding: '5px 8px', borderRadius: '5px', border: '1px solid gray' }}>00:00</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        Yes
                                                    </td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>
                                                        <span className='text-primary'>Define the layout </span>
                                                        <p>Related To: #1 - Build Website -<br></br> Senger, Muller and Stiedemann</p>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
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

                                                    <td style={{ textAlign: 'center', }}>
                                                        <GrAttachment style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <FaRegComments style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span className='text-danger'>0/2</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span style={{ padding: '5px 8px', borderRadius: '5px', border: '1px solid gray' }}>00:00</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        Yes
                                                    </td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>
                                                        <span className='text-primary'>Build Marble Maps for Android </span>
                                                        <p>Related To: #2 - SEO Optimization<br></br> - Haley, Krajcik and Crona</p>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
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

                                                    <td style={{ textAlign: 'center', }}>
                                                        <GrAttachment style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <FaRegComments style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span className='text-danger'>0/2</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span style={{ padding: '5px 8px', borderRadius: '5px', border: '1px solid gray' }}>00:00</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        Yes
                                                    </td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>
                                                        <span className='text-primary'>Build Marble Maps for Android </span>
                                                        <p>Related To: #3 - Brochure<br></br> - Design - Flatley-Legros</p>
                                                    </td>
                                                    <td>02-10-2024</td>
                                                    <td>02-10-2024</td>
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

                                                    <td style={{ textAlign: 'center', }}>
                                                        <GrAttachment style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <FaRegComments style={{ marginRight: '6px', }} />
                                                        0
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span className='text-danger'>0/2</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        <span style={{ padding: '5px 8px', borderRadius: '5px', border: '1px solid gray' }}>00:00</span>
                                                    </td>
                                                    <td style={{ textAlign: 'center', }}>
                                                        Yes
                                                    </td>
                                                    <td>
                                                        <img style={{ width: '30px', height: '30px', marginRight: '3px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                        <img style={{ width: '30px', height: '30px' }} src='https://perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png' />
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total 00 entries
                                        </div>
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
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default TasksOverviewComp