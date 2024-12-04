import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMapsHomeWork } from "react-icons/md";

export default function FilterShort(){
    return(
        <div className="d-flex justify-content-end rounded-0 align-items-center p-2 bg-light border">
            <ul className="d-flex align-items-center gap-1">
                <li className="d-flex align-items-center gap-1 fs-5">
                <MdOutlineMapsHomeWork />
                    <Link to="/" className="text-primary fs-5">
                    American
                </Link></li> 
                <li className="d-flex align-items-center gap-1 fs-5">
                    <MdOutlineMapsHomeWork />
                    <Link to="/" className="text-primary fs-5">
                    American
                </Link></li>
                <li>
                    <label className="m-0 fs-6">Shot by :</label>
                    <input type="text" className="border"/>
                </li>
                <li>
                <label className="m-0 fs-6">Unit :</label>
                <input type="text" className="border"/>
                </li>
                <li>
                    <button className="btn p-1 btn-primary">Go</button>
                </li>
            </ul>
        </div>
    )
}