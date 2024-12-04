import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useState } from "react";

function ViewProductionEntryForm() {
   const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="py-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Voucher No</Form.Label>
            <Form.Control type="text" placeholder="Voucher No" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Voucher No.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Date </Form.Label>
            <Form.Control type="date" placeholder="Date " required />
            <Form.Control.Feedback type="invalid">
              Please provide a Date .
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <hr />

        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Process </Form.Label>
            <Form.Select aria-label="Default select example" disabled>
              <option></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Process .
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Quantity </Form.Label>
            <Form.Control type="Quantity" placeholder="Quantity " required />
            <Form.Control.Feedback type="invalid">
              Please provide a Quantity .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Location </Form.Label>
            <Form.Select aria-label="Default select example" disabled>
              <option></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Location .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <div className="mt-4">
              <Button type="submit"> Get Data</Button>
            </div>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default ViewProductionEntryForm;
