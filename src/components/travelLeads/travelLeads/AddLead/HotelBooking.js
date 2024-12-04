import { Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;
export default function HotelBooking({ roomType, starRatting, countryData, addHotelRow, locations, handleInputChangeHotel, setHotelRow, hotelRow }) {
    const removeRow = (index) => {
        setHotelRow((prevRows) => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Hotel Booking</h4>
                </div>
            </div>

            {hotelRow.map((row, index) => (
                <div className="row mb-3" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">
                                Country <span className="text-danger fs-5">*</span>
                            </label>
                            <div className="w-100">
                                <select
                                    className="form-select shadow"
                                    name="country"
                                    value={row.country}
                                    onChange={(e) => handleInputChangeHotel(index, "country", e.target.value)}
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
                            <label className="form-label">
                                City <span className="text-danger fs-5">*</span>
                            </label>
                            <Select
                                showSearch
                                style={{ width: "100%", height: '40px' }}
                                placeholder="Select Departure"
                                optionFilterProp="children"
                                className=""
                                value={row.city}
                                onChange={(value) => handleInputChangeHotel(index, "city", value)}
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
                            <label className="form-label">Room Type</label>
                            <select
                                className="form-select shadow"
                                name="room_type"
                                value={row.room_type}
                                onChange={(e) => handleInputChangeHotel(index, "room_type", e.target.value)}
                            >
                                <option selected>Open Select Room Type</option>
                                {roomType && roomType?.map((item) => {
                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Star Rating</label>
                            <select
                                className="form-select shadow"
                                name="star_rating"
                                value={row.star_rating}
                                onChange={(e) => handleInputChangeHotel(index, "star_rating", e.target.value)}
                            >
                                <option selected>Open Select Star Rating</option>
                                {starRatting && starRatting?.map((item) => {
                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label">
                                        Check-in <span className="text-danger fs-5">*</span>
                                    </label>
                                    <input className="form-control"
                                        type="date"
                                        name="check_in"
                                        value={row.check_in}
                                        onChange={(e) => handleInputChangeHotel(index, "check_in", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label">
                                        Check-out <span className="text-danger fs-5">*</span>
                                    </label>
                                    <input className="form-control"
                                        type="date"
                                        name="check_out"
                                        value={row.check_out}
                                        onChange={(e) => handleInputChangeHotel(index, "check_out", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label">Number of Nights</label>
                                    <input className="form-control" placeholder="Number of nigths"
                                        type="number"
                                        name="number_of_nights"
                                        value={row.number_of_nights}
                                        onChange={(e) => handleInputChangeHotel(index, "number_of_nights", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label">Budget</label>
                                    <input className="form-control" placeholder="Budget"
                                        type="number"
                                        name="budget"
                                        value={row.budget}
                                        onChange={(e) => handleInputChangeHotel(index, "budget", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Hotel Name</label>
                            <input className="form-control" placeholder="Hotel Name"
                                type="text"
                                name="hotel_name"
                                value={row.hotel_name}
                                onChange={(e) => handleInputChangeHotel(index, "hotel_name", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Number of Rooms</label>
                            <input className="form-control" placeholder="Number of rooms"
                                type="number"
                                name="number_of_rooms"
                                value={row.number_of_rooms}
                                onChange={(e) => handleInputChangeHotel(index, "number_of_rooms", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button
                            className={`btn btn-outline-danger m-0 ${index === 0 ? "d-none" : "form-label"}`}
                            onClick={() => removeRow(index)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            ))}

            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={addHotelRow}>
                    + Add More
                </button>
            </div>
        </div>
    );
}
