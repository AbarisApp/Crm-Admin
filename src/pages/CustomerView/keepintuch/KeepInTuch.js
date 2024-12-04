import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
const dummyData = [
    {
        id: 1,
        fullName: "Gothaer Versicherungen in",
        email: "sascha.barkholz@gothaer.de",
        position: "Manager",

    },
    {
        id: 2,
        fullName: "Pero Nadoveza",
        email: "pero@hajduk.hr",
        position: "Developer",

    },
    {
        id: 1,
        fullName: "Gothaer Versicherungen in",
        email: "sascha.barkholz@gothaer.de",
        position: "Manager",

    },

    // Add more dummy data here if needed
];

const KeepInTuch = ({ title }) => {


    return (
        <>
            <h4>{title}</h4>
            <div className="container mt-4 card">
                <div className="row">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-group">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search.."
                                style={{ width: "250px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Name</th>
                                <th scope="col text-center">Email</th>
                                <th scope="col text-center">Position</th>
                                <th scope="col text-center">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((contact, i) => (
                                <tr key={contact.id}>
                                    <td>{i + 1}</td>
                                    <td>{contact.fullName}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.position}</td>
                                    <td>
                                        <Link to='/customer-view/1/keep-in-touch-configration' className="btn btn-primary">Keep In Touch</Link>
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

export default KeepInTuch;
