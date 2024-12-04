import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import LookIn from "../../components/rems-status/LookIn";
import StanderLayout from "../../components/rems-status/StanderLayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import StageplaneList from "./StageplaneList";
const breadCrumbsTitle = {
    id:"1",
    title_1:"Property Stage Plane",
    path_1:"/propertystageplane",
    title_2:"View Property Stage Plane",
}

export default function PropertyStagePlane(){
    return(
        <div>
                {/* <PSMunit title={"Property StageS Plane"}/>
                <LookIn />
                <StanderLayout title={"New property Stages Plane"}/>
                <AlphabeticFilter /> */}
                <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
                <StageplaneList />
        </div>
    )
}