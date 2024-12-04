import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function AddTaxGroupForm() {
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
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Name </Form.Label>
            <Form.Control type="text" placeholder="Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Name .
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
}

export default AddTaxGroupForm;
