import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "antd";
import { deleteAccLedgerById, getAccLedgerByPage } from "../../../../api/login/Login";
import Loadar from "../../../../common/loader/Loader";
import { PDFViewer } from "@react-pdf/renderer";
import AccountLedgerPdf from "./accountLedgerPdf/AccountLedgerPdf";

const AccountLedger = ({ title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState();
  const [fromDate, setFromDate] = useState(new Date().toISOString().split("T")[0]);
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]); // Autofill current date

  // ----------list Api----------
  const param = useParams();

  const getFloorMasters = async (page) => {
    setLoading(true);
    try {
      const res = await getAccLedgerByPage(page, count, fromDate, toDate);
      setTotalCount(res?.totalCount);
      setData(res?.data);
      setPage(page);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
    setLoading(false);
  };

  const deleteBlockAdd = async (id) => {
    setLoading(true);
    try {
      await deleteAccLedgerById(id);
      let backList = totalCount % 11 === 0 ? page - 1 : page;
      getFloorMasters(backList);
    } catch (error) {
      console.error("Failed to delete data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFloorMasters(page);
  }, [page, fromDate, toDate]);

  const onChangeVal = (e) => {
    getFloorMasters(e - 1);
  };

  const handleDateFilterChange = () => {
    // Fetch data with updated date filters
    getFloorMasters(0);
  };

  const [pdf, setPdf] = useState(false)

  const pdfGenerateDefault = () => {
    setPdf(!pdf)
  }

  return (
    <div>
      {loading && <Loadar />}
      <div className="d-flex">
        <h4>Account Ledger List</h4>
        <div className="d-flex" style={{ marginLeft: "20px" }}>
          <div className="me-3">
            <label>From Date:</label>
            <input
              type="date"
              className="form-control"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="me-3">
            <label>To Date:</label>
            <input
              type="date"
              className="form-control"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", alignItems: "end" }}>
            <button className="btn btn-primary" onClick={handleDateFilterChange}>
              Apply Filters
            </button>
            <button className="btn btn-primary" onClick={pdfGenerateDefault}>
              Print
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-4 card">


        <div className="" style={{ overflow: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th style={{ width: "150px" }}>#</th>
                <th style={{ width: "150px" }}>Acc Ledger Name</th>
                <th style={{ width: "150px" }}>City</th>
                <th style={{ width: "150px" }}>Under Group</th>
                <th style={{ width: "150px" }}>Opening Balance</th>
                <th style={{ width: "150px" }}>Op. D/C</th>
                <th style={{ width: "150px" }}>Closing Balance</th>
                <th style={{ width: "150px" }}>Cl.Cr/Db</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((ledger, i) => (
                <tr key={ledger.id}>
                  <td>{i + 1}</td>
                  <td><Link to={`/viewAccDetail/${ledger._id}`}>View Acc</Link></td>
                  <td>{ledger.name}</td>
                  <td>{ledger.state}</td>
                  <td>{ledger.AccLedgerGroupId?.name}</td>
                  <td>{ledger.opening_balance}</td>
                  <td>{ledger.opening_balance_type}</td>
                  <td>{ledger.balance}</td>
                  <td>{ledger.balance_type}</td>
                  <td>
                    <button className="btn btn-sm btn-primary ms-2">Ledger Report</button>
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => deleteBlockAdd(ledger._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            defaultCurrent={1}
            onChange={onChangeVal}
            total={totalCount}
          />
        </div>
      </div>
      {pdf && <div className="pdfcs">
        <div className="loader-overlay">
          <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <AccountLedgerPdf />
          </PDFViewer>
        </div>

      </div>}
    </div>
  );
};

export default AccountLedger;
