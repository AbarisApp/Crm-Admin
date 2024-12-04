import React from "react";
import { Link } from "react-router-dom";
import BudgetSum from "./budgetsum";
import BudgetDetail from "./budgetdetal";
export default function AddBudget({title, link, btnTitle, update}){
    return(
        <div className="wrap-summery pb-3 overflow-hidden">
            <div className= "d-flex p-3 rounded-0 border border-ligth justify-content-between align-items-center">
                <h2 className="fs-2">{title}</h2>
                <ul className="d-flex">
                    <li><Link to={link} className="btn btn-primary fs-4">{btnTitle}</Link></li>
                </ul>
            </div>
            <div>
                <BudgetSum update={update}/>
            </div>
            <div className="p-3">
                <BudgetDetail />
            </div>
            <div className="p-3">
                <BudgetDetail />
            </div>
            <div className="p-3">
                <BudgetDetail />
            </div>
            <div className="mt-3">
            <ul className="d-flex gap-2 justify-content-center ">
                <li><button className="btn px-5 py-2 fs-4 btn-outline-secondary">Reset</button></li>
                <li><button className="btn px-5 py-2 fs-4 btn-primary">Save</button></li>
            </ul>
        </div>
        </div>
    )
}