import React from "react";
import Views from "./Views";
import PSMunit from "./PSMunit";
import SaveCancle from "./SaveCancle";
import FormPMSenquary from "./FormPMSenquary";

export default function Editpms(){
    return(
        <div>
            <PSMunit title={"Edit PMS Enquiry"}/>
            <SaveCancle />
            <FormPMSenquary />
        </div>
    )
}