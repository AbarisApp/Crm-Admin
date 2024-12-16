import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import FlightVoucherFilter from './flightVoucherReports/FlightVoucherFilter';
import FlightVoucherList from './flightVoucherList/FlightVoucherList';

function FlightVoucherReports() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'Flight Voucher Report',
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
            // const res = await getHotelVoucher(clone)
            // setTotalCount(res?.totalCount)
            // setData(res?.data)
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
            <FlightVoucherFilter filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} />
            <FlightVoucherList page={page} count={count} onChangeVal={onChangeVal} data={data} totalCount={totalCount} />
        </>
    )
}

export default FlightVoucherReports