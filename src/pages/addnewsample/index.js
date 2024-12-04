import React from "react";
import AddSimple from "../../components/order/addsimple";

export default function AddNewSimple(){
    return(
        <div className="p-4">
            <AddSimple title={"Add New Sample"} btnTitle={"sample List"} link={"/samplelist"} table={true}/>
        </div>
    )
}