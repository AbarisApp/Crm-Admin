import React from "react";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import BranchWiseFilter from "../../components/travelCRM/Branch-Wise-Report/BranchWiseFilter";
import { BranchWiseList } from "../../components/travelCRM/Branch-Wise-Report/BranchWishelist";

const breadCrumbsTitle = {
    id:"1",
    title_1:"Branch report",
    path_1:"/branch-report",
    title_2:"View Branch Report",
}
export default function BranchWiseReport(){
    return(
        <div>
             <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
             <BranchWiseFilter />
             <BranchWiseList />
        </div>
    )
}