import { Select } from "antd";
import React, { useState } from "react";
const { Option } = Select;

export default function FlightBooking({ preference, classData, addRowFlight, setflightrowsRows, flightrows, handleRowChangeFlight, locations }) {
    // console.log(locations);

    // const [rows, setRows] = useState([
    //     {
    //         from: "",
    //         to: "",
    //         departure: "",
    //         return: "",
    //         class: "",
    //         domestic: false,
    //         international: false,
    //         flexibility: "",
    //         preference: "",
    //     }
    // ]); // Initialize as an array

    // const AddRow = () => {
    //     setRows((prevRows) => [
    //         ...prevRows,
    //         {
    //             from: "",
    //             to: "",
    //             departure: "",
    //             return: "",
    //             class: "",
    //             domestic: false,
    //             international: false,
    //             flexibility: "",
    //             preference: "",
    //         },
    //     ]);
    // };

    const removeRow = (index) => {
        setflightrowsRows(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Flight Booking</h4>
                </div>
            </div>
            {flightrows.map((row, index) => (
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">
                                From <span className="text-danger fs-5">*</span>
                            </label>
                            {/* <input  type="date" className="form-control" /> */}
                            <Select
                                showSearch
                                style={{ width: "100%", height: '40px' }}
                                placeholder="Select Departure"
                                optionFilterProp="children"
                                className=""
                                value={row.from}
                                onChange={(value) => handleRowChangeFlight(index, "from", value)}
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
                            <label className="form-label">
                                To <span className="text-danger fs-5">*</span>
                            </label>
                            <Select
                                showSearch
                                style={{ width: "100%", height: '40px' }}
                                placeholder="Select Departure"
                                optionFilterProp="children"
                                className=""
                                value={row.to}
                                onChange={(value) => handleRowChangeFlight(index, "to", value)}
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
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label my-1">
                                        Departure
                                        <span className="text-danger fs-5">*</span>
                                    </label>
                                    <input type="date" className="form-control" placeholder="Departure"
                                        value={row.departure}
                                        onChange={(e) => handleRowChangeFlight(index, "departure", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label my-1">Return</label>
                                    <input type="date" className="form-control" placeholder="Return"
                                        value={row.return}
                                        onChange={(e) => handleRowChangeFlight(index, "return", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label my-1">Class</label>
                            <div className="w-100">
                                <select className="form-select shadow"
                                    name="class"
                                    value={row.class}
                                    onChange={(e) => handleRowChangeFlight(index, "class", e.target.value)}
                                >
                                    <option selected>Open Select Class</option>
                                    {classData && classData?.map((item) => {
                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label ">Category</label>
                            <div className="d-flex gap-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox"
                                        checked={row.category_domestic_flight}
                                        onChange={(e) => handleRowChangeFlight(index, "category_domestic_flight", e.target.checked)}
                                    />
                                    <label className="m-0">Domestic Flight</label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox"
                                        checked={row.category_international_flight}
                                        onChange={(e) => handleRowChangeFlight(index, "category_international_flight", e.target.checked)}
                                    />
                                    <label className="m-0">International Flight</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label my-1">Flexibility</label>
                                    <div className="w-100">
                                        <select className="form-select shadow"
                                            name="flexibility"
                                            value={row.flexibility}
                                            onChange={(e) => handleRowChangeFlight(index, "flexibility", e.target.value)}
                                        >
                                            <option selected>Open Select Flexibility</option>
                                            <option value="+/- 0 Days">+/- 0 Days</option>
                                            <option value="+/- 3 Days">+/- 3 Days</option>
                                            <option value="+/- 6 Days">+/- 6 Days</option>
                                            <option value="+/- 1 Week">+/- 1 Week</option>
                                            <option value="+/- 3 Week">+/- 3 Week</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label my-1">Preference</label>
                                    <div className="w-100">
                                        <select className="form-select shadow"
                                            name="preference"
                                            value={row.preference}
                                            onChange={(e) => handleRowChangeFlight(index, "preference", e.target.value)}
                                        >
                                            <option selected>Open Select Preference</option>
                                            {preference && preference?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "form-label"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            ))}
            <div className="my-4">
                <button
                    className="btn m-0 btn-outline-primary"
                    onClick={addRowFlight}
                >
                    + Add more
                </button>
            </div>
        </div>
    );
}
