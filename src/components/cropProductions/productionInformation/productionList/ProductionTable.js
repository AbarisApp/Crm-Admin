import React from 'react'

const ProductionTable = () => {
  return (
    <div className="table-responsive mt-4">
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Depot</th>
          <th>Employee</th>
          <th>Customer (Party)</th>
          <th>Status</th>
          <th>Price List</th>
          <th>Mr Pending</th>
          <th>Depot Pending</th>
          <th>Secondary Emp</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Depot A</td>
          <td>John Doe</td>
          <td>Customer X</td>
          <td>Pending</td>
          <td>Price List 1</td>
          <td>No</td>
          <td>Yes</td>
          <td>Emp 123</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Depot B</td>
          <td>Jane Smith</td>
          <td>Customer Y</td>
          <td>Completed</td>
          <td>Price List 2</td>
          <td>Yes</td>
          <td>No</td>
          <td>Emp 456</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default ProductionTable