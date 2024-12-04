import React from "react";

export default function StagesTable(){
    return(
        <div>
            <h1 className="fs-6 mt-5 mb-2 text-black">Stage Plans</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                <table className="w-100">
                    <tr className="bg-light">
                        <th className="border p-1">S. No</th>
                        <th className="border p-1">PMS Stages</th>
                        <th className="border p-1">Payment Percentage</th>
                    </tr>
                    <tr>
                        <td className="border  p-1">1</td>
                        <td className="border p-1">
                            <input className="border-0" placeholder="...select..."/>
                        </td>
                        <td className="border p-1"><input className="border-0" type="number"/></td>
                    </tr>
                    <tr>
                        <td className="border  p-1">2</td>
                        <td className="border p-1">
                            <input className="border-0" placeholder="...select..."/>
                        </td>
                        <td className="border p-1"><input className="border-0" type="number"/></td>
                    </tr>
                    <tr>
                        <td className="border  p-1">3</td>
                        <td className="border p-1">
                            <input className="border-0" placeholder="...select..."/>
                        </td>
                        <td className="border p-1"><input className="border-0" type="number"/></td>
                    </tr>
                    <tr>
                        <td className="border  p-1">4</td>
                        <td className="border p-1">
                            <input className="border-0" placeholder="...select..."/>
                        </td>
                        <td className="border p-1"><input className="border-0" type="number"/></td>
                    </tr>
            </table>
                </div>
            </div>
        </div>
    )
}