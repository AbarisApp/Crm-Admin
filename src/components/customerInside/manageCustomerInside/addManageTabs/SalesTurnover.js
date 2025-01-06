import React, { useState } from "react";

const SalesTurnover = () => {
  const [rows, setRows] = useState([
    {
      name: "",
      startingYear: "",
      finYear1: "",
      finYear2: "",
      finYear3: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        name: "",
        startingYear: "",
        finYear1: "",
        finYear2: "",
        finYear3: "",
      },
    ]);
  };

  return (
    <div className="mt-5">
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name of Company</th>
              <th>Starting Year</th>
              <th>Fin. Year 1</th>
              <th>Fin. Year 2</th>
              <th>Fin. Year 3</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={row.name}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter company name"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="startingYear"
                    className="form-control"
                    value={row.startingYear}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter starting year"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="finYear1"
                    className="form-control"
                    value={row.finYear1}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter Financial Year 1"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="finYear2"
                    className="form-control"
                    value={row.finYear2}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter Financial Year 2"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="finYear3"
                    className="form-control"
                    value={row.finYear3}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter Financial Year 3"
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <button onClick={handleAddRow} className="btn btn-primary mt-3">
            Add Row
          </button>
        </table>
      </div>

      <div className="col-12 col-sm-6 ">
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">
            Total Turnover Firm
          </label>
          <input
            type="text"
            placeholder="Total Turnover Firm"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesTurnover;
