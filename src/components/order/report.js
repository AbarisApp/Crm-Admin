import React from "react";
import CustomInputField from "../../common/CustomInputField";

export default function Report(){
    return(
        <div>
            <div>
            <h5 className="fs-3">Cutting</h5>
            <div className="row">
                <div className="col-4">
                <h6 className="m-0">Daily</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
                <div className="col-4">
                <h6 className="m-0">TTL Cutting</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
                <div className="col-4">
                <h6 className="m-0">Balance 4%</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
            </div>
            <div className="mt-3">
            <h5 className="fs-3">Print/Emb.</h5>
            <div className="row">
                <div className="col-4">
                <h6 className="m-0">Today Send</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
                <div className="col-4">
                <h6 className="m-0">TTL Send</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
                <div className="col-4">
                <h6 className="m-0">Received</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
                <div className="col-4">
                <h6 className="m-0 mt-3">Balance</h6>
                    <CustomInputField type={"text"}
                    />
                    <div className="text-danger"></div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}