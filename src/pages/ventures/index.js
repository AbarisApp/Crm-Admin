import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import LookIn from "../../components/rems-status/LookIn";
import StanderLayout from "../../components/rems-status/StanderLayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import ReportTable from "../../components/rems-status/ReportTable";
import VarturesTable from "../../components/rems-status/VerturesTable";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import VenturesList from "./VentureList";

const breadCrumbsTitle = {
    id:"1",
    title_1:"Ventures",
    path_1:"/ventures",
    title_2:"View Ventures",
}
export default function Ventures(){
    return(
        <div>
            {/* <PSMunit title={"Ventures List"}/>
            <LookIn />
            <StanderLayout link={"/newventures"} title={"New Venture"}/>
            <AlphabeticFilter />
            <VarturesTable /> */}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <VenturesList />
        </div>
    )
}