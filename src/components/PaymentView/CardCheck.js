import React from "react";

export default function CardCheck({title , rate, subrate}){
    return(
        <div>
            <div className="rounded-2 p-0 ">
                <div className="rounded-2 p-0 border-dark border">
                    <div className="d-flex m-0 bg-dark p-2 justify-content-between align-items-center">
                        <label className="form-label text-white">{title}</label>
                        <input className="form-check-input" type="checkbox"/>
                    </div>
                    <p className="p-1 text-primary">{rate}</p>
                </div>
                {subrate && <p className="p-1 text-center border-danger border text-danger">{subrate}</p>}
            </div>
        </div> 
    )
}