import React, { useState } from "react";
import OrderSummery from "./ordersummry";
import AddOrderlist from "./addorderlist";
import { Link } from "react-router-dom";

export default function OrderListTab({title, link, btnTitle}){
    // const [text, setText] = useState("Order Summary")
    // const [tabactive , Setabtive] =useState(0) 

    // const texthandle =(t, s)=>{
    //     setText(t)
    //     Setabtive(s)
    // }
    return(
        <div className="wrap-summery overflow-hidden">
            <div className= "d-flex p-3 rounded-0 border border-ligth justify-content-between align-items-center">
                <h2 className="fs-2">{title}</h2>
                <ul className="d-flex">
                    <li><Link to={link} className="btn btn-primary fs-4">{btnTitle}</Link></li>
                </ul>
            </div>
            <div>
                <OrderSummery />
            </div>
        </div>
    )
}