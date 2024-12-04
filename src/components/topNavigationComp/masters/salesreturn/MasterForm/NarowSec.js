
import React, { useState } from 'react';

const NarowSec = () => {
  const [rows, setRows] = useState([
    { name: 'CGST 6%', accountName: 'CGST (O/P)', rate: 6, amount: '' },
    { name: 'CGST 9%', accountName: 'CGST (O/P)', rate: 9, amount: '' },
    { name: 'SGST 2.5%', accountName: 'SGST (O/P)', rate: 2.5, amount: '' },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleDelete = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Left Side: Narration */}
      <div style={{ width: '45%' }}>
        <label>Narration</label>
        <textarea
          rows="5"
          style={{ width: '100%' }}
          placeholder="Enter narration here..."
        ></textarea>
      </div>

      {/* Right Side: Expense and Taxes Table */}
      <div style={{ width: '50%' }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Account Name</th>
              <th>Rate</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 1 ? '#e0f7e9' : 'white' }}>
                <td>{row.name}</td>
                <td>{row.accountName}</td>
                <td>{row.rate}</td>
                <td>
                  <input
                    type="number"
                    name="amount"
                    className="form-control"
                    value={row.amount}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NarowSec;
