import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { TagWiseFilter } from "../../components/travelCRM/Tag-wise-Report/TagWisefilter";
import { TagWiseList } from "../../components/travelCRM/Tag-wise-Report/TagWiseRportList";
import { getTRCRM_tr_lead } from "../../api/login/Login";
const breadCrumbsTitle = {
    id: "1",
    title_1: "Tag Wise",
    path_1: "/tagwise",
    title_2: "View Tag Wise",
}


export default function TagWise() {
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
        createdBy: ''
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
        <div>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <TagWiseFilter filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} />
            <TagWiseList data={data} page={page} count={count} onChangeVal={onChangeVal} totalCount={totalCount} />
        </div>
    )
}