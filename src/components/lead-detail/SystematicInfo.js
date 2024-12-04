import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa"; // Importing the edit icon

function SystematicInfo() {
  // State to hold form data
  const [formData, setFormData] = useState({
    entityId: "",
    callId: "",
    feedback: "",
    live: "",
    createdTime: "",
    createdBy: "",
    modifiedTime: "",
    modifiedBy: "",
    leadNumber: "",
  });

  // State to manage individual edit mode for each field
  const [isEditMode, setIsEditMode] = useState({
    entityId: false,
    callId: false,
    feedback: false,
    live: false,
    createdTime: false,
    createdBy: false,
    modifiedTime: false,
    modifiedBy: false,
    leadNumber: false,
  });

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle edit mode for a specific field
  const toggleEditMode = (field) => {
    setIsEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle form submission (or other actions)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data updated:", formData);
    // After submission, disable all fields
    setIsEditMode({
      entityId: false,
      callId: false,
      feedback: false,
      live: false,
      createdTime: false,
      createdBy: false,
      modifiedTime: false,
      modifiedBy: false,
      leadNumber: false,
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card p-3">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Entity ID */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Entity id *: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="entityId"
                      value={formData.entityId}
                      onChange={handleInputChange}
                      disabled={!isEditMode.entityId}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("entityId")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.entityId ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Call ID */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Call ID: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="callId"
                      value={formData.callId}
                      onChange={handleInputChange}
                      disabled={!isEditMode.callId}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("callId")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.callId ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Feedback */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Feedback: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleInputChange}
                      disabled={!isEditMode.feedback}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("feedback")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.feedback ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Live */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Live: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <select
                      className="form-control"
                      name="live"
                      value={formData.live}
                      onChange={handleInputChange}
                      disabled={!isEditMode.live}
                    >
                      <option value="">Select Status</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <FaPencilAlt
                      onClick={() => toggleEditMode("live")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.live ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Created Time */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Created Time: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="createdTime"
                      value={formData.createdTime}
                      onChange={handleInputChange}
                      disabled={!isEditMode.createdTime}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("createdTime")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.createdTime ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Created By */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Created By: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="createdBy"
                      value={formData.createdBy}
                      onChange={handleInputChange}
                      disabled={!isEditMode.createdBy}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("createdBy")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.createdBy ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Modified Time */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Modified Time: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="modifiedTime"
                      value={formData.modifiedTime}
                      onChange={handleInputChange}
                      disabled={!isEditMode.modifiedTime}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("modifiedTime")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.modifiedTime ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Modified By */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Modified By: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="modifiedBy"
                      value={formData.modifiedBy}
                      onChange={handleInputChange}
                      disabled={!isEditMode.modifiedBy}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("modifiedBy")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.modifiedBy ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Lead Number */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Lead Number *: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="leadNumber"
                      value={formData.leadNumber}
                      onChange={handleInputChange}
                      disabled={!isEditMode.leadNumber}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("leadNumber")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.leadNumber ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                {Object.values(isEditMode).some((mode) => mode) && (
                  <button type="submit" className="btn btn-success mt-3">
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystematicInfo;
