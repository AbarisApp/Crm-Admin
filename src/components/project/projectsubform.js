import React from "react";
import CustomInputField from "../../common/CustomInputField";
export default function ProjectSubFrom(){
    return(
        <div>
            <form className="px-4">
                <div className="row">
                    <div className="col-6 mb-3">
                        <h6>Billing Type</h6>
                        <select
                            className="form-select">
                            <option value="">Fixed rate</option>
                            <option value="">Project Hours</option>
                        </select> 
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-6">
                        <h6>Status</h6>
                        <select
                            className="form-select">
                            <option value="">in progress</option>
                            <option value="">on hold</option>
                            <option value="">not started</option>
                        </select> 
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-12 mb-3">
                        <h6>Rate Per Hour</h6>
                        <CustomInputField type={"number"}
                        />
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-6 mb-3">
                        <h6>Estimated Hours</h6>
                        <CustomInputField type={"number"}
                        />
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-6">
                        <h6>Members</h6>
                        <select
                            className="form-select">
                            <option value="">vidal Ward</option>
                            <option value="">Roscoe McDermott</option>
                            <option value="">Merle Hill</option>
                        </select> 
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-6 mb-3">
                        <h6>Start Date</h6>
                        <CustomInputField type={"date"}
                        />
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-6 mb-3">
                        <h6>Deadline</h6>
                        <CustomInputField type={"date"}
                        />
                        <div className="text-danger"></div>
                    </div>
                </div>
            </form>
        </div>
    )
}