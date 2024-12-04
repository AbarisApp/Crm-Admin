import React, { useState } from 'react'
import VerticallyCenteredModal from './VerticallyCenteredModal'


const GeofenceManagement = () => {
    const [modalShow, setModalShow] = useState(false);
  return (
    <>
    <div className="row m-4">
        <div className="col-xl-12">
        <div className="card">
            <div className="d-flex align-items-center justify-content-end mb-5">
                <label className="me-3">Search:</label>
                <input
                    type="email"
                    className="form-control w-25"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Search"
                />
            </div>
        <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="">S.No</th>
                    <th className="w-25">Name</th>
                    <th className="">Description</th>
                    <th className="w-50">Vehicle</th>
                    <th className="">View</th>
                    <th className="">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Cirebon</td>
                    <td>L300 - Mitsibishi</td>
                    <td>S</td>
                    <td><button onClick={() => setModalShow(true)} className='showBtn'><i className="fa-regular fa-eye text-primary"></i></button></td>
                    <td><button className='showBtn'><i className="fa-solid fa-trash text-danger"></i></button></td>
                  </tr>
                </tbody>
              </table>
        </div>
      </div>
    </div>
    <VerticallyCenteredModal
         show={modalShow}
         onHide={() => setModalShow(false)}
    />
    </>
  )
}

export default GeofenceManagement