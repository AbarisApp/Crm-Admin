import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function AddContact(props) {
  const [formData, setFormData] = useState({
    setReminderTo: '', // new field for Set Reminder To
    reminderDescription: '', // new field for Description
    sendReminderEmail: false, // new checkbox for sending reminder email
    notificationDate: '', // new field for Date to be notified
  });

  // Handle input changes for the new fields
  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
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
        <Form onSubmit={handleSubmit}>
          <h5 className="mt-4">Set Reminder To</h5>
          <Form.Group controlId="formSetReminderTo">
            <Form.Select
              name="setReminderTo"
              value={formData.setReminderTo}
              onChange={handleInputChange}
            >
              <option value="">Select a reminder time</option>
              <option value="1-hour">1 hour before</option>
              <option value="24-hours">24 hours before</option>
              <option value="1-week">1 week before</option>
            </Form.Select>
          </Form.Group>

          <h5 className="mt-4">Reminder Description</h5>
          <Form.Group controlId="formReminderDescription">
            <Form.Control
              as="textarea"
              rows={3}
              name="reminderDescription"
              value={formData.reminderDescription}
              onChange={handleInputChange}
              placeholder="Enter reminder details"
            />
          </Form.Group>

          <h5 className="mt-4">Date to be Notified</h5>
          <Form.Group controlId="formNotificationDate">
            <Form.Control
              type="datetime-local"
              name="notificationDate"
              value={formData.notificationDate}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Check
            type="checkbox"
            name="sendReminderEmail"
            label="Send also an email for this reminder"
            checked={formData.sendReminderEmail}
            onChange={handleInputChange}
          />

          <Button variant="primary" type="submit" className="mt-4">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddContact;
