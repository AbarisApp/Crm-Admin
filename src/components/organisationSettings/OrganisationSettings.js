import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import ModuleSettings from './moduleSettings/ModuleSettings'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function OrganisationSettings() {
    const breadCrumbsTitle = {
        id: "121231",
        title_1: "Organisation Settings",
        title_2: "Module Settings",
    }
    return (
        <>
            {/* <Tabs
                defaultActiveKey="Users"
                id="uncontrolled-tab-example"
            >

                <Tab eventKey="Users" title="Users">
                    
                </Tab>
                <Tab eventKey="Role" title="Role">
                    
                </Tab>
                <Tab eventKey="Basic Details" title="Basic Details">
                    
                </Tab>

            </Tabs> */}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ModuleSettings />


        </>
    )
}

export default OrganisationSettings