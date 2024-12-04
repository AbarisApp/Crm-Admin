import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import VehicleGroupPoppup from './VehicleGroupPoppup';
import { NavLink } from 'react-router-dom';

const VehicleGroup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="row m-4">
                <div className='mb-4'>
                    <Button onClick={handleShow} type="button" className="btn btn-primary fs-5">Add New Group</Button>
                </div>
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
                                    <th>S.No</th>
                                    <th className="w-25">Name</th>
                                    <th className="w-25">Description</th>
                                    <th className="w-25">Created Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Cirebon</td>
                                    <td>L300 - Mitsibishi</td>
                                    <td>2020-08-01 10:18:46</td>
                                    <td>
                                        <NavLink className='showBtn'><i className="fa-solid fa-map text-primary"></i></NavLink>
                                        <NavLink className='showBtn'><i className="fa-solid fa-trash text-danger"></i></NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <VehicleGroupPoppup show={show} handleClose={handleClose} />
        </>
    );
}

export default VehicleGroup;
