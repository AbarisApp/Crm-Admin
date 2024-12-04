import React from "react";
import { Button, Form, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import pay from "../../../../../../assets/images/kyc/pay.jpg";

const UpdateGateway = ({setShowUpdateGateway,showUpdateGateway}) => {
    return (
        <div className="container mt-4">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Update Gateway</h3>
                <Button variant="outline-secondary" onClick={()=>setShowUpdateGateway(!showUpdateGateway)}>
                    <i className="bi bi-arrow-left"></i> Back
                </Button>
            </div>

            {/* Card Layout */}
            <div className="card p-4">
                <h2>Aamarpay</h2>
                <Row className="align-items-center">
                    {/* Left Column - Logo and Upload */}
                    <Col md={4} className="">
                        <div className="upload-logo text-center">
                            <div className="border rounded p-1">
                                <img
                                    src={pay}
                                    alt="Aamarpay Logo"
                                    className="img-fluid rounded-md"
                                    style={{ width: "50%", height: "50%" }}
                                />
                            </div>
                            <Button variant="primary" className="upload-btn mt-2" style={{ borderRadius: '50%' }}>
                                <i className="bi bi-upload"></i>
                            </Button>
                        </div>
                    </Col>

                    {/* Right Column - Form Fields */}
                    <Col md={5}>
                        <h5>Global Setting for Aamarpay</h5>
                        <Form >
                            <Form.Group controlId="storeId" className="mb-3">
                                <Form.Label>Store ID <span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" placeholder="Enter Store ID" />
                            </Form.Group>

                            <Form.Group controlId="signatureKey" className="mb-3">
                                <Form.Label>Signature Key <span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" placeholder="Enter Signature Key" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={3}>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Select currency"
                            variant="outline-secondary"
                            className="d-inline-block"
                        >
                            <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">BDT</Dropdown.Item>
                        </DropdownButton>
                        <Button variant="primary" className="ms-3">
                            Add new
                        </Button>
                    </Col>
                </Row>

                {/* Currency Dropdown and Add Button */}
               
                   

                {/* Submit Button */}
                <div className="mt-4">
                    <Button variant="primary" size="lg" block>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UpdateGateway;
