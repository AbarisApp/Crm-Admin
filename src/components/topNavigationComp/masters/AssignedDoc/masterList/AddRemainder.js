import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddRemainder(props) {
    const [formData, setFormData] = useState({
        subject: '',
        message: '',
        repeatReminder: false,
        sendEmail: false,
        reminderDate: new Date().toLocaleString(),
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = () => {
        console.log(formData); // Log form data or handle form submission
        props.onHide();
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
                    Add Reminder
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="repeatReminder">
                        <Form.Check
                            type="checkbox"
                            label="Repeat Reminder"
                            name="repeatReminder"
                            checked={formData.repeatReminder}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="sendEmail">
                        <Form.Check
                            type="checkbox"
                            label="Send Email"
                            name="sendEmail"
                            checked={formData.sendEmail}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="reminderDate">
                        <Form.Label>Reminder Date</Form.Label>
                        <Form.Control
                            type="text"
                            name="reminderDate"
                            value={formData.reminderDate}
                            onChange={handleChange}
                            placeholder="Select date and time"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>Save</Button>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddRemainder;
