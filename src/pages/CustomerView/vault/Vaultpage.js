import React, { useState } from "react";
import AddContact from "./AddContact";
import { useParams } from "react-router-dom";
import AddVault from "./AddVault";
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

const Vaultpage = ({ title }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);

    const parems = useParams()

    return (
        <>
            <AddContact
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <AddVault
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <h4>{title}</h4>
            <div className="container mt-4 card">
                <button className="btn btn-primary mb-3" onClick={() => { setModalShow2(true) }} style={{ width: "140px" }}>Add Vault</button>
                <div className="vault-entry-container">
                    <div className="vault-header">
                        <h3>Header Vault</h3>
                        <div className="icons">
                            <span className="edit-icon">✏️</span>
                            <span className="delete-icon">❌</span>
                        </div>
                    </div>

                    <div className="vault-details">
                        <div className="left-section">
                            <p><strong>Server Address:</strong> k</p>
                            <p><strong>Port:</strong> Not provided</p>
                            <p><strong>Username:</strong> testadmin@gmail.com</p>
                            <p style={{ cursor: 'pointer' }}><strong>Password:</strong> ******** <span className="lock-icon" onClick={() => setModalShow(true)}>🔒</span></p>
                        </div>

                        <div className="right-section">
                            <p><strong>Short Description:</strong> lk</p>
                        </div>
                    </div>

                    <div className="vault-footer">
                        <p>This vault entry is created by Test Admin - 46 minutes ago</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Vaultpage;
