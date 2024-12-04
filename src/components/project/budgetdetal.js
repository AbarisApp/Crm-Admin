import React from "react";

export default function BudgetDetail(){
    return(
        <div className="w-100 overflow-scroll">
            <table className="w-100 main-tab">
                <tr className="main-tr">
                    <th className="border main-th border-light" style={{ width: "15%" }}>Description - Fabric</th>
                    <th className="border main-th border-light" style={{ width: "15%" }}>supplier name</th>
                    <th className="border main-th border-light" style={{ width: "10%" }}>Yarn Count</th>
                    <th className="border main-th border-light" style={{ width: "10%" }}>unit price ($)</th>
                    <th className="border main-th border-light" style={{ width: "10%" }}>Consumptions (kg/dz)</th>
                    <th className="border main-th border-light" style={{ width: "10%" }}>W%</th>
                    <th className="border main-th border-light" style={{ width: "10%" }}>Total Qty (kg.)</th>
                    <th className="border main-th border-light" style={{ width: "10%" }}>Total Cost</th>
                    <th className="border main-th border-light" style={{ width: "10%" }}>pre-Cost%</th>
                </tr>
                <tr>
                    <td className="border border-light"><input type="text" placeholder="Description" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="supplier name" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Yarn Count" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="unit price " className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Consumptions " className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="W%" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Total Qty " className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Total Cost" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="pre-Cost" className="border-0"/></td>
                </tr>
                <tr>
                    <th className="border border-light" style={{ width: "15%" }}>Total yarn cost</th>
                    <th className="border border-light" colSpan={5} style={{ width: "15%" }}></th>
                    <th className="border border-light" style={{ width: "10%" }}>0</th>
                    <th className="border border-light" style={{ width: "10%" }}>0</th>
                   <th className="border border-light" style={{ width: "10%" }}>0</th>
                </tr>
                <tr>
                    <td className="border border-light"><input type="text" placeholder="Description" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="supplier name" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Yarn Count" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="unit price " className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Consumptions " className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="W%" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Total Qty " className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Total Cost" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="pre-Cost" className="border-0"/></td>
                </tr>
                <tr>
                    <th className="border border-light" style={{ width: "15%" }}>Total yarn cost</th>
                    <th className="border border-light" colSpan={5} style={{ width: "15%" }}></th>
                    <th className="border border-light" style={{ width: "10%" }}>0</th>
                    <th className="border border-light" style={{ width: "10%" }}>0</th>
                   <th className="border border-light" style={{ width: "10%" }}>0</th>
                </tr>
                <tr>
                    <td className="border border-light"><input type="text" placeholder="Description" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="supplier name" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Yarn Count" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="unit price " className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Consumptions " className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="W%" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Total Qty " className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="Total Cost" className="border-0"/></td>
                    <td className="border border-light"><input type="text" placeholder="pre-Cost" className="border-0"/></td>
                </tr>
            </table>
        </div>
    )
}