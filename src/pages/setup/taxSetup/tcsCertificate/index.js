import { useEffect, useState } from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import TcsCertificate from "../../../../components/setup/taxSetup/tcsCertificate/TcsCertificate";
import { getTcs_certificate } from "../../../../api/login/Login";

function TcsCertificatePage() {
  const breadCrumbsTitle = {
    title_1: "TCS Certificate",
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
  const [data, setData] = useState([])
  // console.log(data);

  const [allData, setAllData] = useState(null)
  const [filterInitial, setFilterInitial] = useState({
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
    console.log(clone);

    try {
      const res = await getTcs_certificate(clone)
      console.log(res?.data);

      setTotalCount(res?.data?.totalCount)
      setData(res?.data?.voucher)
      // allDataWalletReport()
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

  // const [currentDate, setCurrentDate] = useState('');
  // console.log(currentDate);

  // const getCurrentDate = () => {
  //     const today = new Date();
  //     const year = today.getFullYear();
  //     const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  //     const day = String(today.getDate()).padStart(2, '0');
  //     const formattedDate = `${year}-${month}-${day}`;
  //     setCurrentDate(formattedDate);
  //     const clone = { ...filterInitial, start_date: formattedDate, end_date: formattedDate }
  //     setFilterInitial(clone)
  // }

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
      <TcsCertificate data={data} />
    </>
  );
}

export default TcsCertificatePage;
