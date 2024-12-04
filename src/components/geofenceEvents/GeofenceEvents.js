import React from 'react'

export const GeofenceEvents = () => {
  return (
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
                    <th className="">Vehicle ID</th>
                    <th className="w-25">Vehicle Name</th>
                    <th className="w-25">Geo Name</th>
                    <th className="">Geo Event</th>
                    <th className="w-25">Geo Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>415</td>
                    <td>L300 - Mitsibishi</td>
                    <td>S</td>
                    <td><span className="btn btn-danger">outside</span></td>
                    <td>Siva</td>
                  </tr>
                </tbody>
              </table>
        </div>
      </div>
    </div>
  )
}
