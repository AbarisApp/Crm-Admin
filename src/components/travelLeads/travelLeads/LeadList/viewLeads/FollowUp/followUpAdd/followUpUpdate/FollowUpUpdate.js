import { Button } from "antd"
import { useState } from "react";
import { Modal } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const FollowUpUpdate = (props) => {

    const [initialValues, setInitialValues] = useState({
        call_Status: "",
        message: "",
        check: false
    });
    const params = useParams();
    const changeHandle = (e) => {
        const { name, value, type, checked } = e.target;
        setInitialValues((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const toastSuccessMessage = () => {
        toast.success(`Email Setup Update Successfully`, {
            position: "top-center",
        });
    };


    const AddCallFollowUp = async () => {
        try {
            // const res = await UpdateAcc_email_setup(initialValues)
            // // console.log(res);
            // if (res?.error == false) {
            //     toastSuccessMessage()
            // }

        } catch (error) {

        }
    }
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
                        Reminder Action
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    {/* <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0 p-2">Add Follow up Calls</h4>
                                    </div> */}

                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Call Status</label>
                                            <select class="form-control" aria-label="Default select example">
                                                <option value="" selected>Select Status</option>
                                                <option value="Answered">Answered</option>
                                                <option value="Waiting">Waiting</option>
                                                <option value="Hangup">Hangup</option>
                                                <option value="Busy">Busy</option>
                                                <option value="Not Answered">Not Answered</option>
                                                <option value="Call Later">Call Later</option>
                                                <option value="Call Again">Call Again</option>
                                                <option value="Not Connected">Not Connected</option>
                                                <option value="Whatsapp">Whatsapp</option>
                                                <option value="Incoming Call">Incoming Call</option>
                                                <option value="Incoming Whatsapp">Incoming Whatsapp</option>
                                                <option value="Internal Remark">Incoming Remark</option>
                                                <option value="New Reminder">New Reminder</option>
                                                <option value="Incoming Service Call">Incoming Service Call</option>
                                                <option value="Outgoing Service Call">Outgoing Service Call</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Message</label>
                                            <input type="number" className="form-control" name="message" value={initialValues?.message} placeholder="Enter Note" onChange={changeHandle} />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            {/* <label for="exampleFormControlInput1" className="form-label">Message</label> */}
                                            <input type="checkbox" className="form-check-input" name="check"
                                                checked={initialValues.check}
                                                onChange={changeHandle} />
                                        </div>
                                        {initialValues?.check == true &&
                                            <>
                                                <div className="col-xl-6 mb-3">
                                                    <label for="exampleFormControlInput1" className="form-label"  >Time</label>
                                                    <input type="password" className="form-control" name="password" value={initialValues?.password} placeholder="Enter Time" onChange={changeHandle} />
                                                </div>

                                                <div className="col-xl-6 mb-3">
                                                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                                                    <input type="text" className="form-control" name="service" value={initialValues?.service} placeholder="Enter Title" onChange={changeHandle} />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <label for="exampleFormControlInput1" className="form-label">Date</label>
                                                    <input type="date" className="form-control" name="host" value={initialValues?.host} placeholder="Enter Host" onChange={changeHandle} />
                                                </div>
                                            </>
                                        }
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className="btn btn-primary" onClick={props.onHide}>Save</Button>

                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FollowUpUpdate