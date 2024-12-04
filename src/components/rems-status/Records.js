import React from "react";
import { IoRecording } from "react-icons/io5";

export default function Records(){
    return(
        <div className=" d-flex justify-content-between px-2">
            <div>
                <div className="d-flex gap-2">
                <div className="d-flex exp-btn">
                <button className="text-light px-2">
                    <IoRecording />
                </button>
                <select className="fs-5 rounded-0 border-0 border-light">
                    <option>Units Status</option>
                </select>
            </div>
            <div className="d-flex exp-btn">
                <button className="text-light px-2">
                    <IoRecording />
                </button>
                <select className="fs-5 rounded-0 border-0 border-light">
                    <option>All Records</option>
                </select>
            </div>
                </div>
            </div>
            <div>
            <div className="d-flex gap-2">
                <div className="d-flex exp-btn">
                <button className="text-light px-2">
                    <IoRecording />
                </button>
                <select className="fs-5 rounded-0 border-0 border-light">
                    <option>Property</option>
                </select>
            </div>
            <div className="d-flex exp-btn">
                <button className="text-light px-2">
                    <IoRecording />
                </button>
                <select className="fs-5 rounded-0 border-0 border-light">
                    <option>Asc</option>
                </select>
            </div>
                </div>
            </div>
        </div>
    )
}