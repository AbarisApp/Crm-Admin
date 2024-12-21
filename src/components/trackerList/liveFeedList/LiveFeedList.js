import React from "react";
import LiveFeedforms from "./LiveFeedforms";

const LiveFeedList = () => {
  return (
    <div>
      <div className="bg-black text-light p-2 m-2">
        <h3 className="fs-4"> Employee Tracking Information</h3>
      </div>
      <LiveFeedforms />
      <div className="border p-4 m-2 bg-light">
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-info">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>State</th>
              <th>Custome</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>1</td>
              <td>India</td>
              <td>Maharashtra</td>
              <td>John Doe</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default LiveFeedList;
