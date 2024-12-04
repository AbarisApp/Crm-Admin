import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { CiSearch } from "react-icons/ci";

export default function VenturesForm() {
    return (
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
                                        <label>Code</label>
                                        <div className="w-100">
                                            <CustomInputField type={"text"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="d-flex gap-2 align-items-center">
                                        <label className="fs-6">City</label>
                                        <div className="w-100">
                                            <select className="py-2 w-100 px-4 border border-light">
                                                <option>mumbai</option>
                                            </select>
                                        </div>
                                        <button className="text-black btn btn-primary m-0">
                                            <CiSearch fontSize={15} />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="d-flex gap-2">
                                        <label className="fs-5">Document</label>
                                        <div className="w-50">
                                            <input className="border-0" type="file" />
                                        </div>
                                        <span className="fs-6">(100 mb)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row mt-5">
                                <div className="mt-3 col-12">
                                    <div className="d-flex gap-2 align-items-center">
                                        <label>Area</label>
                                        <div className="w-100">
                                            <CustomInputField type={"text"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 col-12">
                                <div className="d-flex gap-2">
                                        <label className="fs-5">layout Image</label>
                                        <div className="w-50">
                                            <input className="border-0" type="file" />
                                        </div>
                                        <span className="fs-6">(100 mb)</span>
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