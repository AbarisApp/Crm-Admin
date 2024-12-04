import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import InvoiceTabList from './tablist/InvoiceTabList'
import CreditNoteList from './tablist/CreditNoteList'
import Voucherlist from './tablist/Voucherlist'

function MultiplePrintingsTabs() {
    return (
        <>
            <Tabs
                defaultActiveKey="Search Credit Notes"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="invoices" title="invoices">
                    <InvoiceTabList />
                </Tab>
                <Tab eventKey=" Credit Notes" title=" Credit Notes">
                    <CreditNoteList />
                </Tab>
                <Tab eventKey="Vouchers" title="Vouchers">
                    <Voucherlist/>
                </Tab>
            </Tabs>
        </>
    )
}

export default MultiplePrintingsTabs
