import React from 'react';
import { Container, Row, Col, Card, Nav, Table, Badge, Breadcrumb } from 'react-bootstrap';

const VehicleDetails = () => {
    return (
        <Container fluid className="py-3">
            {/* Header */}
            <Row className="d-flex justify-content-between align-items-center mb-4">
                <Col>
                    <h2>Vehicle Details</h2>
                </Col>
                <Col>
                    <Breadcrumb className="float-end">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Vehicle Details</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            <Row>
                {/* Sidebar */}
                <Col md={3}>
                    <Card className="mb-3">
                        <Card.Body className="text-center">
                            <h4>Asdk</h4>
                            <p className="text-muted">MOTORCYCLE</p>
                            <Badge bg="success">Active</Badge>
                        </Card.Body>
                        <Card.Body className="p-0">
                            <Table borderless className="mb-0">
                                <tbody>
                                    <tr>
                                        <td>Bookings</td>
                                        <td className="text-end">0</td>
                                    </tr>
                                    <tr>
                                        <td>Geofence</td>
                                        <td className="text-end">0</td>
                                    </tr>
                                    <tr>
                                        <td>Notifications</td>
                                        <td className="text-end">0</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Main Content Area */}
                <Col md={9}>
                    {/* Tabs */}
                    <Nav variant="tabs" defaultActiveKey="#basic-info">
                        <Nav.Item>
                            <Nav.Link href="#basic-info" active>Basic Info</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#bookings">Bookings</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#geofence">Geofence</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#income-expense">Income & Expense</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {/* Basic Info Table */}
                    <Table bordered className="mt-3">
                        <tbody>
                            <tr>
                                <th>Registration No</th>
                                <td>rahulbd</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>asdk</td>
                            </tr>
                            <tr>
                                <th>Model</th>
                                <td>kj;</td>
                            </tr>
                            <tr>
                                <th>Chassis No.</th>
                                <td>kk;lk</td>
                            </tr>
                            <tr>
                                <th>Engine No.</th>
                                <td>kj;l</td>
                            </tr>
                            <tr>
                                <th>Manufactured By</th>
                                <td>kklj</td>
                            </tr>
                            <tr>
                                <th>Type</th>
                                <td>MOTORCYCLE</td>
                            </tr>
                            <tr>
                                <th>Mileage/Litre</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>API URL</th>
                                <td>https://codeforts.com/vms/api</td>
                            </tr>
                            <tr>
                                <th>GPS API Username</th>
                                <td>rahulbd</td>
                            </tr>
                            <tr>
                                <th>GPS API Password</th>
                                <td>346725</td>
                            </tr>
                            <tr>
                                <th>Created Date</th>
                                <td>2024-09-16 02:02:43</td>
                            </tr>
                            <tr>
                                <th>Modified Date</th>
                                <td>2024-09-16 14:03:35</td>
                            </tr>
                            <tr>
                                <th>Document</th>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Footer */}
            <footer className="mt-5 text-center">
                <Row className="justify-content-between">
                    <Col md={6} className="text-start">
                        <p>Developed by <a href="#">Codeforts</a>.</p>
                    </Col>
                    <Col md={6} className="text-end">
                        <p>Version 4.0</p>
                    </Col>
                </Row>
            </footer>
        </Container>
    );
};

export default VehicleDetails;
