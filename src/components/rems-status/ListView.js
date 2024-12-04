import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function ListView(){
    return(
        <div className="mt-3 p-3"> 
            <div className="d-flex gap-2">
                <div className="w-100">
                    <h1 className="p-1 bg-light fs-6">List View</h1>
                    <ul >
                        <li className="d-flex align-items-center gap-2"><FaChevronRight /> <Link className="text-primary fs-5">All Campaigns</Link></li>
                        <li className="d-flex align-items-center gap-2"><FaChevronRight /> <Link className="text-primary fs-5">All Active Campaigns</Link></li>
                        <li className="d-flex align-items-center gap-2"><FaChevronRight /> <Link className="text-primary fs-5">My Active Campaigns</Link></li>
                    </ul>
                </div>
                <div className="w-100">
                    <h1 className="p-1 bg-light fs-6">Report</h1>
                    <ul >
                        <li className="d-flex align-items-center gap-2"><FaChevronRight /> <Link className="text-primary fs-5">Campaign ROI Analysis Report</Link></li>
                        <li className="d-flex align-items-center gap-2"><FaChevronRight /> <Link className="text-primary fs-5">Campaign Revenue Report</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}