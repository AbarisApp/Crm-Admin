

import { useState } from "react";
import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function EditBankReceiptForm() {
  const [validated, setValidated] = useState(false);

  // React-select options
  const selectOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

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
          {/* Normal Select */}
          <Form.Group as={Col} md="4" controlId="normalSelect">
            <Form.Label>Voucher Type</Form.Label>
            <Form.Control as="select" required>
              <option value="">Please Select</option>
              <option value="1">Payment</option>
              <option value="2">Receipt</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select an Voucher Type.
            </Form.Control.Feedback>
          </Form.Group>

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
          <Form.Group as={Col} md="8">
            <Form.Label>Opp.A/c</Form.Label>
            <Select options={selectOptions} />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Amount </Form.Label>
            <Form.Control type="number" placeholder="Amount  " required />
            <Form.Control.Feedback type="invalid">
              Please provide a Amount .
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="8">
            <Form.Label>Bank</Form.Label>
            <Select options={selectOptions} />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Amount </Form.Label>
            <Form.Control type="number" placeholder="Amount  " required />
            <Form.Control.Feedback type="invalid">
              Please provide a Amount .
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="8">
            <Form.Label>Diff.A/c</Form.Label>
            <Select options={selectOptions} />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Amount </Form.Label>
            <Form.Control type="number" placeholder="Amount  " required />
            <Form.Control.Feedback type="invalid">
              Please provide a Amount .
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="8">
            <Form.Label>Diff.A/c 2</Form.Label>
            <Select options={selectOptions} />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Amount </Form.Label>
            <Form.Control type="number" placeholder="Amount  " required />
            <Form.Control.Feedback type="invalid">
              Please provide a Amount .
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Chq/DD No </Form.Label>
            <Form.Control type="number" placeholder="Chq/DD No  " required />
            <Form.Control.Feedback type="invalid">
              Please provide a Chq/DD No .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Chq/DD Date</Form.Label>
            <Form.Control type="date" placeholder="Chq/DD Date " required />
            <Form.Control.Feedback type="invalid">
              Please provide a Chq/DD Date.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="" controlId="validationCustom03">
            <Form.Label>Chq/DD Date</Form.Label>
            <textarea
              name=""
              id=""
              className="form-control"
              rows={5}
              placeholder="Narration"
            ></textarea>
          </Form.Group>
        </Row>

        <Button type="submit"> Save</Button>
      </Form>
    </div>
  );
}

export default EditBankReceiptForm;
