import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { sedulerSetupAdd, sedulerSetupGet } from "../../../api/login/Login";

function SchedulerSetupForm() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const [initialvalue, setInitialValue] = useState({
    scheduler_subscription_email: "",
    scheduler_subscription_mobile: null,
    table: [{
      schedule_type: { type: String, enum: ["Voucher", "Closing", "Outstanding to Client"] },
      repeat: { type: String, enum: ["Daily", "Every Monday", "Every 15 Days", "Monthly"] },
      reminder_type: { type: String, enum: ["EMAIL", "SMS", "WHATSAPP"] }
    }],


  });

  // Handle input change for all form fields
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setInitialValue((prevValues) => ({
      ...prevValues,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const toastSuccessMessage = (message) => {
    toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
      position: "top-right",
    });
  };

  const toastErrorMessage = (message) => {
    toast.error(`${params?.id ? "Update" : "Add"} ${message}`, {
      position: "top-right",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsLoading(true)
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      try {
        const response = await sedulerSetupAdd(initialvalue);
        if (response?.statusCode === "200") {
          toastSuccessMessage("Scheduler  Setup added successfully!");
          setIsLoading(false)
          setInitialValue({
            scheduler_subscription_email: "",
            scheduler_subscription_mobile: null,
            table: [{
              schedule_type: { type: String, enum: ["Voucher", "Closing", "Outstanding to Client"] },
              repeat: { type: String, enum: ["Daily", "Every Monday", "Every 15 Days", "Monthly"] },
              reminder_type: { type: String, enum: ["EMAIL", "SMS", "WHATSAPP"] }
            }],


          });
        } else {
          toastErrorMessage("Failed to Scheduler  update.");
        }
      } catch (error) {
        console.error("API Error:", error);
        toastErrorMessage("Failed to Scheduler  update.");
      }
      setIsLoading(false)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await sedulerSetupGet();
        if (response && response.data) {
          setInitialValue(response.data);
        } else {
          toastErrorMessage("Failed to load Scheduler  data.");
        }
      } catch (error) {
        console.error("Data Fetching Error:", error);
        toastErrorMessage("Failed to load Scheduler  data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="py-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Email Id </Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">Gmail</option>
              <option value="2">Yahoo</option>
              <option value="3">Hotmail</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Email Id .
            </Form.Control.Feedback>
          </Form.Group> */}

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Scheduler Subscription Email</Form.Label>
            <Form.Control type="email" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Scheduler Subscription Email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Scheduler Subscription Mobile</Form.Label>
            <Form.Control type="number" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Scheduler Subscription Mobile.
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Re Password </Form.Label>
            <Form.Control type="password" placeholder="Re Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Re Password .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Port</Form.Label>
            <Form.Control type="text" placeholder="Port" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Port.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Smtp</Form.Label>
            <Form.Control type="text" placeholder="Smtp" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Smtp.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>To Email Id</Form.Label>
            <Form.Control type="email" placeholder="To Email Id" required />
            <Form.Control.Feedback type="invalid">
              Please provide a To Email Id.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Default CC</Form.Label>
            <Form.Control type="text" placeholder="Default CC" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Default CC.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Hidden BCC</Form.Label>
            <Form.Control type="date" placeholder="Hidden BCC" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Hidden BCC.
            </Form.Control.Feedback>
          </Form.Group> */}
        </Row>

        <Button type="submit">Save</Button>
        <Button type="submit">Cancel</Button>
      </Form>
    </div>
  );
}

export default SchedulerSetupForm;
