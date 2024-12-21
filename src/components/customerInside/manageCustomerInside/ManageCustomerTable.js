import React, { useState } from "react";
import ManagePoppup from "./ManagePoppup";

const ManageCustomerTable = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="bg-black text-white">
            <tr>
              <th>S.No</th>
              <th>
                {" "}
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>Code/ EntryOn</th>
              <th>Firm Name</th>
              <th>Auth Person/ Contact No1 - [Pwd]/ SAP Code</th>
              <th>Marketing Officer 1 / Secondary Officer</th>
              <th>Depot</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                {" "}
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>
                <button onClick={handleShow} type="button" className="btn btn-secondary">
                  GJ1234
                </button>
                <br></br>
                <span>29-Apr-2024 06:37 PM</span>
              </td>
              {/* <td>
               <p className="fw-bold">GJ1249 - Maruti Agro Center - Patdi - rjt - 1111111113 <span>(rjt)</span></p>
            </td> */}
              <td>
                <b>GJ1249 - Maruti Agro Center - Patdi - rjt - 1111111113</b>
                <span> (rjt)</span>
                <br></br>
                rjt, Tal.: rjt, Dist.: RJT - 360001, OTP: 194758
                <br></br>
                <b>Cust.Group : </b>General<b>, Addi. Group : </b>{" "}
                <b>, Profit Center : </b>-<b>, Mkt.Groups : </b>
                <b>, Eco.Zone : </b>
                <b>, Cr.Limit : </b>0.00
                <b>, Cr.Days : </b>
              </td>
              <td>
                1111111113-[1111111113]
                <br></br>
                <button onClick={handleShow} className="btn btn-warning">N/A</button>
              </td>
              <td>
                <button onClick={handleShow} type="button" className="btn btn-secondary">
                  USER GJ1234
                </button>
              </td>
              <td>
                <button onClick={handleShow} type="button" className="btn btn-secondary">
                  KANT 2
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-info">
                  <i className="fa-solid fa-gear"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ManagePoppup show={show} handleClose={handleClose} />
    </>
  );
};

export default ManageCustomerTable;
