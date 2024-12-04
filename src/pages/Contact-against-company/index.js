import React from "react";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import ContactSgainstCompanyFilter from "../../components/travelCRM/Contact-against-company/ConatactAginstCompanyFilter";
import { ConatactAginstCompanyList } from "../../components/travelCRM/Contact-against-company/ContactAgainstList";

const breadCrumbsTitle = {
    id:"1",
    title_1:"Contacts report",
    path_1:"/no-reminderleadlist",
    title_2:"View Contacts report",
}

export default function ContactSgainstCompany(){
    return(
        <div>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ContactSgainstCompanyFilter />
            <ConatactAginstCompanyList />
        </div>
    )
}