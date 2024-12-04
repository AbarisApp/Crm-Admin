import React, { useState } from "react";
import AddContact from "./AddContact";
import { useParams } from "react-router-dom";

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

const ReminderPage = ({ title }) => {
    const [modalShow, setModalShow] = useState(false);
    const params = useParams();

    return (
        <>
            <h4>{title}</h4>
            <div className="container mt-4 card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-primary" onClick={() => setModalShow(true)}>
                        + New {title}
                    </button>
                    <div className="form-group">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search.."
                            style={{ width: "250px" }}
                        />
                    </div>
                </div>
                <AddContact show={modalShow} onHide={() => setModalShow(false)} />
                <div className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Description</th>
                                <th scope="col text-center">Date</th>
                                <th scope="col text-center">Remind</th>
                                <th scope="col text-center">Is Notified</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((reminder, i) => (
                                <tr key={reminder.id}>
                                    <td>{i + 1}</td>
                                    <td>{reminder.description}</td>
                                    <td>{reminder.date}</td>
                                    <td>{reminder.remind}</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={reminder.isNotified}
                                                readOnly
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ReminderPage;
