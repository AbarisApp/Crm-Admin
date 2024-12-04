import React from "react";
import { BsCardImage } from "react-icons/bs";

export default function BudgetSum({update}) {
    return (
        <div className="p-3">
            <div className="row">
                <div className="col-4">
                    <div>
                    <h6>Select a order</h6>
                    <div className="">
                        <select
                            className="form-select">
                            <option value="">000000018</option>
                            <option value="">000000017</option>
                            <option value="">000000016</option>
                        </select>
                    </div>
                    <div className="mt-4">
                    <div className="">
                        <select
                            className="form-select">
                            <option value="">Style (Select Order First)</option>
                        </select>
                    </div>
                    </div>
                    <div className="mt-4">
                        <table className="w-100">
                            <tr>
                                <td className="border border-ligth">Pre-costing Date</td>
                                <td className="border border-ligth"><input type="date" className="border-0 w-100"/></td>
                            </tr>
                            <tr>
                                <td className="border border-ligth">Post-costing Date</td>
                                <td className="border border-ligth"><input type="date" className="border-0 w-100"/></td>
                            </tr>
                        </table>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <table className="w-100">
                        <tr>
                            <th className="border border-light">Payment Mode</th>
                            <td className="border border-light">Payment Mode</td>
                        </tr>
                        <tr>
                            <th className="border border-light">Party Name</th>
                            <td className="border border-light">Party Name</td>
                        </tr>
                        <tr>
                            <th className="border border-light">party Type</th>
                            <td className="border border-light">party Type</td>
                        </tr>
                        <tr>
                            <th className="border border-light">Color</th>
                            <td className="border border-light">Color</td>
                        </tr>
                        <tr>
                            <th className="border border-light">Shipment Date</th>
                            <td className="border border-light">Shipment Date</td>
                        </tr>
                        <tr>
                            <th className="border border-light">Quantity</th>
                            <td className="border border-light">0</td>
                        </tr>
                        <tr>
                            <th className="border border-light">Unit Price</th>
                            <td className="border border-light">0</td>
                        </tr>
                        <tr>
                            <th className="border border-light">LC Value</th>
                            <td className="border border-light">0</td>
                        </tr>
                    </table>
                </div>
                <div className="col-4">
                    {update && <div>
                    <h6 className="m-0">Upload Item Image</h6>
                    <div className="border position-relative upload text-center" style={{ height: "191px" }}>
                        <input type="file" className="position-absolute z-2 border" name="upload" />
                        <label for="upload position-absolute z-1 ">
                            <BsCardImage fontSize={100} />
                        </label>
                    </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}