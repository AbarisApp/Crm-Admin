import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addTRCRM_tr_follow_up, getTRCRM_call_status_master, getTRCRM_tr_time_master } from "../../../../../../../api/login/Login";


const FollowUpAdd = ({ cancelForm, getTransitionReport }) => {
    const [initialValues, setInitialValues] = useState({
        trcrm_lead_id: "",
        call_status: "",
        notes: '',
        title: '',
        date: '',
        time: ''
    });
    const params = useParams();

    const changeHandle = (e) => {
        const clone = { ...initialValues }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialValues(clone)
    }

    const [statusMaster, setStatusMaster] = useState(null)
    const [timeMaster, setTimeMaster] = useState(null)
    const getApiData = async () => {
        try {
            const res = await getTRCRM_call_status_master()
            setStatusMaster(res?.data)
            const re2 = await getTRCRM_tr_time_master()
            setTimeMaster(re2?.data)
            console.log(re2);

        } catch (error) {

        }
    }



    const toastSuccessMessage = () => {
        toast.success(`add Successfully`, {
            position: "top-center",
        });
    };


    const AddCallFollowUp = async () => {
        const clone = { ...initialValues, trcrm_lead_id: params?.id }
        try {
            const res = await addTRCRM_tr_follow_up(clone)
            // console.log(res);
            if (res?.error == false) {
                toastSuccessMessage()
                cancelForm()
                getTransitionReport()
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        getApiData()
    }, [])


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
                                <select className="form-select" aria-label="Default select example" name="call_status"
                                    value={initialValues?.call_status || ""}
                                    onChange={changeHandle} >
                                    <option value="" disabled>
                                        Select Status
                                    </option>
                                    {statusMaster && statusMaster?.map((item) => {
                                        return <option value={item?._id} key={item?._id}>Answered</option>
                                    })}

                                    {/* <option value="Waiting">Waiting</option>
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
                                    <option value="Outgoing Service Call">Outgoing Service Call</option> */}
                                </select>
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Note</label>
                                <input type="text" className="form-control" name="notes" value={initialValues?.notes} placeholder="Enter Note" onChange={changeHandle} />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Title</label>
                                <input type="text" className="form-control" name="title" value={initialValues?.title} placeholder="Enter Title" onChange={changeHandle} />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Date</label>
                                <input type="date" className="form-control" name="date" value={initialValues?.date} onChange={changeHandle} />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Time</label>
                                <select className="form-select" aria-label="Default select example" name="time"
                                    value={initialValues?.time || ""}
                                    onChange={changeHandle} >
                                    <option value="" disabled>
                                        Select Time
                                    </option>
                                    {timeMaster && timeMaster?.map((item) => {
                                        return <option value={item?._id} key={item?._id}>{item?.time}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-x-12-4 mb-3 text-align-center">
                                <button className="btn btn-primary" onClick={cancelForm}>Cancle</button>
                                <button type="button" className="btn btn-primary " onClick={AddCallFollowUp}>Save</button>
                            </div>

                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FollowUpAdd