import React from "react";

export default function CheckBooking(){
    return(
        <div className="p-2 bg-light align-items-end gap-1 d-flex">
            <ul className="d-flex align-items-end gap-1">
                <li className=" text-center">
                    <label className="fs-6 m-0 d-block text-center">Ventures</label>
                    <select className="rounded-0 fs-6 border border-light">
                        <option >American to</option>
                    </select>
                </li>
                <li className="">
                <label className="fs-6 m-0 d-block text-center">Property</label>
                    <select className="rounded-0 fs-6 border border-light">
                        <option >At Duplex</option>
                    </select>
                </li>
                <li className="">
                <label className="fs-6 m-0 d-block text-center">Blocsk</label>
                    <select className="rounded-0 fs-6 border border-light">
                        <option >At-Block</option>
                    </select>
                </li>
                <li className="">
                <label className="fs-6 m-0 d-block text-center">Floors</label>
                    <select className="rounded-0 fs-6 border border-light">
                        <option >At-Floors</option>
                    </select>
                </li>
                <li className="">
                    <button className="py-2 px-1 m-0 btn fs-4 btn-success">Go</button>
                </li>
            </ul>
            <ul className="d-flex gap-1">
                <li className="d-flex align-items-center border gap-1 p-1">
                    <span className="fs-6 py-1 px-3 rounded-circle bg-primary">55</span>
                    <span className="fs-6">All</span>
                </li>
                <li className="d-flex align-items-center border gap-1 p-1">
                <span className="fs-6 py-1 px-3 rounded-circle bg-success">23</span>
                <span>Available</span>
                </li>
                <li className="d-flex align-items-center border gap-1 p-1">
                    <span className="fs-6 py-1 px-3 rounded-circle bg-warning">15</span>
                    <span className="fs-6">Reserved</span>
                </li>
                <li className="d-flex align-items-center border gap-1 p-1">
                <span className="fs-6 py-1 px-3 rounded-circle bg-danger">09</span>
                <span className="fs-6">Block</span>
                </li>
                <li className="d-flex align-items-center border gap-1 p-1">
                <span className="fs-6 py-1 px-3 rounded-circle bg-primary">12</span>
                <span className="fs-6">Corned</span>
                </li>
            </ul>
        </div>
    )
}