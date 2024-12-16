import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import LeadCreatedWiseFilter from "./leadCreatedWiseFilter/LeadCreatedWiseFilter";
import { useEffect, useState } from "react";
import { getTRCRM_tr_lead } from "../../../api/login/Login";


const LeadCreatedWise = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'Lead Created Wise Report',
        path_2: ``
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
        lead_priority: '',
        lead_status: '',
        assigned_to: '',
        lead_number: '',
        first_name: '',
        last_name: '',
        email_id: '',
        tag: '',
        mobile_number: '',
        createdBy: '',
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
        const clone = { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await getTRCRM_tr_lead(clone)
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

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <LeadCreatedWiseFilter filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Lead Created Wise Report</h4>
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
                                                    <th style={{ width: '150px' }}>Lead No.</th>
                                                    <th style={{ width: '150px' }}>Contact Name</th>
                                                    <th style={{ width: '150px' }}>Mobile</th>
                                                    <th style={{ width: '150px' }}>Priority</th>
                                                    <th style={{ width: '100px' }}>Status</th>
                                                    <th style={{ width: '100px' }}>Type</th>
                                                    <th style={{ width: '100px' }}>Enquiry</th>
                                                    <th style={{ width: '100px' }}>Destination </th>
                                                    <th style={{ width: '100px' }}>Date Created</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data?.map((item, i) => {
                                                    return <tr role="row" className="odd" key={item?._id}>
                                                        <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                        <td>
                                                            {item?.refer_code}
                                                        </td>
                                                        <td>
                                                            {item?.first_name} {item?.last_name}
                                                        </td>
                                                        <td>
                                                            {item?.mobile_number}
                                                        </td>
                                                        <td>
                                                            {item?.lead_priority?.name}
                                                        </td>
                                                        <td>
                                                            {item?.lead_status?.name}
                                                        </td>
                                                        <td>
                                                            {item?.trip_type?.trip_type}
                                                        </td>
                                                        <td>
                                                            --
                                                        </td>
                                                        <td>
                                                            --
                                                        </td>

                                                        <td>
                                                            {item?.createdAt}
                                                        </td>

                                                        {/* <td>
                                                <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.is_active === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.is_active === false ? '0.8rem' : ''}` }}>{item?.is_active == true ? 'ACTIVE' : 'IN ACTIVE'}</span>
                                            </td> */}

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
        </>
    )
}

export default LeadCreatedWise