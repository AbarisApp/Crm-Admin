import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import VenturesForm from "../../components/rems-status/VenturesForm";
import BlockForm from "./BlockForm";

export default function NewBlock(){
    return(
        <div>
            <PSMunit title={"New Block"} />
            {/* <SaveCancle /> */}
            <BlockForm />
        </div>
    )
}