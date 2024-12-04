import React, { useEffect, useState } from "react";
import AddContact from "./AddContact";
import { Link, useParams } from "react-router-dom";
import { message, Popconfirm } from "antd";
import { deleteLeadNoteById, getLeadNoteById, getLeadNotes } from "../../../api/login/Login";
const dummyData = [
    {
        id: 1,
        title: "Note 1",
        description: "This is the first note",
        date: "2023-07-25",
        time: "10:00 AM",
        status: "Active",
        // Add more properties as needed
    }
    // Add more dummy data here if needed
];
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};
const NotesCunstomer = ({ title }) => {
    const [modalShow, setModalShow] = useState(false);

    const [data, setData] = useState()
    const parems = useParams()
    const getFloorMasters = async (page) => {

        try {
            const res = await getLeadNotes(page, 100, parems.id)
            setData(res?.data)
        } catch (error) {

        }
    }
    const deleteBlockAdd = async (id) => {
        try {
            await deleteLeadNoteById(id)
            getFloorMasters(0)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
    }

    const confirm = (id) => {
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    useEffect(() => {
        getFloorMasters(0)
    }, [])

    const [value, setValue] = useState()
    useEffect(() => {
        if (value) {
            setTimeout(() => {
                setModalShow(true)
            }, 1000);
        }
    }, [value])
    const [id, setId] = useState()
    const setIdModel = async (id) => {
        setId(id)
        try {
            const res = await getLeadNoteById(id)
            setValue(res?.data)
        } catch (error) {

        }
    }
    return (
        <>
            <h4>{title}</h4>
            <div className="container mt-4 card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-primary" onClick={() => setModalShow(true)}>+ New Note</button>
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
                    id={id}
                    getFloorMasters={getFloorMasters}
                    show={modalShow}
                    value={value}
                    onHide={() => setModalShow(false)}
                />
                <div className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Description</th>
                                <th scope="col text-center">Date Added</th>
                                <th scope="col text-center">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((contact, i) => (
                                <tr key={contact.id}>
                                    <td>{i + 1}</td>
                                    <td>{contact.description}</td>
                                    <td>{formatDate(contact.added_date)}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`#`} onClick={() => { setIdModel(contact?._id) }} className="btn btn-primary shadow btn-xs sharp me-1">
                                                <i className="fa fa-pencil" />
                                            </Link>
                                            <Popconfirm
                                                title="Delete Note!"
                                                description="Are you sure to delete?"
                                                onConfirm={() => confirm(contact?._id)}
                                                onCancel={cancel}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                    <i className="fa fa-trash" />
                                                </Link>
                                            </Popconfirm>
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

export default NotesCunstomer;
