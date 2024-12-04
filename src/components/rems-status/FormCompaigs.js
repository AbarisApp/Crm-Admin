import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { CiSearch } from "react-icons/ci";

export default function FormCompaigs(){
    return(
        <div className="p-2">
            <h1 className="fs-5">Campaign Information</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex w-100 gap-2 align-items-center">
                                <label className="fs-6">Name</label>
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"text"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-2 align-items-center">
                                <label className="fs-6">Owner</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>Open</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <div className="d-flex mt-2 gap-2 align-items-center">
                                    <label className="fs-6">Type</label>
                                    <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>Open</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <div className="d-flex mt-2 gap-2 align-items-center">
                                    <label className="fs-6">code</label>
                                    <div className="w-100">
                                    <div className="flex-1 w-100">
                                    <CustomInputField type={"text"} />
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <div className="d-flex mt-2 gap-2 align-items-center">
                                    <label className="fs-6">Start Date</label>
                                    <div className="w-100">
                                    <div className="flex-1 w-100">
                                    <CustomInputField type={"date"} />
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <div className="d-flex mt-2 gap-2 align-items-center">
                                    <label className="fs-6">end Date</label>
                                    <div className="w-100">
                                    <div className="flex-1 w-100">
                                    <CustomInputField type={"date"} />
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mt-2">
                                <div className="d-flex mt-2 gap-2 align-items-center">
                                    <label className="fs-6">Description</label>
                                    <div className="w-100">
                                    <div className="flex-1 w-100">
                                    <textarea className="border w-100"></textarea>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <h1 className="mt-2 fs-4">Planning</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="row">
                    <div className="col-6">
                            <div className="d-flex w-100 gap-2 align-items-center">
                                <label className="fs-6">Targeted Revenue</label>
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"number"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex w-100 gap-2 align-items-center">
                                <label className="fs-6">Budgeted Cost</label>
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"number"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                            <div className="d-flex w-100 gap-2 align-items-center">
                                <label className="fs-6">Targeted Leads</label>
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"number"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                            <div className="d-flex w-100 gap-2 align-items-center">
                                <label className="fs-6">Targeted Opportunities</label>
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"number"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}