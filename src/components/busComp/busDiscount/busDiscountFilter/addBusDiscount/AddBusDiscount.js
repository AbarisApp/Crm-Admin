import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import CustomInputField from '../../../../../common/CustomInputField'
import { toast } from 'react-toastify'
import { addabusdiscount, getBybusDiscount, updatebusdiscount } from '../../../../../api/login/Login'

function AddBusDiscount(props) {
    const [data, setData] = useState(null)
    const [initialValues, setIntialValues] = useState({
        markup_for: '',
        value: '',
        max_limit: '',
        extra_discount: '',
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
            // const res = await getagentClass()
            // // console.log(res?.data);
            // setData(res?.data)
            // const re4 = await cityMainGett()
            // // console.log(res?.data);
            // setCity(re4?.data)
            // const res2 = await getjourneyType()
            // // console.log(res?.data);
            // setJounoryType(res2?.data)
            // const res3 = await getflightcabinclass()
            // // console.log(res?.data);
            // setcabin(res3?.data)
            // const resFare = await getAllfareType()
            // // console.log(res?.data);
            // setFareType(resFare?.data)

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
                await addabusdiscount(initialValues);
                props?.getTransitionReport(0)
                toastSuccessMessage();
            } else {
                await updatebusdiscount(props.selectedItemId, initialValues);
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
                    const res = await getBybusDiscount(props.selectedItemId);
                    setIntialValues(res?.data || {});
                } catch (error) {
                    console.error("Error fetching bus markup details:", error);
                }
            } else {
                setIntialValues({
                    markup_for: '',
                    value: '',
                    max_limit: '',
                    extra_discount: '',
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
                        {props?.selectedItemId === null ? 'Add' : 'Update'} Bus Discount
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
                                                    <option value={'B2B'}>B2B</option>
                                                    <option value={'B2C'}>B2C</option>
                                                </select>
                                            </div>
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
                                                <label className="d-block my-1">Extra Discount  <span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter Extra Discount "
                                                    name="extra_discount"
                                                    value={initialValues?.extra_discount}
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
                                                    <option > Select Active Status</option>
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

export default AddBusDiscount