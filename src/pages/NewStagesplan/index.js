import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import StagesForm from "../../components/rems-status/NewForms/StageForm";
import StagesTable from "../../components/rems-status/NewForms/CreateStageTable";
import StagePlaneForm from "./StagePlaneForm";
export default function CreateStageplan(){
    return(
        <div>
            <PSMunit title={"Create Stages Plane"}/>
            {/* <SaveCancle /> */}
            {/* <StagesForm />
            <StagesTable /> */}
            <StagePlaneForm />
        </div>
    )
}