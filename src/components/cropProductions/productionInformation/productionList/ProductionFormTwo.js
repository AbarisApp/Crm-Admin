import React, { useState } from 'react'
import ManagePoppup from '../../../customerInside/manageCustomerInside/ManagePoppup';

const ProductionFormTwo = ({data}) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="mt-3 card">
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
              <button
                type="button"
                className="btn btn-info"
                onClick={handleShow}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div class="mb-3">
              <label htmlFor="state" className="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                placeholder="Message"
                id="floatingTextarea"
              ></textarea>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="mb-3">
              <label htmlFor="employee" className="form-label">
                Title For Notification Only
              </label>
              <input
                type="text"
                className="form-control"
                placeholder={"Notification Title "}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                For
              </label>
              <select className="form-select" id="state">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                Type
              </label>
              <select className="form-select" id="state">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                Action
              </label>
              <div>
                <button type="btn" className="btn btn-info">
                  SEND SMS/NOTIFICATION
                </button>
              </div>
            </div>
          </div>
        </div>
        <ManagePoppup show={show} handleClose={handleClose} />
      </div>
  )
}

export default ProductionFormTwo