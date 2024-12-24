import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import BusBookingFilter from './busBookingFilter/BusBookingFilter'
import BusBookingList from './busBookingList/BusBookingList'
import { getBusList } from '../../../api/login/Login'

function BusBooking() {
  const breadCrumbsTitle = {
    title_1: "Bus",
    title_2: "Bus Request List"
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
    txn_id: "",
    count: count,
    page: page,
    start_date: getCurrentDate(),
    end_date: getCurrentDate(),
    adhaar_no: "",
    customer_mobile: "",
    userid: "",
    ServiceProvider: ''
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
      const res = await getBusList(clone)
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
      <BusBookingFilter filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} page={page} count={count} />
      <BusBookingList totalCount={totalCount} data={data} onChangeVal={onChangeVal} />
    </>
  )
}

export default BusBooking