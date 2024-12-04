
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const AddEstimateRequest = () => {
    const [activeTab, setActiveTab] = useState('General');

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add Estimate Request</h4>
                                </div>

                                <Tabs
                                    activeKey={activeTab}
                                    onSelect={(k) => setActiveTab(k)}
                                    className="mb-3 custom-tabs">

                                    <Tab eventKey="General" title="General">
                                        <form className="p-4">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Form Name</label>
                                                    <input type="text" className="form-control" id="projectName" placeholder="Enter Form Name" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    < label htmlFor="estimateAmount">Estimate Amount</label>
                                                    <div className='d-flex align-items-center'>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                No
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Yes
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="estimateAmount">Language</label>
                                                    <select className="form-control" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>

                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="dueDate">Status</label>
                                                    <select className="form-control" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="dueDate">Responsible (Assignee)</label>
                                                    <select className="form-control" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </Tab>

                                    <Tab eventKey="Branding" title="Branding">
                                        <form className="p-4">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="description">Submit button text</label>
                                                        <input type="text" className="form-control" id="projectName" placeholder="Enter Submit button text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="description">Submit button background color</label>
                                                        <input type="color" className="form-control" id="projectName" placeholder="Enter Submit button text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="description">Submit button background text</label>
                                                        <input type="color" className="form-control" id="projectName" placeholder="Enter Submit button text" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </Tab>
                                    <Tab eventKey="Submission" title="Submission">
                                        <form className="p-4">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="description">What should happen after a visitor submits this form?</label>
                                                        <div >
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                    Display thank you message
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                    Redirect to another website
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="description">Message to show after form is succcesfully submitted</label>
                                                    <div className="form-floating">
                                                        <textarea className="form-control" placeholder="Enter Message to show after form is succcesfully submitted" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                                                        <label htmlFor="floatingTextarea2">Enter Message to show after form is succcesfully submitted</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </Tab>
                                    <Tab eventKey="Notifications" title="Notifications">
                                        <form className="p-4">
                                            <div className='row'>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="description">Notifications Notification settings</label>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            Notify when estimate request submitted
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="description">Notifications Notification settings</label>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                Specific Staff Members
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Staff members with roles
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Responsible person
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>



                                                </div>
                                            </div>
                                        </form>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddEstimateRequest;
