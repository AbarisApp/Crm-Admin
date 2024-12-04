import React from "react";

const AddVehicle = () => {
  return (
    <>
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
            <form>
                <div className="row">
                    {/* Registration Number */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Registration Number</label>
                    <input
                        type="text"
                        name="v_registration_no"
                        id="v_registration_no"
                        className="form-control"
                        placeholder="Registration Number"
                        autoComplete="off"
                    />
                    </div>

                    {/* Vehicle Name */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Vehicle Name</label>
                    <input
                        type="text"
                        name="v_name"
                        id="v_name"
                        className="form-control"
                        placeholder="Vehicle Name"
                        autoComplete="off"
                    />
                    </div>

                    {/* Model */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Model</label>
                    <input
                        type="text"
                        name="v_model"
                        className="form-control"
                        placeholder="Model"
                        autoComplete="off"
                    />
                    </div>

                    {/* Chassis No */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Chassis No</label>
                    <input
                        type="text"
                        name="v_chassis_no"
                        className="form-control"
                        placeholder="Chassis No"
                        autoComplete="off"
                    />
                    </div>

                    {/* Engine No */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Engine No</label>
                    <input
                        type="text"
                        name="v_engine_no"
                        className="form-control"
                        placeholder="Engine No"
                        autoComplete="off"
                    />
                    </div>

                    {/* Manufactured By */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Manufactured By</label>
                    <input
                        type="text"
                        name="v_manufactured_by"
                        className="form-control"
                        placeholder="Manufactured By"
                        autoComplete="off"
                    />
                    </div>

                    {/* Vehicle Type */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Vehicle Type</label>
                    <select
                        id="v_type"
                        name="v_type"
                        className="form-control"
                        required
                    >
                        <option value="">Select Vehicle Type</option>
                        <option value="CAR">CAR</option>
                        <option value="MOTORCYCLE">MOTORCYCLE</option>
                        <option value="TRUCK">TRUCK</option>
                        <option value="BUS">BUS</option>
                        <option value="TAXI">TAXI</option>
                        <option value="BICYCLE">BICYCLE</option>
                    </select>
                    </div>

                    {/* Vehicle Color */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">
                        Vehicle Color<small> (To show in Map)</small>
                    </label>
                    <input
                        id="add-device-color"
                        name="v_color"
                        className="jscolor form-control"
                        defaultValue="#D6E1F3"
                        required
                        autoComplete="off"
                        style={{ backgroundColor: "#D6E1F3", color: "black" }}
                    />
                    </div>

                    {/* Registration Expiry Date */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Registration Expiry Date</label>
                    <input
                        type="text"
                        name="v_reg_exp_date"
                        className="form-control datepicker"
                        placeholder="Registration Expiry Date"
                        required
                        autoComplete="off"
                    />
                    </div>

                    {/* Vehicle Group */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Vehicle Group</label>
                    <select
                        id="v_group"
                        name="v_group"
                        className="form-control"
                        required
                    >
                        <option value="">Select Vehicle Group</option>
                        <option value="1">LMV</option>
                        <option value="2">HMV</option>
                        <option value="3">Mini Van</option>
                    </select>
                    </div>

                    {/* Vehicle Image */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Vehicle Image</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        className="form-control"
                    />
                    </div>

                    {/* Vehicle Document */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">Vehicle Document</label>
                    <input
                        type="file"
                        id="file1"
                        name="file1"
                        className="form-control"
                    />
                    </div>

                    {/* Traccar Device ID */}
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <label className="form-label">
                        Traccar Device ID{" "}
                        <span className="badge">(Data sync based on this value)</span>
                    </label>
                    <select
                        id="v_traccar_id"
                        name="v_traccar_id"
                        className="form-control"
                    >
                        <option value="">Select Traccar Device ID</option>
                        {/* Add options as needed */}
                    </select>
                    </div>
                </div>

                    <hr className="mt-4 mb-4"></hr>

                <div class="form-label">
                    <span className="fw-bold">GPS API Details(Feed GPS Data)</span>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-6 col-lg-4">
                    <label className="form-label">API URL</label>
                    <input
                        type="text"
                        name="v_api_url"
                        className="form-control"
                        placeholder="API URL"
                        value="https://codeforts.com/vms/api"
                        readOnly
                        autoComplete="off"
                    />
                    </div>

                    <div className="col-sm-6 col-lg-4">
                    <label className="form-label">API Username</label>
                    <input
                        type="text"
                        id="v_api_username"
                        name="v_api_username"
                        className="form-control"
                        placeholder="API Username"
                        readOnly
                        autoComplete=""
                    />
                    </div>

                    <div className="col-sm-6 col-lg-4">
                    <label className="form-label">API Password</label>
                    <input
                        type="text"
                        name="v_api_password"
                        className="form-control"
                        placeholder="API Password"
                        value="263574"
                        readOnly
                        autoComplete="off"
                    />
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary d-f"> Add Vehicle</button>
                </div>
            </form>
        </div>
      </div>
    </div>
    </>
  );

};

export default AddVehicle;
