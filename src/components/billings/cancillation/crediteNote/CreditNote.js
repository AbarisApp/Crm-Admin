import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function CreditNote() {
    return (
        <>
            <Form className="p-3">
                <Row className="g-3 align-items-center">
                    <Col md={2}>
                        <Form.Group controlId="typeSelect">
                            <Form.Label>Type</Form.Label>
                            <Form.Select defaultValue="Domestic">
                                <option>Domestic</option>
                                <option>International</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={2}>
                        <Form.Group controlId="creditNote">
                            <Form.Label>Credit Note</Form.Label>
                            <Form.Control type="text" placeholder="Enter note" isInvalid />
                        </Form.Group>
                    </Col>

                    <Col md={2}>
                        <Form.Group controlId="datePicker">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" isInvalid />
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group controlId="clientName">
                            <Form.Label>Party/Client Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter client name" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="g-3 mt-3 align-items-center">
                    <Col md={3}>
                        <Form.Group controlId="cancellationBy">
                            <Form.Label>Cancellation By</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group controlId="placeOfSupply">
                            <Form.Label>Place of Supply</Form.Label>
                            <Form.Control type="text" placeholder="Enter place" disabled />
                        </Form.Group>
                    </Col>

                    <Col md={2}>
                        <Form.Group controlId="invoiceNo">
                            <Form.Label>Invoice No.</Form.Label>
                            <Form.Control type="text" placeholder="Enter number" />
                        </Form.Group>
                    </Col>

                    <Col md={2}>
                        <Form.Group controlId="pnr">
                            <Form.Label>PNR</Form.Label>
                            <Form.Control type="text" placeholder="Enter PNR" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default CreditNote
