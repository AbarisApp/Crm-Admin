import React from "react";
export default function NextPage(){
    return(
        <div className="p-6 d-flex align-items-center justify-between">
            <p>Showing 1 to 5 of 5 entries</p>
            <div className="d-flex exp-btn">
                    <button className="px-2">
                        Previous
                    </button>
                    <div className="num">
                        1
                    </div>
                    <button className="px-2">
                        Next
                    </button>
                </div>
        </div>
    )
}