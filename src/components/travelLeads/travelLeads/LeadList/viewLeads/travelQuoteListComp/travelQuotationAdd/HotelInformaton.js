

import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiShip2Fill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Multiselect from 'multiselect-react-dropdown';
import { addTravelRoomType } from '../../../../../../../api/login/Login';
import { Select } from 'antd';
const { Option } = Select;

const HotelInformaton = ({ locations, setInitialData, costLable, costType, mealTypeData, curencyData, hotelTypeData, initialData, changeHandle, roomTypeData, handleInputChangeHotelInfo, setRowsHotelInfo, AddRowHotelInfo, rowsHotelInfo, onNext, onPrev, data }) => {

    const [input, setInput] = useState(data || {});

    const handleSaveAndNext = () => {
        onNext(input);
    };


    const [show, setShow] = useState(false);

    const [selectedIndustry, setSelectedIndustry] = useState([]);
    const [hotelInfoInpVal, setHotelInfoInpVal] = useState({
        singleSharing: '',
        doubleSharing: '',
        tripleSharing: '',
        childWithBed: '',
        childWithoutBed: '',
        flightCost: '',
        childFLightCost: '',
        infantFlightCost: '',
        visaCost: '',
        travelIbsuranceCost: '',
        taxCost: '',
    });
    const handleAllInputChange = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...hotelInfoInpVal };
        clonedObj[inpName] = inpVal;
        setHotelInfoInpVal(clonedObj);
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeHotelInfo = (index) => {
        setRowsHotelInfo(prevRows => prevRows.filter((_, i) => i !== index));
    };



    useEffect(() => {
        const calculateTotalAmount = () => {
            const {
                flight_cost,
                child_flight_cost,
                infant_flight_cost,
                visa_cost,
                travel_insurance_cost,
                tax_cost,
                other_cost,
                cruise_cost,
                bus_taxi_cost,
                train_cost,
                sighteen_cost,
                child_sightseen_cost,
            } = initialData;

            return (
                Number(flight_cost || 0) +
                Number(child_flight_cost || 0) +
                Number(infant_flight_cost || 0) +
                Number(visa_cost || 0) +
                Number(travel_insurance_cost || 0) +
                Number(tax_cost || 0) +
                Number(other_cost || 0) +
                Number(cruise_cost || 0) +
                Number(bus_taxi_cost || 0) +
                Number(train_cost || 0) +
                Number(sighteen_cost || 0) +
                Number(child_sightseen_cost || 0)
            );
        };

        // Update only the total_amount in the state
        setInitialData((prevState) => ({
            ...prevState,
            total_amount: calculateTotalAmount(),
        }));
    }, [
        initialData.flight_cost,
        initialData.child_flight_cost,
        initialData.infant_flight_cost,
        initialData.visa_cost,
        initialData.travel_insurance_cost,
        initialData.tax_cost,
        initialData.other_cost,
        initialData.cruise_cost,
        initialData.bus_taxi_cost,
        initialData.train_cost,
        initialData.sighteen_cost,
        initialData.child_sightseen_cost,
    ]);

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Add New Quotation</b>  <small style={{ textTransform: 'capitalize', marginLeft: '5px' }}> Control panel</small></h4>
                                    <div>
                                        <Link className='btn btn-primary btn-sm' onClick={handleShow} to={"#"} role="button" aria-controls="offcanvasExample">Add Hotel</Link>
                                    </div>
                                </div>
                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                        <p>Lead No. : SOF00001</p>
                                        <p>Customer : LEAD LNAME</p>
                                        <p>Assigned User : ABDUL QUADIR</p>
                                    </div>
                                    <h4 className='mb-3' style={{ color: 'red' }}>Hotel Information</h4>
                                    <div className='row'>
                                        <div className="form-group col-4">
                                            <label htmlFor="hotel">Cost Label</label>
                                            <select
                                                className="form-select form-control"
                                                name="costLlabel"
                                                value={initialData.costLlabel}
                                                onChange={changeHandle}
                                            >
                                                <option value="">Select Cost Label</option>
                                                {costLable &&
                                                    costLable?.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item?._id}>
                                                                {item?.name}
                                                            </option>
                                                        );
                                                    })}
                                            </select>
                                        </div>

                                        <div className="form-group col-4">
                                            <label htmlFor="hotel">Cost Type</label>
                                            <select
                                                className="form-select form-control"
                                                name="cost_type"
                                                value={initialData.cost_type}
                                                onChange={changeHandle}
                                            >
                                                <option value="">Select Cost Label</option>
                                                {costType &&
                                                    costType?.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item?._id}>
                                                                {item?.cost_type}
                                                            </option>
                                                        );
                                                    })}
                                            </select>
                                        </div>
                                        <div className="form-group col-4">
                                            <label htmlFor="hotel">Currency</label>
                                            <select
                                                className="form-select form-control"
                                                name="currency"
                                                value={initialData.currency}
                                                onChange={changeHandle}
                                            >
                                                <option value="">Select Currency</option>
                                                {curencyData &&
                                                    curencyData?.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item?._id}>
                                                                {item?.currency_name}
                                                            </option>
                                                        );
                                                    })}
                                            </select>
                                        </div>
                                    </div>
                                    {rowsHotelInfo.map((row, index) =>
                                        <div style={{ border: "1px dotted black", marginBottom: "8px" }} key={index}>
                                            <div className="row">
                                                <h4 className="mb-3" style={{ color: "red" }}>

                                                </h4>
                                                <div className="form-group col-4">
                                                    <label htmlFor="city">City</label>
                                                    <Select
                                                        showSearch
                                                        style={{ width: "100%", height: '40px' }}
                                                        placeholder="Select Departure"
                                                        optionFilterProp="children"
                                                        className=""
                                                        value={row.city}
                                                        onChange={(value) => handleInputChangeHotelInfo(index, "city", value)}
                                                    >
                                                        {locations?.map((loc) => (
                                                            <Option key={loc._id} value={loc._id}>
                                                                {loc.city_name}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="nights">Nights</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="nights"
                                                        value={row.nights}
                                                        onChange={(e) => handleInputChangeHotelInfo(index, "nights", e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="hotel">Hotel</label>
                                                    <select
                                                        className="form-select form-control"
                                                        name="hotel"
                                                        value={row.hotel}
                                                        onChange={(e) => handleInputChangeHotelInfo(index, "hotel", e.target.value)}
                                                    >
                                                        <option value="">Select Hotel</option>
                                                        {hotelTypeData &&
                                                            hotelTypeData?.map((item, i) => {
                                                                return (
                                                                    <option key={i} value={item?._id}>
                                                                        {item?.hotel_type}
                                                                    </option>
                                                                );
                                                            })}
                                                    </select>
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="roomType">Room Type</label>
                                                    <select
                                                        className="form-select form-control"
                                                        name="room_type"
                                                        value={row.room_type}
                                                        onChange={(e) => handleInputChangeHotelInfo(index, "room_type", e.target.value)}
                                                    >
                                                        <option value="">Select Room Type</option>
                                                        {roomTypeData &&
                                                            roomTypeData?.map((item, i) => {
                                                                return (
                                                                    <option key={i} value={item?._id}>
                                                                        {item?.name}
                                                                    </option>
                                                                );
                                                            })}
                                                    </select>
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="roomNo">Room No</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="no_of_room"
                                                        value={row.no_of_room}
                                                        onChange={(e) => handleInputChangeHotelInfo(index, "no_of_room", e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="mealPlan">Meal Plan</label>
                                                    <select
                                                        className="form-select form-control"
                                                        name="meal_plan"
                                                        value={row.meal_plan}
                                                        onChange={(e) => handleInputChangeHotelInfo(index, "meal_plan", e.target.value)}
                                                    >
                                                        <option value="">Select Meal Plan</option>
                                                        {mealTypeData &&
                                                            mealTypeData?.map((item, i) => {
                                                                return (
                                                                    <option key={i} value={item?._id}>
                                                                        {item?.meal_name}
                                                                    </option>
                                                                );
                                                            })}
                                                    </select>
                                                </div>
                                            </div>



                                            <div className="row mt-3">
                                                <div className="form-group col-3">
                                                    <label htmlFor="fromDate">Single Sharing (Amt)</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder='Enter Single Sharing (Amt)'
                                                        name="single_sharing_amt"
                                                        value={row.single_sharing_amt}
                                                        onChange={(e) => handleInputChangeHotelInfo(index, "single_sharing_amt", e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-3">
                                                    <label htmlFor="fromDate">Twin/Double Sharing (Amt)</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder='Enter Twin/Double Sharing (Amt)'
                                                        name="twin_double_sharing_amt"
                                                        value={row.twin_double_sharing_amt}
                                                        onChange={(e) => handleInputChangeHotelInfo(index, "twin_double_sharing_amt", e.target.value)}

                                                    />
                                                </div>
                                                <div className="form-group col-2">
                                                    <label htmlFor="fromDate">Triple Sharing (Amt)</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder='Enter Triple Sharing (Amt)'
                                                        name="triple_sharing_amt"
                                                        value={row.triple_sharing_amt}
                                                        onChange={(e) => handleInputChangeHotelInfo(index, "triple_sharing_amt", e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-2">
                                                    <label htmlFor="fromDate">Child With Bed (Amt)</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder='Enter Child With Bed (Amt)'
                                                        name="child_with_bed_amt"
                                                        value={row.child_with_bed_amt}
                                                        onChange={(e) => handleInputChangeHotelInfo(index, "child_with_bed_amt", e.target.value)}

                                                    />
                                                </div>
                                                <div className="form-group col-2">
                                                    <label htmlFor="fromDate">Child Without Bed</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder='Enter Child Without Bed (Amt)'
                                                        name="childwithout_bed_amt"
                                                        value={row.childwithout_bed_amt}
                                                        onChange={(e) => handleInputChangeHotelInfo(index, "childwithout_bed_amt", e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 my-2 d-flex justify-content-end">
                                                <button type='button' className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeHotelInfo(index)}><i class="fa-solid fa-xmark"></i></button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="my-4">
                                        <button type='button' className="btn m-0 btn-outline-primary" onClick={AddRowHotelInfo}> + Add more</button>
                                    </div>

                                    <h4 className='mb-3' style={{ color: 'red' }}>Other Cost</h4>
                                    <div className='row mt-2'>
                                        <label htmlFor="fromDate" style={{ color: 'gray' }}>Choose Cost Type</label>
                                        <div className="form-group col-2">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="choose_cost_type" id="perPerson" value="Per Person" checked={initialData.choose_cost_type === "Per Person"} onChange={changeHandle} />
                                                <label className="form-check-label" htmlFor="perPerson">
                                                    Per Person
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-2">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="choose_cost_type" id="Total" value="Total" checked={initialData.choose_cost_type === "Total"} onChange={changeHandle} />
                                                <label className="form-check-label" htmlFor="Total">
                                                    Total
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Flight Cost (INR)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Flight Cost (INR)'
                                                id="fromDate"
                                                name="flight_cost"
                                                value={initialData.flight_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Child Flight Cost (INR)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Child Flight Cost (INR)'
                                                id="fromDate"
                                                name="child_flight_cost"
                                                value={initialData.child_flight_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Infant Flight Cost (INR)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Infant Flight Cost (INR)'
                                                id="fromDate"
                                                name="infant_flight_cost"
                                                value={initialData.infant_flight_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Visa Cost (INR)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Visa Cost (INR)'
                                                id="fromDate"
                                                name="visa_cost"
                                                value={initialData.visa_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Travel Insurance Cost (INR)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Travel Insurance Cost (INR)'
                                                id="fromDate"
                                                name="travel_insurance_cost"
                                                value={initialData.travel_insurance_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Tax Cost (INR)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Tax Cost (INR)'
                                                id="fromDate"
                                                name="tax_cost"
                                                value={initialData.tax_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <IoSettings />
                                            <h3 className='mb-0 ms-2'>Other</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select
                                                className="form-select form-control"
                                                name="other_currency"
                                                value={initialData.other_currency}
                                                onChange={changeHandle}
                                            >
                                                <option value="">Select Currency</option>
                                                {curencyData &&
                                                    curencyData?.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item?._id}>
                                                                {item?.currency_name}
                                                            </option>
                                                        );
                                                    })}
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Other Cost</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Other Cost'
                                                id="fromDate"
                                                name="other_cost"
                                                value={initialData.other_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <RiShip2Fill />
                                            <h3 className='mb-0 ms-2'>Cruise</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select
                                                className="form-select form-control"
                                                name="cruise_currency"
                                                value={initialData.cruise_currency}
                                                onChange={changeHandle}
                                            >
                                                <option value="">Select Currency</option>
                                                {curencyData &&
                                                    curencyData?.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item?._id}>
                                                                {item?.currency_name}
                                                            </option>
                                                        );
                                                    })}
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Cruise Cost</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Cruise Cost'
                                                id="fromDate"
                                                name="cruise_cost"
                                                value={initialData.cruise_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaBus />
                                            <h3 className='mb-0 ms-2'>Bus and Taxi</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select
                                                className="form-select form-control"
                                                name="bus_taxi_currency"
                                                value={initialData.bus_taxi_currency}
                                                onChange={changeHandle}
                                            >
                                                <option value="">Select Currency</option>
                                                {curencyData &&
                                                    curencyData?.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item?._id}>
                                                                {item?.currency_name}
                                                            </option>
                                                        );
                                                    })}
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Bus and Taxi Cost</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Bus and Taxi Cost'
                                                id="fromDate"
                                                name="bus_taxi_cost"
                                                value={initialData.bus_taxi_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaTrainSubway />
                                            <h3 className='mb-0 ms-2'>Train</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select
                                                className="form-select form-control"
                                                name="train_currency"
                                                value={initialData.train_currency}
                                                onChange={changeHandle}
                                            >
                                                <option value="">Select Currency</option>
                                                {curencyData &&
                                                    curencyData?.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item?._id}>
                                                                {item?.currency_name}
                                                            </option>
                                                        );
                                                    })}
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Train Cost</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Train Cost'
                                                id="fromDate"
                                                name="train_cost"
                                                value={initialData.train_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaLocationArrow />
                                            <h3 className='mb-0 ms-2'>Sightseen</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select
                                                className="form-select form-control"
                                                name="sighteen_currency"
                                                value={initialData.sighteen_currency}
                                                onChange={changeHandle}
                                            >
                                                <option value="">Select Currency</option>
                                                {curencyData &&
                                                    curencyData?.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item?._id}>
                                                                {item?.currency_name}
                                                            </option>
                                                        );
                                                    })}
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Sightseen Cost</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Sightseen Cost'
                                                id="fromDate"
                                                name="sighteen_cost"
                                                value={initialData.sighteen_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaLocationArrow />
                                            <h3 className='mb-0 ms-2'>Child Sightseen</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select
                                                className="form-select form-control"
                                                name="child_sightseen_currency"
                                                value={initialData.child_sightseen_currency}
                                                onChange={changeHandle}
                                            >
                                                <option value="">Select Currency</option>
                                                {curencyData &&
                                                    curencyData?.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item?._id}>
                                                                {item?.currency_name}
                                                            </option>
                                                        );
                                                    })}
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Child Sightseen Cost</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Child Sightseen Cost'
                                                id="fromDate"
                                                name="child_sightseen_cost"
                                                value={initialData.child_sightseen_cost}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>

                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Total Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder='Enter Child Sightseen Cost'
                                                id="fromDate"
                                                disabled
                                                name="total_amount"
                                                value={initialData.total_amount}
                                            />
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-12'>
                                            <div>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Show Grand Total
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="form-group col-12 mt-3">
                                        <button className="btn btn-danger float-end" type='button' onClick={handleSaveAndNext} to="#" role="button" aria-controls="offcanvasExample">Save & Next</button>
                                        <button className="btn btn-primary float-end" type='button' aria-controls="offcanvasExample" onClick={onPrev}>Back</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >

                <Modal aria-labelledby="example-modal-sizes-title-lg"
                    dialogClassName="custom-modal" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">Add Hotel</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                            <div className='row p-0'>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Hotel Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Hotel Name'
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">City</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select City</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Address'
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Contact</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Contact'
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Rating</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select Rating</option>
                                        <option value={1}>1 Star</option>
                                        <option value={2}>2 Star</option>
                                        <option value={3}>3 Star</option>
                                        <option value={3}>4 Star</option>
                                        <option value={3}>5 Star</option>
                                    </select>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Hotel Type</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select Hotel Type</option>
                                        <option value={122}>Standard</option>
                                        <option value={222}>Deluxe</option>
                                        <option value={322}>Luxury</option>
                                    </select>
                                </div>

                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div >
        </>
    )
}

export default HotelInformaton