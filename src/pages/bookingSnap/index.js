import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import CheckBooking from "../../components/rems-status/CheckBooking";
import FilterShort from "../../components/rems-status/FilterShort";
import BookingTab from "../../components/rems-status/Bookingtab";

export default function BookingSnap(){
    return(
       <div>
        <PSMunit title={"Booking Snap View"}/>
        <CheckBooking />
        <FilterShort />
        <BookingTab />
       </div>
    )
}