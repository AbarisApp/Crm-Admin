import React from "react";
import BudgetList from "../../components/order/budgetlist";

export default function Budget(){
    return(
        <div className="p-4">
            <BudgetList title={"Budget List"} btnTitle={"Add New Budget"} link={"/addnewbudget"}/>
        </div>
    )
}