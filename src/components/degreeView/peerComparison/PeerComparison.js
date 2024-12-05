import React from "react";
import { Link } from "react-router-dom";

const PeerComparison = () => {
  const tableData = [
    {
      id: 1,
      name: "keshav",
      sales: 45346546456,
      salesPer: 23,
      gp: 34645756,
      gpPer: 4,
      ost: 0,
      ostPer: 0,
    },
    {
      id: 2,
      name: "keshav",
      sales: 45346546456,
      salesPer: 23,
      gp: 34645756,
      gpPer: 4,
      ost: 0,
      ostPer: 0,
    },
    {
      id: 3,
      name: "keshav",
      sales: 45346546456,
      salesPer: 23,
      gp: 34645756,
      gpPer: 4,
      ost: 0,
      ostPer: 0,
    },
    {
      id: 4,
      name: "keshav",
      sales: 45346546456,
      salesPer: 23,
      gp: 34645756,
      gpPer: 4,
      ost: 0,
      ostPer: 0,
    },
    {
      id: 5,
      name: "keshav",
      sales: 45346546456,
      salesPer: 23,
      gp: 34645756,
      gpPer: 4,
      ost: 0,
      ostPer: 0,
    },
  ];
  return (
    <div className="card m-2 bg-light">
      <div className="d-flex align-items-center bg-secondary p-1 px-4 gap-2">
        <i className="fa-solid fa-greater-than"></i>
        <h2 className="fs-5">Peer Comparison</h2>
      </div>
      <div className="d-flex justify-content-between align-items-center my-2">
        <div>
          <label className="fs-6 fw-bold">Top Sales</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <span className="fw-bold">By</span>
        </div>
        <div>
        <label className="fs-6 fw-bold">Sales</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div
        className="table-responsive mt-3"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        <table className="table table-bordered table-striped">
          <thead
            className="bg-dark text-light sticky-top"
            style={{ top: "-2px" }}
          >
            <tr>
              <th>Salesperson</th>
              <th>Sales</th>
              <th>Sales%</th>
              <th>Gp</th>
              <th>Gp%</th>
              <th>Ost</th>
              <th>Ost%</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.sales}</td>
                <td>{item.salesPer}</td>
                <td>{item.gp}</td>
                <td>{item.gpPer}</td>
                <td>{item.ost}</td>
                <td>{item.ostPer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <Link>
          <span className="text-success">
            Tip: Click on first column to view it in 360.
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PeerComparison;
