import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import FlightMarkUpList from './flightMarkupList/FlightMarkList'
import FlightMarkUpFilter from './flightMarkUpFilter/flightMarkUpFilter'
import { toast } from 'react-toastify'
import { deleteflightsmarkup, gitflightsmarkup } from '../../../api/login/Login'

function FlightMarkUp() {
    const breadCrumbsTitle = {
        title_1: "Flight",
        title_1: "Flight Markup List",
    }
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
            const res = await gitflightsmarkup(clone)
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

    const toastSuccessMessage = (message) => {
        toast.success(`Delete Success`, {
            position: "top-right",
        });
    };

    const confirm = (id) => {
        // console.log('setMental');
        deleteData(id)

    }

    const deleteData = async (id) => {
        try {
            const res = await deleteflightsmarkup(id)
            // console.log(res);
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
        getTransitionReport(0)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <FlightMarkUpFilter filterInitial={filterInitial} page={page} count={count} handleChange={handleChange} getTransitionReport={getTransitionReport} />
            <FlightMarkUpList getTransitionReport={getTransitionReport} confirm={confirm} page={page} count={count} data={data} totalCount={totalCount} onChangeVal={onChangeVal} />
        </>
    )
}

export default FlightMarkUp