import { Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;
export default function Cruise({ countryData, preference, locations, handleInputChangeCruise, AddRowCruise, setRowsCruise, rowsCruise }) {

    const removeRow = (index) => {
        setRowsCruise(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Cruise</h4>
                </div>
            </div>
            {rowsCruise.map((row, index) =>
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Country  <span className="text-danger fs-5">*</span></label>
                            <select
                                className="form-select shadow"
                                name="country"
                                value={row.country}
                                onChange={(e) => handleInputChangeCruise(index, "country", e.target.value)}
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
                            <label className="form-label"> City  <span className="text-danger fs-5">*</span></label>
                            <Select
                                showSearch
                                style={{ width: "100%", height: '40px' }}
                                placeholder="Select Departure"
                                optionFilterProp="children"
                                className=""
                                value={row.city}
                                onChange={(value) => handleInputChangeCruise(index, "city", value)}
                            >
                                {locations?.map((loc) => (
                                    <Option key={loc._id} value={loc._id}>
                                        {loc.city_name}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Days  <span className="text-danger fs-5">*</span></label>
                            <input className="form-control" type="text"
                                name="days"
                                value={row.days}
                                onChange={(e) => handleInputChangeCruise(index, "days", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Cruise Name  <span className="text-danger fs-5">*</span></label>
                            <input className="form-control" type="text" placeholder="Cruise Name"
                                name="cruise_name"
                                value={row.cruise_name}
                                onChange={(e) => handleInputChangeCruise(index, "cruise_name", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Type</label>
                            <input type="text" placeholder="type" className="form-control"
                                name="type"
                                value={row.type}
                                onChange={(e) => handleInputChangeCruise(index, "type", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Departure  <span className="text-danger fs-5">*</span></label>
                            <input type="date" placeholder="Departure" className="form-control"
                                name="departure"
                                value={row.departure}
                                onChange={(e) => handleInputChangeCruise(index, "departure", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Return</label>
                            <input type="date" placeholder="Return" className="form-control"
                                name="return"
                                value={row.return}
                                onChange={(e) => handleInputChangeCruise(index, "return", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Room Preference </label>
                            <select
                                className="form-select shadow"
                                name="room_preference"
                                value={row.room_preference}
                                onChange={(e) => handleInputChangeCruise(index, "room_preference", e.target.value)}
                            >
                                <option selected>Open Select Room Preference</option>
                                {preference && preference?.map((item) => {
                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mt-2">
                            <label className="form-label">Remark</label>
                            <div className="w-100">
                                <textarea className="form-control" style={{ height: "100px" }}
                                    name="remark"
                                    value={row.remark}
                                    onChange={(e) => handleInputChangeCruise(index, "remark", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddRowCruise}> + Add more</button>
            </div>
        </div>
    )
}