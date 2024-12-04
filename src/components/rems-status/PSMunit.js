import React from "react";
import { GiThermometerScale } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function PSMunit({title}){
    return(
        <div className="p-2">
            <ul className="d-flex gap-2 align-items-center">
                <li className="p-2 bg-light border rounded-1"><GiThermometerScale fontSize={20}/></li>
                <li className="p-2 bold fs-5 text-black ">{title}</li>
                <li className="fs-5">|</li>
                <li className="fs-5">
                    <Link className="">Back</Link>
                    </li>
            </ul>
        </div>
    )
} 