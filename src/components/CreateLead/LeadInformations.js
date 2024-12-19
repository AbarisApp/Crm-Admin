
import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { getAllAssign, getleadMedium, getLeadStatus, getLeadSubStatus, getsource, getTravelAllCountry } from '../../api/login/Login';

function LeadInformations({ handleChange, formData }) {

    const [data, setData] = useState({
        assignData: [],
        sourceDara:[],
        leadMediumData:[],
        leadStatusData:[],
        countryData:[],
        leadSubStatusData:[],
    })

    const getValues = async () => {
        const val = { ...data }
        try {
            const assign = await getAllAssign()
            val.assignData = assign?.data
            
            const source = await getsource()
            val.sourceDara = source?.data

            const status = await getLeadStatus()
            val.leadStatusData = status?.data

            const substatus = await getLeadSubStatus()
            val.leadSubStatusData = substatus?.data

            const leadMedium = await getleadMedium()
            val.leadMediumData = leadMedium?.data

            const country = await getTravelAllCountry()
            val.countryData = country?.data

        } catch (error) {

        }
        setData(val)
    }

    useEffect(() => {
        getValues()
    }, [])

    return (
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Row>
                            <Col md={3}>
                                <Form.Select
                                    name="nameTitle"
                                    value={formData.nameTitle}
                                    onChange={handleChange}
                                >
                                    <option>Mr.</option>
                                    <option>Ms.</option>
                                    <option>Mrs.</option>
                                </Form.Select>
                            </Col>
                            <Col md={9}>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Assigned To</Form.Label>

                        <Form.Select
                            name="assignedTo"
                            value={formData.assignedTo}
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            {data?.assignData?.map((item) => {
                                return <option value={item._id}>{item?.name}</option>
                            })}

                            {/* <option>assignedTo 2</option> */}
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Phone</Form.Label>
                        <Row>
                            <Col md={3}>
                                <Form.Control
                                    as="select"
                                    value="+91"
                                // disabled
                                >
                                    <option value="+91">+91</option>
                                </Form.Control>
                            </Col>
                            <Col md={9}>
                                <Form.Control
                                    type="text"
                                    name="mobilePhone"
                                    value={formData.mobilePhone}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Alternative Phone</Form.Label>
                        <Row>
                            <Col md={3}>
                                <Form.Control
                                    as="select"
                                    value="+91"
                                // disabled
                                >
                                    <option value="+91">+91</option>
                                </Form.Control>
                            </Col>
                            <Col md={9}>
                                <Form.Control
                                    type="text"
                                    name="alternativePhone"
                                    value={formData.alternativePhone}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                


                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            {data?.countryData?.map((item) => {
                                return <option value={item._id}>{item?.name}</option>
                            })}
                            {/* Add other options */}
                        </Form.Select>
                      
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>



                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Secondary Mail</Form.Label>
                        <Form.Control
                            type="email"
                            name="secondaryMail"
                            value={formData.secondaryMail}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Lead Source</Form.Label>
                        <Form.Select
                            name="leadSource"
                            value={formData.leadSource}
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            {data?.sourceDara?.map((item) => {
                                return <option value={item._id}>{item?.name}</option>
                            })}
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Lead Medium</Form.Label>
                        <Form.Select
                            name="leadMedium"
                            value={formData.leadMedium}
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            {data?.leadMediumData?.map((item) => {
                                return <option value={item._id}>{item?.name}</option>
                            })}
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Lead Status</Form.Label>
                        <Form.Select
                            name="leadStatus"
                            value={formData.leadStatus}
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            {data?.leadStatusData?.map((item) => {
                                return <option value={item._id}>{item?.name}</option>
                            })}
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Lead Sub Status</Form.Label>
                        <Form.Select
                            name="leadSubStatus"
                            value={formData.leadSubStatus}
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            {data?.leadSubStatusData?.map((item) => {
                                return <option value={item._id}>{item?.name}</option>
                            })}
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Follow Up On</Form.Label>
                        <Form.Control
                            type="date"
                            name="followUpOn"
                            value={formData.followUpOn}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Re-Engagement</Form.Label>
                        <Form.Select
                            name="reEngagement"
                            value={formData.reEngagement}
                            onChange={handleChange}
                        >
                            <option>Select An Option</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                            {/* Add other options */}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>CP Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="cpName"
                            value={formData.cpName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>

        </Form>
    );
}

export default LeadInformations;
