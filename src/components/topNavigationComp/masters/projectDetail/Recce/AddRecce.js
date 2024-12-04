import React from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import Select from 'react-select';

function AddRecce(props) {
    // Options for multi-select fields
    const usersOptions = [
        { value: 'user1', label: 'User 1' },
        { value: 'user2', label: 'User 2' },
        { value: 'user3', label: 'User 3' },
    ];

    const clientPOCOptions = [
        { value: 'client1', label: 'Client POC 1' },
        { value: 'client2', label: 'Client POC 2' },
    ];

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Creating New Recce</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={4}>
                        <h5>Select Template</h5>
                        <Form.Select>
                            <option>Residential</option>
                            <option>Commercial</option>
                        </Form.Select>
                        <div className="mt-3">
                            <h6>Recce Details</h6>
                            <Form.Check label="Bedroom" defaultChecked />
                            <Form.Check label="Doors" defaultChecked />
                            <Form.Check label="Walls" defaultChecked />
                            <Form.Check label="Window" defaultChecked />
                        </div>
                    </Col>
                    <Col md={8}>
                        <Form>
                            <h5>Recce Details</h5>
                            <Form.Group className="mb-3" controlId="recceName">
                                <Form.Label>Recce Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Recce Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="recceDueDate">
                                <Form.Label>Recce Due Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="assignRecceTo">
                                <Form.Label>Assign Recce to (will receive Recce Link)</Form.Label>
                                <Select options={usersOptions} isMulti placeholder="Select Users" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="projectStakeholders">
                                <Form.Label>Project Stakeholders to be contacted</Form.Label>
                                <Select options={usersOptions} isMulti placeholder="Select Users" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="clientPOC">
                                <Form.Label>Client POC to be contacted</Form.Label>
                                <Select options={clientPOCOptions} isMulti placeholder="Select Client POC" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="recceName">
                                <Form.Label>Instruction for Recce</Form.Label>
                                <Form.Control type="text" placeholder="Instruction for Recce" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="recceName">
                                <div className="mt-3">
                                    <Form.Check label="Remarks from Site" defaultChecked />
                                    <Form.Check label="Capture Location" defaultChecked />
                                    <Form.Check label="Shareable Recce Link" defaultChecked />
                                </div>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary">Save Recce</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddRecce;
