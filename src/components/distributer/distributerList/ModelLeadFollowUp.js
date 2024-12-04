import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function ModelLeadFollowUp(props) {
    const [formData, setFormData] = useState({
        leadStatus: "New Lead",
        leadSubStatus: "",
        followUpOn: new Date(),
        comments: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleDateChange = (date) => {
        setFormData({ ...formData, followUpOn: date });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        // Handle submission logic here
      };
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Follow Up
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <div className="container mt-4">
                    <div className="row mb-3">
                        <div className="col-6">
                            <h5>RS1804</h5>
                        </div>
                        <div className="col-6 text-right">
                            <p>Created Time: 27-08-2024 12:33:57 PM</p>
                            <p>Assigned To: Raju Rsoft</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Comments Section */}
                        <div className="form-group mb-3">
                            <label htmlFor="comments">Add your comments here</label>
                            <textarea
                                className="form-control"
                                id="comments"
                                name="comments"
                                rows="3"
                                value={formData.comments}
                                onChange={handleInputChange}
                                placeholder="Add your comments here..."
                            />
                        </div>

                        {/* Lead Status */}
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="leadStatus">
                                    <strong>Lead Status *</strong>
                                </label>
                                <select
                                    className="form-control"
                                    id="leadStatus"
                                    name="leadStatus"
                                    value={formData.leadStatus}
                                    onChange={handleInputChange}
                                >
                                    <option value="New Lead">New Lead</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Closed">Closed</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            {/* Lead Sub Status */}
                            <div className="col-md-6 mb-3">
                                <label htmlFor="leadSubStatus">
                                    <strong>Lead Sub Status</strong>
                                </label>
                                <select
                                    className="form-control"
                                    id="leadSubStatus"
                                    name="leadSubStatus"
                                    value={formData.leadSubStatus}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select An Option</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Contacted">Contacted</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                        </div>

                        {/* Follow Up On */}
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>
                                    <strong>Follow Up On *</strong>
                                </label>
                                <div className="input-group">
                                    <DatePicker
                                        className="form-control"
                                        selected={formData.followUpOn}
                                        onChange={handleDateChange}
                                        dateFormat="dd-MM-yyyy"
                                    />
                                   
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary mt-3">
                            Update
                        </button>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModelLeadFollowUp