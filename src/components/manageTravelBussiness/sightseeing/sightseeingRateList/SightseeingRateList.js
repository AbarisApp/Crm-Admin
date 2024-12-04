import { Pagination, Popconfirm } from "antd"
import { Link, useParams } from "react-router-dom"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import SightseeingRateListFilter from "./sightseeingRateListFilter/SightseeingRateListFilter";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { deleteTRCRM_sight_seeing_rate_master, TRCRM_sight_seeing_rate_master } from "../../../../api/login/Login";


const SightseeingRateList = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: " Manage Travel Business",
        title_2: 'Sightseeing Rates',
        path_2: ``
    };

    const params = useParams()
    console.log(params);

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
        const clone = { ...filterInitial, count: count, page: input, id: params?.id, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await TRCRM_sight_seeing_rate_master(clone)
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


    const ResetData = async () => {
        setLoading(true)
        const obj = {
            count: 10,
            page: 0,
            min_amt: 0,
            max_amt: 0,
            end_date: '',
            start_date: '',
            type: '',
            trans_type: '',
            order_id: '',
            txn_id: '',
            sortType: '',
            sortType: '',
            user_id: window.localStorage.getItem('userIdToken')
        }
        try {
            // const res = await walletsREports(obj)
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)
            // setFilterInitial({
            //     end_date: '',
            //     start_date: '',
            //     type: '',
            //     trans_type: '',
            //     order_id: '',
            //     txn_id: '',
            // })
        } catch (error) {

        }
        setLoading(false)
    }


    const [sortDirection, setSortDirection] = useState();
    // console.log(sortDirection);

    const [assending, setDecending] = useState(1)

    const sortByColumn = async (key) => {
        if (sortDirection == 'asc') {
            setDecending(1)
        } else {
            setDecending(-1)
        }

        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');

        setLoading(true)

        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, sortType: +assending, sortKey: key, user_id: window.localStorage.getItem('userIdToken') }
        // console.log(clone);
        try {
            // const res = await walletsREports(clone)
            // // console.log(res?.data?.data?.wallet);
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)

        } catch (error) {

        }
        setLoading(false)
    };

    const allDataWalletReport = async () => {
        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            // const res = await allDataWallets(clone)
            // setAllData(res?.data?.data?.wallet);
        } catch (error) {

        }
    }



    const toastSuccessMessage = (message) => {
        toast.success(`Delete Success`, {
            position: "top-right",
        });
    };

    const confirm = (id) => {
        console.log('setMental');
        deleteData(id)

    }

    const deleteData = async (id) => {
        try {
            const res = await deleteTRCRM_sight_seeing_rate_master(id)
            console.log(res);
            if (res?.error == false) {
                toastSuccessMessage()
                getTransitionReport(0)
            } else {
                alert(res?.message)
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        allDataWalletReport()
        getTransitionReport(0)

    }, [])

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SightseeingRateListFilter filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Sightseeing Rates</h4>
                                        <Link to={`/add-sightseeingrate/${params?.id}`} className="btn btn-primary">Add Sightseeing Rates</Link>
                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '150px' }}>Stay Date</th>
                                                    <th style={{ width: '150px' }}>Currency</th>
                                                    <th style={{ width: '150px' }}>Adult Price</th>
                                                    <th style={{ width: '150px' }}>Child Price</th>
                                                    <th style={{ width: '150px' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data?.map((item, i) => {
                                                    return <tr role="row" >
                                                        <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.from_date_time}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.currency}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.adult_rate}</td>
                                                        <td valign="top" className="dataTables_empty">{item?.child_rate}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={`/update-sightseeingrate/${params?.id}/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete cow feed!"
                                                                    description="Are you sure to delete ?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    // onCancel={cancel}
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
                                                })}
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
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
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default SightseeingRateList