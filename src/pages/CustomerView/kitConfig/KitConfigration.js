import React, { useState } from "react";
import AddContact from "./AddContact";
import { useParams } from "react-router-dom";
const dummyData = [
    {
        id: 1,
        fullName: "Gothaer Versicherungen in",
        email: "sascha.barkholz@gothaer.de",
        position: "Manager",
        phone: "+49 231 9025851",
        active: true,
        lastLogin: "a week ago",
    },
    {
        id: 2,
        fullName: "Pero Nadoveza",
        email: "pero@hajduk.hr",
        position: "Developer",
        phone: "+385 91 1234567",
        active: true,
        lastLogin: "4 months ago",
    },
    {
        id: 1,
        fullName: "Gothaer Versicherungen in",
        email: "sascha.barkholz@gothaer.de",
        position: "Manager",
        phone: "+49 231 9025851",
        active: true,
        lastLogin: "a week ago",
    },
    {
        id: 2,
        fullName: "Pero Nadoveza",
        email: "pero@hajduk.hr",
        position: "Developer",
        phone: "+385 91 1234567",
        active: true,
        lastLogin: "4 months ago",
    },
    // Add more dummy data here if needed
];

const KitConfigration = ({title}) => {
    const [modalShow, setModalShow] = useState(false);


    return (
        <>
            <h4>{title}</h4>
        <div className="container mt-4 card">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button className="btn btn-primary" onClick={() => setModalShow(true)}>+ New Schedule</button>
                <div className="form-group">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search.."
                        style={{ width: "250px" }}
                    />
                </div>
            </div>
            <AddContact
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Full Name</th>
                            <th scope="col text-center">Email</th>
                            <th scope="col text-center">Position</th>
                            <th scope="col text-center">Phone</th>
                            <th scope="col text-center">Active</th>
                            <th scope="col text-center">Last Login</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((contact ,i) => (
                            <tr key={contact.id}>
                                <td>{i + 1}</td>
                                <td>{contact.fullName}</td>
                                <td>{contact.email}</td>
                                <td>{contact.position}</td>
                                <td>{contact.phone}</td>
                                <td>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={contact.active}
                                            readOnly
                                        />
                                    </div>
                                </td>
                                <td>{contact.lastLogin}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
        </>
    );
};

export default KitConfigration;
