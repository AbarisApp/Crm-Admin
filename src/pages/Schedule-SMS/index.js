import React from "react";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { ScheduleSMSList } from "../../components/travelCRM/scheduleSms/ScheduleSmslist";

const breadCrumbsTitle = {
    id:"1",
    title_1:"Schedule SMS ",
    path_1:"/schedulesms-report",
    title_2:"View Schedule SMS ",
}
export default function ScheduleSMS(){
    return(
        <div>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ScheduleSMSList />
        </div>
    )
}