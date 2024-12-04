import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import AdvanceSearch from "./AdvanceSearch";
import { Adults } from "./AdultRoom.";
import { useNavigate } from "react-router-dom";

export default function FindHotel() {
    const [Advance, setAdvance] = useState(false)
    const navigate = useNavigate()
    const anotherPage = () => {
        navigate('/availableholidayhotels')
    }
    return (
        <>
            <div className="row my-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0"></div>
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Search accommodations for</h4>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span className="text-primary">2 adults, 1 room</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <div style={{ width: "300px", height: "250px" }} className="overflow-auto">
                                                <Dropdown.Item
                                                    href="#"
                                                    onClick={(e) => e.stopPropagation()} // Prevents the dropdown from closing
                                                >
                                                    <div className="d-flex border-b border-1 rounded-0 align-items-center justify-content-between">
                                                        <h2 className="fs-6">Room 1</h2>
                                                        <p className="fs-6 text-capitalize">Maximum 9 Guests</p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    href="#"
                                                    onClick={(e) => e.stopPropagation()} // Prevents the dropdown from closing
                                                >
                                                    <Adults title={"Adults"} />
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    href="#"
                                                    onClick={(e) => e.stopPropagation()} // Prevents the dropdown from closing
                                                >
                                                    <Adults title={"Teens"} subDetail={"12-16 years inclusive"} Teen={true} />
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    href="#"
                                                    onClick={(e) => e.stopPropagation()} // Prevents the dropdown from closing
                                                >
                                                    <Adults title={"children"} subDetail={"2-11 year inclusive"} children={true} />
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    href="#"
                                                    onClick={(e) => e.stopPropagation()} // Prevents the dropdown from closing
                                                >
                                                    <Adults title={"Infants"} subDetail={"0 month"} />
                                                </Dropdown.Item>
                                                <div className="d-flex gap-2">
                                                    <button className="btn btn-primary bg-primary"><i class="fa-solid fa-plus"></i> Add Room</button>
                                                    <button className="btn btn-primary m-0 bg-primary">Apply</button>
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">Destination  <span className="text-danger fs-5">*</span></label>
                                            <input className="form-control" placeholder="Search City or hotel" type="search" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">Check-in Date   <span className="text-danger fs-5">*</span></label>
                                            <input className="form-control" type="date" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">Check-out date  <span className="text-danger fs-5">*</span></label>
                                            <input className="form-control" type="date" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">Night</label>
                                            <input className="form-control" type="numbert" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">Night</label>
                                            <select className="form-select shadow" name="Status">
                                                <option>-- Any --</option>
                                                <option>1 </option>
                                                <option>2 </option>
                                                <option>3 </option>
                                                <option>4 </option>
                                                <option>5 </option>
                                                <option>Apartment Deluxe </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <p className="fs-6 mt-2"> <i class="fa-solid fa-circle-exclamation"></i> Select the suitable options</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="mt-2">
                                            <label className="form-label">Category  <span className="text-danger fs-5">*</span></label>
                                            <div className="d-flex gap-4">
                                                <div className="d-flex gap-2 align-items-center">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="m-0">Available Only</label>
                                                </div>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="m-0">Combined Room Types</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {!Advance && <div className="col-12 mt-4">
                                        <button type="button" className="btn m-0 btn-outline-primary" onClick={() => setAdvance(true)}>Advanced Search <i class="fa-solid fa-caret-down"></i></button>
                                    </div>}
                                </div>
                                {Advance && <div>
                                    <AdvanceSearch setAdvance={setAdvance} Advance={Advance} />
                                </div>}
                                <div className="mt-4 d-flex gap-2">
                                    <button type="button" className="btn m-0 btn-danger">Reset Search</button>
                                    <button type="button" className="btn m-0 btn-primary" onClick={anotherPage}>Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}