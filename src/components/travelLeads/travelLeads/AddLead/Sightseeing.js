import { Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;
export default function Sightseeing({ sight_seeingData, locations, countryData, preference, handleInputChangeSightseeing, rowsSightseeing, setRowsSightseeing, AddRowSightseeing }) {


    const removeRow = (index) => {
        setRowsSightseeing(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Sightseeing</h4>
                </div>
            </div>
            {rowsSightseeing.map((row, index) =>
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Country <span className="text-danger fs-5">*</span></label>
                            <select className="form-select shadow"
                                name="country"
                                value={row.country}
                                onChange={(e) => handleInputChangeSightseeing(index, "country", e.target.value)}
                            >
                                <option selected>Open Select Country</option>
                                {countryData && countryData?.map((item) => {
                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">City <span className="text-danger fs-5">*</span></label>
                            <Select
                                showSearch
                                style={{ width: "100%", height: '40px' }}
                                placeholder="Select Departure"
                                optionFilterProp="children"
                                className=""
                                value={row.city}
                                onChange={(value) => handleInputChangeSightseeing(index, "city", value)}
                            >
                                {locations?.map((loc) => (
                                    <Option key={loc._id} value={loc._id}>
                                        {loc.city_name}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Sightseeing Options</label>
                            <select className="form-select shadow"
                                name="sightseeing_id"
                                value={row.sightseeing_id}
                                onChange={(e) => handleInputChangeSightseeing(index, "sightseeing_id", e.target.value)}
                            >
                                <option selected>Open Select Sightseeing Options</option>
                                {sight_seeingData && sight_seeingData?.map((item) => {
                                    return <option value={item?._id} key={item?._id}>{item?.sightsseing_activity}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Preference</label>
                            <select className="form-select shadow"
                                name="preference"
                                value={row.preference}
                                onChange={(e) => handleInputChangeSightseeing(index, "preference", e.target.value)}
                            >
                                <option selected>Open Select Preference</option>
                                {preference && preference?.map((item) => {
                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Travel Date</label>
                            <input className="form-control" type="date"
                                name="travel_date"
                                value={row.travel_date}
                                onChange={(e) => handleInputChangeSightseeing(index, "travel_date", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>

            )}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddRowSightseeing}> + Add more</button>
            </div>
        </div>
    )
}