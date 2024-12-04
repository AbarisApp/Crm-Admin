import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import UnitForm from "./unitForm";


export default function CreatePropertyunit(){
    return(
        <div>
        <PSMunit title={"Create Property unit"}/>
        {/* <SaveCancle /> */}
        {/* <UnitForm /> */}
        <UnitForm />
    </div>
    )
}