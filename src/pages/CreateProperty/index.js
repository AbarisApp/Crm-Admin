import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import PropertyForm from "./PropertyForm";

export default function CreateProperty(){
    return(
        <div>
            <PSMunit title={"new Product"}/>
            {/* <SaveCancle /> */}
            <PropertyForm />
        </div>
    )
}