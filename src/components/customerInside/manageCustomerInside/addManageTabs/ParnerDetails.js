import React, { useState } from 'react';

const PartnerDetails = () => {
  const [rows, setRows] = useState([
    {
      designation: "",
      contactPerson: "",
      address: "",
      contactNo: "",
      email: "",
      dob: "",
      anniversary: "",
    },
  ]);

  // Handle changes in the input fields
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  // Handle adding a new row
  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        designation: "",
        contactPerson: "",
        address: "",
        contactNo: "",
        email: "",
        dob: "",
        anniversary: "",
      },
    ]);
  };

  return (
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Designation</th>
              <th>Contact Person</th>
              <th>Address</th>
              <th>Contact No</th>
              <th>Email Id</th>
              <th>Date of Birth</th>
              <th>Date of Anniversary</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <select
                    name="designation"
                    className="form-control"
                    value={row.designation}
                    onChange={(e) => handleInputChange(e, index)}
                  >
                    <option value="">Select Designation</option>
                    <option value="Manager">Manager</option>
                    <option value="Employee">Employee</option>
                    <option value="Intern">Intern</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    name="contactPerson"
                    className="form-control"
                    value={row.contactPerson}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter contact person"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={row.address}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter address"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="contactNo"
                    className="form-control"
                    value={row.contactNo}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter contact number"
                  />
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={row.email}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter email"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    value={row.dob}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="anniversary"
                    className="form-control"
                    value={row.anniversary}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default PartnerDetails;
