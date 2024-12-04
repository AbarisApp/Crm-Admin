import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProjectList from "./projectList";
import { TfiReload } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";
import NextPage from "./nextpage";

export default function ProjectSummery(){
    return(
        <div className="wrap-summery">
            <h1 className="title "><FaFileAlt /> Projects Summary</h1>
            <ul className="d-flex sepretor">
                <li><Link to="/"><span>1</span> Not Start</Link></li>
                <li><Link to="/" className="primary"><span>3</span> In Progress</Link></li>
                <li><Link to="/" className="danger"><span>0</span> On Hold</Link></li>
                <li><Link to="/" className="info"><span>0</span> Cancelled</Link></li>
                <li><Link to="/" className="success"><span>1</span> Finished</Link></li>
            </ul>
            <div className="p-3 d-flex justify-between">
                <div className="d-flex gap-2">
                <select className="limit">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                    <option>All</option>
                </select>
                <div className="d-flex exp-btn">
                    <button className="px-2">
                        export
                    </button>
                    <button className="px-2">
                    <TfiReload  fontSize={20}/>
                    </button>
                </div>
                </div>
                <div className="d-flex exp-btn">
                    <button className="px-2">
                        <IoSearch />
                    </button>
                    <input className="search" placeholder="Search...."/>
                </div>
            </div>
            <div>
                <ProjectList />
            </div>
            <div>
                <NextPage />
            </div>
        </div>
    )
}