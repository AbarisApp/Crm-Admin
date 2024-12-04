import React from "react";
import OrderListTab from "../../components/order/ordertab";

export default function OrderList() {
    return (
        <div className="p-4">
            <OrderListTab title={"Order Summery"} btnTitle={"Add New order"} link={"/addneworder"} />
        </div>
    )
}