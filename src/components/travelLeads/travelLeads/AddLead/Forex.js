import React, { useState } from "react";


export default function Forex({ handleInputChangeForex, currencyData, countryData, rowsForex, setRowsForex, AddRowForex }) {
    const removeRow = (index) => {
        setRowsForex(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Forex</h4>
                </div>
            </div>
            {rowsForex.map((row, index) =>
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Country <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select className="form-select shadow"
                                    name="country"
                                    value={row.country}
                                    onChange={(e) => handleInputChangeForex(index, "country", e.target.value)}
                                >
                                    <option selected>Open Select Country</option>
                                    {countryData && countryData?.map((item) => {
                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Currency <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select className="form-select shadow"
                                    name="currency"
                                    value={row.currency}
                                    onChange={(e) => handleInputChangeForex(index, "currency", e.target.value)}
                                >
                                    <option selected>Open Select Currency</option>
                                    {currencyData && currencyData?.map((item) => {
                                        return <option value={item?._id} key={item?._id}>{item?.currency_name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Amont <span className="text-danger fs-5">*</span></label>
                            <input type="number" className="form-control" placeholder="Amount"
                                name="amount"
                                value={row.amount}
                                onChange={(e) => handleInputChangeForex(index, "amount", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddRowForex}> + Add more</button>
            </div>
        </div>
    )
}