import React from 'react'

const TrackingRepotTable = () => {
    return (
        <div className="">
          <div className="bg-black text-light p-2 mb-2">
            <span className="">From Date: 18-Dec-2024 To Date: 18-Dec-2024</span>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-info">
                <tr>
                  <th>#</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>Employee</th>
                  <th>Downline</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>1</td>
                  <td>2024-12-18</td>
                  <td>2024-12-18</td>
                  <td>India</td>
                  <td>Maharashtra</td>
                  <td>John Doe</td>
                  <td>Self</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default TrackingRepotTable