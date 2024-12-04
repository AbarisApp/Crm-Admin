import React from "react";
import NewProduction from "../../components/order/NewProduction";

export default function DailyProduction(){
    return(
        <div className="p-4">
            <NewProduction  title={"Add Daily Report"} btnTitle={"Product List"} link={"/product"}/>
        </div>
    )
}