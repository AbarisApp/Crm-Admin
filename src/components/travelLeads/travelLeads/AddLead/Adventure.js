import React, { useState } from "react";

import { Input, Select } from "antd";
const { Option } = Select;

export default function Adventure({ countryData, locations, handleInputChangeAdventure, AddRowAdventure, setRowsAdventure, rowsAdventure }) {

    const removeRow = (index) => {
        setRowsAdventure(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Adventure</h4>
                </div>
            </div>
            {rowsAdventure.map((row, index) =>
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Country  <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select
                                    className="form-select shadow"
                                    name="country"
                                    value={row.country}
                                    onChange={(e) => handleInputChangeAdventure(index, "country", e.target.value)}
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
                            <label className="form-label"> City  <span className="text-danger fs-5">*</span></label>
                            <Select
                                showSearch
                                style={{ width: "100%", height: '40px' }}
                                placeholder="Select Departure"
                                optionFilterProp="children"
                                className=""
                                value={row.city}
                                onChange={(value) => handleInputChangeAdventure(index, "city", value)}
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
                            <label className="form-label">Travel Date  <span className="text-danger fs-5">*</span></label>
                            <Input type="date" className="form-control"
                                name="travel_date"
                                value={row.travel_date}
                                onChange={(e) => handleInputChangeAdventure(index, "travel_date", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="mt-2">
                            <label className="form-label">Category  <span className="text-danger fs-5">*</span></label>
                            <div className="d-flex gap-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox"
                                        checked={row.category_motorbiking}
                                        onChange={(e) => handleInputChangeAdventure(index, "category_motorbiking", e.target.checked)}
                                    />
                                    <label className="m-0">Motorbiking
                                    </label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox"
                                        checked={row.category_camping}
                                        onChange={(e) => handleInputChangeAdventure(index, "category_camping", e.target.checked)}
                                    />
                                    <label className="m-0">Camping
                                    </label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox"
                                        checked={row.category_safari}
                                        onChange={(e) => handleInputChangeAdventure(index, "category_safari", e.target.checked)}
                                    />
                                    <label className="m-0">Safari
                                    </label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox"
                                        checked={row.category_water_sports}
                                        onChange={(e) => handleInputChangeAdventure(index, "category_water_sports", e.target.checked)}
                                    />
                                    <label className="m-0">Water Sport
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="col-12">
                        <div className="mt-2">
                            <label className="form-label">Remark</label>
                            <div className="w-100">
                                <textarea className="form-control" placeholder="remark" style={{ height: "100px" }}
                                    name="remark"
                                    value={row.remark}
                                    onChange={(e) => handleInputChangeAdventure(index, "remark", e.target.value)}
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
                <button className="btn m-0 btn-outline-primary" onClick={AddRowAdventure}> + Add more</button>
            </div>
        </div>
    )
}