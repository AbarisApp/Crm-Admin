import React from "react";

export default function NewOrderTable({table}){
    return(
        <div className="mt-3">
            <div className="overflow-scroll p-2">
            {table && <table  >
                <tr>
                    <th className="border text-nowrap text-bold p-2">STYLE</th>
                    <th className="border text-nowrap text-bold p-2">COLOR</th>
                    <th className="border text-nowrap text-bold p-2">ITEM</th>
                    <th className="border text-nowrap text-bold p-2">SHIPMENT DATE</th>
                    <th className="border text-nowrap text-bold p-2">QTY</th>
                    <th className="border text-nowrap text-bold p-2">UNIT PRICE</th>
                    <th className="border text-nowrap text-bold p-2">TTL PRICE</th>
                </tr>
                <tr>
                    <td className="border"><input type="text" className="border-0" /></td>
                    <td className="border"><input type="text" className="border-0" /></td>
                    <td className="border"><input type="text" className="border-0" /></td>
                    <td className="border"><input type="date" className="border-0"/></td>
                    <td className="border"><input type="text" className="border-0" /></td>
                    <td className="border"><input type="text" className="border-0" /></td>
                    <td className="border"><input type="text" className="border-0" value="0"/></td>
                </tr>
                <tr>
                    <td className="border fs-3 text-bold text-black text-end" colSpan={4}>Total</td>
                    <td className="border">0</td>
                    <td className="border">0</td>
                    <td className="border">0</td>
                </tr>
            </table>}
        </div>
        <div className="mt-3">
            <ul className="d-flex gap-2 justify-content-center ">
                <li><button className="btn px-5 py-2 fs-4 btn-outline-secondary">Cancle</button></li>
                <li><button className="btn px-5 py-2 fs-4 btn-primary">Save</button></li>
            </ul>
        </div>
        </div>
    )
}