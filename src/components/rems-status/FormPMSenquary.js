import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { CiSearch } from "react-icons/ci";

export default function FormPMSenquary() {
    return (
        <div className="p-2">
            <h1 className="fs-5">General</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex w-100 gap-2 align-items-center">
                                <label className="fs-6">Enquiry Ref</label>
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"text"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-2 align-items-center">
                                <label className="fs-6">Status</label>
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
                                    <label className="fs-6">Document View</label>
                                    <input type="file" className="border-0 w-50 text-primary"></input>
                                    <span>(100mb)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="mt-2 fs-4">Proparty info</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex gap-2 align-items-center">
                                <label className="fs-6">Venture</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>Sentec Venture</option>
                                    </select>
                                </div>
                                <button className="text-black btn btn-primary m-0">
                                    <CiSearch fontSize={15} />
                                </button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-2 align-items-center">
                                <label className="fs-6">propery type</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>Commerical</option>
                                    </select>
                                </div>
                                <button className="text-black btn btn-primary m-0">
                                    <CiSearch fontSize={15} />
                                </button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-2 align-items-center">
                                <label className="fs-6">propery type</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>Commerical</option>
                                    </select>
                                </div>
                                <button className="text-black btn btn-primary m-0">
                                    <CiSearch fontSize={15} />
                                </button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-2 align-items-center">
                                <label className="fs-6">propery</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>penrose</option>
                                    </select>
                                </div>
                                <button className="text-black btn btn-primary m-0">
                                    <CiSearch fontSize={15} />
                                </button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex mt-2 align-items gap-2">
                                <h2 className="fs-5">opportunity type</h2>
                                <input type="radio" name="opportunity" />
                                <label className="fs-6">Individual</label>
                                <input type="radio" name="opportunity" />
                                <label className="fs-6">Company</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex w-100 gap-2 align-items-center">
                                <label className="fs-6">Mobile</label>
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"number"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="fs-4 mt-2">propspect info</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex w-100 gap-2 align-items-center">
                                <label className="fs-6">Mobile</label>
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"number"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex w-100 gap-2 align-items-center">
                                <label className="fs-6">Mobile</label>
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