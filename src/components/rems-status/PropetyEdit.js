import React from "react";
import { Link } from "react-router-dom";

export default function PropertyEdit(){
    return(
        <div>
            <div className="p-1 bg-light d-flex justify-content-center">
                <ul className="d-flex gap-1">
                    <li>
                        <Link className="btn p-1 m-0 btn-primary fs-6 ">Edit</Link>
                    </li>
                    <li>
                        <Link className="btn p-1 m-0 btn-outline-primary fs-6">Clone</Link>
                    </li>
                    <li>
                        <Link className="btn p-1 m-0 btn-outline-primary fs-6">Delete</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}