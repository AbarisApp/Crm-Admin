import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { smsSetupAdd, smsSetupGet } from "../../../api/login/Login";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Loadar from "../../../common/loader/Loader";


function SmsSetupForm() {
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const params = useParams();
  const [initialvalue, setinitialvalue] = useState({
    company_name: "",
    sms_user_name: "",
    sms_password: "",
    retype_password: "",
    mask: "",
    sms_url: "",
    sms_response: "",
    cc_mobile: "",
    default_mobile: "",
    sms_auth_key: "",
  });

  // Handle input change for all form fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setinitialvalue((prevValues) => ({
      ...prevValues,
      [id]: value,
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
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true); // Assuming you have a 'validated' state for form validation feedback
    } else {
      try {
        setIsloading(true)
        const response = await smsSetupAdd(initialvalue);
        if (response?.statusCode == "200" || response?.statusCode === "200") {
          toastSuccessMessage("SMS Setup added successfully!");
          setIsloading(false)
          setinitialvalue({ // Reset form values if needed
            company_name: "",
            sms_user_name: "",
            sms_password: "",
            retype_password: "",
            mask: "",
            sms_url: "",
            sms_response: "",
            cc_mobile: "",
            default_mobile: "",
            sms_auth_key: "",
          });
        } else {
          toastErrorMessage("Failed to add SMS Setup.");
        }
        setIsloading(false)
      } catch (error) {
        console.error("API Error:", error);
        toastErrorMessage("Failed to add SMS Setup.");
        setIsloading(false)
      }
    }
  };

  useEffect(() => {
    const fetch = async () => {
      setIsloading(true)
      try {
        const response = await smsSetupGet()
        setinitialvalue(response?.data)
        setIsloading(false)
      } catch (error) {
        toastErrorMessage("Failed to load SMS Setup Data.");
      }
    }
    fetch()
  }, [])

  return (
    <div className="py-3">
       {isLoading && <Loadar />}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="company_name" className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Name"
              value={initialvalue?.company_name}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Company Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="sms_user_name" className="mb-3">
            <Form.Label>SMS UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="SMS UserName"
              value={initialvalue?.sms_user_name}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a SMS UserName.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="sms_password" className="mb-3">
            <Form.Label>SMS Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="SMS Password"
              value={initialvalue?.sms_password}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a SMS Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="retype_password" className="mb-3">
            <Form.Label>Re-type Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-type Password"
              value={initialvalue?.retype_password}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Re-type Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="mask" className="mb-3">
            <Form.Label>Mask</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mask"
              value={initialvalue?.mask}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Mask.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="sms_url" className="mb-3">
            <Form.Label>SMS URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="SMS URL"
              value={initialvalue?.sms_url}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a SMS URL.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="sms_response" className="mb-3">
            <Form.Label>SMS Response</Form.Label>
            <Form.Control
              type="text"
              placeholder="SMS Response"
              value={initialvalue?.sms_response}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a SMS Response.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="cc_mobile" className="mb-3">
            <Form.Label>CC Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="CC Mobile"
              value={initialvalue?.cc_mobile}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a CC Mobile.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="default_mobile" className="mb-3">
            <Form.Label>Default Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Default Mobile"
              value={initialvalue?.default_mobile}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Default Mobile.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="sms_auth_key" className="mb-3">
            <Form.Label>SMS Auth Key</Form.Label>
            <Form.Control
              type="text"
              placeholder="SMS Auth Key"
              value={initialvalue?.sms_auth_key}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide an SMS Auth Key.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit" variant="primary" className="me-2">
          {params?.id ? "Update" : "Add"}
        </Button>
        <Button type="button" variant="secondary" onClick={() => setinitialvalue(initialvalue)}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default SmsSetupForm;
