import React, { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { addTRCRM_tr_traveller, getIdTRCRM_tr_traveller, getTravelAllMealType, updateTRCRM_tr_traveller } from "../../../../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";

export default function AddTravellerDetails({ cancelForm, actionType, editData, getTransitionReport }) {

    const [initialState, setInitialState] = useState({
        salutation: '',
        given_name: '',
        surname: '',
        customer_type: '',
        date_of_birth: '',
        contact_number: '',
        passport_number: '',
        passport_expiry: '',
        date_of_issue: '',
        place_of_issue: '',
        place_of_birth: '',
        address: '',
        meal_preference: '',
        frequent_flyer: '',
        pan_card: '',
        company_name: '',
        company_pan_card: '',
        remark: '',

    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // Update the state properly
        setInitialState((prevState) => ({
            ...prevState,
            [name]: type === "radio" ? value : value,
        }));
    }

    const [mealData, setMealData] = useState([])

    const comboData = async () => {
        try {
            const res = await getTravelAllMealType()
            setMealData(res?.data);

        } catch (error) {

        }
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };

    const submitData = async () => {
        // console.log(initialState);
        try {
            if (!editData?._id) {
                const res = await addTRCRM_tr_traveller(initialState)
                // console.log(res);
                if (res?.error == false) {
                    toastSuccessMessage('Traveller Add Success !')
                    setTimeout(() => {
                        cancelForm()
                    }, 2000)
                    getTransitionReport(0)
                }
            } else {
                const res = await updateTRCRM_tr_traveller(editData._id, initialState)
                // console.log(res);
                if (res?.error == false) {
                    toastSuccessMessage('Traveller Update Success !')
                    setTimeout(() => {
                        cancelForm()
                    }, 2000)
                    getTransitionReport(0)
                }
            }

        } catch (error) {

        }

    }

    useEffect(() => {
        const getIdData = async () => {
            try {
                const res = await getIdTRCRM_tr_traveller(editData._id)
                console.log(res);
                setInitialState(res?.data)

            } catch (error) {

            }
        }
        if (editData && editData._id) {
            getIdData();
        }
    }, [editData])

    useEffect(() => {
        comboData()
    }, [])

    return (
        <div className="m-4">
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Traveller Details</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Salutation </label>
                        <select className="form-select shadow" name="salutation" value={initialState?.salutation} onChange={handleChange}>
                            <option>Open This Seelect Salutation</option>
                            <option value={'Mr'}>Mr</option>
                            <option value={'Mrs'}>Mrs </option>
                            <option value={'Miss'}>Miss </option>
                            <option value={'Ms'}>Ms </option>
                        </select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Given Name<span className="text-danger fs-5">*</span></label>
                        <input className="form-control" type="text" placeholder="text" name="given_name" value={initialState?.given_name} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Surname <span className="text-danger fs-5">*</span></label>
                        <input className="form-control" type="text" placeholder="Surname" name="surname" value={initialState?.surname} onChange={handleChange} />
                    </div>
                </div>

                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Customer Type</label>
                        <div className="w-100 mt-1">
                            <div className="d-flex gap-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <input
                                        type="radio"
                                        name="customer_type"
                                        value="Adult"
                                        checked={initialState.customer_type === "Adult"}
                                        onChange={handleChange}
                                    />
                                    <label className="m-0">Adult</label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input
                                        type="radio"
                                        name="customer_type"
                                        value="Children"
                                        checked={initialState.customer_type === "Children"}
                                        onChange={handleChange}
                                    />
                                    <label className="m-0">Children</label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input
                                        type="radio"
                                        name="customer_type"
                                        value="Infant"
                                        checked={initialState.customer_type === "Infant"}
                                        onChange={handleChange}
                                    />
                                    <label className="m-0">Infant</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Date Of birth</label>
                        <input className="form-control" type="date" name="date_of_birth" value={initialState?.date_of_birth} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Contact Number</label>
                        <input className="form-control" type="number" placeholder="Contact Number" name="contact_number" value={initialState?.contact_number} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Passport Number</label>
                        <input className="form-control" type="text" placeholder="passport Number" name="passport_number" value={initialState?.passport_number} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Passport Expiry</label>
                        <input className="form-control" type="date" name="passport_expiry" value={initialState?.passport_expiry} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Date of Issue</label>
                        <input className="form-control" type="date" name="date_of_issue" value={initialState?.date_of_issue} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Place of Issue</label>
                        <input className="form-control" type="text" placeholder="place of issue" name="place_of_issue" value={initialState?.place_of_issue} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Place of Birth</label>
                        <input className="form-control" type="date" name="place_of_birth" value={initialState?.place_of_birth} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Address</label>
                        <input className="form-control" type="text" placeholder="Adress" name="address" value={initialState?.address} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Meal Preference</label>
                        {/* <input className="form-control" type="text" placeholder="meal preference" name="meal_preference" value={initialState?.meal_preference} onChange={handleChange} /> */}
                        <select className="form-select shadow" name="meal_preference" value={initialState?.meal_preference} onChange={handleChange}>
                            <option>Open This Seelect Meal Preference</option>
                            {mealData && mealData?.map((item) => {
                                return <option value={item?._id} key={item?._id}>{item?.meal_name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Frequent Flyer</label>
                        <div className="w-100">
                            <TextArea className="form-control" name="frequent_flyer" value={initialState?.frequent_flyer} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Pan Card</label>
                        <input className="form-control" type="text" placeholder="Pan card" name="pan_card" value={initialState?.pan_card} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Comapany Name</label>
                        <input className="form-control" type="text" placeholder="Comap" name="company_name" value={initialState?.company_name} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Comapany Pan Card</label>
                        <input type="text" className="form-control" placeholder="compaany pan card" name="company_pan_card" value={initialState?.company_pan_card} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Remark</label>
                        <input className="form-control" type="text" placeholder="reamark" name="remark" value={initialState?.remark} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="mt-4 d-flex gap-2">

                        <button type="button" className="btn btn-primary m-0" onClick={submitData}>{actionType == 'add' ? 'Add' : 'Update'}</button>
                        <button type="button" className="btn btn-outline-primary m-0" onClick={cancelForm}>Cancle</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    )
}