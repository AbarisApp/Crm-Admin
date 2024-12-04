import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import { postLeadNote, updateLeadNoteById } from '../../../api/login/Login';
import { useParams } from 'react-router-dom';

function AddContact(props) {
  const [formData, setFormData] = useState({
    added_date: '',
    description: '',
  });

  // Function to format date for datetime-local input
  const getCurrentDateTime = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const adjustedDate = new Date(now.getTime() - (offset * 60 * 1000));
    return adjustedDate.toISOString().slice(0, 16);  // Formats to "YYYY-MM-DDTHH:MM"
  };

  // UseEffect to set the initial date when the modal opens
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      added_date: getCurrentDateTime(),
    }));
  }, []);

  // Handle input changes for all fields
  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const toastSuccessMessage = (message) => {
    toast.success(`${props?.id ? "Update" : "Add"} ${message}`, {
      position: "top-right",
    });
  };
  const params = useParams()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);

    try {

      if (!props.value) {
        const res = await postLeadNote({ ...formData, user_id: params.id });
        if (res?.statusCode == "200") {
          toastSuccessMessage("Note Successfully Added");
          setTimeout(() => {
            setFormData({
              added_date: getCurrentDateTime(),
              description: '',
            });
            props.getFloorMasters(0)
            props.onHide();
          }, 1000);
        }
      } else {
        const res = await updateLeadNoteById(props.id, { ...formData, user_id: params.id });
        if (res?.statusCode == "200") {
          toastSuccessMessage("Note Successfully Updated");
          setTimeout(() => {
            props.getFloorMasters(0)
            props.onHide();
          }, 1000);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);

    }
  };

  useEffect(()=>{
    if(props.value){
      setFormData({
        added_date: props.value.added_date,
        description: props.value.description
      })
    }
  },[props.value])

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ToastContainer />
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Notes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col xs={12}>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formadded_date">
                <Form.Label>Added Date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="added_date"
                  value={formData.added_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>



          <Button variant="primary" type="submit">
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
