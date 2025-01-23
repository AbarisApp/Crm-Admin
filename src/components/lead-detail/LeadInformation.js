import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa"; // Importing the edit icon
import Select from 'react-select';
import { getAllAssign, leadenquiryStatusMasterList, leadSourseMasterList, updateLead } from "../../api/login/Login";
import { useParams } from "react-router-dom";
import Loadar from "../../common/loader/Loader";
function LeadInformation({ data }) {
  const [assignedTo, setAssignedTo] = useState([]);
  const [allData, setallData] = useState({
    assignData: [],
    leadSource: [],
    leadStatus: [],
  });
  const [formData, setFormData] = useState({
    name: data?.name,
    assignedTo: "Rsoft",
    mobilePhone: data?.mobile,
    email: data?.email,
    secondaryEmail: "",
    leadSource: data?.lead_source,
    leadMedium: "",
    leadStatus: data?.lead_status,
    leadSubStatus: "",
    followUpOn: "29-07-2024 03:19:44 PM",
    reEngagement: "Spoken",
    address: "",
    cpName: "",
  });
  useEffect(() => {
    setAssignedTo(data?.assignTo?.map((item) => { return { ...item, value: item?.name, label: item?.name } }))
    setFormData({
      name: data?.name,
      assignedTo: "Rsoft",
      mobilePhone: data?.mobile,
      email: data?.email,
      secondaryEmail: "",
      leadSource: data?.lead_source,
      leadMedium: "",
      leadStatus: data?.lead_status,
      leadSubStatus: "",
      followUpOn: "29-07-2024 03:19:44 PM",
      reEngagement: "Spoken",
      address: "",
      cpName: "",
    })
  }, [data])
  const parems = useParams()
  const getSelectionData = async () => {
    const assign = await getAllAssign()
    const leadsource = await leadSourseMasterList(0, 100)
    const leadstatus = await leadenquiryStatusMasterList(0, 100)
    const assigndata = assign.data.map((item) => {
      return { ...item, value: item.name, label: item.name }
    })
    setallData({
      assignData: assigndata,
      leadSource: leadsource.data,
      leadStatus: leadstatus.data
    })
  }
  useEffect(() => {
    getSelectionData()
  }, [])

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
  const chnageHandleAssignedTo = (selectedOptions) => {
    console.log(selectedOptions);
    setAssignedTo(selectedOptions);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleEditMode = (field) => {
    setIsEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const [load, setLoad] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true)
    // console.log("Form data submitted:", formData);
    try {
      const update = await updateLead(parems?.id, { ...formData, assignTo: assignedTo, lead_source: formData.leadSource, lead_status: formData.leadStatus })
    } catch (error) {

    }
    setLoad(false)
    setIsEditMode(Object.keys(isEditMode).reduce((acc, field) => ({ ...acc, [field]: false }), {}));
  };

  return (
    <div className="container mt-4">
      {load && <Loadar />}
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
                  <Select
                    name="affiliate"
                    isMulti
                    value={assignedTo}
                    onChange={chnageHandleAssignedTo}
                    options={allData.assignData}
                    closeMenuOnSelect={false}
                    className="basic-multi-select"
                  // disabled={!isEditMode.assignedTo}
                  />
                  {/* <FaPencilAlt
                    onClick={() => toggleEditMode("assignedTo")}
                    style={editIconStyle(isEditMode.assignedTo)}
                  /> */}
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
              {/* <div className="mb-2">
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
              </div> */}

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
                  <select
                    id="leadSource"
                    name="leadSource"
                    className="form-select"
                    value={formData.leadSource}
                    disabled={!isEditMode.leadSource}
                    onChange={handleInputChange}
                  >
                    <option value="" style={{ backgroundColor: "#235c0a", color: "white" }}>Select Lead Source</option>
                    {allData?.leadSource?.map((item, index) => (
                      <option key={index} value={item?._id}>
                        {item?.name}
                      </option>
                    ))}
                  </select>

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
                  <select
                    id="leadStatus"
                    name="leadStatus"
                    className="form-select"
                    value={formData.leadStatus}
                    disabled={!isEditMode.leadStatus}
                    onChange={handleInputChange}
                  >
                    <option value="" style={{ backgroundColor: "#235c0a", color: "white" }}>Select Lead Status</option>
                    {allData?.leadStatus?.map((item, index) => (
                      <option key={index} value={item?._id}>
                        {item?.name}
                      </option>
                    ))}
                  </select>

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
