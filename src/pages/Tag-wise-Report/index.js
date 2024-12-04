import React from "react";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { TagWiseFilter } from "../../components/travelCRM/Tag-wise-Report/TagWisefilter";
import { TagWiseList } from "../../components/travelCRM/Tag-wise-Report/TagWiseRportList";
const breadCrumbsTitle = {
    id:"1",
    title_1:"Tag Wise",
    path_1:"/tagwise",
    title_2:"View Tag Wise",
}

export default function TagWise(){
    return(
        <div>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <TagWiseFilter />
            <TagWiseList />
        </div>
    )
}