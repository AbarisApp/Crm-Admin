import React, { useState } from 'react';
import Select from 'react-select';

function StartDays() {
    const [formData, setFormData] = useState({
        tourPurpose: "",
        vehicleType: "",
        tourType: "",
        placeToVisit: []
    });

    const tourPurposeOptions = [
        { label: "Business", value: "Business" },
        { label: "Leisure", value: "Leisure" },
        { label: "Adventure", value: "Adventure" },
    ];

    const vehicleTypeOptions = [
        { label: "Car", value: "Car" },
        { label: "Bike", value: "Bike" },
        { label: "Bus", value: "Bus" },
    ];

    const tourTypeOptions = [
        { label: "One Way", value: "One Way" },
        { label: "Round Trip", value: "Round Trip" },
    ];

    const placeToVisitOptions = [
        { label: "Paris", value: "Paris" },
        { label: "London", value: "London" },
        { label: "New York", value: "New York" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleMultiSelectChange = (selectedOptions) => {
        setFormData({
            ...formData,
            placeToVisit: selectedOptions ? selectedOptions.map(option => option.value) : [],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data: ", formData);
    };

    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0"><b>Day Start</b></h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label>Tour Purpose</label>
                                        <select
                                            name="tourPurpose"
                                            value={formData.tourPurpose}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        >
                                            <option value="">Select Tour Purpose</option>
                                            {tourPurposeOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label>Vehicle Type</label>
                                        <select
                                            name="vehicleType"
                                            value={formData.vehicleType}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        >
                                            <option value="">Select Vehicle Type</option>
                                            {vehicleTypeOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label>Tour Type</label>
                                        <select
                                            name="tourType"
                                            value={formData.tourType}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        >
                                            <option value="">Select Tour Type</option>
                                            {tourTypeOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label>Place to Visit</label>
                                        <Select
                                            isMulti
                                            options={placeToVisitOptions}
                                            onChange={handleMultiSelectChange}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                        <button className="btn btn-primary pd-x-20" type="submit">
                                            <i className="fas fa-search"></i> Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartDays;
