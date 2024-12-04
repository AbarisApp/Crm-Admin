import { message, Pagination, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./SearchTraveller";
import AddTravellerDetails from "./AddTravellerDetails";
import { deleteTRCRM_tr_traveller, getTRCRM_tr_traveller } from "../../../../../../api/login/Login";

export default function TravellerDetail() {
    const [Accordion, SetAccordion] = useState(false)
    const [show, setShow] = useState(false);
    const [addShow, setAddShow] = useState(false);
    const [actionType, setActionType] = useState("add");
    const [editData, setEditData] = useState(null);

    const [mainListcom, setMainListCom] = useState(true)
    const handleAccordin = (num) => {
        SetAccordion(num)
    }
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
        const clone = { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await getTRCRM_tr_traveller(clone)
            setTotalCount(res?.totalCount)
            setData(res?.data)
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
            await deleteTRCRM_tr_traveller(id)
            // let backList = totalCount % 11 === 0 ? page - 1 : page
            getTransitionReport(0)
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

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)

    }, [])
    return (
        <>
            {addShow && (
                <AddTravellerDetails
                    actionType={actionType}
                    editData={editData}
                    cancelForm={cancelForm}
                    getTransitionReport={getTransitionReport}
                />
            )}

            {mainListcom && (<div className="m-4">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0">Traveller Details</h4>
                        <div>
                            <button className="btn btn-primary btn-sm" type="button" role="button" aria-controls="offcanvasExample" onClick={funAddShow}><i class="fa-solid fa-user-plus"></i> Add Traveller</button>
                            {/* <Link className="btn btn-primary btn-sm" onClick={() => setShow(!show)}><i class="fa-solid fa-magnifying-glass"></i> Search</Link> */}
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-xl-12">

                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    {/* <div className="tbl-caption">
                                        <h4 className="heading mb-0" type="button" onClick={() => handleAccordin(!Accordion)}><button type="button" className="m-0 p-0">{Accordion === true ? <i class="fa-solid fa-circle-chevron-down"></i> : <i class="fa-solid fa-circle-chevron-up"></i>}</button> Lead Report</h4>
                                    </div>

                                    {Accordion &&
                                        <div className="row mx-2 my-4" style={{ gap: "20px 0px" }}>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Title</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">Mr</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Given Name</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">LEAD</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Last Name</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">Mr</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="d-flex">
                                                    <Link to={`/newvblock/${1}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    <Popconfirm
                                                    // title="Delete Block!"
                                                    // description="Are you sure to delete ?"
                                                    // onConfirm=""
                                                    // onCancel=""
                                                    // okText="Yes"
                                                    // cancelText="No"
                                                    >
                                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                    </Popconfirm>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Type</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">adult</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Date of Birth</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Contact No.</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Passport No.</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Pasport Expiry</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Date of issue</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Birth Place</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Place of issue</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Address</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Meal Preference</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Frequent Flyer</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Pan Card</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Comapay Name</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Comapay Pan Card</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <h3 className="text-secondary m-0 fs-6 fw-normal">Remark</h3>
                                                    <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                                </div>
                                            </div>
                                        </div>
                                    } */}

                                    <div className="">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S.no</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col text-center">Given Name</th>
                                                    <th scope="col text-center">Last Name</th>
                                                    <th scope="col text-center">Type adult</th>
                                                    <th scope="col text-center">Date of Birth</th>
                                                    <th scope="col text-center">Contact No.</th>
                                                    <th scope="col text-center">Passport No.</th>
                                                    <th scope="col">Pasport Expiry</th>
                                                    <th scope="col">Date of issue</th>
                                                    <th scope="col text-center">Birth Place</th>
                                                    <th scope="col text-center">Place of issue</th>
                                                    <th scope="col text-center">Address</th>
                                                    <th scope="col text-center">Meal Preference</th>
                                                    <th scope="col text-center">Pan Card</th>
                                                    <th scope="col text-center">Comapay Name</th>
                                                    <th scope="col text-center">Comapay Pan Card</th>
                                                    <th scope="col text-center">Remark</th>
                                                    <th scope="col text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data?.map((item, i) => {
                                                    // console.log(item);
                                                    return <tr className="odd" key={item?._id}>
                                                        <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.salutation}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.given_name}</td>
                                                        <th valign="top" className="dataTables_empty">
                                                            {item?.surname}
                                                        </th>
                                                        <td valign="top" className="dataTables_empty">{item?.customer_type}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.date_of_birth}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.contact_number}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.passport_number}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.passport_expiry}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.date_of_issue}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.place_of_birth}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.place_of_issue}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.address}</td>

                                                        <td valign="top" className="dataTables_empty">{item?.meal_preference}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.pan_card}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.company_name}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.company_pan_card}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.remark}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <button type="button" className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => funEditShow(item)}><i className="fa fa-pencil" /></button>
                                                                <Popconfirm
                                                                    title="Delete Travel!"
                                                                    description="Are you sure to delete ?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                // onCancel=""
                                                                // okText="Yes"
                                                                // cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                                </Popconfirm>
                                                            </div>
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

        </>
    )
}