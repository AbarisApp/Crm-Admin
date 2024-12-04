import React from "react";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import LeadStatusChangeFilter from "../../components/travelCRM/lead-status-change/leadStatusFilter";
import { LeadStatusList } from "../../components/travelCRM/lead-status-change/LeadStatusChangeList";

const breadCrumbsTitle = {
    id:"1",
    title_1:"Lead Status ",
    path_1:"/leadstatus-change",
    title_2:"View Lead Status",
}
export default function LeadStatusChange(){
    return(
        <div>
           <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
           <LeadStatusChangeFilter />
           <LeadStatusList />
        </div>
    )
}