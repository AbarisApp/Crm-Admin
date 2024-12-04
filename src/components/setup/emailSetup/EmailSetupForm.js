import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { emailSetupGet, emailSetupSetupAdd } from "../../../api/login/Login";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

function EmailSetupForm() {
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [initialvalue, setInitialValue] = useState({
    company: "",
    email_id: "",
    password: "",
    retype_password: "",
    port: "",
    smt: "",
    ssl: false,
    to_email_id: "",
    default_cc: "",
    hidden_bbc: "",
    signature: "",
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
    toast.success(`Email Setup ${message}`, {
      position: "top-right",
    });
  };

  const toastErrorMessage = (message) => {
    toast.error(`Email Setup ${message}`, {
      position: "top-right",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      try {
        setIsLoading(true);
        const response = await emailSetupSetupAdd(initialvalue);
        if (response?.statusCode === "200") {
          toastSuccessMessage("added successfully!");
          setInitialValue({
            company: "",
            email_id: "",
            password: "",
            retype_password: "",
            port: "",
            smt: "",
            ssl: false,
            to_email_id: "",
            default_cc: "",
            hidden_bbc: "",
            signature: "",
          });
        } else {
          toastErrorMessage("Failed to add Email Setup.");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("API Error:", error);
        toastErrorMessage("Failed to add Email Setup.");
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const response = await emailSetupGet();
        setInitialValue(response?.data || {});
        setIsLoading(false);
      } catch (error) {
        toastErrorMessage("Failed to load Email Setup data.");
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <div className="py-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="company" className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Name"
              value={initialvalue.company}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please select a Company.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="email_id" className="mb-3">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={initialvalue.email_id}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email ID.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="password" className="mb-3 position-relative">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={initialvalue.password}
              onChange={handleChange}
              required
            />
            <Button
              variant="link"
              className="position-absolute end-0 top-0 mt-4"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
            <Form.Control.Feedback type="invalid">
              Please provide a Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="retype_password" className="mb-3 position-relative">
            <Form.Label>Retype Password</Form.Label>
            <Form.Control
              type={showRetypePassword ? "text" : "password"}
              placeholder="Re-enter Password"
              value={initialvalue.retype_password}
              onChange={handleChange}
              required
            />
            <Button
              variant="link"
              className="position-absolute end-0 top-0 mt-4"
              onClick={() => setShowRetypePassword((prev) => !prev)}
            >
              {showRetypePassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
            <Form.Control.Feedback type="invalid">
              Please retype the Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="port" className="mb-3">
            <Form.Label>Port</Form.Label>
            <Form.Control
              type="text"
              placeholder="Port"
              value={initialvalue.port}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Port.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="smt" className="mb-3">
            <Form.Label>SMTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="SMTP"
              value={initialvalue.smt}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide an SMTP server.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="to_email_id" className="mb-3">
            <Form.Label>To Email ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="To Email ID"
              value={initialvalue.to_email_id}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a To Email ID.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="default_cc" className="mb-3">
            <Form.Label>Default CC</Form.Label>
            <Form.Control
              type="text"
              placeholder="Default CC"
              value={initialvalue.default_cc}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Default CC.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="hidden_bbc" className="mb-3">
            <Form.Label>Hidden BCC</Form.Label>
            <Form.Control
              type="text"
              placeholder="Hidden BCC"
              value={initialvalue.hidden_bbc}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Hidden BCC.
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="12" controlId="signature" className="mb-3">
            <Form.Label>Signature</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your signature"
              value={initialvalue.signature}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a signature.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Check
              id="ssl"
              label="SSL"
              checked={initialvalue.ssl}
              onChange={(e) => setInitialValue({ ...initialvalue, ssl: e.target.checked })}
            />
          </Form.Group>
        </Row>

        <Button type="submit" className="me-2">Save</Button>
        <Button type="button" onClick={() => setInitialValue({
          company: "",
          email_id: "",
          password: "",
          retype_password: "",
          port: "",
          smt: "",
          ssl: false,
          to_email_id: "",
          default_cc: "",
          hidden_bbc: "",
          signature: "",
        })}>Cancel</Button>
      </Form>
    </div>
  );
}

export default EmailSetupForm;
