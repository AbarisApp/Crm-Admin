import { Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;
export default function Transport({ Enquiry, preference, locations, countryData, AddRowtTrasport, handleInputChangeTranport, rowsTrasport, setRowsTrasport }) {
    const removeRow = (index) => {
        setRowsTrasport(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Transport</h4>
                </div>
            </div>
            {rowsTrasport.map((row, index) =>
                <div className="row">
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Country <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select className="form-select shadow" name="country"
                                    value={row.country}
                                    onChange={(e) => handleInputChangeTranport(index, "country", e.target.value)}
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
                            <label className="form-label">City <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <Select
                                    showSearch
                                    style={{ width: "100%", height: '40px' }}
                                    placeholder="Select Departure"
                                    optionFilterProp="children"
                                    className=""
                                    value={row.city}
                                    onChange={(value) => handleInputChangeTranport(index, "city", value)}
                                >
                                    {locations?.map((loc) => (
                                        <Option key={loc._id} value={loc._id}>
                                            {loc.city_name}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Transport Date <span className="text-danger fs-5">*</span></label>
                            <input className="form-control" type="date"
                                name="transport_date"
                                value={row.transport_date}
                                onChange={(e) => handleInputChangeTranport(index, "transport_date", e.target.value)} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Drop Date <span className="text-danger fs-5">*</span></label>
                            <input className="form-control" type="date"
                                name="drop_date"
                                value={row.drop_date}
                                onChange={(e) => handleInputChangeTranport(index, "drop_date", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Preference</label>
                            <div className="w-100">
                                <select className="form-select shadow" name="preference"
                                    value={row.preference}
                                    onChange={(e) => handleInputChangeTranport(index, "preference", e.target.value)}
                                >
                                    <option selected>Open Select Preference</option>
                                    {preference && preference?.map((item) => {
                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mt-2">
                            <label className="form-label">Transport Type</label>
                            <div className="d-flex gap-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox"
                                        checked={row.transport_type_airport_transfers}
                                        onChange={(e) => handleInputChangeTranport(index, "transport_type_airport_transfers", e.target.checked)}
                                    />
                                    <label className="m-0">Air Transport</label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox"
                                        checked={row.transport_type_sightseeing_transfers}
                                        onChange={(e) => handleInputChangeTranport(index, "transport_type_sightseeing_transfers", e.target.checked)}
                                    />
                                    <label className="m-0">Sightseeing Transport</label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox"
                                        checked={row.transport_type_other}
                                        onChange={(e) => handleInputChangeTranport(index, "transport_type_other", e.target.checked)}
                                    />
                                    <label className="m-0">Other</label>
                                </div>
                                <div className="mt-2">
                                    <input className="form-control" type="text"
                                        name="transport_type_other_name"
                                        value={row.transport_type_other_name}
                                        onChange={(e) => handleInputChangeTranport(index, "transport_type_other_name", e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddRowtTrasport}> + Add more</button>
            </div>
        </div>
    )
}