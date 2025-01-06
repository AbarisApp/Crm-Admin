import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import CustomInputField from '../../../../common/CustomInputField'

import WithoutAtricCustomInputField from '../../../../common/withoutAtrricCustomInp/WithoutAtricCustomInputField';
import { toast } from 'react-toastify';
import { Select } from 'antd';
import { addaFlightdiscount, cityMainGett, getagentClass, getAllfareType, getByairlineDiscount, getflightcabinclass, getjourneyType, updateairlinediscount } from '../../../../api/login/Login';
const { Option } = Select;


function FlightDiscountForm(props) {
    const [data, setData] = useState(null)
    const [initialValues, setIntialValues] = useState({
        markup_for: '',
        agent_class: [],
        from: '',
        to: '',
        cabin_class: [],
        journey_type: [],
        flight_type: [],
        discount_type: '',
        display_discount: false,
        value: '',
        max_limit: '',
        status: '',
        isActive: '',
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setIntialValues((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleMultiSelectChange = (value, name) => {
        setIntialValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChange2 = (value, name) => {
        setIntialValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const [jounoryType, setJounoryType] = useState(null)
    const [cabin, setcabin] = useState(null)
    const [city, setCity] = useState(null)
    const [fareType, setFareType] = useState(null)
    // console.log(jounoryType);

    const agentGet = async () => {
        try {
            const res = await getagentClass()
            // console.log(res?.data);
            setData(res?.data)
            const re4 = await cityMainGett()
            // console.log(res?.data);
            setCity(re4?.data)
            const res2 = await getjourneyType()
            // console.log(res?.data);
            setJounoryType(res2?.data)
            const res3 = await getflightcabinclass()
            // console.log(res?.data);
            setcabin(res3?.data)
            const resFare = await getAllfareType()
            // console.log(res?.data);
            setFareType(resFare?.data)

        } catch (error) {

        }
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${props?.selectedItemId === null ? "Add" : "Update"} ${'Success'}`, {
            position: "top-right",
        });
    };

    const submitData = async () => {
        console.log(initialValues);

        // if (!initialValues?.markup_for || !initialValues?.agent_class.length) {
        //     alert("Please fill all required fields!");
        //     return;
        // }
        try {
            if (props?.selectedItemId === null) {
                await addaFlightdiscount(initialValues);
                props?.getTransitionReport(0)
                toastSuccessMessage();
            } else {
                await updateairlinediscount(props.selectedItemId, initialValues);
                props?.getTransitionReport(0)
                toastSuccessMessage()
            }
            toastSuccessMessage();
            props.onHide();
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    useEffect(() => {
        const detbyIdData = async () => {
            if (props?.selectedItemId) {
                try {
                    const res = await getByairlineDiscount(props.selectedItemId);
                    setIntialValues(res?.data || {});
                } catch (error) {
                    console.error("Error fetching bus markup details:", error);
                }
            } else {
                setIntialValues({
                    markup_for: '',
                    agent_class: [],
                    from: '',
                    to: '',
                    cabin_class: [],
                    journey_type: [],
                    flight_type: [],
                    discount_type: '',
                    display_discount: false,
                    value: '',
                    max_limit: '',
                    status: '',
                    isActive: '',
                });
            }
        };
        detbyIdData();
    }, [props.selectedItemId]);

    useEffect(() => {
        agentGet()
    }, [])
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props?.selectedItemId === null ? 'Add' : 'Update'} Flight Discount
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <form className="tbl-captionn" >
                                        <div className="row">
                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Discount For <span style={{ color: 'red' }}>*</span></label>
                                                <select className="form-control" aria-label="Default select example"
                                                    name="markup_for"
                                                    value={initialValues.markup_for}
                                                    onChange={handleChange}
                                                >
                                                    <option selected> Select Discount For </option>
                                                    <option value={'b2b'}>B2B</option>
                                                    <option value={'b2c'}>B2C</option>
                                                </select>
                                            </div>
                                            {/* <div className="col-xl-4 mb-3">
                                                <label className="d-block my-1">Airline Code <span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter Airline Code"
                                                    name="airline_code"
                                                    value={initialValues.airline_code}
                                                    onChange={handleChange}
                                                />
                                            </div> */}
                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Agent Class  <span style={{ color: 'red' }}>*</span></label>
                                                <Select
                                                    showSearch
                                                    mode="multiple"
                                                    style={{ width: "100%", height: '40px' }}
                                                    placeholder="Select Agent Class "
                                                    optionFilterProp="children"
                                                    className=""

                                                    value={initialValues.agent_class}
                                                    onChange={(value) => handleMultiSelectChange(value, "agent_class")}
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                >
                                                    {data?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div>

                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">From Airport <span style={{ color: 'red' }}>*</span></label>
                                                <Select
                                                    showSearch
                                                    // mode="multiple"
                                                    style={{ width: "100%", height: '40px' }}
                                                    placeholder="Select From Airport"
                                                    optionFilterProp="children"
                                                    className=""
                                                    value={initialValues.from}
                                                    onChange={(value) => handleChange2(value, "from")}
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                >
                                                    {city?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            <div className="col-xl-6 mb-3 d-flex align-items-center">
                                                <input
                                                    type="checkbox"
                                                    name="display_discount"
                                                    id="from_any_airport"
                                                    checked={initialValues.display_discount}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="isExtra" className="ms-2">Display Discount</label>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">To Airport <span style={{ color: 'red' }}>*</span></label>
                                                <Select
                                                    showSearch
                                                    // mode="multiple"
                                                    style={{ width: "100%", height: '40px' }}
                                                    placeholder="Select To Airport"
                                                    optionFilterProp="children"
                                                    className=""
                                                    value={initialValues.to}
                                                    onChange={(value) => handleChange2(value, "to")}
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                >
                                                    {city?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.name}
                                                        </Option>
                                                    ))}
                                                </Select>

                                            </div>
                                            {/* <div className="col-xl-6 mb-3 d-flex align-items-center">
                                                <input
                                                    type="checkbox"
                                                    name="isExtra"
                                                    id="isExtra"
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="isExtra" className="ms-2">To Any Airport</label>
                                            </div> */}
                                            {/* <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Booking Class <span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter Booking Class"
                                                    name="dis_commision"
                                                    value={initialValues?.dis_commision}
                                                    onChange={handleChange}
                                                />
                                            </div> */}
                                            {/* <div className="col-xl-6 mb-3 d-flex align-items-center">
                                                <input
                                                    type="checkbox"
                                                    name="isExtra"
                                                    id="isExtra"
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="isExtra" className="ms-2">Any Booking Class</label>
                                            </div> */}

                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Fare Type <span style={{ color: 'red' }}>*</span></label>
                                                <Select
                                                    showSearch
                                                    mode="multiple"
                                                    style={{ width: "100%", height: '40px' }}
                                                    placeholder="Select Fare Type"
                                                    optionFilterProp="children"
                                                    className=""
                                                    value={initialValues.flight_type}
                                                    onChange={(value) => handleMultiSelectChange(value, "flight_type")}
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                >
                                                    {fareType?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            {/* <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">From Date <span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="date"
                                                    className="form-control"

                                                    name="dis_commision"
                                                    value={initialValues?.dis_commision}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">To Date <span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    name="dis_commision"
                                                    value={initialValues?.dis_commision}
                                                    onChange={handleChange}
                                                />
                                            </div> */}

                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Cabin Class  <span style={{ color: 'red' }}>*</span></label>
                                                <Select
                                                    showSearch
                                                    mode="multiple"
                                                    style={{ width: "100%", height: '40px' }}
                                                    placeholder="Select Cabin Class"
                                                    optionFilterProp="children"
                                                    className=""
                                                    value={initialValues.cabin_class}
                                                    onChange={(value) => handleMultiSelectChange(value, "cabin_class")}
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                >
                                                    {cabin?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.flight_cabin_name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            {/* <div className="col-xl-6 mb-3">

                                                <label className="d-block my-1">Flight Type  <span style={{ color: 'red' }}>*</span></label>
                                                <Select
                                                    showSearch
                                                    mode="multiple"
                                                    style={{ width: "100%", height: '40px' }}
                                                    placeholder="Select Flight Type"
                                                    optionFilterProp="children"
                                                    className=""
                                                    value={initialValues.agent_class}
                                                    onChange={handleMultiSelectChange}
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                >
                                                    {data?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div> */}
                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Journey Type <span style={{ color: 'red' }}>*</span></label>
                                                <Select
                                                    showSearch
                                                    mode="multiple"
                                                    style={{ width: "100%", height: '40px' }}
                                                    placeholder="Select Journey Type"
                                                    optionFilterProp="children"
                                                    className=""
                                                    value={initialValues.journey_type}
                                                    onChange={(value) => handleMultiSelectChange(value, "journey_type")}
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                >
                                                    {jounoryType?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.journey_type_name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Discount Type <span style={{ color: 'red' }}>*</span></label>
                                                <select className="form-control" aria-label="Default select example" name="discount_type"
                                                    value={initialValues.discount_type}
                                                    onChange={handleChange}
                                                >
                                                    <option > Select Discount Type </option>
                                                    <option value={'Fixed'}>Fixed</option>
                                                    <option value={'Percent'}>Percent</option>
                                                </select>

                                            </div>
                                            {/* <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Display Type <span style={{ color: 'red' }}>*</span></label>
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option > Display Discount</option>
                                                    <option value={1}>B2B</option>
                                                    <option value={3}>B2C</option>
                                                </select>

                                            </div> */}
                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Value  <span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter Value "
                                                    name="value"
                                                    value={initialValues?.value}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {/* <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Extra Discount  <span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter Extra Discount "
                                                    name="dis_commision"
                                                    value={initialValues?.dis_commision}
                                                    onChange={handleChange}
                                                />
                                            </div> */}

                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Max Limit  <span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter Max Limit "
                                                    name="max_limit"
                                                    value={initialValues?.max_limit}
                                                    onChange={handleChange}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1"> Status  <span style={{ color: 'red' }}>*</span></label>
                                                <select className="form-control" aria-label="Default select example" name="status"
                                                    value={initialValues?.status}
                                                    onChange={handleChange}
                                                >
                                                    <option > Select Status</option>
                                                    <option value={'Discount For'}>Discount For</option>
                                                    <option value={'Date range'}>Date range</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="d-block my-1">Active Status  <span style={{ color: 'red' }}>*</span></label>
                                                <select className="form-control" aria-label="Default select example" name="isActive"
                                                    value={initialValues?.isActive}
                                                    onChange={handleChange}
                                                >
                                                    <option >Select Active Status</option>
                                                    <option value={true}>Active</option>
                                                    <option value={false}>In Active</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-12 col-md-4">
                                                <div className='d-flex justify-content-end'>
                                                    <button className="btn btn-warning" type="button" onClick={submitData}>
                                                        {props?.selectedItemId === null ? 'Save' : 'Update'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FlightDiscountForm
