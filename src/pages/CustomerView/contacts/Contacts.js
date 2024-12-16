import React, { useEffect, useState } from "react";
import AddContact from "./AddContact";
import { useParams } from "react-router-dom";
import { getAccContactByPage } from "../../../api/login/Login";

const ContactTable = ({ title }) => {
    const [modalShow, setModalShow] = useState(false);
    const params = useParams();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(10);
    const [totalPages, setTotalPages] = useState(0); // Store the total number of pages

    const getData = async () => {
        try {
            const response = await getAccContactByPage(page, count, '123');
            setData(response?.data);
            setTotalPages(response?.totalPages); // Assuming API provides total pages
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    useEffect(() => {
        getData();
    }, [page]); // Run getData whenever page changes

    const handleNextPage = () => {
        if (page < totalPages) setPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) setPage(prevPage => prevPage - 1);
    };

    return (
        <>
            <h4>{title}</h4>
            <div className="container mt-4 card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-primary" onClick={() => setModalShow(true)}>+ New Contact</button>
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
                            {data?.length && data?.map((contact, i) => (
                                <tr key={contact.id}>
                                    <td>{i + 1 + (page - 1) * count}</td>
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
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-secondary"
                            onClick={handlePrevPage}
                            disabled={page === 1}
                        >
                            Previous
                        </button>
                        <span>Page {page} of {totalPages}</span>
                        <button
                            className="btn btn-secondary"
                            onClick={handleNextPage}
                            disabled={page === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactTable;
