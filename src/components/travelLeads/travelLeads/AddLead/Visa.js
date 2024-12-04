import React, { useState } from "react";


export default function Visa({ countryData, visaTypeData, visaCatData, AddVisaRow, rowsVisa, setRowsVisa, handleInputChangeVisa }) {


    const removeRow = (index) => {
        setRowsVisa(prevRows => prevRows.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Visa</h4>
                </div>
            </div>
            {rowsVisa.map((row, index) => (
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Country <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select className="form-select shadow"
                                    name="country"
                                    value={row.country}
                                    onChange={(e) => handleInputChangeVisa(index, "country", e.target.value)}
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
                            <label className="form-label">Visa Category</label>
                            <div className="w-100">
                                <select className="form-select shadow "
                                    name="visa_category"
                                    value={row.visa_category}
                                    onChange={(e) => handleInputChangeVisa(index, "visa_category", e.target.value)}
                                >
                                    <option selected>Open Select Visa Category</option>
                                    {visaCatData && visaCatData?.map((item) => {
                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Visa type</label>
                                    <div className="w-100">
                                        <select className="form-select shadow "
                                            name="visa_type"
                                            value={row.visa_type}
                                            onChange={(e) => handleInputChangeVisa(index, "visa_type", e.target.value)}
                                        >
                                            <option selected>Open Select Visa type</option>
                                            {visaTypeData && visaTypeData?.map((item) => {
                                                return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Duration <span className="text-danger fs-5">*</span></label>
                                    <input className="form-control" placeholder="Duration" type="text"
                                        name="duration"
                                        value={row.duration}
                                        onChange={(e) => handleInputChangeVisa(index, "duration", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Travel Date</label>
                                    <input className="form-control" type="date"
                                        name="travel_date"
                                        value={row.travel_date}
                                        onChange={(e) => handleInputChangeVisa(index, "travel_date", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Job Profile</label>
                                    <input placeholder="Job Profile" type="text" className="form-control"
                                        name="job_profile"
                                        value={row.job_profile}
                                        onChange={(e) => handleInputChangeVisa(index, "job_profile", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Age</label>
                                    <input type="number" className="form-control" placeholder="Age"
                                        name="age"
                                        value={row.age}
                                        onChange={(e) => handleInputChangeVisa(index, "age", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Qualification</label>
                                    <input placeholder="Qualifiction" type="text" className="form-control"
                                        name="qualification"
                                        value={row.qualification}
                                        onChange={(e) => handleInputChangeVisa(index, "qualification", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="form-label">Description</label>
                                    <div className="w-100">
                                        <textarea className="form-control" style={{ height: "100px" }}
                                            name="description"
                                            value={row.description}
                                            onChange={(e) => handleInputChangeVisa(index, "description", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button
                            className={`btn btn-outline-danger m-0 ${index === 0 ? "d-none" : "d-block"}`}
                            onClick={() => removeRow(index)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            ))}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddVisaRow}>
                    + Add more
                </button>
            </div>
        </div>
    );
}
