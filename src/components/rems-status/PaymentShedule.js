import React from "react";

export default function PaymentShedule() {
    return (
        <div className="p-2">
            <h1 className="mt-2 fs-5 text-black">Payment Shedule</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <ul className="d-flex mt-2">
                        <li className="p-2 d-flex rounded-0 gap-1 border bg-light border-Secondary">
                            <input type="radio" name="n"/>
                            <label className="m-0">Outrate</label>
                        </li>
                        <li className="p-2 rounded-0 d-flex gap-1 border bg-light border-Secondary">
                            <input type="radio" name="n"/>
                            <label className="m-0">Installment Plan</label>
                        </li>
                        <li className="p-2 rounded-0 d-flex gap-1 border bg-light border-Secondary">
                            <input type="radio" name="n"/>
                            <label className="m-0">Stagebassed</label>
                        </li>
                    </ul>
                    <div className={`d-flex border justify-content-between  rounded-0 py-1 px-4`}>
                        <div className="d-flex fs-5 align-items-center gap-2">
                            <label>Interval</label>
                            <select className="border">
                                <option>4 months</option>
                            </select>
                        </div>
                        <div className="d-flex fs-5 align-items-center gap-2">
                            <label>First Installment Date</label>
                            <input type="date" className="border"/>
                        </div>
                        <div className="d-flex fs-5 align-items-center gap-2">
                            <label>No. of Installments</label>
                            <input type="text" className="border" style={{width : "50px"}}/>
                            <button className="p-1 btn btn-primary">Go</button>
                        </div>
                    </div>
                    <div className="mt-2">
                        <table className="w-100">
                            <tr className="bg-light">
                                <th className="text-black text-center fs-4 border border-secondary">S. No</th>
                                <th className="text-black text-center fs-4 border border-secondary">Amount Name</th>
                                <th colSpan={3} className="text-black text-center fs-4 border border-secondary">Amount</th>
                                <th className="text-black text-center fs-4 border border-secondary">Date</th>
                            </tr>
                            <tr>
                                <td className="border border-light">1</td>
                                <td className="border border-light">Booking Amount</td>
                                <td className="text-end border border-light">5.0</td>
                                <td className="text-center border border-light">%=</td>
                                <td className="text-end border border-light">39500.00</td>
                                <td className="border border-light">01/09/2020</td>
                            </tr>
                            <tr>
                                <td className="border border-light">2</td>
                                <td className="border border-light">Booking Amount</td>
                                <td className="text-end border border-light">5.0</td>
                                <td className="text-center border border-light">%=</td>
                                <td className="text-end border border-light">39500.00</td>
                                <td className="border border-light">01/09/2020</td>
                            </tr>
                            <tr>
                                <td className="border border-light">3</td>
                                <td className="border border-light">Booking Amount</td>
                                <td className="text-end border border-light">5.0</td>
                                <td className="text-center border border-light">%=</td>
                                <td className="text-end border border-light">39500.00</td>
                                <td className="border border-light">01/09/2020</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <h1 className="fs-5 mt-2"> Additon charges</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                <div className="mt-2">
                        <table className="w-100">
                            <tr className="bg-light">
                                <th className="text-black text-center fs-4 border border-secondary">S. No</th>
                                <th className="text-black text-center fs-4 border border-secondary">Charge</th>
                                <th className="text-black text-center fs-4 border border-secondary">Amount</th>
                                <th className="text-black text-center fs-4 border border-secondary">Due Date</th>
                            </tr>
                            <tr>
                                <td className="border border-light">1</td>
                                <td className="border border-light text-center">
                                    <input className="border-0 bg-light" placeholder="....select...."/>
                                </td>
                                <td className="text-end border border-light"></td>
                                <td className="text-center border border-light"></td>
                            </tr>
                            <tr>
                                <td className="border border-light">1</td>
                                <td className="border border-light text-center">
                                    <input className="border-0 bg-light" placeholder="....select...."/>
                                </td>
                                <td className="text-end border border-light"></td>
                                <td className="text-center border border-light"></td>
                            </tr>
                            <tr>
                                <td className="border border-light">1</td>
                                <td className="border border-light text-center">
                                    <input className="border-0 bg-light" placeholder="....select...."/>
                                </td>
                                <td className="text-end border border-light"></td>
                                <td className="text-center border border-light"></td>
                            </tr>
                        </table> 
                        </div>
                </div>
            </div>
        </div>
    )
}