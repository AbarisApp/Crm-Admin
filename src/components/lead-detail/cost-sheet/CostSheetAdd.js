import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Loadar from '../../../common/loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import { getAllAssign, postCost } from '../../../api/login/Login';
import { useParams } from 'react-router-dom';

function CostSheetAdd(props) {
    const [formValues, setFormValues] = useState({
        lead: '',
        course_name: '',
        unit_no: '',
        flat_type: '',
        block_no: '',
        floor: '',
        rate: '',
        buildUpArea: '',
        udsUpArea: '',
        carpetArea: '',
        guideLineValue: '',
        base_price: '',
        construction_cost: '',
        land_cost: '',
        total_amount: '',
        additional_charges: '',
        grand_total: '',
        assignTo: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.lead = formValues.lead ? "" : "Lead is required.";
        tempErrors.course_name = formValues.course_name ? "" : "Course Name is required.";
        tempErrors.unit_no = formValues.unit_no ? "" : "Unit No is required.";
        tempErrors.rate = formValues.rate ? "" : "Rate is required.";
        tempErrors.buildUpArea = formValues.buildUpArea ? "" : "Build Up Area is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };


    const [allAssign, setAllAsign] = useState()
    const getFloorMasters = async () => {

        try {
            const res = await getAllAssign()

            setAllAsign(res.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getFloorMasters()
    }, [])



    const toastSuccessMessage = (message) => {
        toast.success(`Add Cost Sheet Successfull`, {
            position: "top-right",
        });
    };
    const toastSuccessError = (message) => {
        toast.error(`Add Cost Sheet Faild `, {
            position: "top-right",
        });
    };

    const [loader, setLoader] = useState(false)
    const parem = useParams()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)
        try {
              const res =  await postCost({...formValues,user_id:parem.id})
              if (res.statusCode == '200') {
                toastSuccessMessage()
                props.getFloorMasters()
                setFormValues({
                    lead: '',
                    course_name: '',
                    unit_no: '',
                    flat_type: '',
                    block_no: '',
                    floor: '',
                    rate: '',
                    buildUpArea: '',
                    udsUpArea: '',
                    carpetArea: '',
                    guideLineValue: '',
                    base_price: '',
                    construction_cost: '',
                    land_cost: '',
                    total_amount: '',
                    additional_charges: '',
                    grand_total: '',
                    assignTo: ''
                });
              } else {
                toastSuccessError()
              }
              setTimeout(() => {
                setLoader(false)
                props.onHide()
              }, 1000);
        } catch (error) {

        }

    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {loader && <Loadar />}
            <ToastContainer />
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Quick Create Cost Sheet
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="container mt-4" onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Assigned To</label>
                            <select
                                name="assignTo"
                                value={formValues.assignTo[0]}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, assignTo: [e.target.value] })
                                }
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                {allAssign && allAssign?.map((Item, i) => {
                                    return <option key={i} value={Item._id}>{Item.name}</option>
                                })}
                            </select>
                        </div>
                        {/* Lead */}
                        <div className="col-md-6 mb-3">
                            <label>Lead</label>
                            <input
                                type="text"
                                name="lead"
                                value={formValues.lead}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.lead && <div className="text-danger">{errors.lead}</div>}
                        </div>

                        {/* Course Name */}
                        <div className="col-md-6 mb-3">
                            <label>Course Name</label>
                            <input
                                type="text"
                                name="course_name"
                                value={formValues.course_name}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.course_name && <div className="text-danger">{errors.course_name}</div>}
                        </div>

                        {/* Unit No */}
                        <div className="col-md-6 mb-3">
                            <label>Unit No</label>
                            <input
                                type="text"
                                name="unit_no"
                                value={formValues.unit_no}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.unit_no && <div className="text-danger">{errors.unit_no}</div>}
                        </div>

                        {/* Flat Type */}
                        <div className="col-md-6 mb-3">
                            <label>Flat Type</label>
                            <input
                                type="text"
                                name="flat_type"
                                value={formValues.flat_type}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Block No */}
                        <div className="col-md-6 mb-3">
                            <label>Block No</label>
                            <input
                                type="text"
                                name="block_no"
                                value={formValues.block_no}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Floor */}
                        <div className="col-md-6 mb-3">
                            <label>Floor</label>
                            <input
                                type="text"
                                name="floor"
                                value={formValues.floor}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Rate */}
                        <div className="col-md-6 mb-3">
                            <label>Rate</label>
                            <input
                                type="text"
                                name="rate"
                                value={formValues.rate}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.rate && <div className="text-danger">{errors.rate}</div>}
                        </div>

                        {/* Build Up Area */}
                        <div className="col-md-6 mb-3">
                            <label>Build Up Area</label>
                            <input
                                type="text"
                                name="buildUpArea"
                                value={formValues.buildUpArea}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.buildUpArea && <div className="text-danger">{errors.buildUpArea}</div>}
                        </div>

                        {/* UDS Area */}
                        <div className="col-md-6 mb-3">
                            <label>UDS Area</label>
                            <input
                                type="text"
                                name="udsUpArea"
                                value={formValues.udsUpArea}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Carpet Area */}
                        <div className="col-md-6 mb-3">
                            <label>Carpet Area</label>
                            <input
                                type="text"
                                name="carpetArea"
                                value={formValues.carpetArea}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Guideline Value */}
                        <div className="col-md-6 mb-3">
                            <label>Guideline Value</label>
                            <input
                                type="text"
                                name="guideLineValue"
                                value={formValues.guideLineValue}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Base Price */}
                        <div className="col-md-6 mb-3">
                            <label>Base Price</label>
                            <input
                                type="number"
                                name="base_price"
                                value={formValues.base_price}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Construction Cost */}
                        <div className="col-md-6 mb-3">
                            <label>Construction Cost</label>
                            <input
                                type="number"
                                name="construction_cost"
                                value={formValues.construction_cost}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Land Cost */}
                        <div className="col-md-6 mb-3">
                            <label>Land Cost</label>
                            <input
                                type="number"
                                name="land_cost"
                                value={formValues.land_cost}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Total Amount */}
                        <div className="col-md-6 mb-3">
                            <label>Total Amount</label>
                            <input
                                type="number"
                                name="total_amount"
                                value={formValues.total_amount}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Additional Charges */}
                        <div className="col-md-6 mb-3">
                            <label>Additional Charges</label>
                            <input
                                type="number"
                                name="additional_charges"
                                value={formValues.additional_charges}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Grand Total */}
                        <div className="col-md-6 mb-3">
                            <label>Grand Total</label>
                            <input
                                type="number"
                                name="grand_total"
                                value={formValues.grand_total}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        {/* Assigned To */}

                    </div>
                    <div className="d-flex justify-content-center">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default CostSheetAdd;
