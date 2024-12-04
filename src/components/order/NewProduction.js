import React from "react";
import { Link } from "react-router-dom";
import CustomInputField from "../../common/CustomInputField";
import Report from "./report";

export default function NewProduction({title, link, btnTitle}){
    return(
        <div className="wrap-summery pb-3 overflow-hidden">
            <div className= "d-flex p-3 rounded-0 border border-ligth justify-content-between align-items-center">
                <h2 className="fs-2">{title}</h2>
                <ul className="d-flex">
                    <li><Link to={link} className="btn btn-primary fs-4">{btnTitle}</Link></li>
                </ul>
            </div>
            <div className="p-3">
            <div className="row">
                    <div className="col-6">
                        <h6 className="m-0">order No</h6>
                        <div className="d-flex gap-1">
                            <select
                                className="form-select w-100">
                                <option value="">000088</option>
                                <option value="">0000011</option>
                                <option value="">00012</option>
                            </select>
                        </div>
                        <div className="text-danger"></div>
                    </div> 
                    <div className="col-6">
                        <div className="gap-2 align-items-center">
                            <h6 className="m-0">Consignee</h6>
                            <CustomInputField type={"text"}
                                label={false}
                            />
                            <div className="text-danger"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <Report />
            </div>
            <div className="mt-3">
            <ul className="d-flex gap-2 justify-content-center ">
                <li><button className="btn px-5 py-2 fs-4 btn-outline-secondary">Cancle</button></li>
                <li><button className="btn px-5 py-2 fs-4 btn-primary">Save</button></li>
            </ul>
        </div>
            </div>
    )
}