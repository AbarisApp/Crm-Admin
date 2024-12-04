import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import StanderLayout from "../../components/rems-status/StanderLayout";
import RecentItem from "../../components/rems-status/RecentItem";
import ListView from "../../components/rems-status/ListView";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import PropertyList from "./PropertyList";

const breadCrumbsTitle = {
    id:"1",
    title_1:"Property",
    path_1:"/property",
    title_2:"View Property",
}

export default function PropertyHome(){
    return(
        <div>
            {/* <PSMunit title={"Property Home"}/>
            <StanderLayout />
            <RecentItem />
            <ListView /> */}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PropertyList />
        </div>
    )
}