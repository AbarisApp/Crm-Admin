import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { IoMdAdd } from "react-icons/io";

export default function MoreOrderList() {
    return (
        <div className="row">
            <div className="col-4 mt-2">
                <div className="gap-2 align-items-center">
                    <h6 className="m-0">Payment Mode</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
            </div>
            <div className="col-4 mt-2">
                <h6>Bank Account</h6>
                <div className="d-flex gap-1">
                    <select
                        className="form-select">
                        <option value="">Select a Merchandiser</option>
                        <option value="">TimeSheet</option>
                        <option value="">Files</option>
                    </select>
                    <button className="p-2 btn m-0 btn-primary">
                        <IoMdAdd fontSize={20} />
                    </button>
                </div>
                <div className="text-danger"></div>
            </div>
            <div className="col-4 mt-2">
            <div className="gap-2 align-items-center">
                    <h6 className="m-0">Year</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
            </div>
            <div className="col-4 mt-2">
            <div className="gap-2 align-items-center">
                    <h6 className="m-0">Yarn Count</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
            </div>
            <div className="col-4 mt-2">
            <div className="gap-2 align-items-center">
                    <h6 className="m-0">Shipment Mode</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
            </div>
            <div className="col-4 mt-2">
            <div className="gap-2 align-items-center">
                    <h6 className="m-0">GSM</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
            </div>
            <div className="col-4 mt-2">
            <div className="gap-2 align-items-center">
                    <h6 className="m-0">Pantone</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
            </div>
            <div className="col-4 mt-2">
            <div className="gap-2 align-items-center">
                    <h6 className="m-0">Contact Date</h6>
                    <CustomInputField type={"date"}
                    />
                    <div className="text-danger"></div>
                </div>
            </div>
            <div className="col-4 mt-2">
            <div className="gap-2 align-items-center">
                    <h6 className="m-0">Expiry Date</h6>
                    <CustomInputField type={"date"}
                    />
                    <div className="text-danger"></div>
                </div>
            </div>
        </div>
    )
}