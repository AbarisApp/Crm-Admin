import React from "react";
import AddSimple from "../../components/order/addsimple";

export default function AddNewShipment(){
    return(
        <div className="p-4">
            <AddSimple table={false} title={"Add New Shipment"} btnTitle={"shipment List"} link={"/shipment"} />
        </div>
    )
}