import React from "react";
import Product from "../../components/order/product";

export default function ProductList(){
    return(
        <div className="p-4">
            <Product  title={"Production List"} btnTitle={"Add Daily Production"} link={"/dailyproduction"}/>
        </div>
    )
}