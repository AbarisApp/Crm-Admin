import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import { getAllAssign, postFeedBack } from '../../api/login/Login';
import Loadar from '../../common/loader/Loader';
import { useParams } from 'react-router-dom';

function AddFeedback(props) {
    const params = useParams()
    const [formValues, setFormValues] = useState({
        assignedTo: '',
        name: '',
        phone_no: '',
        satisfyByPrice: '',
        complete_info: '',
        best_part_of_visit: '',
        overall_satisfaction: '',
        lead_id: '',
        user_id:params.id
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.assignedTo = formValues.assignedTo ? "" : "Assigned To is required.";
        tempErrors.name = formValues.name ? "" : "Name is required.";
        tempErrors.phone_no = formValues.phone_no ? "" : "Phone Number is required.";
        tempErrors.satisfyByPrice = formValues.satisfyByPrice ? "" : "This field is required.";
        tempErrors.complete_info = formValues.complete_info ? "" : "This field is required.";
        tempErrors.best_part_of_visit = formValues.best_part_of_visit ? "" : "This field is required.";
        tempErrors.overall_satisfaction = formValues.overall_satisfaction ? "" : "Overall Satisfaction is required.";
        tempErrors.lead_id = formValues.lead_id ? "" : "Lead ID is required.";
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
        toast.success(`Add FeedBack Successfull`, {
            position: "top-right",
        });
    };
    const toastSuccessError = (message) => {
        toast.error(`Add FeedBack Faild `, {
            position: "top-right",
        });
    };

    const parem = useParams()

    const [loader, setLoader] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)
        const obj = { ...formValues,assignTo:[formValues.assignedTo], user_id: parem?.id }
        // console.log(obj);
        try {
            const res = await postFeedBack(obj)
            if (res.statusCode == '200') {
                toastSuccessMessage()
                setTimeout(() => {
                    setLoader(false)
                    setFormValues({
                        assignedTo: '',
                        name: '',
                        phone_no: '',
                        satisfyByPrice: '',
                        complete_info: '',
                        best_part_of_visit: '',
                        overall_satisfaction: '',
                        lead_id: ''
                    })
                    props?.getFloorMasters()
                    props.onHide()
                }, 1000);
            } else {
                setLoader(false)
                toastSuccessError()
            }
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
            <ToastContainer />
            {loader && <Loadar />}
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Quick Create Feedback
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="container mt-4" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Assigned To</label>
                            <select
                                name="assignedTo"
                                value={formValues.assignedTo}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                {allAssign && allAssign?.map((Item, i) => {
                                    return <option key={i} value={Item._id}>{Item.name}</option>
                                })}
                            </select>
                            {errors.assignedTo && <div className="text-danger">{errors.assignedTo}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                style={{ width: "100%" }}
                                value={formValues.name}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.name && <div className="text-danger">{errors.name}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phone_no"
                                style={{ width: "100%" }}
                                value={formValues.phone_no}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.phone_no && <div className="text-danger">{errors.phone_no}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Satisfied by Pricing</label>
                            <select
                                name="satisfyByPrice"
                                value={formValues.satisfyByPrice}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                            {errors.satisfyByPrice && <div className="text-danger">{errors.satisfyByPrice}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Has the representative provided the complete information?</label>
                            <select
                                name="complete_info"
                                value={formValues.complete_info}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                            {errors.complete_info && <div className="text-danger">{errors.complete_info}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Best Part of Visit</label>
                            <input
                                type="text"
                                name="best_part_of_visit"
                                style={{ width: "100%" }}
                                value={formValues.best_part_of_visit}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.best_part_of_visit && <div className="text-danger">{errors.best_part_of_visit}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Overall Satisfaction</label>
                            <select
                                name="overall_satisfaction"
                                value={formValues.overall_satisfaction}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="1">Very Satisfied</option>
                                <option value="2">Satisfied</option>
                                <option value="3">Neutral</option>
                                <option value="4">Dissatisfied</option>
                                <option value="5">Very Dissatisfied</option>
                            </select>
                            {errors.overall_satisfaction && <div className="text-danger">{errors.overall_satisfaction}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Lead ID</label>
                            <input
                                type="text"
                                name="lead_id"
                                style={{ width: "100%" }}
                                value={formValues.lead_id}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.lead_id && <div className="text-danger">{errors.lead_id}</div>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddFeedback;
