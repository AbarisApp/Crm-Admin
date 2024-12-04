import React from 'react'
import { Form, Row, Col, Button, Tab, Tabs } from "react-bootstrap";
function HotelVouchers() {
    return (
        <section className='m-4'>
            <div className="card">
                {/* Tabs for Voucher and View Voucher */}
                <Form>
                    {/* Radio Buttons for Hotel, Cruise, Taxi */}
                    <Form.Group className="mb-3">
                        <Form.Check inline type="radio" label="Hotel" name="type" />
                        <Form.Check inline type="radio" label="Cruise" name="type" />
                        <Form.Check inline type="radio" label="Taxi" name="type" />
                    </Form.Group>

                    <Row className="g-3">
                        {/* Voucher No and Voucher Date */}
                        <Col md={3}>
                            <Form.Group>
                                <Form.Label>Voucher No</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group>
                                <Form.Label>Voucher Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                        {/* Party and Contact */}
                        <Col md={3}>
                            <Form.Group>
                                <Form.Label>Party</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group>
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        {/* Guest, Nationality, Booked By */}
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Guest</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Nationality</Form.Label>
                                <Form.Control type="text" defaultValue="INDIAN" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Booked By</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        {/* Adults, Child, Infant */}
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Adults</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Child</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Infant</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        <div className='col-xl-5'>
                            <div className='card my-3'>
                                {/* Hotel, Address, Supplier */}
                                <Col md={12}>
                                    <Form.Group>
                                        <Form.Label>Hotel</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control as="textarea" rows={2} />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group>
                                        <Form.Label>Supplier</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </div>
                        </div>
                        <div className='col-xl-7'>
                            <div className='card my-3'>
                                <Col md={12}>
                                    <Form.Group>
                                        <Form.Label>Room Type</Form.Label>
                                        <Form.Select>
                                            <option>DOUBLE</option>
                                            <option>SINGLE</option>
                                            <option>TRIPLE</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group>
                                        <Form.Label>No of Room</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group>
                                        <Form.Label>Confirmation Number</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </div>
                        </div>
                    </Row>
                    <Row className="g-3">
                        {/* Check In, Check Out, Meal Plan */}
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Check In</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Check Out</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Meal Plan</Form.Label>
                                <Form.Select>
                                    <option>All Meals</option>
                                    <option>Breakfast Only</option>
                                    <option>No Meals</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Payment of Room Rent</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Payment of Extra</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Instruction:</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Terms and Conditions:</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className='text-end'>
                            <button className='btn btn-sm btn-outline-primary'>Save</button>
                            <button className='btn btn-sm btn-outline-primary'>Close</button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </section>
    )
}

export default HotelVouchers
