import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa"; // Importing the edit icon
import { useParams } from "react-router-dom";
import Loadar from "../../common/loader/Loader";
import { getPermissions, updatePermissions } from "../../api/login/Login";

function PermisionOption() {
  // State to hold permission values
  const [permissions, setPermissions] = useState({
    whatsapp: false,
    sms: false,
    email: false,
  });

  // State to manage individual edit mode for each permission
  const [isEditMode, setIsEditMode] = useState({
    whatsapp: false,
    sms: false,
    email: false,
  });

  // Handle permission change
  const handlePermissionChange = (e) => {
    const { name, value } = e.target;
    setPermissions({ ...permissions, [name]: value });
  };

  // Toggle edit mode for each permission
  const parems = useParams()
  const toggleEditMode = (field) => {
    setIsEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle form submit (or additional logic)
  const [loader , setLoader] = useState(false)
  const handleSubmit =async (e) => {
    e.preventDefault();
    setLoader(true)
    try {
      const res = await updatePermissions(parems.id ,permissions);
    } catch (error) {
      
    }
    setLoader(false)
    console.log("Permissions updated:", permissions);
    // Disable all inputs after submission
    setIsEditMode({
      whatsapp: false,
      sms: false,
      email: false,
    });
  };

  const getData = async () => {
    try {
      const res = await getPermissions(parems.id);
      setPermissions({
        whatsapp: res.data?.whatsapp,
        sms: res.data?.sms,
        email: res.data?.email,
      });
    } catch (error) {
      console.log(error);
    }
  };  

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-4">
      {loader && <Loadar/>}
      <div className="row">
        <div className="col-12">
          <div className="card p-3">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Whatsapp Permission */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Whatsapp: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <select
                      className="form-control"
                      name="whatsapp"
                      value={permissions.whatsapp}
                      onChange={handlePermissionChange}
                      disabled={!isEditMode.whatsapp}
                    >
                      <option value={true}>YES</option>
                      <option value={false}>NO</option>
                    </select>
                    <FaPencilAlt
                      onClick={() => toggleEditMode("whatsapp")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.whatsapp ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* SMS Permission */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>SMS: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <select
                      className="form-control"
                      name="sms"
                      value={permissions.sms}
                      onChange={handlePermissionChange}
                      disabled={!isEditMode.sms}
                    >
                      <option value={true}>YES</option>
                      <option value={false}>NO</option>
                    </select>
                    <FaPencilAlt
                      onClick={() => toggleEditMode("sms")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.sms ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Email Optin Permission */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Email Optin: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <select
                      className="form-control"
                      name="email"
                      value={permissions.email}
                      onChange={handlePermissionChange}
                      disabled={!isEditMode.email}
                    >
                      <option value={true}>YES</option>
                      <option value={false}>NO</option>
                    </select>
                    <FaPencilAlt
                      onClick={() => toggleEditMode("email")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.email ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>
              </div>

              {Object.values(isEditMode).some((mode) => mode) && (
                <button type="submit" className="btn btn-success mt-3">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PermisionOption;
