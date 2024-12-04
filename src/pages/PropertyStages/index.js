import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import LookIn from "../../components/rems-status/LookIn";
import StanderLayout from "../../components/rems-status/StanderLayout";
import VarturesTable from "../../components/rems-status/VerturesTable";

export default function PropertyStages(){
    return(
        <div>
            <PSMunit title={"property Stages"}/>
            <LookIn />
            <StanderLayout title={"New Property Stages"} link={"/newpropertystages"}/>
            <VarturesTable />
        </div>
    )
}