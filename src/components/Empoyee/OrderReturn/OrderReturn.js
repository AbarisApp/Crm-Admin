import React from "react";
import { OrderReturnFilter } from "./OrderReturnBooking";
import { OrderReturnList } from "./OrderReturnList";

export default function OrderReturns(){
    return(
        <div>
            <OrderReturnFilter />
            <OrderReturnList />
        </div>
    )
}