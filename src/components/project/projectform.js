import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { Link } from "react-router-dom";
import ProjectSubFrom from "./projectsubform";
import Editor from "./projectEditor";
export default function ProjectFrom() {
    return (
        <div>
            <form className="tbl-captionn">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h6>Project Name</h6>
                        <CustomInputField
                        />
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-12 mb-3">
                        <h6>Customer</h6>
                        <select
                            className="form-select">
                            <option value="">Select and begin typing</option>
                        </select> 
                        <div className="text-danger"></div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="d-flex gap-3">
                        <input type="checkbox" className="d-block" />
                        <label className="d-block m-0">Calculate progress through tasks</label>
                    </div> 
                    <div className="">
                        <label className="d-block">Progress 64%</label>
                        <input type="range" className="d-block w-100" />
                    </div> 
                </div>
            </form>
            <div>
                <ProjectSubFrom />
            </div>
            <div className="py-3 px-4 ">
                <Editor />
            </div>
            <div>
                <div className=" p-4 d-flex gap-3 py-2 rounded-0 border border-light ">
                    <input type="checkbox"/>
                    <label className="d-block m-0">Send project created email</label>
                </div>
            </div>
        </div>
    )
}