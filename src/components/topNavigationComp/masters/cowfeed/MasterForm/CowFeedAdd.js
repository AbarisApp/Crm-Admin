import { Formik, FieldArray } from 'formik';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select';

function CowFeedAdd() {
    const [initialValues, setInitialValues] = useState({
        stallNo: "",
        cowNumber: "",
        date: "",
        note: "",
        feedItems: [
            { name: "Chara", quantity: "", unit: "", feedingTime: "" },
            { name: "Grass", quantity: "", unit: "", feedingTime: "" },
            { name: "Milk", quantity: "", unit: "", feedingTime: "" },
            { name: "Salt", quantity: "", unit: "", feedingTime: "" },
            { name: "Water", quantity: "", unit: "", feedingTime: "" },
        ],
    });

    const unitOptions = [
        { value: "kg", label: "Kg" },
        { value: "litre", label: "Litre" },
    ];

    const validate = (values) => {
        let errors = {};
        if (!values.stallNo) errors.stallNo = "Stall No is required";
        if (!values.cowNumber) errors.cowNumber = "Cow Number is required";
        if (!values.date) errors.date = "Date is required";
        return errors;
    };

    const submitForm = (values) => {
        console.log("Form data:", values);
    };

    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <h3 className='tbl-caption tbl-caption-2 p-2'>Add Cow Feed</h3>
                <div className="card-body p-0">
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={submitForm}
                        enableReinitialize
                    >
                        {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                            <form onSubmit={handleSubmit}>
                                {/* Basic Information */}
                                <div className="section">
                                    <h6>Basic Information</h6>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Stall No *</label>
                                            <input
                                                type="text"
                                                name="stallNo"
                                                value={values.stallNo}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                            {touched.stallNo && errors.stallNo && (
                                                <div className="text-danger">{errors.stallNo}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4">
                                            <label>Cow Number *</label>
                                            <input
                                                type="text"
                                                name="cowNumber"
                                                value={values.cowNumber}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                            {touched.cowNumber && errors.cowNumber && (
                                                <div className="text-danger">{errors.cowNumber}</div>
                                            )}
                                        </div>

                                        <div className="col-md-4">
                                            <label>Date *</label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={values.date}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                            {touched.date && errors.date && (
                                                <div className="text-danger">{errors.date}</div>
                                            )}
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
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Feed Informations */}
                                <div className="section mt-4">
                                    <h6>Feed Informations</h6>
                                    <FieldArray name="feedItems">
                                        {() => (
                                            <>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th className='text-center'>Food Item</th>
                                                            <th className='text-center'>Item Quantity</th>
                                                            <th className='text-center'>Unit</th>
                                                            <th className='text-center'>Feeding Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {values.feedItems.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    <input
                                                                        type="checkbox"
                                                                        name={`feedItems.${index}.selected`}
                                                                        onChange={(e) => {
                                                                            setFieldValue(`feedItems.${index}.selected`, e.target.checked);
                                                                        }}
                                                                    />
                                                                    {item.name}
                                                                </td>
                                                                <td>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            name={`feedItems.${index}.quantity`}
                                                                            value={values.feedItems[index].quantity}
                                                                            onChange={handleChange}
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-group">
                                                                        <Select
                                                                            name={`feedItems.${index}.unit`}
                                                                            options={unitOptions}
                                                                            value={unitOptions.find(option => option.value === values.feedItems[index].unit)}
                                                                            onChange={(selectedOption) => setFieldValue(`feedItems.${index}.unit`, selectedOption.value)}
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="time"
                                                                            name={`feedItems.${index}.feedingTime`}
                                                                            value={values.feedItems[index].feedingTime}
                                                                            onChange={handleChange}
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </>
                                        )}
                                    </FieldArray>
                                </div>

                                <div className="mt-4">
                                    <Button type="submit" className="btn btn-primary">Submit</Button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default CowFeedAdd;
