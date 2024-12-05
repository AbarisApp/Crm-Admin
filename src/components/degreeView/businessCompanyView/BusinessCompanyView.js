import React from 'react'
import { Link } from 'react-router-dom';

const BusinessCompanyView = ({setPeerComparison}) => {

  // function handlePeerComparison(){
  //   setPeerComparison(true)
  // }
    const data = [
        { id: 1, name: "Rahul", sku: "14,65", im1: "71" },
        { id: 2, name: "John", sku: "10,23", im1: "56" },
        { id: 3, name: "Alice", sku: "15,89", im1: "63" },
        { id: 4, name: "Bob", sku: "12,45", im1: "59" },
      ];
  return (
    <div className="card m-2 bg-light">
      <ul className="row m-0 p-0 list-unstyled mt-2">
        <li className="col-6">
          <div className="bg-white shadow fw-bold p-3 mb-2 rounded d-flex justify-content-between">
            <span>Im 1 : </span>
            <span>71</span>
          </div>
        </li>
        <li className="col-6">
          <div className="bg-white shadow fw-bold p-3 mb-2 rounded d-flex justify-content-between">
            <span>Sku : </span>
            <span>14,65</span>
          </div>
        </li>
        <li className="col-6">
          <div className="bg-white shadow fw-bold p-3 mb-2 rounded d-flex justify-content-between">
            <span>Customers : </span>
            <span>14,645345</span>
          </div>
        </li>
        <li className="col-6">
          <div className="bg-white shadow fw-bold p-3 mb-2 rounded d-flex justify-content-between">
            <span>Pincode : </span>
            <span>14,3454565</span>
          </div>
        </li>
        <li className="col-6">
          <div className="bg-white shadow fw-bold p-3 mb-2 rounded d-flex justify-content-between">
            <span>Stock Qty : </span>
            <span>14,6325</span>
          </div>
        </li>
        <li className="col-6">
          <div className="bg-white shadow fw-bold p-3 mb-2 rounded d-flex justify-content-between">
            <span>Outstanding : </span>
            <span>14,4565</span>
          </div>
        </li>
        <li className="col-6">
          <div className="bg-white shadow fw-bold p-3 mb-2 rounded d-flex justify-content-between">
            <span>Overdue : </span>
            <span>14e55,65</span>
          </div>
        </li>
        <li className="col-6">
        <div className='d-flex justify-content-end'>
          <button type='button' className='btn btn-success mt-3'>Peer Comparison</button>
        </div>
        </li>
      </ul>
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
              <th>#</th>
              <th>Name</th>
              <th>Sku</th>
              <th>Im 1</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.sku}</td>
                <td>{item.im1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
      <Link ><span className="text-success">Tip: Click on values to get more data</span></Link>
      </div>
    </div>
  )
}

export default BusinessCompanyView