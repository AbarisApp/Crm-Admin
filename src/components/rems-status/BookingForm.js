import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { CiSearch } from "react-icons/ci";

export default function BookingForm(){
    return(
        <div className="p-2">
                       <h1 className="fs-5">General</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex w-100 gap-2 align-items-center">
                                <label className="fs-6">Booking Ref</label>
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"text"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-2 align-items-center">
                                <label className="fs-6">PMS ENQ</label>
                                <div className="w-100">
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"text"} />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                        <div className="d-flex gap-2 align-items-center">
                                <label className="fs-6">PMS ENQ</label>
                                <div className="w-100">
                                <div className="flex-1 w-100">
                                    <CustomInputField type={"Date"} />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                            <div className="d-flex gap-2 align-items-center">
                                <label className="fs-6">purchaser</label>
                                <div className="w-100">
                                    <select className="py-2 w-100 px-4 border border-light">
                                        <option>Alvin Tan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
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
                        <div className="col-6 mt-2">
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
                    </div>
                </div>
            </div>
        </div>
    )
}