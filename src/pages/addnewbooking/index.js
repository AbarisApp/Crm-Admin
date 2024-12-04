import React from "react";
import AddOrderlist from "../../components/order/addorderlist";

export default function AddNewBooking(){
    return(
        <div className="p-4">
            <AddOrderlist title={"Add New Booking"} btnTitle={"Booking List"} link={"/bookinglist"}/>
        </div>
    )
}