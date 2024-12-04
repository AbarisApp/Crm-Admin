import React, { useState } from 'react'
import { Accordion, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
function DesignSection() {
    const [show, setShow] = useState(false)
    const [expanded, setExpanded] = useState(false);
    const roleOptions = [
        { value: 'manager', label: 'Manager' },
        { value: 'team_lead', label: 'Team Lead' },
        { value: 'developer', label: 'Developer' }
    ];
    return (
        <>
            <div className='col-xl-4'>
                <div className='card h-100'>
                    <div className=''>
                        <div className='border-bottom'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className=''>
                                    <h6>Design Configuration</h6>
                                </div>

                            </div>
                        </div>
                        <div className='my-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <span>
                                    <b>
                                        Defaut Recce Template
                                    </b>
                                </span>
                                <span>
                                    <i class="fa-sharp fa-solid fa-ellipsis-vertical"></i>
                                </span>
                            </div>
                        </div>
                        <div className='my-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <span>
                                    <b>
                                        Residential
                                    </b>
                                </span>
                                <span>
                                    <i class="fa-sharp fa-solid fa-ellipsis-vertical"></i>
                                </span>
                            </div>
                        </div>
                        <div className='my-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <span>
                                    <b>
                                        Defaut Recce Temdivlete
                                    </b>
                                </span>
                                <span>
                                    <i class="fa-sharp fa-solid fa-ellipsis-vertical"></i>
                                </span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='col-xl-5'>
                <div className='card'>
                    <div className='border-bottom'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className=''>
                                <h6>Sections</h6>
                            </div>
                            <div className=''>
                                <button className='btn btn-sm btn-outline-primary' onClick={() => setShow(!show)}> + Add Template</button>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <p><b>Select sections to make them default</b></p>
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        2D Layout / Adaptation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                    3D Layout / Adaptation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                    GFC
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Moodboard
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Production Files
                                    </label>
                                </div>
                            </div>

                        </div>
                        {show ? (<div className='my-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='w-75'><input type='text' placeholder='Enter Section Name' className='px-2 py-0 w-100' /></div>
                                <div className=''>
                                    <span>
                                        <i class="fa-sharp fa-regular fa-circle-check"></i>
                                    </span>
                                    &nbsp;
                                    <span onClick={()=>setShow(!show)}>
                                        <i class="fa-sharp fa-regular fa-circle-xmark"></i>
                                    </span>
                                </div>
                            </div>
                        </div>) : ""}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignSection