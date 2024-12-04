import React from "react";
import CustomInputField from "../../common/CustomInputField";
import { IoMdAdd } from "react-icons/io";
import MoreOrderList from "./moreorderlist";
import NewOrderTable from "./newordertable";
import { BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function AddOrderlist({title, link, btnTitle , moreFile}) {
    return (
        <div className="wrap-summery pb-3 overflow-hidden">
            <div className= "d-flex p-3 rounded-0 border border-ligth justify-content-between align-items-center">
                <h2 className="fs-2">{title}</h2>
                <ul className="d-flex">
                    <li><Link to={link} className="btn btn-primary fs-4">{btnTitle}</Link></li>
                </ul>
            </div>
            <div className="row p-3">
                <div className="col-8 gap-1">
                    <div className="row">
                        <div className="col-6 mt-2">
                            <h6>Party Name</h6>
                            <div className="d-flex gap-1">
                                <select
                                    className="form-select">
                                    <option value="">Select a party</option>
                                    <option value="">TimeSheet</option>
                                    <option value="">Files</option>
                                </select>
                                <button className="p-2 m-0 btn btn-primary">
                                    <IoMdAdd fontSize={20} />
                                </button>
                            </div>
                            <div className="text-danger"></div>
                        </div>
                        <div className="col-6 mt-2">
                            <h6>Merchandiser name</h6>
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
                        <div className="col-6 mt-2">
                            <div className="gap-2 align-items-center">
                                <h6 className="m-0">Order No</h6>
                                <CustomInputField type={"text"}
                                    label={false}
                                />
                                <div className="text-danger"></div>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                            <div className="gap-2 align-items-center">
                                <h6 className="m-0">Order Title</h6>
                                <CustomInputField type={"text"}
                                />
                                <div className="text-danger"></div>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                            <div className="gap-2 align-items-center">
                                <h6 className="m-0">Order Description</h6>
                                <CustomInputField type={"text"}
                                />
                                <div className="text-danger"></div>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                            <div className="gap-2 align-items-center">
                                <h6 className="m-0">Frabrication</h6>
                                <CustomInputField type={"text"}
                                />
                                <div className="text-danger"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 p-2">
                    <h6 className="m-0">Upload Item Image</h6>
                    <div className="border position-relative upload text-center" style={{ height: "191px" }}>
                            <input type="file" className="position-absolute z-2 border" name="upload" />
                            <label for="upload position-absolute z-1 ">
                                <BsCardImage fontSize={100}/>
                            </label>
                    </div>
                </div>
            </div>
            {moreFile && <div className="px-3">
                <MoreOrderList />
            </div>}
            <div className="px-3">
                <NewOrderTable />
            </div>
        </div>
    )
}   