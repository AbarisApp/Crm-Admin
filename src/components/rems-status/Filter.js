import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import CustomInputField from "../../common/CustomInputField";

export default function Filter() {
    return (
        <div>
            <h2 className="p-2 fs-4 border border-light rounded-0 py-1">Filter <FaCaretDown /></h2>
            <ul className="d-flex align-items-center p-2 gap-1 bg-light">
                <li>
                    <select className="py-2 w-100 px-4 border border-light">
                        <option>Alvin Tan</option>
                    </select>
                </li>
                <li>
                    <button className="btn btn-primary m-0 fs-5">Hide Details</button>
                </li>
                <li><button className="btn btn-primary m-0 fs-5">Customize</button></li>
                <li><button className="btn btn-primary m-0 fs-5">Save </button></li>
                <li><button className="btn btn-primary m-0 fs-5">Save As </button></li>
                <li><button className="btn btn-primary m-0 fs-5">Delete </button></li>
                <li>
                <select className="py-2 w-100 px-4 border border-light">
                        <option>Export to</option>
                    </select>
                </li>
                <li>
                    <CustomInputField type={"text"} 
                    placeholder={"search"}/>
                </li>
            </ul>
        </div>
    )
}