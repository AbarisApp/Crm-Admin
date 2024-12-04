import React from "react";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import UpComingTravelFilter from "../../components/travelCRM/Upcoming-Travel/UpcomingtravelFilter";
import { UpComingTravelList } from "../../components/travelCRM/Upcoming-Travel/UpcomingTravelList";

const breadCrumbsTitle = {
    id:"1",
    title_1:"Lead Upcoming Travels ",
    path_1:"/upcomingtravelleadbooked",
    title_2:"View Upcoming Travels",
}
export default function UpComingTravel(){
    return(
        <div>
             <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
             <UpComingTravelFilter />
             <UpComingTravelList />
        </div>
    )
}