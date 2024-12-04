import React from "react";

export default function ProductTable(){
    return(
        <div>
            <h1 className="text-center fs-4 bg-danger p-2 m-0">Daily Production List</h1>
            <div className="w-100 overflow-scroll">
            <table>
                <tr>
                    <td className="border border-light p-1 text-center" colSpan={8}>order Details</td>
                    <td className="border border-light p-1 text-center" colSpan={3}>Cutting</td>
                    <td className="border border-light p-1 text-center" colSpan={4}>Print/emb.</td>
                    <td className="border border-light p-1 text-center" colSpan={2}>Input</td>
                    <td className="border border-light p-1 text-center" colSpan={3}>Sewing</td>
                    <td className="border border-light p-1 text-center" colSpan={3}>Finishing</td>
                    <td className="border border-light p-1 text-center" colSpan={3}>Poly</td>
                    <td className="border border-light p-1 text-center" colSpan={2}></td>
                </tr>
                <tr>
                    <th className="border border-light p-1 text-center text-nowrap">SL.</th>
                    <th className="border border-light p-1 text-center text-nowrap">Order No..</th>
                    <th className="border border-light p-1 text-center text-nowrap">Party.</th>
                    <th className="border border-light p-1 text-center text-nowrap">Type.</th>
                    <th className="border border-light p-1 text-center text-nowrap">Styles.</th>
                    <th className="border border-light p-1 text-center text-nowrap">Items.</th>
                    <th className="border border-light p-1 text-center text-nowrap">Colors.</th>
                    <th className="border border-light p-1 text-center text-nowrap">Order Quantity.</th>
                    <th className="border border-light p-1 text-center text-nowrap">Today.</th>
                    <th className="border border-light p-1 text-center text-nowrap">TTL Cutting</th>
                    <th className="border border-light p-1 text-center text-nowrap">Balance 4%</th>
                    <th className="border border-light p-1 text-center text-nowrap">Today Send.</th>
                    <th className="border border-light p-1 text-center text-nowrap">TTL Send</th>
                    <th className="border border-light p-1 text-center text-nowrap">Balance</th>
                    <th className="border border-light p-1 text-center text-nowrap">Received</th>
                    <th className="border border-light p-1 text-center text-nowrap">Total Input</th>
                    <th className="border border-light p-1 text-center text-nowrap">TTL Input Balance</th>
                    <th className="border border-light p-1 text-center text-nowrap">Day Output</th>
                    <th className="border border-light p-1 text-center text-nowrap">TTL Output</th>
                    <th className="border border-light p-1 text-center text-nowrap">Output Balance</th>
                    <th className="border border-light p-1 text-center text-nowrap">Day Finishing Receive</th>
                    <th className="border border-light p-1 text-center text-nowrap">Finishing Balance</th>
                    <th className="border border-light p-1 text-center text-nowrap">Daily	</th>
                    <th className="border border-light p-1 text-center text-nowrap">Total</th>
                    <th className="border border-light p-1 text-center text-nowrap">Poly Balance</th>
                    <th className="border border-light p-1 text-center text-nowrap">Poly Balance</th>
                    <th className="border border-light p-1 text-center text-nowrap">Remarks</th>
                    <th className="border border-light p-1 text-center text-nowrap">Action</th>
                </tr>
                <tr>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">0008</td>
                    <td className="border border-light p-1 text-center text-nowrap">sentayhu</td>
                    <td className="border border-light p-1 text-center text-nowrap">customer</td>
                    <td className="border border-light p-1 text-center text-nowrap">Cheese</td>
                    <td className="border border-light p-1 text-center text-nowrap">Cheese</td>
                    <td className="border border-light p-1 text-center text-nowrap">null</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap">1</td>
                    <td className="border border-light p-1 text-center text-nowrap"></td>
                </tr>
            </table>
            </div>
        </div>
    )
}