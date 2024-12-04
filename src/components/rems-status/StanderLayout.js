import React from "react";
import { Link } from "react-router-dom";

export default function StanderLayout({link , title}){
    return(
        <div className="d-flex p-2 justify-content-between bg-light border rounded-0">
            <ul className="d-flex align-items-center gap-1"> 
                <li className="d-flex gap-1">
                    <label className="m-0 fs-6">View :</label>
                    <select type="text" className="border">
                        <option>Stander Layout</option>
                    </select>
                </li>
                <li>
                    <button className="fs-6 p-1 btn btn-primary">Go</button>
                </li>
                <li>
                    <Link className="fs-5 text-primary">Edit</Link>
                </li>
                <li className="text-black">|</li>
                <li>
                    <Link className="fs-5 text-primary">New</Link>
                </li>
            </ul>
            <div>
                <Link to={link} className="btn btn-primary fs-5 p-1"> {title} </Link>
            </div>
            <div>
                <button className="btn btn-info d-flex gap-1 align-items-center fs-5 p-1"> 
                    <span>Active</span>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div>
            <div>
                <ul className="d-flex">
                    <li className="border rounded-0 p-1 fs-6">
                        <i class="fa-solid fa-bars"></i>
                    </li>
                    <li className="border rounded-0 p-1 fs-6">
                    <i class="fa-solid fa-bars-staggered"></i>
                    </li>
                    <li className="border rounded-0 p-1 fs-6">
                    <i class="fa-solid fa-timeline"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}