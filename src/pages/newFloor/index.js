import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import VenturesForm from "../../components/rems-status/VenturesForm";

export default function NewFloor(){
    return(
        <div>
            <PSMunit title={"New Floor"}/>
            <SaveCancle />
            <VenturesForm />
        </div>
    )
}