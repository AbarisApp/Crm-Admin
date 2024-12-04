import React from "react";
import Vacant from "./Vacant";

export default function RecordsFiles(){
    return(
        <div className="p-2">
            <div className="row">
                <div className="col-3">
                    <Vacant bgColor={"bg-danger"} title={"Vacant"}/>
                </div>
                <div className="col-3">
                    <Vacant bgColor={"bg-success"} title={"Occupied"}/>
                </div>
                <div className="col-3">
                    <Vacant bgColor={"bg-primary"} title={"under offer"}/>
                </div> 
                <div className="col-3">
                    <Vacant bgColor={"bg-warning"} title={"Booked"}/>
                </div>
            </div>
        </div>
    )
}