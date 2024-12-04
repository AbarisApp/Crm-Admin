import React from "react";
import BudgetList from "../../components/order/budgetlist";

export default function SimpleList(){
    return(
        <div className="p-4">
            <BudgetList title={"Sample List"} btnTitle={"Add New Simple"} link={"/addnewsample"}/>
        </div>
    )
}