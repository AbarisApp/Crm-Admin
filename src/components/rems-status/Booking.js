import React from "react";
import PSMunit from "./PSMunit";
import SaveCancle from "./SaveCancle";
import BookingForm from "./BookingForm";
import PaymentShedule from "./PaymentShedule";

export default function Booking(){
    return(
        <div>
            <PSMunit title={"Edit Booking"}/>
            <SaveCancle />
            <BookingForm />
            <PaymentShedule />
        </div>
    )
}