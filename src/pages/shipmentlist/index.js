import React from "react";
import BudgetList from "../../components/order/budgetlist";

export default function ShipmentList(){
    return(
        <div className="p-4">
            <BudgetList title={"Shipment List"} btnTitle={"Add New Shipment"} link={"/newshipment"}/>
        </div>
    )
}