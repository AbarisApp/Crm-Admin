import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import LookIn from "../../components/rems-status/LookIn";
import StanderLayout from "../../components/rems-status/StanderLayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import VarturesTable from "../../components/rems-status/VerturesTable";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import BlockList from "./Blocklist";
const breadCrumbsTitle = {
    id:"1",
    title_1:"Block",
    path_1:"/block",
    title_2:"View Block",
}

export default function Block(){
    return(
        <div>
            {/* <PSMunit title={"Block List"}/>
            <LookIn />
            <StanderLayout link={"newblock"}/>
            <AlphabeticFilter />
            <VarturesTable /> */}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BlockList />
        </div>
    )
}  