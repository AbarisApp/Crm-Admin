import { Button } from "antd"
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getByIdTRCRM_tr_follow_up, getTRCRM_call_status_master, getTRCRM_tr_time_master, updateTRCRM_tr_follow_up } from "../../../../../../../../api/login/Login";


const FollowUpUpdate = (props) => {

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
        toast.success(`Replay Successfully`, {
            position: "top-center",
        });
    };


    const AddCallFollowUp = async () => {
        const clone = { ...initialValues, trcrm_lead_id: params?.id }
        try {
            const res = await updateTRCRM_tr_follow_up(props?.updateId, clone)
            // console.log(res);
            if (res?.error == false) {
                toastSuccessMessage()
                props.onHide()
                props?.getTransitionReport(0)
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        const getIdData = async () => {
            try {
                const res = await getByIdTRCRM_tr_follow_up(props?.updateId)
                setInitialValues(res?.data)
            } catch (error) {

            }
        }
        if (props?.updateId) {
            getIdData()
        }
    }, [props?.updateId])

    useEffect(() => {
        getApiData()
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
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className="btn btn-primary" onClick={AddCallFollowUp}>Save</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FollowUpUpdate