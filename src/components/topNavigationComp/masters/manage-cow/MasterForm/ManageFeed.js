import { Formik, FieldArray } from 'formik';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select';

function ManageAnimalInfo() {
    const [initialValues, setInitialValues] = useState({
        dateOfBirth: "",
        animalAge: "",
        gender: "",
        weight: "",
        height: "",
        color: "",
        animalType: "",
        pregnantStatus: "No",
        noOfPregnant: "",
        nextPregnancyApproxTime: "",
        milkPerDay: "",
        buyDate: "",
        buyFrom: "",
        buyingPrice: "",
        stallNo: "",
        previousVaccineDone: "No",
        note: "",
        vaccines: [],
        animalImages: [],
    });

    const validate = (values) => {
        let errors = {};
        if (!values.stallNo) errors.stallNo = "Stall No is required";
        if (!values.animalType) errors.animalType = "Animal Type is required";
        if (!values.dateOfBirth) errors.dateOfBirth = "Date of Birth is required";
        if (!values.buyDate) errors.buyDate = "Buy Date is required";
        return errors;
    };

    const submitForm = (values) => {
        console.log("Form data:", values);
    };

    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <h3 className='tbl-caption tbl-caption-2 p-2'>Add Animal Information</h3>
                <div className="card-body p-0">
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={submitForm}
                        enableReinitialize
                    >
                        {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                            <form onSubmit={handleSubmit}>
                                {/* Animal Basic Information */}
                                <div className="section">
                                    <h6>Animal Basic Information</h6>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Date of Birth *</label>
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                value={values.dateOfBirth}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                            {touched.dateOfBirth && errors.dateOfBirth && (
                                                <div className="text-danger">{errors.dateOfBirth}</div>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <label>Animal Age (Days) *</label>
                                            <input
                                                type="text"
                                                name="animalAge"
                                                value={values.animalAge}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Gender</label>
                                            <select
                                                name="gender"
                                                value={values.gender}
                                                onChange={handleChange}
                                                className="form-control"
                                            >
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Weight (KG) *</label>
                                            <input
                                                type="text"
                                                name="weight"
                                                value={values.weight}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Height (Inch) *</label>
                                            <input
                                                type="text"
                                                name="height"
                                                value={values.height}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Animal Type *</label>
                                            <input
                                                type="text"
                                                name="animalType"
                                                value={values.animalType}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                            {touched.animalType && errors.animalType && (
                                                <div className="text-danger">{errors.animalType}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Color</label>
                                            <input
                                                type="text"
                                                name="color"
                                                value={values.color}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>No of Pregnant (Previous Record)</label>
                                            <input
                                                type="text"
                                                name="noOfPregnant"
                                                value={values.noOfPregnant}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Next Pregnancy Approx Time</label>
                                            <input
                                                type="date"
                                                name="nextPregnancyApproxTime"
                                                value={values.nextPregnancyApproxTime}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Milk Per Day (LTR)</label>
                                            <input
                                                type="text"
                                                name="milkPerDay"
                                                value={values.milkPerDay}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Buy Date *</label>
                                            <input
                                                type="date"
                                                name="buyDate"
                                                value={values.buyDate}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                            {touched.buyDate && errors.buyDate && (
                                                <div className="text-danger">{errors.buyDate}</div>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <label>Buy From</label>
                                            <input
                                                type="text"
                                                name="buyFrom"
                                                value={values.buyFrom}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Buying Price *</label>
                                            <input
                                                type="text"
                                                name="buyingPrice"
                                                value={values.buyingPrice}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Stall No *</label>
                                            <select
                                                name="stallNo"
                                                value={values.stallNo}
                                                onChange={handleChange}
                                                className="form-control"
                                            >
                                                <option value="">--Select--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                {/* Add more stall numbers as needed */}
                                            </select>
                                            {touched.stallNo && errors.stallNo && (
                                                <div className="text-danger">{errors.stallNo}</div>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <label>Previous Vaccine Done</label>
                                            <select
                                                name="previousVaccineDone"
                                                value={values.previousVaccineDone}
                                                onChange={handleChange}
                                                className="form-control"
                                            >
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Note</label>
                                            <textarea
                                                name="note"
                                                value={values.note}
                                                onChange={handleChange}
                                                className="form-control"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* Select Previous Vaccine Done */}
                                <div className="section mt-4">
                                    <h6>Select Previous Vaccine Done</h6>
                                    <FieldArray name="vaccines">
                                        {() => (
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label style={{margin:"0 10px"}}>
                                                        <input
                                                            type="checkbox"
                                                            name="vaccines"
                                                            value="BDV - (60 Days)"
                                                            onChange={handleChange}
                                                        />
                                                        BDV - (60 Days)
                                                    </label>
                                                    <label style={{margin:"0 10px"}} className="ml-4">
                                                        <input
                                                            type="checkbox"
                                                            name="vaccines"
                                                            value="BRSV - (365 Days)"
                                                            onChange={handleChange}
                                                        />
                                                        BRSV - (365 Days)
                                                    </label>
                                                    <label style={{margin:"0 10px"}} className="ml-4">
                                                        <input
                                                            type="checkbox"
                                                            name="vaccines"
                                                            value="BVD - (90 Days)"
                                                            onChange={handleChange}
                                                        />
                                                        BVD - (90 Days)
                                                    </label>
                                                    <label style={{margin:"0 10px"}} className="ml-4">
                                                        <input
                                                            type="checkbox"
                                                            name="vaccines"
                                                            value="Vitamin A - (60 Days)"
                                                            onChange={handleChange}
                                                        />
                                                        Vitamin A - (60 Days)
                                                    </label>
                                                </div>
                                            </div>
                                        )}
                                    </FieldArray>
                                </div>

                                {/* Animal Image */}
                                <div className="section mt-4">
                                    <h6>Upload Animal Image</h6>
                                    <input
                                        type="file"
                                        name="animalImages"
                                        accept="image/*"
                                        onChange={(e) => setFieldValue("animalImages", e.target.files)}
                                        multiple
                                        className="form-control"
                                    />
                                </div>

                                <div className="section mt-4">
                                    <Button type="submit">Submit</Button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default ManageAnimalInfo;
