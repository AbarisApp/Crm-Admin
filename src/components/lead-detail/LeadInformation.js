import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa"; // Importing the edit icon

function LeadInformation() {
  const [formData, setFormData] = useState({
    name: "Receptionist",
    assignedTo: "Rsoft",
    mobilePhone: "+91 8851746286",
    altPhone: "+91",
    email: "abarisapps@gmail.com",
    secondaryEmail: "",
    leadSource: "Offline",
    leadMedium: "",
    leadStatus: "New Lead",
    leadSubStatus: "",
    followUpOn: "29-07-2024 03:19:44 PM",
    reEngagement: "Spoken",
    address: "",
    cpName: "",
  });

  // State to manage individual edit mode for each input field
  const [isEditMode, setIsEditMode] = useState({
    name: false,
    assignedTo: false,
    mobilePhone: false,
    altPhone: false,
    email: false,
    secondaryEmail: false,
    leadSource: false,
    leadMedium: false,
    leadStatus: false,
    leadSubStatus: false,
    followUpOn: false,
    reEngagement: false,
    address: false,
    cpName: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleEditMode = (field) => {
    setIsEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setIsEditMode(Object.keys(isEditMode).reduce((acc, field) => ({ ...acc, [field]: false }), {}));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card p-3">
            <form onSubmit={handleSubmit}>

              {/* Name Field */}
              <div className="mb-2">
                <label>
                  <strong>Name:</strong>
                </label>
                <div className="input-container" style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditMode.name}
                    style={{ paddingRight: "30px" }}
                  />
                  <FaPencilAlt
                    onClick={() => toggleEditMode("name")}
                    style={editIconStyle(isEditMode.name)}
                  />
                </div>
              </div>

              {/* AssignedTo Field */}
              <div className="mb-2">
                <label>
                  <strong>Assigned To:</strong>
                </label>
                <div className="input-container" style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="form-control"
                    name="assignedTo"
                    value={formData.assignedTo}
                    onChange={handleInputChange}
                    disabled={!isEditMode.assignedTo}
                    style={{ paddingRight: "30px" }}
                  />
                  <FaPencilAlt
                    onClick={() => toggleEditMode("assignedTo")}
                    style={editIconStyle(isEditMode.assignedTo)}
                  />
                </div>
              </div>

              {/* MobilePhone Field */}
              <div className="mb-2">
                <label>
                  <strong>Mobile Phone:</strong>
                </label>
                <div className="input-container" style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="form-control"
                    name="mobilePhone"
                    value={formData.mobilePhone}
                    onChange={handleInputChange}
                    disabled={!isEditMode.mobilePhone}
                    style={{ paddingRight: "30px" }}
                  />
                  <FaPencilAlt
                    onClick={() => toggleEditMode("mobilePhone")}
                    style={editIconStyle(isEditMode.mobilePhone)}
                  />
                </div>
              </div>

              {/* AltPhone Field */}
              <div className="mb-2">
                <label>
                  <strong>Alternate Phone:</strong>
                </label>
                <div className="input-container" style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="form-control"
                    name="altPhone"
                    value={formData.altPhone}
                    onChange={handleInputChange}
                    disabled={!isEditMode.altPhone}
                    style={{ paddingRight: "30px" }}
                  />
                  <FaPencilAlt
                    onClick={() => toggleEditMode("altPhone")}
                    style={editIconStyle(isEditMode.altPhone)}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-2">
                <label>
                  <strong>Email:</strong>
                </label>
                <div className="input-container" style={{ position: "relative" }}>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditMode.email}
                    style={{ paddingRight: "30px" }}
                  />
                  <FaPencilAlt
                    onClick={() => toggleEditMode("email")}
                    style={editIconStyle(isEditMode.email)}
                  />
                </div>
              </div>

              {/* Secondary Email Field */}
              <div className="mb-2">
                <label>
                  <strong>Secondary Email:</strong>
                </label>
                <div className="input-container" style={{ position: "relative" }}>
                  <input
                    type="email"
                    className="form-control"
                    name="secondaryEmail"
                    value={formData.secondaryEmail}
                    onChange={handleInputChange}
                    disabled={!isEditMode.secondaryEmail}
                    style={{ paddingRight: "30px" }}
                  />
                  <FaPencilAlt
                    onClick={() => toggleEditMode("secondaryEmail")}
                    style={editIconStyle(isEditMode.secondaryEmail)}
                  />
                </div>
              </div>

              {/* Lead Source Field */}
              <div className="mb-2">
                <label>
                  <strong>Lead Source:</strong>
                </label>
                <div className="input-container" style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="form-control"
                    name="leadSource"
                    value={formData.leadSource}
                    onChange={handleInputChange}
                    disabled={!isEditMode.leadSource}
                    style={{ paddingRight: "30px" }}
                  />
                  <FaPencilAlt
                    onClick={() => toggleEditMode("leadSource")}
                    style={editIconStyle(isEditMode.leadSource)}
                  />
                </div>
              </div>

              {/* Lead Status Field */}
              <div className="mb-2">
                <label>
                  <strong>Lead Status:</strong>
                </label>
                <div className="input-container" style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="form-control"
                    name="leadStatus"
                    value={formData.leadStatus}
                    onChange={handleInputChange}
                    disabled={!isEditMode.leadStatus}
                    style={{ paddingRight: "30px" }}
                  />
                  <FaPencilAlt
                    onClick={() => toggleEditMode("leadStatus")}
                    style={editIconStyle(isEditMode.leadStatus)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-success mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const editIconStyle = (isEditMode) => ({
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  color: isEditMode ? "#28a745" : "#6c757d",
});

export default LeadInformation;
