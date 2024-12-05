import { useState } from "react";
import TravelVaultSecurityChange from "./travelVaultSecurityChange/TravelVaultSecurityChange";
import TravelVaultAdd from "./travelVaultAdd/TravelVaultAdd";

const TravelVault = () => {
    const [modalShow, setModalShow] = useState(false);

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
    return (
        <>
            <TravelVaultSecurityChange
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            {addShow && (
                <TravelVaultAdd
                    actionType={actionType}
                    editData={editData}
                    cancelForm={cancelForm}
                // getTransitionReport={getTransitionReport}
                />
            )}
            {mainListcom && (
                <div className="container mt-4 card">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>Vault</h4>
                        <button type="button" className="btn btn-primary mb-3" style={{ width: "140px" }} onClick={funAddShow}>Add Vault</button>
                    </div>
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
                                <p><strong>Password:</strong> ******** <span className="lock-icon" onClick={() => setModalShow(true)}>🔒</span></p>
                            </div>
                            <div className="right-section">
                                <p><strong>Short Description:</strong> lk</p>
                            </div>
                        </div>
                        <div className="vault-footer">
                            <p>This vault entry is created by Test Admin - 46 minutes ago</p>
                        </div>
                    </div>
                </div>)}
        </>
    )
}

export default TravelVault