import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";

function CustomerPattern({ showCustomer, handleCloseCustomer }) {
  const columns = [
    "Bill NO",
    "Bill Date",
    "Item Name",
    "Qty",
    "Rate",
    "TaxlLess",
    "TaxPaid",
  ];

  const rows = [
    {
      id: 1,
      billNo: "sb2b/23-24/4545",
      billData: "18-jun-24",
      itemName: "240gb Ssd",
      qty: "1",
      rate: 1800,
      taxless: 45643,
      taxpaid: 20414,
    },
    {
      id: 2,
      billNo: "sb2b/23-24/4545",
      billData: "18-jun-24",
      itemName: "240gb Ssd",
      qty: "1",
      rate: 1800,
      taxless: 45643,
      taxpaid: 20414,
    },
    {
      id: 3,
      billNo: "sb2b/23-24/4545",
      billData: "18-jun-24",
      itemName: "240gb Ssd",
      qty: "1",
      rate: 1800,
      taxless: 45643,
      taxpaid: 20414,
    },
  ];
  return (
    <Modal
      show={showCustomer}
      onHide={handleCloseCustomer}
      backdrop="static"
      keyboard={false}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Ravi Steel Co</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <div className="shadow-sm border border-1 rounded p-2 bg-light">
            <div className="row  ">
              <div className="col-6 p-1">
                <ul className="d-flex flex-column gap-2">
                  <li className="d-flex  ">
                    <span>Credit Limit :</span>
                    <span>546568467</span>
                  </li>
                  <li className="d-flex ">
                    <span>Outstanding:</span>
                    <span>568467</span>
                  </li>
                  <li className="d-flex ">
                    <span>OnAccount :</span>
                    <span>0</span>
                  </li>
                  <li className="d-flex ">
                    <span>Overdue :</span>
                    <span className="pl-">456456</span>
                  </li>
                </ul>
              </div>
              <div className="col-6 d-flex flex-column gap-3">
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-regular fa-envelope text-primary fs-5"></i>
                  <span>mjsdfksjfd@jklhk.gmail.com</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-solid fa-phone text-primary"></i>
                  <span>6457568678567</span>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-sm border border-1 rounded p-2 bg-light mt-2">
            <div className="d-flex justify-content-between bg-light p-2 align-items-center">
              <HiOutlineSquare3Stack3D size={30} className="text-primary" />
              <button type="button" class="btn btn-outline-primary">
                <i className="fa-solid fa-download"></i>
              </button>
            </div>
            <table className="table table-striped table-hover table-bordered shadow-sm rounded mt-3">
              {/* Table Header */}
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.billNo}</td>
                    <td>{row.billData}</td>
                    <td>{row.itemName}</td>
                    <td>{row.qty}</td>
                    <td>{row.rate}</td>
                    <td>{row.taxless}</td>
                    <td>{row.taxpaid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">1</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomerPattern;
