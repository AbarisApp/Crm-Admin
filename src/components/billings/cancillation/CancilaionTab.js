import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import CreditNote from './crediteNote/CreditNote'
import { Tab, Tabs } from 'react-bootstrap'
import SearchCrditNotes from './searchCreditNotes/SearchCrditNotes'

function CancilaionTab() {
    const breadCrumbsTitle = {
        title_1: "Cancellation"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <section className='card m-4'>
                <Tabs
                    defaultActiveKey="Search Credit Note"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="Credit Note" title="Credit Note">
                        <CreditNote />
                    </Tab>
                    <Tab eventKey="Search Credit Note" title="Search Credit Note">
                        <SearchCrditNotes />
                    </Tab>
                </Tabs>
            </section>
        </>

    )
}

export default CancilaionTab