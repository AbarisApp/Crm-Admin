import { Select } from "antd"
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"
import { addLead_reminder, getIdLead_reminder, updateLead_reminder } from "../../../../../../../api/login/Login";
const { Option } = Select;

const ReminderAdd = ({ cancelForm, actionType, editData, getTransitionReport }) => {
    const params = useParams()
    const [initialState, setInitialState] = useState({
        trcrm_lead_id: '',
        set_reminder_type: '',
        reminder_descriptions: '',
        date_to_be_notified: '',
        send_also_an_email_for_reminder: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInitialState((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    const [mealData, setMealData] = useState([])

    const comboData = async () => {
        try {
            // const res = await getTravelAllMealType()
            // setMealData(res?.data);

        } catch (error) {

        }
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };

    const submitData = async () => {
        // console.log(initialState);
        const clone = { ...initialState, trcrm_lead_id: params?.id }
        try {
            if (!editData?._id) {
                const res = await addLead_reminder(clone)
                // console.log(res);
                if (res?.error == false) {
                    toastSuccessMessage('Reminder Add Success !')
                    setTimeout(() => {
                        cancelForm()
                    }, 2000)
                    getTransitionReport(0)
                }
            } else {
                const res = await updateLead_reminder(editData._id, initialState)
                // console.log(res);
                if (res?.error == false) {
                    toastSuccessMessage('Reminder Update Success !')
                    setTimeout(() => {
                        cancelForm()
                    }, 2000)
                    getTransitionReport(0)
                }
            }

        } catch (error) {

        }

    }

    useEffect(() => {
        const getIdData = async () => {
            try {
                const res = await getIdLead_reminder(editData._id)
                console.log(res);
                setInitialState(res?.data)

            } catch (error) {

            }
        }
        if (editData && editData._id) {
            getIdData();
        }
    }, [editData])

    useEffect(() => {
        comboData()
    }, [])
    return (
        <div>
            <ToastContainer />
            <h4>Reminder {actionType == 'add' ? 'Add' : 'Update'}</h4>
            <div className="container mt-4 card">
                <div>
                    <form className="row" >
                        <div className="mb-3 col-4">
                            <label htmlFor="IFSC_code" className="form-label">Set Reminder To</label>
                            <select className="form-select shadow" name="set_reminder_type" value={initialState?.set_reminder_type} onChange={handleChange}>
                                <option>Open This Seelect Salutation</option>
                                <option value={'hour'}>Hour</option>
                                <option value={'week'}>Week</option>
                                <option value={'month'}>Month</option>
                            </select>
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="branch_name" className="form-label">Reminder Description</label>
                            <input type="text" className="form-control" id="branch_name" placeholder="Reminder Description" name="reminder_descriptions" value={initialState?.reminder_descriptions} onChange={handleChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="AC_name" className="form-label">Date to be Notified</label>
                            <input type="datetime-local" className="form-control" id="AC_name" name="date_to_be_notified" value={initialState?.date_to_be_notified} onChange={handleChange} />
                        </div>

                        <div className="mb-3 col-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"
                                    name="send_also_an_email_for_reminder"
                                    checked={initialState.send_also_an_email_for_reminder}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Send also an email for this reminder
                                </label>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="mb-3 col-12">
                            <Button type="button" className="btn btn-primary" onClick={submitData}>
                                {/* {editId ? 'Update' : 'Add'} */}
                                {actionType == 'add' ? 'Add' : 'Update'}
                            </Button>
                            <Button type="button" className="btn btn-danger" onClick={cancelForm}>Cancle</Button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ReminderAdd