import React from "react";
import OrderListTab from "../../components/order/ordertab";

export default function BookingList(){
    return(
        <div className="p-3">
            <OrderListTab title={"Booking List"} btnTitle={"Add New Booking"} link={"/addnewbooking"}/>
        </div>
    )
}