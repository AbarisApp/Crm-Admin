import { useEffect, useState } from "react";
import TravelTicketsAdd from "./travelTicketsAdd/TravelTicketsAdd"
import { Pagination } from "antd";
import { Link, useParams } from "react-router-dom";
import { DisputeData } from "../../../../../../api/login/Login";


const TravelTickets = () => {
    const [addShow, setAddShow] = useState(false);
    const [actionType, setActionType] = useState("add");
    const [editData, setEditData] = useState(null);
    const prarms = useParams()


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


    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [aepsData, setAepsData] = useState()
    const [loading, setLoading] = useState(false)
    const [exportExcelData, setExportExcelData] = useState(false)
    const [userData, setUserData] = useState(false)
    const token = window.localStorage.getItem('userToken')
    // { name, customer mobile, datetime, amount, message, transaction status, dispute status }
    const [initialValues, setIntialValues] = useState({
        name: "",
        start_date: "",
        end_date: "",
        member_code: "",
        member_shop_name: "",
        ticket_no: "",
        subject: "",
        department: "",
        priority: "",
        reason: "",
        status: "",
        amount: count,
        message: page,
        transactionstatus: "",
        disputestatus: "",
        customer_mobile: "",
    })

    const submitForm = async (values) => {
        console.log(values);
        try {
            // const res = await DisputeData({ page: page, count, user_id: token, ...values });
            // setAepsData(res?.data);
            // setLoading(false)
        } catch (error) {

        }
    }
    const getDmtTxnData = async (num) => {
        setLoading(true)
        try {
            const res = await DisputeData({ page: num ? num : page, count, userid: prarms?.id, user_id: token });
            setAepsData(res?.data);
            setLoading(false)
        } catch (error) {

        }
    }


    const onChangeVal = (e) => {
        // setPage(e - 1)
        setTimeout(() => {
        }, 1000);
        getDmtTxnData(e - 1)
    };


    useEffect(() => {
        getDmtTxnData()
        // const fetchUserType = async () => {
        //   setLoading(true)
        //   try {
        //     const response = await usersList();
        //     setUserData(response?.data);

        //     setLoading(false)
        //   } catch (error) {
        //     alert("Error fetching User type:", error);
        //   }
        // };
        // fetchUserType();
    }, [])
    return (
        <>
            {addShow && (
                <TravelTicketsAdd
                    actionType={actionType}
                    editData={editData}
                    cancelForm={cancelForm}
                    getDmtTxnData={getDmtTxnData}
                />
            )}

            {mainListcom && (
                <div className='card'>

                    {/* Header Buttons */}
                    <div className="d-flex justify-content-between mb-3">
                        <h4>Tickets</h4>
                        <div>
                            <button type="button" className="btn btn-primary me-2" onClick={funAddShow}>+ Create Ticket</button>
                            {/* <button className="btn btn-primary">Zip Estimates</button> */}
                        </div>
                        {/* <div className="d-flex align-items-center">
                            <input type="search" className="form-control" placeholder="Search..." />
                        </div> */}
                    </div>
                    {/* Table */}
                    <div className="table-responsive">
                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                            <thead>

                                <tr role="row">
                                    {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                        Sr. No
                                                    </th> */}
                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        Creation Date					</th>

                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                        Member Code
                                    </th>
                                    <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                        Mobile No
                                    </th>
                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                        Member / Shop Name
                                    </th>

                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        Ticket No			 </th>

                                    {/* <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                    Amount					</th> */}


                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                        Subject			</th>


                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                        Department				</th>
                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                        Priority				</th>
                                    {/* <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Reason				</th> */}
                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                        Status				</th>
                                    <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                        Last Reply By				</th>
                                    {/* <th className="sorting text-center" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                        Action				</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {aepsData?.data?.map((item, i) => {

                                    return <tr role="row" className="odd" key={i} style={{ cursor: "pointer" }} >
                                        {/* <td>{i + 1}</td> */}
                                        <td>{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + " , " + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td>
                                        <td>{item?.refer_id}</td>
                                        <td>{item?.mobile}</td>
                                        <td>{item?.shop_name ? item?.shop_name : item?.name}</td>

                                        <td>{item?.refer_code}</td>
                                        <td>{item?.subject}</td>
                                        <td>{item?.department_id}</td>
                                        <td>{item?.priority}</td>
                                        {/* <td>{"----"}</td> */}
                                        <td><span className="badge badge-success text-light border-0 w-100" style={{ backgroundColor: `${item?.status === "pending" ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.status === "success" ? '0.8rem' : ''}` }}>{item?.status == "success" ? 'Success' : 'Pending'}</span></td>
                                        <td>{item?.lastReply}</td>

                                        {/* <td className='text-center'>

                                            <Link className='btn btn-warning color2' to={`/disputes/view/${item._id}`}>Reply</Link>
                                        </td> */}
                                    </tr>
                                })}

                            </tbody>
                        </table>

                        <div className="d-flex justify-content-between">

                            <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                Total {aepsData?.totalCount} entries
                            </div>
                            <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                <Pagination
                                    /* showSizeChanger
                                    onShowSizeChange={''} */

                                    defaultCurrent={1}
                                    onChange={onChangeVal}
                                    total={aepsData?.totalCount}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}

                </div>)}
        </>
    )
}

export default TravelTickets