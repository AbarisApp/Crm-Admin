import React from "react";
import BudgetList from "../../components/order/budgetlist";

export default function Costing(){
    return(
        <div className="p-4">
            <BudgetList title={"Costing List"} btnTitle={"Costing Form"} link={"/costingform"}/>
        </div>
    )
}