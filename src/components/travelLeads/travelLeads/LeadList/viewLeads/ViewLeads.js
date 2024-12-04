
import React from 'react'
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { Button, Tab, Tabs } from 'react-bootstrap';
import { Form, Link, useParams } from 'react-router-dom';
import About from './about/About';
import TravelQuoteListComp from './travelQuoteListComp/TravelQuoteListComp';
import TravellerDetail from './traveller/TravellerDetail';
import BillingDetail from './Billing/Billing';
import Ladger from './ladger/Ladger';
import Contacts from './contacts/Contacts';
import ServiceRequest from './serviceRequest/ServiceRequest';
import LeadReminder from './reminder/Reminder';
import TravelNote from './travelNote/TravelNote';
import TravelFiles from './travelFiles/TravelFiles';

const ViewLeads = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: 'View Lead',
        path_2: ``
    };

    const paramsAll = useParams()
    // console.log(paramsAll);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">View Lead</h4>
                                <div className=" text-right">
                                    <Button variant="secondary" className="mr-2">Edit</Button>
                                    <Button variant="primary" className="mr-2">Send Email</Button>
                                    <Button variant="primary" className="mr-2">WhatsApp</Button>
                                    <Button variant="primary" className="mr-2">WhatsApp Template</Button>
                                    <Button variant="primary">Branch</Button>
                                </div>
                            </div>
                            <form className="tbl-captionn tbl-captionn-lead">
                                <div className="row tab-color-change">
                                    <Tabs defaultActiveKey="about" id="lead-tabs" className="mb-3">
                                        <Tab eventKey="about" title="About">
                                            <About />
                                        </Tab>
                                        <Tab eventKey="Ledger" title="Ledger">
                                            <Ladger />
                                        </Tab>
                                        <Tab eventKey="Contacts" title="Contacts">
                                            <Contacts paramsAll={paramsAll} />
                                        </Tab>
                                        <Tab eventKey="Service Request" title="Service Request">
                                            <ServiceRequest paramsAll={paramsAll} />
                                        </Tab>
                                        {/* <Tab eventKey="Keep In Touch" title="Keep In Touch">
                                            <div className="p-3">
                                                <p>Keep In Touch</p>
                                            </div>
                                        </Tab> */}
                                        <Tab eventKey="Tasks" title="Tasks">
                                            <div className="p-3">
                                                <p>Tasks</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Tickets" title="Tickets">
                                            <div className="p-3">
                                                <p>Tickets</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Vault" title="Vault">
                                            <div className="p-3">
                                                <p>Vault</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Map" title="Map">
                                            <div className="p-3">
                                                <p>Map</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Expenses" title="Expenses">
                                            <div className="p-3">
                                                <p>Expenses</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="history" title="History">
                                            <div className="p-3">
                                                <p>History Content</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="reminders" title="Reminders">
                                            <LeadReminder />
                                        </Tab>
                                        <Tab eventKey="Files" title="Files">
                                            <TravelFiles />
                                        </Tab>
                                        <Tab eventKey="Notes" title="Notes">
                                            <TravelNote />
                                        </Tab>
                                        <Tab eventKey="Traveller" title="Traveller">
                                            <TravellerDetail />
                                        </Tab>
                                        <Tab eventKey="FollowUp" title="Follow Up">
                                            <div className="p-3">
                                                <p>Follow Up</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Quote" title="Quote">
                                            <TravelQuoteListComp />
                                        </Tab>
                                        <Tab eventKey="Suppliers" title="Suppliers">
                                            <div className="p-3">
                                                <p>Suppliers</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Billing" title="Billing">
                                            <BillingDetail />
                                        </Tab>
                                    </Tabs>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side-buttons position-fixed" style={{ top: "408px", right: "-99px" }}>
                <Link to={'#'} className="btn btn-info mb-2 mb-2">Flight Quote</Link>
                <Link to="/travel-Vouchers-list" className="btn btn-info mb-2">Voucher</Link>
                <Link to={'/travel-invoice-list'} className="btn btn-info mb-2">Invoice</Link>
            </div>
        </>
    )
}

export default ViewLeads