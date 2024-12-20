import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const FollowUpAdd = ({ cancelForm }) => {

    const [initialValues, setInitialValues] = useState({
        email: "",
        password: "",
        port_no: '',
        service: '',
        host: ''
    });
    const params = useParams();

    const changeHandle = (e) => {
        const clone = { ...initialValues }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialValues(clone)
    }



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
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Add Follow up Calls</h4>
                        </div>

                        <div className="row">
                            <div className="col-xl-6 mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Call Status</label>
                                <select class="form-select" aria-label="Default select example">
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
                                <label for="exampleFormControlInput1" className="form-label"  >Time</label>
                                <input type="password" className="form-control" name="password" value={initialValues?.password} placeholder="Enter Time" onChange={changeHandle} />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Note</label>
                                <input type="number" className="form-control" name="port_no" value={initialValues?.port_no} placeholder="Enter Note" onChange={changeHandle} />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Title</label>
                                <input type="text" className="form-control" name="service" value={initialValues?.service} placeholder="Enter Title" onChange={changeHandle} />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Date</label>
                                <input type="date" className="form-control" name="host" value={initialValues?.host} placeholder="Enter Host" onChange={changeHandle} />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Time</label>
                                <input type="time" className="form-control" name="host" value={initialValues?.host} placeholder="Enter Host" onChange={changeHandle} />
                            </div>

                            <div className="col-x-12-4 mb-3 text-align-center">
                                <button className="btn btn-primary" onClick={cancelForm}>Cancle</button>
                                <button className="btn btn-primary " onClick={AddCallFollowUp}>Save</button>

                            </div>

                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowUpAdd