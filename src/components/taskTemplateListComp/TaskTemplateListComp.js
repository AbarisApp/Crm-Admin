import { Pagination } from 'antd'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CustomInputField from '../../common/CustomInputField';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { FaTag } from "react-icons/fa6";
import { Formik } from 'formik';

function TaskTemplateListComp() {
   
  return (
    <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className='row mt-3 mb-3'>
                                    <div className='col-lg-12 mt-3 mb-3' style={{ display: 'flex', alignItems: 'center', }}>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/task_templates/create" role="button" aria-controls="offcanvasExample">+ New Task Template</Link>
                                        </div>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/task_from_templates/create" role="button" aria-controls="offcanvasExample">+ New Task From Template</Link>
                                        </div>
                                    </div>
                                </div>


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
                                                    <th style={{ width: '150px' }}>Due Date Duration (In Days)</th>
                                                    <th style={{ width: '150px' }}>Assigned To</th>
                                                    <th style={{ width: '150px' }}>Tags</th>
                                                    <th style={{ width: '250px' }}>Priority</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <span className='text-primary'>Alice; all I know is, it would be a lesson to.  </span>
                                                    </td>
                                                    <td style={{ textAlign: 'center' }}>10</td>
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
                                                    <td>2</td>
                                                    <td>
                                                        <span className='text-primary'>Gryphon added; Come,let's hear.</span>
                                                        <p>Emilie Legros - moen.bart@example.org</p>
                                                    </td>
                                                    <td style={{ textAlign: 'center' }}>10</td>
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
                                                    <td style={{ textAlign: 'center' }}>10</td>
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
                                                    <td style={{ textAlign: 'center' }}>10</td>
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
                                                    <td style={{ textAlign: 'center' }}>10</td>
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

export default TaskTemplateListComp