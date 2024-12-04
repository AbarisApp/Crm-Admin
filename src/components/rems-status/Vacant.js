import React from "react";

export default function Vacant({bgColor, title}){
    return(
        <div className="p-1">
            <ul>
                <li className={`d-flex align-items-center justify-content-between p-2 ${bgColor}`}>
                    <span className="fs-5 text-black">{title}</span>
                    <span  className="p-2 px-3 bg-light rounded-circle">5</span>
                </li>
                <li className="d-flex gap-3 border rounded-0 align-items-center border-light">
                    <div className="rounded-circle p-2 fs-4 px-3 bg-danger ">
                        3
                    </div>
                    <ul>
                        <li className="fs-6 text-primary">301-1-1103</li>
                        <li className="fs-6 text-Secondary">301-1-1103</li>
                        <li className="fs-6 text-light">Vacant</li>
                    </ul>
                </li>
                <li className="d-flex gap-3 border rounded-0  align-items-center border-light">
                    <div className="rounded-circle p-2 fs-4 px-3 bg-success ">
                        3
                    </div>
                    <ul>
                        <li className="fs-6 text-primary">301-1-1103</li>
                        <li className="fs-6 text-Secondary">301-1-1103</li>
                        <li className="fs-6 text-light">Vacant</li>
                    </ul>
                </li>
                <li className="d-flex gap-3 border rounded-0  align-items-center border-light">
                    <div className="rounded-circle p-2 fs-4 px-3 bg-primary ">
                        3
                    </div>
                    <ul>
                        <li className="fs-6 text-primary">301-1-1103</li>
                        <li className="fs-6 text-Secondary">301-1-1103</li>
                        <li className="fs-6 text-light">Vacant</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}