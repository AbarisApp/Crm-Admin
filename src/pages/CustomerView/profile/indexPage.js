import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { FaUser, FaAddressBook, FaHandshake, FaStickyNote, FaFileContract, FaFileInvoiceDollar, FaMoneyBillWave, FaProjectDiagram, FaTasks, FaTicketAlt, FaFile, FaLock, FaBell, FaMapMarkedAlt } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { getLeadDetail } from '../../../api/login/Login';

function MainCustomerView() {
    const params = useParams();
    const [dataUser, setDataUser] = useState([])
    const getData = async () => {
        const res = await getLeadDetail(params.id)
        setDataUser(res.data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Container fluid className="px-3">
            <h5 className="card m-2">Hello Test Admin. You are added as admin to this customer.</h5>
            <div className="table-responsive active-projects style-1">

                <div className="tbl-caption tbl-caption-2 d-block p-2" style={{ marginTop: "15px" }}>
                    <h5 className="heading">Name : {dataUser?.name}</h5>
                    <h5 className="heading">Mobile  : {dataUser?.mobile}</h5>
                    <h5 className="heading">Email : {dataUser?.email}</h5>
                </div>
            </div>
            <Row>
                {/* Sidebar */}
                <Col md={3} lg={2} className="card p-0 main-sidebar-cs d-none d-md-block">
                    <ul className="list-unstyled mt-3">
                        <li><Link to={`/customer-view/${params.id}`}><FaUser className="icon-sideb" /> Profile</Link></li>
                        <li><Link to={`/customer-view/${params.id}/ledgers`}><FaUser className="icon-sideb" /> Ledgers</Link></li>
                        <li><Link to={`/customer-view/${params.id}/quotation`}><FaLock className="icon-sideb" /> Quotation</Link></li>
                        <li><Link to={`/customer-view/${params.id}/contacts`}><FaAddressBook className="icon-sideb" /> Contacts</Link></li>
                        <li><Link to={`/customer-view/${params.id}/service`}><FaAddressBook className="icon-sideb" /> Service Request</Link></li>
                        <li><Link to={`/customer-view/${params.id}/keep-in-touch`}><FaHandshake className="icon-sideb" /> Keep In Touch</Link></li>
                        <li><Link to={`/customer-view/${params.id}/notes`}><FaStickyNote className="icon-sideb" /> Notes</Link></li>
                        <li><Link to={`/customer-view/${params.id}/proposals-view`}><FaFileContract className="icon-sideb" /> Proposals</Link></li>
                        <li><Link to={`/customer-view/${params.id}/estimates-view`}><FaFileInvoiceDollar className="icon-sideb" /> Estimates</Link></li>
                        <li><Link to={`/customer-view/${params.id}/expenses-view`}><FaMoneyBillWave className="icon-sideb" /> Expenses</Link></li>
                        <li><Link to={`/customer-view/${params.id}/projects-view`}><FaProjectDiagram className="icon-sideb" /> Projects</Link></li>
                        <li><Link to={`/customer-view/${params.id}/tasks-view`}><FaTasks className="icon-sideb" /> Tasks</Link></li>
                        <li><Link to={`/customer-view/${params.id}/tickets-view`}><FaTicketAlt className="icon-sideb" /> Tickets</Link></li>
                        <li><Link to={`/customer-view/${params.id}/files-view`}><FaFile className="icon-sideb" /> Files</Link></li>
                        <li><Link to={`/customer-view/${params.id}/vault-view`}><FaLock className="icon-sideb" /> Vault</Link></li>
                        <li><Link to={`/customer-view/${params.id}/reminders-view`}><FaBell className="icon-sideb" /> Reminders</Link></li>
                        <li><Link to={`/customer-view/${params.id}/map-view`}><FaMapMarkedAlt className="icon-sideb" /> Map</Link></li>
                    </ul>
                </Col>

                {/* Main content area */}
                <Col xs={12} md={9} lg={10} className="mt-3 mt-md-0">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
}

export default MainCustomerView;
