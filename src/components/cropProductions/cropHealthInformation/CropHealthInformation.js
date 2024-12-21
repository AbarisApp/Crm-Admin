import React, { useState } from "react";

const CropHealthInformation = () => {
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (description) {
      setData([...data, { description }]);
      setDescription("");
    }
  };

  const handleReset = () => {
    setDescription("");
  };

  return (
    <div>
      <div className="bg-black text-light p-2 m-2">
        <h3 className="fs-4">Crop Health Codes</h3>
      </div>
      <div className="card m-2">
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="employee" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Search....."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="col-12 text-center">
            <button
              type="button"
              className="btn btn-primary px-5"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger px-5"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="card m-2">
        <div className="bg-black text-light p-1">
          <h3 className="fs-4">Crop Code Information</h3>
        </div>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center">
                    No data available
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.description}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CropHealthInformation;
