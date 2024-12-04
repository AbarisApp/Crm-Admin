import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { postLeadNote, updateLeadNoteById } from "../../../../../../../api/login/Login";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const TravelNoteAdd = (props) => {
    const [formData, setFormData] = useState({
        added_date: '',
        description: '',
    });

    const params = useParams();

    // Function to format date for datetime-local input
    const getCurrentDateTime = () => {
        const now = new Date();
        const offset = now.getTimezoneOffset();
        const adjustedDate = new Date(now.getTime() - offset * 60 * 1000);
        return adjustedDate.toISOString().slice(0, 16); // Formats to "YYYY-MM-DDTHH:MM"
    };

    // Set initial date and clear form data when the modal opens
    useEffect(() => {
        if (props.mode === "Add") {
            setFormData({
                added_date: getCurrentDateTime(),
                description: '',
            });
        } else if (props.mode === "Edit" && props.value) {
            setFormData({
                added_date: props.value.added_date || getCurrentDateTime(),
                description: props.value.description || '',
            });
        }
    }, [props.mode, props.value]);

    // Handle input changes for all fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Toast notification
    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };

    // Handle form submission
    const handleSubmit = async () => {
        try {
            if (props.mode === "Add") {
                const res = await postLeadNote({ ...formData, user_id: params.id });
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Note Successfully Added");
                    setTimeout(() => {
                        props.getFloorMasters(0);
                        props.onHide();
                    }, 1000);
                }
            } else if (props.mode === "Edit" && props.id) {
                const res = await updateLeadNoteById(props.id, { ...formData, user_id: params.id });
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Note Successfully Updated");
                    setTimeout(() => {
                        props.getFloorMasters(0);
                        props.onHide();
                    }, 1000);
                }
            }
        } catch (error) {
            // console.error("Error submitting form:", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    };

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
                    {props.mode === "Add" ? "Add Note" : "Edit Note"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Col xs={12}>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter note description"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="formAddedDate">
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
                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        {props.mode === "Add" ? "Add Note" : "Update Note"}
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TravelNoteAdd;
