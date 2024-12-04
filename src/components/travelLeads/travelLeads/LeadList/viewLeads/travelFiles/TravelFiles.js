import { Pagination, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { doc_management_add_doc_get, doc_management_delete } from "../../../../../../api/login/Login";
import { useEffect, useState } from "react";
import TravelFilesAdd from "./travelFilesAdd/TravelFilesAdd";


const TravelFiles = () => {
    const [openMenuId, setOpenMenuId] = useState(null);

    // console.log(openMenuId);

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
    console.log(totalCount);
    const [data, setData] = useState(null)


    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        min_amt: 0,
        max_amt: 0,
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),
        // type: '',
        // trans_type: '',
        // order_id: '',
        // txn_id: '',
        // sortType: '',
        // sortType: ''
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
        const clone = { ...filterInitial, count: count, page: input, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await doc_management_add_doc_get(clone)
            // console.log(res);
            setTotalCount(res?.totalCount)
            setData(res?.data)
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        console.log(e - 1);

        setPage(e - 1)
        getTransitionReport(e - 1)
    };


    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)

    }, [])

    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const confirm = (id) => {
        console.log(id);

        deleteaData(id)
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-center",
        });
    };

    const deleteaData = async (id) => {
        try {
            const res = await doc_management_delete(id)
            if (res?.error == false) {
                toastSuccessMessage(res?.message)
                getTransitionReport()
            }
        } catch (error) {

        }
    }

    return (
        <>
            {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
            {/* <AllDocumentFilter /> */}
            {addShow && (
                <TravelFilesAdd
                    actionType={actionType}
                    editData={editData}
                    cancelForm={cancelForm}
                    getTransitionReport={getTransitionReport}
                />
            )}
            {mainListcom && (
                <section className="ListDistributer exppdf">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="table-responsive active-projects style-1">
                                        <div className="tbl-caption">
                                            <h4 className="heading mb-0"><b>Files</b></h4>
                                            <div>
                                                <button className="btn btn-primary btn-sm" aria-controls="offcanvasExample" onClick={funAddShow}>+ Files</button>
                                                {/* <button type="button" className="btn btn-secondary btn-sm" >
                    + Invite Employee
                </button> */}
                                                {/* <ExportPdf />
                                            {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                            </CSVLink>) : ""} */}
                                            </div>
                                        </div>
                                        <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                            {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                            <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                <thead>

                                                    <tr role="row">
                                                        {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    S.NO
                                                </th> */}

                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Document Name
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Document Category
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Tags
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Shared With Users
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Storage
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Created Date
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                            Created By
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data && data?.map((item) => {
                                                        return <tr role="row" className="odd" key={item?._id}>
                                                            <td >{item?.name}</td>
                                                            <td >{item?.category?.map((item, i) => {
                                                                return <p key={i}>{item?.service_name}</p>
                                                            })}</td>
                                                            <td >{item?.meta_tags?.map((item) => {
                                                                return <>
                                                                    <p>{item}</p>
                                                                </>
                                                            })}</td>
                                                            <td >
                                                                {item?.assign_share_with_users?.map((item) => {
                                                                    return <>
                                                                        <p>{item?.name}</p>
                                                                    </>
                                                                })}
                                                            </td>
                                                            <td >{item?.storage}</td>
                                                            <td >{item?.createdAt}</td>
                                                            <td >{item?.createdBy}</td>

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

                                            <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                                Total {totalCount} entries
                                            </div>
                                            <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                                <Pagination
                                                    // showSizeChanger
                                                    // onShowSizeChange={''}

                                                    // defaultCurrent={1}
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

                </section>
            )}
            <ToastContainer />
        </>
    )
}

export default TravelFiles