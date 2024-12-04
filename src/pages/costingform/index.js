import React from "react";
import AddBudget from "../../components/project/budgetList";



export default function CostingForm(){
    return(
        <div className="p-4">
            <AddBudget title={"Cost Form"} btnTitle={"Costing"} link={"/costinglist"} update={false}/>
        </div>
    )
}