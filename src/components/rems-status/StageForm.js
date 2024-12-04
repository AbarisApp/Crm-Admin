import React from "react";
import { CiSearch } from "react-icons/ci";
import CustomInputField from "../../common/CustomInputField";

export default function StagesForm(){
    return(
        <div className="mt-3">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex gap-2 align-items-center">
                                    <label>Name</label>
                                    <div className="w-100">
                                        <CustomInputField type={"text"} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="d-flex gap-2 align-items-center">
                                    <label className="fs-6">Property</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light">
                                            <option>SkyHouse phase 1</option>
                                        </select>
                                    </div>
                                    <button className="text-black btn btn-primary m-0">
                                        <CiSearch fontSize={15} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex gap-2 align-items-center">
                                    <label>Code</label>
                                    <div className="w-100">
                                        <CustomInputField type={"text"} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex gap-2 mt-2 align-items-center">
                                    <label>Payment Percentage</label>
                                    <div className="w-100">
                                        <CustomInputField type={"text"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}