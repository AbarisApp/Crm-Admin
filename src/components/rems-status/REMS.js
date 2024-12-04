import React from "react";
import PSMunit from "./PSMunit";
import Views from "./Views";
import Records from "./Records";
import RecordsFiles from "./RecordsFile";

export default function REMS(){
    return(
        <div className="">
            <PSMunit title={"PMS Units"}/>
            <Views />
            <Records />
            <RecordsFiles />
        </div>
    )
}