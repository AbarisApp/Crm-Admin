import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import HotelBookingList from './hotelBookingList/HotelBookingList'
import HotelBookingFilter from './hotelBookingFilter/HotelBookingFilter'
import { getHotelList } from '../../../api/login/Login'

function HotelBooking() {
  const breadCrumbsTitle = {
    title_1: "Hotel",
    title_2: "Hotel Request List"
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
      const res = await getHotelList(clone)
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
      <HotelBookingFilter filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} page={page} count={count} />
      <HotelBookingList totalCount={totalCount} data={data} onChangeVal={onChangeVal} />
    </>
  )
}

export default HotelBooking