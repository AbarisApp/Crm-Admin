import { useState } from "react";
import TravelTicketsAdd from "./travelTicketsAdd/TravelTicketsAdd"


const TravelTickets = () => {
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
            {addShow && (
                <TravelTicketsAdd
                    actionType={actionType}
                    editData={editData}
                    cancelForm={cancelForm}
                // getTransitionReport={getTransitionReport}
                />
            )}

            {mainListcom && (
                <div className='card'>
                    <h4>Tickets</h4>
                    {/* Header Buttons */}
                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <button type="button" className="btn btn-primary me-2" onClick={funAddShow}>+ Create Ticket</button>
                            {/* <button className="btn btn-primary">Zip Estimates</button> */}
                        </div>
                        <div className="d-flex align-items-center">
                            <input type="search" className="form-control" placeholder="Search..." />
                        </div>
                    </div>
                    {/* Table */}
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="table-light">
                                <tr>
                                    <th> #</th>
                                    <th>Subject</th>
                                    <th>Tags</th>
                                    <th>Department</th>
                                    <th>Service</th>
                                    <th>Contact</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Last Reply</th>
                                    <th>Created</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <select className="form-select w-auto">
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                        </div>
                        <div>
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#">Prev</a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>)}
        </>
    )
}

export default TravelTickets