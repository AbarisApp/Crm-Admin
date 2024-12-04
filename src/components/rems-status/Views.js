import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Views(){
    return(
        <div className="my-2 p-2 d-flex align-items-center justify-content-between bg-light">
            <div className="d-flex align-items-center gap-2">
                <label className="fs-5">View :</label>
                <select className="fs-5 border-light">
                    <option>Standerd Layout</option>
                </select>
            </div>
            <div className="d-flex exp-btn">
                    <button className="text-light px-2">
                    <IoSearch />
                    </button>
                    <input className="search px-4" placeholder="Search...."/>
            </div>
        </div>
    )
}