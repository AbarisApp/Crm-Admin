import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import CheckBooking from "../../components/rems-status/CheckBooking";
import Filter from "../../components/rems-status/Filter";
import FilterShort from "../../components/rems-status/FilterShort";
import BookingTab from "../../components/rems-status/Bookingtab";

export default function BookingStatus(){
    return(
        <div className="">
            <PSMunit title={"Booking Status"}/>
            <CheckBooking />
            <FilterShort />
            <BookingTab />
        </div>
    )
} 