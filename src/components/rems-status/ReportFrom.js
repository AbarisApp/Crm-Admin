import React from "react";
import PSMunit from "./PSMunit";
import Filter from "./Filter";
import OpertunityName from "./OpertunityName";
import ReportTable from "./ReportTable";

export default function ReportForm(){
    return(
        <div>
            <PSMunit title={"Report"}/>
            <Filter />
            <OpertunityName />
        </div>
    )
}