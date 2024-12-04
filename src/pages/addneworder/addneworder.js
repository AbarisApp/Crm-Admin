import React from "react";
import AddOrderlist from "../../components/order/addorderlist";
export default function AddNewOrder(){
    return(
        <div className="p-4">
            <AddOrderlist title={"Add New Order"} btnTitle={"Order List"} moreFile={true} link={"/orderlist"}/>
        </div>
    )
}