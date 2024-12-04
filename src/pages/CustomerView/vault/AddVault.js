import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddVault(props) {
  const [formData, setFormData] = useState({
    serverAddress: '',
    port: '',
    username: '',
    password: '',
    shortDescription: '',
    visibility: 'all_staff',
    shareInProjects: false
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
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
          Vault Entry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Server Address */}
          <Form.Group controlId="formServerAddress">
            <Form.Label>Server Address <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="text"
              name="serverAddress"
              value={formData.serverAddress}
              onChange={handleInputChange}
              placeholder="Enter server address"
              required
            />
          </Form.Group>

          {/* Port */}
          <Form.Group controlId="formPort">
            <Form.Label>Port</Form.Label>
            <Form.Control
              type="text"
              name="port"
              value={formData.port}
              onChange={handleInputChange}
              placeholder="Enter port number"
            />
          </Form.Group>

          {/* Username */}
          <Form.Group controlId="formUsername">
            <Form.Label>Username <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="email"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter username"
              required
            />
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="formPassword">
            <Form.Label>Password <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />
          </Form.Group>

          {/* Short Description */}
          <Form.Group controlId="formShortDescription">
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleInputChange}
              placeholder="Enter a short description"
            />
          </Form.Group>

          {/* Visibility options */}
          <Form.Group controlId="formVisibility">
            <Form.Label>Visibility</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Visible to all staff members who have access to this customer"
                name="visibility"
                value="all_staff"
                checked={formData.visibility === 'all_staff'}
                onChange={handleInputChange}
              />
              <Form.Check
                type="radio"
                label="Visible only to administrators"
                name="visibility"
                value="administrators"
                checked={formData.visibility === 'administrators'}
                onChange={handleInputChange}
              />
              <Form.Check
                type="radio"
                label="Visible only to me (administrators are not excluded)"
                name="visibility"
                value="only_me"
                checked={formData.visibility === 'only_me'}
                onChange={handleInputChange}
              />
            </div>
          </Form.Group>

          {/* Share in projects checkbox */}
          <Form.Group controlId="formShareInProjects">
            <Form.Check
              type="checkbox"
              label="Share this vault entry in projects with project members"
              name="shareInProjects"
              checked={formData.shareInProjects}
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Submit button */}
          <Button variant="primary" type="submit" className="mt-3">
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

export default AddVault;
