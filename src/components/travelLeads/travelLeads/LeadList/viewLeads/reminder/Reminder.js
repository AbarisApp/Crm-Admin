import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReminderAdd from "./reminderAdd/ReminderAdd";
import { message, Popconfirm } from "antd";
import { deleteLead_reminder, getLead_reminder } from "../../../../../../api/login/Login";

const dummyData = [
    {
        id: 1,
        description: "Follow-up with client",
        date: "2024-10-12",
        remind: "2 days before",
        isNotified: true,
    },
    {
        id: 2,
        description: "Team meeting",
        date: "2024-11-05",
        remind: "1 day before",
        isNotified: false,
    },
    {
        id: 3,
        description: "Project deadline",
        date: "2024-12-20",
        remind: "1 week before",
        isNotified: true,
    },
    // Add more dummy data here if needed
];
const LeadReminder = () => {
    const [modalShow, setModalShow] = useState(false);
    const params = useParams();
    const [addShow, setAddShow] = useState(false);
    const [actionType, setActionType] = useState("add");
    const [editData, setEditData] = useState(null);

    const [mainListcom, setMainListCom] = useState(true)
    const funAddShow = () => {
        setActionType("add");
        setEditData(null);
        setAddShow(true);
        setMainListCom(false);
    };

    const funEditShow = (traveller) => {
        setActionType("edit");
        setEditData(traveller);
        setAddShow(true);
        setMainListCom(false);
    };

    const cancelForm = () => {
        setAddShow(false);
        setMainListCom(true);
        setEditData(null);
    };

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    // console.log(page);
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),
    })



    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        // console.log('iojijip');
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await getLead_reminder(clone)
            setTotalCount(res?.totalCount)
            setData(res?.data)
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        // console.log(e - 1);
        setPage(e - 1)
        getTransitionReport(e - 1)
    };

    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteLead_reminder(id)
            // let backList = totalCount % 11 === 0 ? page - 1 : page
            getTransitionReport(0)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    const confirm = (id) => {
        console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)
    }, [])
    return (
        <>
            {/* <h4>{title}</h4> */}

            {addShow && (
                <ReminderAdd
                    actionType={actionType}
                    editData={editData}
                    cancelForm={cancelForm}
                    getTransitionReport={getTransitionReport}
                />
            )}
            {mainListcom && (
                <div className="container mt-4 card">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <button type="button" className="btn btn-primary" onClick={funAddShow}>
                            + New Reminder
                        </button>
                        {/* <div className="form-group">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search.."
                            style={{ width: "250px" }}
                        />
                    </div> */}
                    </div>

                    <div className="">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Description</th>
                                    <th scope="col text-center">Date</th>
                                    <th scope="col text-center">Remind</th>
                                    <th scope="col text-center">Is Notified</th>
                                    <th scope="col text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data?.map((item, i) => {
                                    return <tr key={item?._id}>
                                        <td>{(i + 1) + (page * count)}</td>
                                        <td style={{ textAlign: 'center' }}>{item?.reminder_descriptions}</td>
                                        <td style={{ textAlign: 'center' }}>{item?.date_to_be_notified}</td>
                                        <td style={{ textAlign: 'center' }}>{item?.set_reminder_type}</td>
                                        <td style={{ textAlign: 'center' }}>{item?.send_also_an_email_for_reminder == true ? 'Active' : 'InActive'}</td>
                                        <td>
                                            <div className="d-flex">
                                                <button type="button" className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => funEditShow(item)}><i className="fa fa-pencil" /></button>
                                                <Popconfirm
                                                    title="Delete Travel!"
                                                    description="Are you sure to delete ?"
                                                    onConfirm={() => confirm(item?._id)}
                                                // onCancel=""
                                                // okText="Yes"
                                                // cancelText="No"
                                                >
                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                </Popconfirm>
                                            </div>
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>)}
        </>
    );
}

export default LeadReminder