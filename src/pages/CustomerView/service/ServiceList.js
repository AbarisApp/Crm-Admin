import React, { useEffect, useState } from "react";
import AddContact from "./AddContact";
import { Link, useParams } from "react-router-dom";
import { deleteLeadServiceReqById, getLeadServiceReq, getLeadServiceReqById } from "../../../api/login/Login";
import { message, Popconfirm } from "antd";
import { baseUrlImage } from "../../../baseUrl";
import EditContact from "./EditContact";
import { use } from "i18next";

const dummyData = [
    {
        id: 1,
        customerName: "John Doe",
        customerNumber: "+1 234 567 8901",
        taskDetail: "Installation",
        prefDate: "2024-10-01",
        prefTime: "14:00",
        address: "123 Main Street",
        landmark: "Near City Park",
        productDetail: "Air Conditioner",
        modelNo: "AC1234",
        serviceDescription: "Install new air conditioner.",
        message: "Please make sure to call before arrival.",
        attachedPhoto: null, // You can handle images here if needed
    },
    {
        id: 2,
        customerName: "Jane Smith",
        customerNumber: "+44 789 654 3210",
        taskDetail: "Repair",
        prefDate: "2024-10-03",
        prefTime: "10:30",
        address: "456 High Street",
        landmark: "Next to Mall",
        productDetail: "Washing Machine",
        modelNo: "WM5678",
        serviceDescription: "Fix water leakage issue.",
        message: "Bring spare parts if necessary.",
        attachedPhoto: null, // Example with no photo
    },
    // Add more dummy data as needed
];

const ServiceList = ({ title }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const params = useParams();

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()


    // ----------list Api----------
    const param = useParams()
    const getFloorMasters = async (page) => {

        setLoading(true)
        try {
            const res = await getLeadServiceReq(page, count, params.id)
            setTotalCount(res?.totalCount)
            setData(res?.data)

            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    // add Area
    const onChangeVal = (e) => {
        // console.log(e);
        getFloorMasters(e - 1)

    };
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteLeadServiceReqById(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getFloorMasters(backList)
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
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    useEffect(() => {
        getFloorMasters(page)
    }, [])

    const [id, setId] = useState()
    const [dataId, setDataId] = useState()
    useEffect(() => {
        if (dataId) {
            setModalShow2(true)
        }
    }, [dataId])
    const setIdOpenModel = async (id) => {
        setId(id)
        const res2 = await getLeadServiceReqById(id)
        setDataId(res2.data)
        // console.log(res2.data);


    }

    return (
        <>
            <h4>{title}</h4>
            <div className="container mt-4 card" style={{ width: "1000px" }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-primary" onClick={() => setModalShow(true)}>+ Service Request</button>
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
                    getFloorMasters={getFloorMasters}
                    onHide={() => setModalShow(false)}
                />
                {dataId && <EditContact
                    id={id}
                    data={dataId}
                    show={modalShow2}
                    getFloorMasters={getFloorMasters}
                    onHide={() => setModalShow2(false)}
                />}
                <div className="" style={{ overflow: "auto" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Customer Number</th>
                                <th scope="col">Task Detail</th>
                                <th scope="col">Preferred Date</th>
                                {/* <th scope="col">Preferred Time</th> */}
                                <th scope="col">Address</th>
                                <th scope="col">Landmark</th>
                                <th scope="col">Product Detail</th>
                                <th scope="col">Model No</th>
                                <th scope="col">Service Description</th>
                                <th scope="col">Message</th>
                                <th scope="col">Attached Photo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((contact, i) => (
                                <tr key={contact.id}>
                                    <td>{i + 1}</td>
                                    <td>{contact.customer_name}</td>
                                    <td>{contact.customer_number}</td>
                                    <td>{contact.taskDetail}</td>
                                    <td>{contact.preferred_date}</td>
                                    {/* <td>{contact.prefTime}</td> */}
                                    <td>{contact.address}</td>
                                    <td>{contact.landmark_product_detail}</td>
                                    <td>{contact.product_detail}</td>
                                    <td>{contact.model_no}</td>
                                    <td>{contact.service_description}</td>
                                    <td>{contact.message}</td>
                                    <td>
                                        {contact.attach_photo ? (
                                            <img
                                                src={`${baseUrlImage}${contact.attach_photo}`}
                                                alt="Attached"
                                                style={{ width: "50px", height: "50px" }}
                                            />
                                        ) : (
                                            "No Photo"
                                        )}
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <Link
                                                // to={`/create-contest/${contact?._id}`}
                                                to='#'
                                                onClick={() => { setIdOpenModel(contact?._id) }}
                                                className="btn btn-primary shadow btn-xs sharp me-1">
                                                <i className="fa fa-pencil" />
                                            </Link>
                                            <Popconfirm
                                                title="Delete !"
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

export default ServiceList;
