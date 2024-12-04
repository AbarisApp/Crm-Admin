import React, { useState } from "react";


export default function TrvelInsurance({ AddRowTravelIns, handleInputChangeTravelInsurence, countryData, rowsTravelIns, setRowsTravelIns }) {


    const removeRow = (index) => {
        setRowsTravelIns(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Travel Insurance</h4>
                </div>
            </div>
            {rowsTravelIns.map((row, index) =>
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Country <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select className="form-select shadow "
                                    name="country"
                                    value={row.country}
                                    onChange={(e) => handleInputChangeTravelInsurence(index, "country", e.target.value)}
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
                            <label className="form-label">How long? <span className="text-danger fs-5">*</span></label>
                            <input className="form-control" type="text" placeholder="How Long?"
                                name="how_long"
                                value={row.how_long}
                                onChange={(e) => handleInputChangeTravelInsurence(index, "how_long", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Insurance for Visa </label>
                            <div className="w-100">
                                <select className="form-select shadow"
                                    name="insurance_for_visa"
                                    value={row.insurance_for_visa}
                                    onChange={(e) => handleInputChangeTravelInsurence(index, "insurance_for_visa", e.target.value)}
                                >
                                    <option selected value={false}>No</option>
                                    <option value={true}>Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Travel Date</label>
                            <input placeholder="Travel Date" className="form-control" type="date"
                                name="travel_date"
                                value={row.travel_date}
                                onChange={(e) => handleInputChangeTravelInsurence(index, "travel_date", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddRowTravelIns}> + Add more</button>
            </div>
        </div>
    )
}