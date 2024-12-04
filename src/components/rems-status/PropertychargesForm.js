import React from "react";

import { CiSearch } from "react-icons/ci";
import CustomInputField from "../../common/CustomInputField";

export default function PropertychargesForm(){
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
                                        <label className="fs-5">Name</label>
                                        <div className="w-100">
                                            <CustomInputField type={"text"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="d-flex gap-2 align-items-center">
                                        <label className="fs-5">Mobile No</label>
                                        <div className="w-100">
                                            <CustomInputField type={"number"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="d-flex gap-2 align-items-center">
                                        <label className="fs-5">Account Name</label>
                                        <div className="w-100">
                                            <select className="py-2 w-100 px-4 border border-light">
                                                <option>...select...</option>
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
                                        <label>Owner</label>
                                        <div className="w-100">
                                            <CustomInputField type={"text"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="d-flex gap-2 align-items-center">
                                        <label className="fs-5">Date</label>
                                        <div className="w-100">
                                            <CustomInputField type={"date"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="d-flex gap-2 align-items-center">
                                        <label className="fs-5">Lead Ref:</label>
                                        <div className="w-100">
                                            <CustomInputField type={"text"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="d-flex gap-2 align-items-center">
                                        <label className="fs-5">Block</label>
                                        <div className="w-100">
                                            <CustomInputField type={"number"} />
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