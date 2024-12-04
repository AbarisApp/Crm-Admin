import React from "react";

export default function SaveCancle(){
    return(
        <div className="my-2 gap-2 p-1 d-flex align-items-center justify-content-center bg-light">
            <div>
                <button className="btn m-0 py-1 btn-primary fs-4">Save</button>
            </div>
            <div>
                <button className="btn m-0 py-1 btn-primary fs-4">Cancle</button>
            </div>
        </div>
    )
}