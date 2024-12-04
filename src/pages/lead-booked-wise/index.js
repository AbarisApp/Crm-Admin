import React from "react";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { LeadFilter } from "../../components/travelCRM/lead-booked-wise/LeadBookingFilter";
import { LeadBookingReportList } from "../../components/travelCRM/lead-booked-wise/LeadBookingReportlist";
const breadCrumbsTitle = {
    id:"1",
    title_1:"Lead Booked Report",
    path_1:"/leadbookedreport",
    title_2:"View Lead Booked Report",
}
export default function LeadBookingReport(){
    return(
        <div>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <LeadFilter />
            <LeadBookingReportList />
        </div>
    )
}