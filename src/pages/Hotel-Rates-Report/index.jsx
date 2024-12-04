import React from "react";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { HotelRatesReportList } from "../../components/travelCRM/hotelratesreport/HotelRatesReportList";
const breadCrumbsTitle = {
    id:"1",
    title_1:"Rates Report",
    path_1:"/hotelratesreport",
    title_2:"View Rates Report",
}
export default function HotelRatesReport(){
    return(
        <div>
             <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
             <HotelRatesReportList />
        </div>
    )
}