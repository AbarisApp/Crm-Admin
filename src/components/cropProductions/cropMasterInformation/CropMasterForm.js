import React, { useState, useEffect } from "react";

const CropMasterForm = ({ onAddData, onEditData, selectedIndex, data }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (selectedIndex !== null) {
      const selectedData = data[selectedIndex];
      setName(selectedData.name);
      setCompany(selectedData.company);
    }
  }, [selectedIndex, data]);

  const handleSubmit = () => {
    if (name && company) {
      const newData = { name, company };
      if (selectedIndex !== null) {
        onEditData(newData);
      } else {
        onAddData(newData);
      }
      setName("");
      setCompany("");
    }
  };

  const handleReset = () => {
    setName("");
    setCompany("");
  };

  return (
    <div className="row g-3">
      <div className="col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="employee"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Company
        </label>
        <input
          type="text"
          id="employee"
          className="form-control"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="col-12 text-center mt-3">
        <button type="button" className="btn btn-primary px-5" onClick={handleSubmit}>
          {selectedIndex !== null ? "Update" : "Submit"}
        </button>
        <button type="button" className="btn btn-danger px-5" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CropMasterForm;
