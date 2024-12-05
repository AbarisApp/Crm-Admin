import CustomInputField from "../../../../../common/CustomInputField";
import { FaDownload } from "react-icons/fa6";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MovementCalender = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card">
      <div className="d-flex justify-content-between">
        <div className="w-25">
          <CustomInputField
            placeholder={"Press Space for Global Search"}
            className="p-2 w-100 border rounded-3 shadow-sm"
          />
        </div>
        <div className="d-flex gap-3 align-items-center">
          <div class="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label" for="flexSwitchCheckChecked">
              Percentage
            </label>
          </div>
          <div>
            <button
              type="button"
              className="border border-primary text p-2 text-primary"
            >
              <FaDownload size={20} />
            </button>
          </div>
        </div>
      </div>
      <div
        className="table-responsive mt-3"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        <table className="table table-bordered table-striped">
          <thead className="bg-light sticky-top" style={{ top: "-2px" }}>
            <tr>
              <th className="fw-bold">Last 12 month</th>
              <th className="fw-bold">Total</th>
              <th className="fw-bold">Month1</th>
              <th className="fw-bold">Month2</th>
              <th className="fw-bold">Month3</th>
              <th className="fw-bold">Month4</th>
              <th className="fw-bold">Month5</th>
              <th className="fw-bold">Month6</th>
              <th className="fw-bold">Month7</th>
              <th className="fw-bold">Month8</th>
              <th className="fw-bold">Month9</th>
              <th className="fw-bold">Month10</th>
              <th className="fw-bold">Month11</th>
              <th className="fw-bold">Month12</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
              <td onClick={handleShow}>fgdfg</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Movement poppup start */}

      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Customer List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="d-flex justify-content-between align-items-center">
              <div className="fs-5">
                Total Customers : <span className="fw-bold">12</span>
              </div>
              <div className="d-flex align-items-center gap-4">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckChecked"
                  >
                    Percentage
                  </label>
                </div>
                <CustomInputField type={"text"} placeholder={"Search"} />
                <div>
                  <button
                    type="button"
                    className="border border-primary text p-2 text-primary"
                  >
                    <FaDownload size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="table-responsive mt-3"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              <table className="table table-bordered table-striped">
                <thead className="bg-light sticky-top" style={{ top: "-2px" }}>
                  <tr>
                    <th className="fw-bold">Customers</th>
                    <th className="fw-bold">Total</th>
                    <th className="fw-bold">January</th>
                    <th className="fw-bold">February</th>
                    <th className="fw-bold">March</th>
                    <th className="fw-bold">April</th>
                    <th className="fw-bold">May</th>
                    <th className="fw-bold">June</th>
                    <th className="fw-bold">July</th>
                    <th className="fw-bold">August</th>
                    <th className="fw-bold">September</th>
                    <th className="fw-bold">October</th>
                    <th className="fw-bold">November</th>
                    <th className="fw-bold">December</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer 1</td>
                    <td>5000</td>
                    <td>300</td>
                    <td>400</td>
                    <td>350</td>
                    <td>450</td>
                    <td>400</td>
                    <td>500</td>
                    <td>600</td>
                    <td>550</td>
                    <td>620</td>
                    <td>700</td>
                    <td>750</td>
                    <td>800</td>
                  </tr>
                  <tr>
                    <td>Customer 4</td>
                    <td>5000</td>
                    <td>300</td>
                    <td>400</td>
                    <td>350</td>
                    <td>450</td>
                    <td>400</td>
                    <td>500</td>
                    <td>600</td>
                    <td>550</td>
                    <td>620</td>
                    <td>700</td>
                    <td>750</td>
                    <td>800</td>
                  </tr>
                  <tr>
                    <td>Customer 3</td>
                    <td>5000</td>
                    <td>300</td>
                    <td>400</td>
                    <td>350</td>
                    <td>450</td>
                    <td>400</td>
                    <td>500</td>
                    <td>600</td>
                    <td>550</td>
                    <td>620</td>
                    <td>700</td>
                    <td>750</td>
                    <td>800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <span className="border border-primary text-primary px-3 py-2 fw-bold">
            1
          </span>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovementCalender;


// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function DayColumn({ show, setShow, handleClose, handleShow , data, chengeStatus, setData }) {

//     return (
//         <>
//             <Modal
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//                 size='xl'
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Choose Columns</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div className='row p-1'>
//                         <div className='col-9 p-1'>
//                             <div>
//                                 <h1 className='text-center fs-6 text-primary border border-b'>Available columns</h1>
//                                 <div className='row'>
//                                     {data && data?.map((item, i) => {
//                                         return <div className='col-3'>
//                                             <div className='border mb-1 p-1 rounded-2'>
//                                                 <div className="form-check form-switch" >
//                                                     <input onClick={() => { chengeStatus(!item.isActive, item.name) }} className="form-check-input" type="checkbox" checked={item?.isActive} role="switch" id={flexSwitchCheckDefault${i}} />
//                                                     <label className="form-check-label m-0" for={flexSwitchCheckDefault${i}} >{item.name}</label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-3 p-1'>
//                             <div>
//                                 <h1 className='text-center fs-6 text-primary border border-b'>Fixed right columns</h1>
//                                 <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
//                                     <i class="fa-solid fa-lock"></i>
//                                     <label className='m-0'>Billno</label>
//                                 </div>
//                                 <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
//                                     <i class="fa-solid fa-lock"></i>
//                                     <label className='m-0'>0 t0 45</label>
//                                 </div>
//                                 <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
//                                     <i class="fa-solid fa-lock"></i>
//                                     <label className='m-0'>46 to 90</label>
//                                 </div>
//                                 <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
//                                     <i class="fa-solid fa-lock"></i>
//                                     <label className='m-0'>91 to 180</label>
//                                 </div>

//                                 <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
//                                     <i class="fa-solid fa-lock"></i>
//                                     <label className='m-0'>OutStanding</label>
//                                 </div>
//                                 <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
//                                     <i class="fa-solid fa-lock"></i>
//                                     <label className='m-0'>Other</label>
//                                 </div>
//                                 <div className='border align-items-center mb-1 px-2 d-flex gap-2 px-1 border'>
//                                     <i class="fa-solid fa-lock"></i>
//                                     <label className='m-0'>Interest</label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='border p-2 rounded-2'>
//                             <p className='text-primary'>Move the cards below to change the sequence on the table : </p>
//                             <div className='mt-1 bg-secondary p-2 rounded-2 d-flex gap-1'>
//                                 {data && data?.map((item)=>{
//                                     if (item.isActive) {
//                                         return(
//                                             <button className='btn btn-outline-info m-0'>{item.name} <i class="fa-solid fa-delete-left text-danger" onClick={() => { chengeStatus(!item.isActive, item.name) }}></i></button>
//                                         )
//                                     }
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Save & Apply
//                     </Button>
//                     <Button variant="primary">Apply</Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default DayColumn;