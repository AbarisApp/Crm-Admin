import React from 'react'
import { NavLink } from 'react-router-dom'

const VehicleList = () => {
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
                    <th className="w">Employee/Vehicle</th>
                    <th className="">Registration Number</th>
                    <th className="w">Model</th>
                    <th className="">Chassis No</th>
                    <th className="">Group</th>
                    <th className="">Is Active</th>
                    <th className="">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Cirebon</td>
                    <td>L300 - Mitsibishi</td>
                    <td>Mini Van</td>
                    <td>Sdfgd</td>
                    <td>S</td>
                    <td><span></span></td>
                    <td> 
                        <NavLink to="/vehicle-details" className='showBtn'><i className="fa-regular fa-eye text-primary"></i></NavLink> 
                        <NavLink className='showBtn'><i className="fa-solid fa-pen-to-square text-primary"></i></NavLink>
                        <button className='showBtn'><i className="fa-solid fa-trash text-danger"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default VehicleList