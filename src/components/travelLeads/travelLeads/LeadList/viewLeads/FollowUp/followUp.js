import { useEffect, useState } from "react";

import FollowUpAdd from "./followUpAdd/FollowUpAdd";
import { Link, useParams } from "react-router-dom";
import { deletTRCRM_tr_follow_up, getByIdTRCRM_tr_lead, getTRCRM_tr_follow_up } from "../../../../../../api/login/Login";
import FollowUpUpdate from "./followUpAdd/followUpUpdate/FollowUpUpdate";
import { FaReply } from "react-icons/fa";
import { message, Pagination, Popconfirm } from "antd";


function FollowUp() {
    const [modalShow, setModalShow] = useState(false);
    const params = useParams()
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
    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    // console.log(page);
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [updateId, setUpdateId] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),
    })



    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        // console.log('iojijip');
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: input, lead_id: params?.id, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await getTRCRM_tr_follow_up(clone)
            if (res?.data) {
                setTotalCount(res?.totalCount)
                setData(res?.data)
            }
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        // console.log(e - 1);

        setPage(e - 1)
        getTransitionReport(e - 1)
    };

    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deletTRCRM_tr_follow_up(id)
            // let backList = totalCount % 11 === 0 ? page - 1 : page
            getTransitionReport(0)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    const confirm = (id) => {
        // console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };

    const modalShowButton = (id) => {
        setUpdateId(id)
        setModalShow(true)

    }

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)

    }, [])


    const [leadIdData, setLeadIdData] = useState(null)
    // console.log(leadIdData);
    const leadIdGet = async () => {
        try {
            const res = await getByIdTRCRM_tr_lead(params?.id)
            // console.log(res);
            setLeadIdData(res?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        leadIdGet()
    }, [params?.id])
    return (
        <>
            <div className="row">
                <div className="col-xl-3 mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <p>{leadIdData?.first_name} {leadIdData?.last_name}</p>
                </div>
                <div className="col-xl-3 mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                    <p>{leadIdData?.mobile_number}</p>
                </div>
                <div className="col-xl-3 mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Assigned User</label>
                    <p>{leadIdData?.assigned_to?.name}</p>
                </div>
                <div className="col-xl-3 mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Present User</label>
                    <p>{leadIdData?.first_name}</p>
                </div>
            </div>

            {addShow && (
                <FollowUpAdd
                    actionType={actionType}
                    editData={editData}
                    cancelForm={cancelForm}
                    getTransitionReport={getTransitionReport}
                />
            )}

            {mainListcom && (<div className="m-4">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0">Follow up Calls</h4>
                        <div>
                            <button className="btn btn-primary btn-sm" type="button" role="button" aria-controls="offcanvasExample" onClick={funAddShow}><i class="fa-solid fa-user-plus"></i> Add Follow up Calls</button>
                            {/* <Link className="btn btn-primary btn-sm" onClick={() => setShow(!show)}><i class="fa-solid fa-magnifying-glass"></i> Search</Link> */}
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-xl-12">

                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S.no</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col text-center">Time</th>
                                                    <th scope="col text-center">Last Call</th>
                                                    <th scope="col text-center">Note</th>
                                                    <th scope="col text-center">title</th>
                                                    <th scope="col text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {data && data?.map((item, i) => {
                                                    // console.log(item);
                                                    return */}

                                                {data && data?.map((item, i) => {
                                                    return <tr className="odd" key={item?._id}>
                                                        <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.date}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.time?.time}</td>
                                                        <td scope="col text-center">{item?.call_status?.name}</td>
                                                        <td scope="col text-center">{item?.notes}</td>
                                                        <td scope="col text-center">{item?.title}</td>
                                                        <td valign="top" className="dataTables_empty">
                                                            <FaReply style={{ width: '20px', height: '20px' }} onClick={() => modalShowButton(item?._id)} />
                                                            <Popconfirm
                                                                title="Delete Follow Up!"
                                                                description="Are you sure to Follow Up"
                                                                onConfirm={() => confirm(item?._id)}
                                                                // onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                    <i className="fa fa-trash" />
                                                                </Link>
                                                            </Popconfirm>
                                                        </td>

                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="dataTables_info_page">
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {totalCount}  entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}

                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* {show && <Search show={show} setShow={setShow} />} */}
            </div>)}

            <FollowUpUpdate
                show={modalShow}
                onHide={() => setModalShow(false)}
                updateId={updateId}
                getTransitionReport={getTransitionReport}
            />

        </>
    )
}
export default FollowUp