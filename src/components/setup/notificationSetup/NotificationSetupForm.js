import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { notificationSetupAdd, notificationSetupGet } from "../../../api/login/Login";
import { toast } from "react-toastify";
import Loadar from "../../../common/loader/Loader";

function NotificationSetupForm() {
  const [validated, setValidated] = useState(false);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [initialValue, setInitialValue] = useState({
    notification_management_email: "",
    user_management_notification_onadd_edit_delete: false,
    transaction_notification_ondelete: false,
    master_notification_ondelete: false,
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
    toast.success(`${message}`, {
      position: "top-right",
    });
  };

  const toastErrorMessage = (message) => {
    toast.error(`${message}`, {
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
      setIsLoading(true);
      try {
        const response = await notificationSetupAdd(initialValue);
        console.log("API Response:", response.data);
        if (response?.statusCode === "200") {
          toastSuccessMessage("Notification Setup added successfully!");
          setInitialValue({
            notification_management_email: "",
            user_management_notification_onadd_edit_delete: false,
            transaction_notification_ondelete: false,
            master_notification_ondelete: false,
          });
        } else {
          toastErrorMessage("Failed to add Notification Setup.");
        }
      } catch (error) {
        console.error("API Error:", error);
        toastErrorMessage("Failed to add Notification Setup.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await notificationSetupGet();
        if (response && response.data) {
          setInitialValue(response.data);
        } else {
          toastErrorMessage("Failed to load notification data.");
        }
      } catch (error) {
        console.error("Data Fetching Error:", error);
        toastErrorMessage("Failed to load notification data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-3">
      {isLoading && <Loadar />}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="notification_management_email" className="mb-3">
            <Form.Label>Notification Management Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={initialValue.notification_management_email}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Notification Management Email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Check
              id="user_management_notification_onadd_edit_delete"
              label="User Management Notification"
              checked={initialValue.user_management_notification_onadd_edit_delete}
              onChange={handleChange}
            />
            <Form.Check
              id="transaction_notification_ondelete"
              label="Transaction Notification"
              checked={initialValue.transaction_notification_ondelete}
              onChange={handleChange}
            />
            <Form.Check
              id="master_notification_ondelete"
              label="Master Notification"
              checked={initialValue.master_notification_ondelete}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
}

export default NotificationSetupForm;
