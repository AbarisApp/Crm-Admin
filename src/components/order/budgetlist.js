import React from "react";
import { Link } from "react-router-dom";
import ListType from "./ListType";
import ProjectList from "../project/projectList";

export default function BudgetList({title, link, btnTitle}){
    return(
        <div className="wrap-summery pb-3 overflow-hidden">
        <div className= "d-flex p-3 rounded-0 border border-ligth justify-content-between align-items-center">
            <h2 className="fs-2">{title}</h2>
            <ul className="d-flex">
                <li><Link to={link} className="btn btn-primary fs-4">{btnTitle}</Link></li>
            </ul>
        </div>
        <div className="p-3">
            <ListType />
        </div>
        <div>
            <ProjectList />
        </div>
    </div>
    )
}