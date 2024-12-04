import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import LookIn from "../../components/rems-status/LookIn";
import StanderLayout from "../../components/rems-status/StanderLayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import VarturesTable from "../../components/rems-status/VerturesTable";

export default function Floor(){
    return(
        <div>
            <PSMunit title={"Floors List"}/>
            <LookIn />
            <StanderLayout link={"/newfloor"} title={"New Floor"}/>
            <AlphabeticFilter />
            <VarturesTable />
        </div>
    )
}