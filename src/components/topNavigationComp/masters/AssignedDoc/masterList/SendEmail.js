import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function SendEmail(props) {
    const [toEmail, setToEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Send Email
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="emailTo">
                        <Form.Label>To</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={toEmail}
                            onChange={(e) => setToEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="emailSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="emailBody">
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Write your message here..."
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Attachment Document</Form.Label>
                       <input type="file" className='form-control'/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => {/* Add send logic here */}}>
                    Send
                </Button>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SendEmail;
