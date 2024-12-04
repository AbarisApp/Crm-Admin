import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "antd";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { deleteAccLedgerById, getAccLedgerByPage, lagerIdGet } from "../../../../api/login/Login";
import Loadar from "../../../../common/loader/Loader";
import AccountSummary from "./AccountSummary";
import AccountLedgerViewPdf from "./accountLedgerViewPdf/AccountLedgerViewPdf";
import { PDFViewer } from "@react-pdf/renderer";

const AccountLedgerView = ({ title }) => {

  const param = useParams();

  // const [count, setCount] = useState(10);
  // const [page, setPage] = useState(0);
  // const [totalCount, setTotalCount] = useState();
  // const [fromDate, setFromDate] = useState(new Date().toISOString().split("T")[0]);
  // const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);

  // 
  // const getFloorMasters = async (page) => {
  //   setLoading(true);
  //   try {
  //     const res = await getAccLedgerByPage(page, count, fromDate, toDate);
  //     setTotalCount(res?.totalCount);
  //     setData(res?.data);
  //     setPage(page);
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //   }
  //   setLoading(false);
  // };

  // const deleteBlockAdd = async (id) => {
  //   setLoading(true);
  //   try {
  //     await deleteAccLedgerById(id);
  //     let backList = totalCount % 11 === 0 ? page - 1 : page;
  //     getFloorMasters(backList);
  //   } catch (error) {
  //     console.error("Failed to delete data:", error);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getFloorMasters(page);
  // }, [page, fromDate, toDate]);

  // const onChangeVal = (e) => {
  //   getFloorMasters(e - 1);
  // };

  // const handleDateFilterChange = () => {
  //   getFloorMasters(0);
  // };

  // const exportToPDF = () => {
  //   const input = document.getElementById("tableToExport");
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     const imgWidth = 190;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
  //     pdf.save("account_ledger.pdf");
  //   });
  // };


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
  // console.log(data);

  const [allData, setAllData] = useState(null)
  const [filterInitial, setFilterInitial] = useState({
    count: '',
    page: '',
    end_date: getCurrentDate(),
    start_date: getCurrentDate(),
    search: ''

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
    const clone = { ...filterInitial, count: count, id: param?.id, page: input, user_id: window.localStorage.getItem('userIdToken') }
    console.log(clone);

    try {
      const res = await lagerIdGet(clone)
      // console.log(res?.data);
      setTotalCount(res?.data?.totalCount)
      setData(res?.data)
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

  useEffect(() => {
    getCurrentDate()
  }, [])

  useEffect(() => {
    allDataWalletReport()
    getTransitionReport(0)

  }, [])


  const [pdf, setPdf] = useState(false)

  const pdfGenerateDefault = () => {
    setPdf(!pdf)
  }

  return (
    <div>
      {loading && <Loadar />}
      <div className="d-flex">
        <h4>Account Ledger Report</h4>
        <div className="d-flex" style={{ marginLeft: "20px" }}>
          <div className="me-3 d-block">
            <label>Searach</label>
            <input
              type="text"
              className="form-control"
              name="search"
              value={filterInitial.search} onChange={handleChange}
            />
          </div>
          <div className="me-3 d-block">
            <label>From Date:</label>
            <input
              type="date"
              className="form-control"
              name="start_date"
              value={filterInitial.start_date} onChange={handleChange}
            />
          </div>
          <div className="me-3  d-block">
            <label>To Date:</label>
            <input
              type="date"
              className="form-control"
              name="end_date"
              value={filterInitial.end_date} onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", alignItems: "end" }}>
            <button className="btn btn-primary" onClick={() => getTransitionReport(0)}>
              Apply Filters
            </button>
            <button className="btn btn-primary" onClick={pdfGenerateDefault}>
              Print
            </button>
          </div>
          {/* <button className="btn btn-success">
            Download PDF
          </button> */}
        </div>
      </div>
      <div className="container mt-4 card">

        {/* Filter Section */}
        <AccountSummary data={data} />
        <div className="d-flex justify-content-between align-items-center mb-3">
        </div>
        <div id="tableToExport" style={{ overflow: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Entry Date</th>
                <th scope="col">Vch No</th>
                <th scope="col">Vch Type</th>
                <th scope="col">Account Ledger Name</th>
                <th scope="col">Credit Amt</th>
                <th scope="col">Debit Amt</th>
                <th scope="col">Closing Amt</th>
                <th scope="col">Cl Amt Type</th>
                <th scope="col">Chq. No</th>
                <th scope="col">Chq. Date</th>
                <th scope="col">Narration</th>
                <th scope="col">Branch</th>
              </tr>
            </thead>
            <tbody>
              {data?.vouchers && data?.vouchers?.map((item) => {
                return <tr key={item?._id}>
                  <td>{item?.createdAt}</td>
                  <td>{item?.voucherNo}</td>
                  <td>{item?.voucherType?.name}</td>
                  <td>{item?.accLedgerId?.name}</td>
                  <td>{item?.crAmt}</td>
                  <td>{item?.drAmt}</td>
                  <td>{item?.closing_amount}</td>
                  <td>{item?.closing_amount_type}</td>
                  <td>{item?.cheque_no}</td>
                  <td>{item?.cheque_date}</td>
                  <td>{item?.narration}</td>
                  <td>---</td>
                </tr>
              })}

            </tbody>
          </table>
          <div className="total-set set-fetal">
            <p>Total {totalCount}  entries</p>
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

      {pdf && <div className="pdfcs">
        <div className="loader-overlay">
          <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <AccountLedgerViewPdf />
          </PDFViewer>
        </div>

      </div>}
    </div>
  );
};

export default AccountLedgerView;
