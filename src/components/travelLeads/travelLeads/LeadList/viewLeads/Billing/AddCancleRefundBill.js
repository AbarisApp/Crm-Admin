import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom";

export default function AddCancleRefundBill({ editData, cancelForm, getTransitionReport, mainListFun }) {


    const [initialData, setInitialData] = useState({

    })




    const [costType, setCostType] = useState({
        perperson: true
    })
    const [disable, setDisable] = useState({
        perperson: true
    })
    const [add, setAdd] = useState({
        yes: true
    })
    const [rows, setRows] = useState([
        {
            supplier: "",
            enquiry: " ",
            cost: " ",
            servicecharge: " ",
            taxvalue: " ",
            remark: " ",
            subtotal: " ",
        }
    ]);
    const [info, setInfo] = useState([
        {
            enquiry: "",
            description: " ",
            cost: " ",
            servicecharge: " ",
            taxvalue: " ",
            remark: " ",
            subtotal: " ",
        }
    ]);
    const handleDisable = (str, val) => {
        const clone = { ...disable, [str]: val }
        setDisable(clone)
    }
    const handleCostTye = (str, val) => {
        const clone = { ...costType, [str]: val }
        setCostType(clone)
    }
    const handleAddTCS = (str, val) => {
        const clone = { ...add, [str]: val }
        setAdd(clone)
    }
    const AddRow = () => {
        setRows((prevRows) => [
            ...prevRows,
            {
                supplier: "",
                enquiry: " ",
                cost: " ",
                servicecharge: " ",
                taxvalue: " ",
                remark: " ",
                subtotal: " ",
            },
        ]);
    };
    const AddInfo = () => {
        setInfo((prevRows) => [
            ...prevRows,
            {
                enquiry: "",
                description: " ",
                cost: " ",
                servicecharge: " ",
                taxvalue: " ",
                remark: " ",
                subtotal: " ",
            },
        ]);
    };

    const removeRow = (index) => {
        setRows(prevRows => prevRows.filter((_, i) => i !== index));
    };
    const removeInfo = (index) => {
        setInfo(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div className="m-4">
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Billing</h4>
                    {/* <div>
                        <Link className="btn btn-primary btn-sm" to="/addtraveller" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-user-plus"></i>  Add Cancel/Refund Details</Link>
                    </div> */}
                </div>
            </div>
            <div className="row my-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-4">
                                    <div className="mt-2">
                                        <label className="form-label">Tour Start Date <span className="text-danger fs-5">*</span></label>
                                        <input className="form-control" type="date" />

                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-2">
                                        <label className="form-label">Number Days</label>
                                        <input className="form-control" type="text" placeholder="number of days" />

                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive active-projects my-4 style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Add Supplier Info</h4>
                                </div>
                            </div>
                            {rows.map((row, index) =>
                                <div className="row" key={index}>
                                    <div className="col-4">
                                        <div className="mt-2">
                                            <label className="form-label">Supplier <span className="text-danger fs-5">*</span></label>
                                            <select className="form-select shadow" name="Status">
                                                <option></option>
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mt-2">
                                            <label className="form-label">Enquiry <span className="text-danger fs-5">*</span></label>
                                            <input className="form-control" type="text" placeholder="Enquiry" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mt-2">
                                            <label className="form-label">Contact  <span className="text-danger fs-5">*</span></label>
                                            <select className="form-select shadow" name="Status">
                                                <option></option>
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">Cost Type</label>
                                            <div className="d-flex gap-4">
                                                <div className="d-flex gap-2 align-items-center">
                                                    <input type="radio" checked={costType.perperson ? true : false} name="type" />
                                                    <label className="m-0" onClick={() => handleCostTye("perperson", true)}>Per Person</label>
                                                </div>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <input type="radio" checked={costType.perperson ? false : true} name="type" />
                                                    <label className="m-0" onClick={() => handleCostTye("perperson", false)}>Total</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="row mt-2">
                                            {costType.perperson && <div className="col-3">
                                                <label className="form-label">No. of Person <span className="text-danger fs-5">*</span></label>
                                                <input className="form-control" type="number" placeholder="no. of person" />
                                            </div>}
                                            <div className="col-3">
                                                <label className="form-label">Currency</label>
                                                <input className="form-control" type="text" placeholder="currency" />
                                            </div>
                                            <div className="col-3">
                                                <label className="form-label">Cost <span className="text-danger fs-5">*</span></label>
                                                <input className="form-control" type="text" placeholder="Cost" />
                                            </div>
                                            <div className="col-3">
                                                <label className="form-label">Tax Value <span className="text-danger fs-5">*</span></label>
                                                <input className="form-control" type="number" placeholder="tax avlue" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="form-label">Remark</label>
                                            <input className="form-control" type="number" placeholder="Remark" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">Sub Total</label>
                                            <input className="form-control" type="number" placeholder="sub Total" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">Cancel or Refunded ?</label>
                                            <div className="w-100">
                                                <input
                                                    type={"checkbox"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 my-2 d-flex justify-content-end">
                                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                            )}
                            <div className="mt-3">
                                <button type="button" className="btn btn-primary" onClick={AddRow}>Add more</button>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">Total Supplier Amount</label>
                                        <input className="form-control" type="number" placeholder="Total Supplier amount" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive active-projects style-1 my-4">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Customer Info</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Customer <span className="text-danger fs-5">*</span></label>
                                    <input className="form-control" type="number" placeholder="Customer" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Customer Number <span className="text-danger fs-5">*</span></label>
                                    <input className="form-control" type="number" placeholder="Customer Number" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">State</label>
                                    <select className="form-select shadow" name="Status">
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Account Head</label>
                                    <input className="form-control" type="number" placeholder="Account Head" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Substract GST from Profit/Loss</label>
                                    <div className="w-100">
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="form-label">Add TCS on the total amount</label>
                                    <div className="d-flex gap-4">
                                        <div className="d-flex gap-2 align-items-center">
                                            <input type="radio" name="add" checked={add.yes ? true : false} />
                                            <label className="m-0" onClick={() => handleAddTCS("yes", true)}>Yes</label>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <input type="radio" name="add" checked={add.yes ? false : true} />
                                            <label className="m-0" onClick={() => handleAddTCS("yes", false)}>No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {info.map((row, index) =>
                            <div className="row" key={index}>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">Enquiry <span className="text-danger fs-5">*</span></label>
                                        <select className="form-select shadow" name="Status">
                                            <option></option>
                                            <option>all</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">Description  <span className="text-danger fs-5">*</span></label>
                                        <div className="w-100">
                                            <textarea className="form-control"
                                                type={"text"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">Cost Type </label>
                                        <div className="d-flex gap-4">
                                            <div className="d-flex gap-2 align-items-center">
                                                <input type="radio" name="Cost" checked={disable.perperson ? true : false} />
                                                <label className="m-0" onClick={() => handleDisable("perperson", true)}>Per Person
                                                </label>
                                            </div>
                                            <div className="d-flex gap-2 align-items-center">
                                                <input type="radio" name="Cost" checked={disable.perperson ? false : true} />
                                                <label className="m-0" onClick={() => handleDisable("perperson", false)}>Total</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">No. of Person   <span className="text-danger fs-5">*</span></label>
                                        <input className="form-control" type="number" placeholder="No. of person" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">Tax(%)</label>
                                        <select className="form-select shadow" name="Status">
                                            <option></option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">Cost <span className="text-danger fs-5">*</span></label>
                                        <input className="form-control" type="number" placeholder="Cost" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">Service Charge  <span className="text-danger fs-5">*</span></label>
                                        <input className="form-control" type="number" placeholder="Service Charge" />
                                    </div>
                                </div>
                                {add.yes && <> <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">TCS @ 5%</label>
                                        <input className="form-control" type="text" placeholder="TCS @ 5%" />
                                    </div>
                                </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="form-label">Total With TCS</label>
                                            <input className="form-control" type="number" placeholder="Total With TCS" />
                                        </div>
                                    </div></>}
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">CGST</label>
                                        <input className="form-control" type="number" placeholder="CGST" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">SGST</label>
                                        <input className="form-control" type="number" placeholder="SGST" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">Sub Total</label>
                                        <input className="form-control" type="number" placeholder="Sub Total" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="form-label">Cancel or Refunded ?</label>
                                        <div className="w-100">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 my-2 d-flex justify-content-end">
                                    <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeInfo(index)}><i class="fa-solid fa-xmark"></i></button>
                                </div>
                            </div>
                        )}
                        <div className="mt-3">
                            <button type="button" className="btn btn-primary" onClick={AddInfo}>Add more</button>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Total</label>
                                    <input className="form-control" type="number" placeholder="Total" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Remark</label>
                                    <input className="form-control" type="text" placeholder="Remark" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex my-4 gap-2">
                            <button className="btn btn-primary m-0">Save</button>
                            <button className="btn btn-outlint-primary m-0" onClick={cancelForm}>Cancle</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}