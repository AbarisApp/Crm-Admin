import { Select } from "antd";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap"
import { addbusmarkup, getagentClass, getBybusMarkup, updatebusmarkup } from "../../../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";

const { Option } = Select;
const BusMarkupAdd = (props) => {
    const [data, setData] = useState(null)
    const [initialValues, setIntialValues] = useState({
        agent_class: [],
        markup_for: '',
        region_type: '',
        markup_type: '',
        display_markup: '',
        max_limit: '',
        super_dis_commision: '',
        dis_commision: '',
        status: '',
        commision: '',
    })

    const handleChange = (e) => {
        const clone = { ...initialValues }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setIntialValues(clone)
    }

    const handleMultiSelectChange = (value) => {
        setIntialValues((prevState) => ({
            ...prevState,
            agent_class: value,
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
        // if (!initialValues?.markup_for || !initialValues?.agent_class.length) {
        //     alert("Please fill all required fields!");
        //     return;
        // }
        try {
            if (props?.selectedItemId === null) {
                await addbusmarkup(initialValues);
                props?.getTransitionReport(0)
                toastSuccessMessage();
            } else {
                await updatebusmarkup(props.selectedItemId, initialValues);
                props?.getTransitionReport(0)
                toastSuccessMessage()
            }
            // toastSuccessMessage();
            props.onHide();
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    useEffect(() => {
        const detbyIdData = async () => {
            if (props?.selectedItemId) {
                try {
                    const res = await getBybusMarkup(props.selectedItemId);
                    setIntialValues(res?.data || {});
                } catch (error) {
                    console.error("Error fetching bus markup details:", error);
                }
            } else {
                setIntialValues({
                    agent_class: [],
                    markup_for: '',
                    region_type: '',
                    markup_type: '',
                    display_markup: '',
                    max_limit: '',
                    super_dis_commision: '',
                    dis_commision: '',
                    status: '',
                    commision: '',
                });
            }
        };
        detbyIdData();
    }, [props.selectedItemId]);

    useEffect(() => {
        agentGet()
    }, [])
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props?.selectedItemId === null ? 'Add' : 'Update'} Buss Markup
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <form className="tbl-captionn">
                                    <div className="row">

                                        <div className="col-xl-6 mb-3">
                                            <label className="d-block my-1">Markup For  <span style={{ color: 'red' }}>*</span></label>
                                            <select className="form-control" aria-label="Default select example" name="markup_for"
                                                value={initialValues?.markup_for}
                                                onChange={handleChange}
                                            >
                                                <option >Select Markup For </option>
                                                <option value={'b2b'}>B2B</option>
                                                <option value={'b2c'}>B2C</option>
                                            </select>

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="d-block my-1">Agent Class <span style={{ color: 'red' }}>*</span></label>
                                            <Select
                                                showSearch
                                                mode="multiple"
                                                style={{ width: "100%", height: '40px' }}
                                                placeholder="Select Departure"
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
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="d-block my-1">Region Type  <span style={{ color: 'red' }}>*</span></label>
                                            <select className="form-control" aria-label="Default select example" name="region_type"
                                                value={initialValues?.region_type}
                                                onChange={handleChange}
                                            >
                                                <option >Select Region Type </option>
                                                <option value={'India'}>India</option>
                                                <option value={'Bhutan'}>Bhutan</option>
                                                <option value={'Nepal'}>Nepal</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="d-block my-1">Markup Type<span style={{ color: 'red' }}>*</span></label>
                                            <select className="form-control" aria-label="Default select example" name="markup_type"
                                                value={initialValues?.markup_type}
                                                onChange={handleChange}
                                            >
                                                <option>Select Markup Type </option>
                                                <option value={'Per Night'}>Per Night</option>
                                                <option value={'Per Room'}>Per Room</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="d-block my-1">Display Markup <span style={{ color: 'red' }}>*</span></label>
                                            <select className="form-control" aria-label="Default select example"
                                                name="display_markup"
                                                value={initialValues?.display_markup}
                                                onChange={handleChange}
                                            >
                                                <option >Select Display Markup </option>
                                                <option value={'In Tax'}>In Tax</option>
                                                <option value={'In Service Charge'}>In Service Charge</option>
                                            </select>

                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="d-block my-1">Value <span style={{ color: 'red' }}>*</span></label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Value"
                                                name="commision"
                                                value={initialValues?.commision}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <label className="d-block my-1">Max List <span style={{ color: 'red' }}>*</span></label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Max List"
                                                name="max_limit"
                                                value={initialValues?.max_limit}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <label className="d-block my-1">Distributer commision <span style={{ color: 'red' }}>*</span></label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Distributer commision"
                                                name="dis_commision"
                                                value={initialValues?.dis_commision}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <label className="d-block my-1">Super Distributer commision <span style={{ color: 'red' }}>*</span></label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Super Distributer commision "
                                                name="super_dis_commision"
                                                value={initialValues?.super_dis_commision}
                                                onChange={handleChange}
                                            />
                                        </div>


                                        <div className="col-xl-6 mb-3">
                                            <label className="d-block my-1"> Status <span style={{ color: 'red' }}>*</span></label>
                                            <select className="form-select" aria-label="Default select example" name="status"
                                                value={initialValues?.status}
                                                onChange={handleChange}
                                            >
                                                <option >Select Status</option>
                                                <option value={true}>Active</option>
                                                <option value={false}>In Active</option>
                                            </select>

                                        </div>

                                        <div className="col-lg-12">
                                            <div className='d-flex justify-content-end'>
                                                <button className="btn btn-danger" type="button" onClick={props.onHide}>
                                                    Cancle
                                                </button>
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
            </Modal.Body >
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
            <ToastContainer />
        </Modal >

    )
}

export default BusMarkupAdd