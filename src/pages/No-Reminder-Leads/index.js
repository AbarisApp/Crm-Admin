import React from "react";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import NoReminderLeadFilter from "../../components/travelCRM/No-Reminder-Leads/NoReminderleadFilter";
import { NoReminderLeadList } from "../../components/travelCRM/No-Reminder-Leads/NoReminderLeadList";
const breadCrumbsTitle = {
    id:"1",
    title_1:"Leads",
    path_1:"/no-reminderleadlist",
    title_2:"View Leads",
}
export default function NoReminderLead(){
    return(
        <div>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <NoReminderLeadFilter />
            <NoReminderLeadList />
        </div>
    )
}