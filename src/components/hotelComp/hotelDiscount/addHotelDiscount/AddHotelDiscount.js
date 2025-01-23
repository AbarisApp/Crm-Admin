import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import CustomInputField from '../../../../common/CustomInputField'

import { addahoteldiscount, getagentClass, getByhotelDiscount, updatehoteldiscount } from '../../../../api/login/Login';
import { Select } from 'antd';
import { toast } from 'react-toastify';
const { Option } = Select;
function AddHotelDiscount(props) {
    const [data, setData] = useState(null)
    const [initialValues, setIntialValues] = useState({
        markup_for: '',
        agent_class: [],
        region_type: '',
        value: '',
        extra_discount: '',
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


    const agentGet = async () => {
        try {
            const res = await getagentClass()
            // console.log(res?.data);
            setData(res?.data)


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
                await addahoteldiscount(initialValues);
                props?.getTransitionReport(0)
                toastSuccessMessage();
            } else {
                await updatehoteldiscount(props.selectedItemId, initialValues);
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
                    const res = await getByhotelDiscount(props.selectedItemId);
                    setIntialValues(res?.data || {});
                } catch (error) {
                    console.error("Error fetching bus markup details:", error);
                }
            } else {
                setIntialValues({
                    markup_for: '',
                    agent_class: [],
                    region_type: '',
                    value: '',
                    extra_discount: '',
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
                        {props?.selectedItemId === null ? 'Add' : 'Update'} Hotel Discount
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row ">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <form className="tbl-captionn">
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
                                                <label className="d-block my-1">Region Type  <span style={{ color: 'red' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Region Type "
                                                    name="region_type"
                                                    value={initialValues?.region_type}
                                                    onChange={handleChange}
                                                />
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
                                            <div className="col-lg-12">
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

export default AddHotelDiscount