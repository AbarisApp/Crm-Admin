import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import FormCompaigs from "../../components/rems-status/FormCompaigs";

export default function NEwCampaigs(){
    return(
        <div>
            <PSMunit title={"New Campaign"}/>
            <SaveCancle />
            <FormCompaigs />
        </div>
    )
}