import React from "react";

export default function CardLabel(){
    return(
        <div className="pb-3 p-1 d-flex justify-content-between rounded bg-primary" style={{width : "250px"}}>
            <span className="text-white text-bold">Telemarketing</span>
            <span className="py-1 px-2 border border-white text-white fs-6">6</span>
        </div>
    )
}