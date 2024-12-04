import React from "react";
import { Link } from "react-router-dom";
import CustomInputField from "../../common/CustomInputField";
import NewOrderTable from "./newordertable";

export default function AddSimple({title, link, btnTitle, table}){
    return (
        <div className="wrap-summery pb-3">
            <div className="d-flex p-3 rounded-0 border border-ligth justify-content-between align-items-center">
                <h2 className="fs-2">{title}</h2>
                <ul className="d-flex">
                    <li><Link to={link} className="btn btn-primary fs-4">{btnTitle}</Link></li>
                </ul>
            </div>
            <div className="p-4">
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
            <div>
                <NewOrderTable table={table}/>
            </div>
        </div>
    )
}