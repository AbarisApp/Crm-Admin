import React, { useState } from "react";


export default function Passport({ countryData, AddRowPassport, handleInputChangePassport, setRowsPassport, rowsPassport }) {
    const removeRow = (index) => {
        setRowsPassport(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Passport</h4>
                </div>
            </div>
            {rowsPassport.map((row, index) =>
                <div className="row">
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Issusing Country  <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select
                                    className="form-select shadow"
                                    name="issuing_country"
                                    value={row.issuing_country}
                                    onChange={(e) => handleInputChangePassport(index, "issuing_country", e.target.value)}
                                >
                                    <option selected>Open Select Country</option>
                                    {countryData && countryData?.map((item) => {
                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Date  <span className="text-danger fs-5">*</span></label>
                            <input className="form-control" type="date"
                                name="date"
                                value={row.date}
                                onChange={(e) => handleInputChangePassport(index, "date", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Current Passport No.</label>
                            <input className="form-control" type="text" placeholder="Current Passport No."
                                name="current_passport_number"
                                value={row.current_passport_number}
                                onChange={(e) => handleInputChangePassport(index, "current_passport_number", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Place of Apply </label>
                            <input placeholder="place of apply" type="text" className="form-control"
                                name="place_of_apply"
                                value={row.place_of_apply}
                                onChange={(e) => handleInputChangePassport(index, "place_of_apply", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">No. Of Person</label>
                            <input type="number" className="form-control" placeholder="no. of person"
                                name="no_of_person"
                                value={row.no_of_person}
                                onChange={(e) => handleInputChangePassport(index, "no_of_person", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Category  <span className="text-danger fs-5">*</span></label>
                            <div className="d-flex gap-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="radio"
                                        value="New Passport"
                                        checked={rowsPassport[index].category === "New Passport"}
                                        onChange={(e) => handleInputChangePassport(index, "category", e.target.value)}
                                    />
                                    <label className="m-0">New Passport</label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="radio"
                                        value="Renew Passport"
                                        checked={rowsPassport[index].category === "Renew Passport"}
                                        onChange={(e) => handleInputChangePassport(index, "category", e.target.value)}
                                    />
                                    <label className="m-0">Renew Passport</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Urgent</label>
                            <div className="d-flex gap-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox"
                                        checked={row.urgent}
                                        onChange={(e) => handleInputChangePassport(index, "urgent", e.target.checked)}
                                    />
                                    <label className="m-0">Urgent</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Remark</label>
                            <input type="text" className="form-control"
                                name="remark"
                                value={row.remark}
                                onChange={(e) => handleInputChangePassport(index, "remark", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddRowPassport}> + Add more</button>
            </div>
        </div>
    )
}