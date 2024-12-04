import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { clodinaryImage, getAccContactById, postAccContact, updateAccContactById } from "../../../../../../../api/login/Login";
import { baseUrlImage } from "../../../../../../../baseUrl";


const ContactsAdd = (props) => {
    const [formData, setFormData] = useState({
        profileImage: null,
        firstName: '',
        lastName: '',
        position: '',
        email: '',
        phone: '',
        direction: 'system-default',
        password: '',
        primaryContact: false,
        sendWelcomeEmail: false,
        sendSetPasswordEmail: false,
        permissions: {
            invoices: true,
            estimates: true,
            contracts: true,
            proposals: true,
            support: true,
            projects: true,
        },
        emailNotifications: {
            invoice: true,
            creditNote: true,
            tickets: true,
            estimate: true,
            project: true,
            contract: true,
            task: true,
        }
    });

    // Handle input changes for all fields
    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Handle changes for nested permissions and notifications
    const handleNestedChange = (category, key) => {
        setFormData((prevData) => ({
            ...prevData,
            [category]: {
                ...prevData[category],
                [key]: !prevData[category][key],
            },
        }));
    };

    // Handle form submission
    const parem = useParams()
    const toastSuccessMessage = (message) => {
        toast.success(`${parem?.update ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transformedData = {
            profile_image: image,
            first_name: formData.firstName,
            last_name: formData.lastName,
            position: formData.position,
            email: formData.email,
            phone: formData.phone,
            direction: formData.direction,
            password: formData.password,
            primary_contact: formData.primaryContact,
            do_not_send_welcome_email: formData.sendWelcomeEmail,
            send_set_password_email: formData.sendSetPasswordEmail,
            permission_invoives: formData.permissions.invoices,
            permission_estimates: formData.permissions.estimates,
            permission_contracts: formData.permissions.contracts,
            permission_proposals: formData.permissions.proposals,
            permission_support: formData.permissions.support,
            permission_projects: formData.permissions.projects,
            email_notifications_invoice: formData.emailNotifications.invoice,
            email_notifications_creditnote: formData.emailNotifications.creditNote,
            email_notifications_tickets: formData.emailNotifications.tickets,
            email_notifications_estimate: formData.emailNotifications.estimate,
            email_notifications_project: formData.emailNotifications.project,
            email_notifications_contract: formData.emailNotifications.contract,
            email_notifications_task: formData.emailNotifications.task,
            user_id: props?.paramsAll?.id,  // Set this as needed, if available in context
        };

        try {

            if (!parem?.update) {
                const res = await postAccContact(transformedData);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Contact Successfully Added");
                    setTimeout(() => navigate(props.onHide()), 2000);
                    props?.getData()
                }
            } else {
                const res = await updateAccContactById(parem.update, transformedData);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Contact Successfully Updated");
                    setTimeout(() => navigate(props.onHide()), 2000);
                    props?.getData()
                }
            }
        } catch (error) {
            console.error("Error submitting form:", error);

        }

    };


    useEffect(() => {
        const fetchTask = async () => {
            try {
                if (parem?.update) {
                    const response = await getAccContactById(parem.update);
                    setImage(response?.data.profile_image);

                    setFormData((prevData) => ({
                        ...prevData,
                        firstName: response?.data?.first_name,
                        lastName: response?.data?.last_name,
                        position: response?.data?.position,
                        email: response?.data?.email,
                        phone: response?.data?.phone,
                        direction: response?.data?.direction,
                        password: response?.data?.password,
                        primaryContact: response?.data?.primary_contact,
                        sendWelcomeEmail: response?.data?.do_not_send_welcome_email,
                        sendSetPasswordEmail: response?.data?.send_set_password_email,
                        permissions: {
                            invoices: response?.data?.permission_invoives,
                            estimates: response?.data?.permission_estimates,
                            contracts: response?.data?.permission_contracts,
                            proposals: response?.data?.permission_proposals,
                            support: response?.data?.permission_support,
                            projects: response?.data?.permission_projects,
                        },
                        emailNotifications: {
                            invoice: response?.data?.email_notifications_invoice,
                            creditNote: response?.data
                        }
                    }))


                }
            } catch (error) {
                console.error("Error fetching task:", error);
            }
        };

        fetchTask();
    }, [parem?.id]);



    const [image, setImage] = useState()
    const changeImageHandle = async (e) => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        try {
            const res = await clodinaryImage(formData)
            setTimeout(() => {
                setImage(res.data?.data?.url)
            }, 1000);
        } catch (error) {

        }
    }
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
                    Add New Contact
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="formProfileImage">
                                <Form.Label>Profile Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="profileImage"
                                    onChange={changeImageHandle}
                                />
                                {image && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${image}`} />}
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="First Name"
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Last Name"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="formPosition">
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    placeholder="Position"
                                />
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone"
                                />
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                            <Form.Group controlId="formDirection">
                                <Form.Label>Direction</Form.Label>
                                <Form.Select
                                    name="direction"
                                    value={formData.direction}
                                    onChange={handleInputChange}
                                >
                                    <option value="system-default">System Default</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Password"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Check
                        type="checkbox"
                        name="primaryContact"
                        label="Primary Contact"
                        checked={formData.primaryContact}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="checkbox"
                        name="sendWelcomeEmail"
                        label="Do not send welcome email"
                        checked={formData.sendWelcomeEmail}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="checkbox"
                        name="sendSetPasswordEmail"
                        label="Send SET password email"
                        checked={formData.sendSetPasswordEmail}
                        onChange={handleInputChange}
                    />

                    <h5 className="mt-4">Permissions</h5>
                    <p className="text-danger">
                        Make sure to set appropriate permissions for this contact
                    </p>
                    <Row className="mb-3">
                        {Object.keys(formData.permissions).map((perm) => (
                            <Col xs={6} md={4} key={perm}>
                                <Form.Check
                                    type="switch"
                                    id={`permission-${perm}`}
                                    label={perm.charAt(0).toUpperCase() + perm.slice(1)}
                                    checked={formData.permissions[perm]}
                                    onChange={() => handleNestedChange("permissions", perm)}
                                />
                            </Col>
                        ))}
                    </Row>

                    <h5 className="mt-4">Email Notifications</h5>
                    <Row className="mb-3">
                        {Object.keys(formData.emailNotifications).map((notif) => (
                            <Col xs={6} md={4} key={notif}>
                                <Form.Check
                                    type="switch"
                                    id={`notification-${notif}`}
                                    label={notif.charAt(0).toUpperCase() + notif.slice(1)}
                                    checked={formData.emailNotifications[notif]}
                                    onChange={() => handleNestedChange("emailNotifications", notif)}
                                />
                            </Col>
                        ))}
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

export default ContactsAdd