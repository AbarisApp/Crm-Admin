import React from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PiFilePdfBold } from "react-icons/pi";
import { PiFileCsvFill } from "react-icons/pi";
import { PiFileXls } from "react-icons/pi";
import { FaPrint } from "react-icons/fa";

export default function ListType(){
    return(
        <div className="d-flex justify-content-between">
            <div className="d-flex gap-3">
            <div className="d-flex gap-2">
                <select className="py-2 px-4 limit">
                    <option>Per Page-10</option>
                    <option>Per Page-30</option>
                    <option>Per Page-50</option>
                    <option>Per Page-100</option>
                </select>
                </div>
                <div className="d-flex exp-btn">
                    <button className="p-2">
                    <IoSearch />
                    </button>
                    <input className="search py-2 px-4" placeholder="Search...."/>
                </div>
            </div>
            <ul className="d-flex gap-1 px-3">
                    <li className="">
                        <Link to="/" className="p-2"><PiFilePdfBold fontSize={20}/></Link>
                    </li>
                    <li className="">
                        <Link to="/" className="p-2"><PiFileCsvFill fontSize={20}/></Link>
                    </li>
                    <li className="">
                        <Link to="/" className="p-2"><PiFileXls fontSize={20}/></Link>
                    </li>
                    <li className="">
                        <Link to="/" className="p-2"><FaPrint fontSize={20}/></Link>
                    </li>
            </ul>
        </div>
    )
}