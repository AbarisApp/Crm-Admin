import React, { useState } from "react";
import AddContact from "./AddContact";
import { useParams } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // For edit and delete icons

const dummyData = [
    {
        id: 1,
        fullName: "Gothaer Versicherungen in",
        email: "sascha.barkholz@gothaer.de",
        position: "Manager",
        phone: "+49 231 9025851",
        active: true,
        lastLogin: "a week ago",
        file: "file1.pdf",
        showToCustomers: true,
        dateUpdated: "2024-10-01",
    },
    {
        id: 2,
        fullName: "Pero Nadoveza",
        email: "pero@hajduk.hr",
        position: "Developer",
        phone: "+385 91 1234567",
        active: true,
        lastLogin: "4 months ago",
        file: "file2.docx",
        showToCustomers: false,
        dateUpdated: "2024-09-29",
    },
];

const FilesPage = ({ title }) => {
    const [modalShow, setModalShow] = useState(false);

    const params = useParams();

    const handleDelete = (id) => {
        console.log("Delete file with ID:", id);
        // Add delete logic here
    };

    const handleEdit = (id) => {
        console.log("Edit file with ID:", id);
        // Add edit logic here
    };

    return (
        <>
            <h4>{title}</h4>
            <div className="container mt-4 card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-primary" onClick={() => setModalShow(true)}>+ New File</button>
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
                                <th scope="col">S.No</th>
                                <th scope="col">File</th>
                                <th scope="col">Show to Customers</th>
                                <th scope="col">Date Updated</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((contact, i) => (
                                <tr key={contact.id}>
                                    <td>{i + 1}</td>

                                    <td>{contact.file}</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={contact.showToCustomers}
                                                readOnly
                                            />
                                        </div>
                                    </td>
                                    <td>{contact.dateUpdated}</td>
                                    <td>
                                        <div className="d-flex">
                                            <button
                                                className="btn btn-sm btn-primary mr-2"
                                                onClick={() => handleEdit(contact.id)}
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleDelete(contact.id)}
                                            >
                                                <FaTrashAlt />
                                            </button>
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

export default FilesPage;
