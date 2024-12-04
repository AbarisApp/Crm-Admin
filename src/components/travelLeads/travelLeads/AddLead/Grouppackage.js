import { Select } from "antd";
import React, { useState } from "react";
const { Option } = Select;
export default function GroupPackage({ packageData, handleSearch, state, handleInputChangeGroupPackage, countryData, preference, AddRowGroupPackage, setGroupPackage, rowsGroupPackage }) {
    console.log(packageData);

    const removeRow = (index) => {
        setGroupPackage(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Group package</h4>
                </div>
            </div>
            {rowsGroupPackage.map((row, index) =>
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Select countries to get available package list</label>
                            <div className="w-100">
                                <select
                                    className="form-select shadow"
                                    name="country"
                                    value={row.country}
                                    onChange={(e) => handleInputChangeGroupPackage(index, "country", e.target.value)}
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
                            <label className="form-label">Search Package Name</label>
                            <Select
                                showSearch
                                style={{ width: "100%", height: '40px' }}
                                placeholder="Select Departure"
                                optionFilterProp="children"
                                className=""
                                value={row.package_id}
                                onSearch={handleSearch}
                                onChange={(value) => handleInputChangeGroupPackage(index, "package_id", value)}
                            >
                                {packageData?.map((loc) => (
                                    <Option key={loc._id} value={loc._id}>
                                        {loc.package}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="col-3">
                        <label className="form-label">State</label>
                        <div className="w-100">
                            <select
                                className="form-select shadow"
                                name="state"
                                value={row.state}
                                onChange={(e) => handleInputChangeGroupPackage(index, "state", e.target.value)}
                            >
                                <option selected>Open Select State</option>
                                {state && state?.map((item) => {
                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Preference</label>
                            <div className="w-100">
                                <select
                                    className="form-select shadow"
                                    name="preference"
                                    value={row.preference}
                                    onChange={(e) => handleInputChangeGroupPackage(index, "preference", e.target.value)}
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
                            <label className="form-label">Remark</label>
                            <div className="w-100">
                                <textarea className="form-control" placeholder="Remark" style={{ height: "100px" }}
                                    name="remark"
                                    value={row.remark}
                                    onChange={(e) => handleInputChangeGroupPackage(index, "remark", e.target.value)}
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
                <button className="btn m-0 btn-outline-primary" onClick={AddRowGroupPackage}> + Add more</button>
            </div>
        </div>
    )
}