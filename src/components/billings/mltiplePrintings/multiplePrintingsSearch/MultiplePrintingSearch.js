import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function MultiplePrintingSearch() {
    return (
            <div className='card'>
                <Form className="p-3">
                    <Row className="g-3 align-items-center">
                        <Col md={2}>
                            <Form.Group controlId="fromDate">
                                <Form.Label>From:</Form.Label>
                                <Form.Control type="date" defaultValue="2024-11-20" />
                            </Form.Group>
                        </Col>

                        <Col md={2}>
                            <Form.Group controlId="toDate">
                                <Form.Label>To:</Form.Label>
                                <Form.Control type="date" defaultValue="2024-11-20" />
                            </Form.Group>
                        </Col>

                        <Col md={2}>
                            <Form.Group controlId="billType">
                                <Form.Label>Bill Type</Form.Label>
                                <Form.Select>
                                    <option>--Select--</option>
                                    <option>Type 1</option>
                                    <option>Type 2</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col md={3}>
                            <Form.Group controlId="party">
                                <Form.Label>Party</Form.Label>
                                <Form.Control type="text" placeholder="Enter party name" />
                            </Form.Group>
                        </Col>

                        <Col md="auto" className="d-flex align-items-end">
                            <Button variant="outline-primary" className="me-2">
                                View
                            </Button>
                        </Col>

                        <Col md="auto" className="d-flex align-items-end">
                            <Button variant="primary">Print</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
    )
}

export default MultiplePrintingSearch
