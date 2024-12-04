import React from "react";
import AddBudget from "../../components/project/budgetList";

export default function AddNewBudget(){
    return(
        <div className="p-4">
            <AddBudget title={"Create budget"} btnTitle={"Budger List"} link={"/"} update={true}/>
        </div>
    )
}