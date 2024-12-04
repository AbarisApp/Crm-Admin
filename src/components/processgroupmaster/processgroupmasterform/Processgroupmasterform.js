import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Pagination } from 'antd';

function Processgroupmasterform() {
    const [formData, setFormData] = useState({
        name: "",
        alias: "",
        abbreviation: "",
        methodOfNumber: "",
        advanceConfig: false,
        useEffectiveDateForVoucher: false,
        isOptional: false,
        commonNaration: false,
        narationForEntry: false,
        selected: false,
    });

    const params = useParams();
    const navigate = useNavigate();

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const toastErrorMessage = (message) => {
        toast.error(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        /*  try {
             let response;
             if (!params?.id) {
                 // response = await voucherMasterAdd(formData);
             } else {
                 // response = await voucherMasterUpdate(params.id, formData);
             }
 
             if (response?.statusCode === "200") {
                 toastSuccessMessage(response?.data?.message || "Voucher Type saved successfully!");
                 setTimeout(() => {
                     navigate(`/voucher-type-list`);
                 }, 1000);
             } else {
                 toastErrorMessage(response?.data?.message || "Failed to add Voucher Type");
             }
         } catch (error) {
             toastErrorMessage("An error occurred.");
         } */
    };

    /* useEffect(() => {
        if (params?.id) {
            const fetchData = async () => {
                try {
                    const response = await getvoucherMasterId(params.id);
                    setFormData(response.data);
                } catch (error) {
                    toast.error("Failed to load voucher data for editing");
                }
            };
            fetchData();
        }
    }, [params.id]); */

    return (
        <div className="row mx-4">
            <div className="col-lg-12 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2 py-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Process Group Master
                                </h4>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Group Name: <span className="tx-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            value={formData.name}
                                            type="text"
                                            name="name"
                                            autoComplete="off"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Select Process
                                        </label>
                                        <select
                                            className="form-control"
                                            value={formData.methodOfNumber}
                                            name="methodOfNumber"
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Method</option>
                                            <option value="Automatic">Automatic</option>
                                            <option value="Manual">Manual</option>
                                            <option value="None">None</option>
                                        </select>
                                    </div>
                                </div>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> PROCESS DETAILS - SEQUENCE NO  - 39 BOX CUTTING </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-8 form-group mg-b-0">
                                                    <div className='d-flex align-items-center'>
                                                        <label className="form-label">Seq:</label>
                                                        <input
                                                            className="form-control"
                                                            value={formData.abbreviation}
                                                            type="text"
                                                            name="abbreviation"
                                                            autoComplete="off"
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-8 form-group mg-b-0">
                                                    <small className="form-label">Process Name:</small>
                                                    <span>
                                                        <strong>39 BOX CUTTING</strong>
                                                    </span>
                                                </div>
                                                <div className="col-lg-2 col-md-8 form-group mg-b-0">
                                                    <small>Processed: </small>
                                                </div>
                                                <div className="col-lg-2 col-md-8 form-group mg-b-0">
                                                    <small>Department: </small>
                                                </div>
                                                <div className="col-lg-3 col-md-8 form-group mg-b-0">
                                                    <small>Estimate Type:
                                                        : </small>
                                                    <strong >Minute</strong>
                                                </div>
                                                <div className="col-lg-3 col-md-8 form-group mg-b-0">
                                                    <small>Estimate Type:
                                                        : </small>
                                                    <strong >Minute</strong>
                                                </div>
                                                <div className="col-lg-6 col-md-8 form-group mg-b-0">
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check me-3">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="certificateRequired"
                                                                name="certificateRequired"
                                                                onChange={handleInputChange}
                                                                checked={formData.certificateRequired}
                                                            />
                                                            <label className="form-check-label" htmlFor="certificateRequired">
                                                                Certificate Required?
                                                            </label>
                                                        </div>

                                                        <div className="form-check me-3">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="qcRequired"
                                                                name="qcRequired"
                                                                onChange={handleInputChange}
                                                                checked={formData.qcRequired}
                                                            />
                                                            <label className="form-check-label" htmlFor="qcRequired">
                                                                QC Required?
                                                            </label>
                                                        </div>

                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="isOptional"
                                                                name="isOptional"
                                                                onChange={handleInputChange}
                                                                checked={formData.isOptional}
                                                            />
                                                            <label className="form-check-label" htmlFor="isOptional">
                                                                Is Optional
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row m-2">
                                                <div className="col-xl-12">
                                                    <div className="table-responsive active-projects style-1">
                                                        <div className="tbl-caption py-3">
                                                            <h4 className="heading mb-0">Specifications of product materials
                                                            </h4>
                                                        </div>
                                                        <div
                                                            id="banner-tblwrapper_wrapper"
                                                            className="dataTables_wrapper no-footer"
                                                        >
                                                            <table
                                                                id="banner-tblwrapper"
                                                                className="table dataTable no-footer"
                                                                role="grid"
                                                                aria-describedby="banner-tblwrapper_info"
                                                            >
                                                                <thead>
                                                                    <tr role="row">
                                                                        <th style={{ width: "250px" }}> Type</th>
                                                                        <th style={{ width: "150px" }}>Stock</th>
                                                                        <th style={{ width: "150px" }}> Item</th>
                                                                        <th style={{ width: "150px" }}>Quantity
                                                                        </th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr role="row">
                                                                        
                                                                        <td>Product</td>

                                                                        <td>IN</td>
                                                                        <td>Pstic</td>
                                                                        <td>1</td>


                                                                    </tr>

                                                                    <tr role="row">
                                                                        
                                                                        <td>Raw Material	</td>
                                                                        <td>Out</td>

                                                                        <td>Astaf</td>
                                                                        <td>0.25</td>


                                                                    </tr>
                                                                    <tr role="row">
                                                                        
                                                                        <td>Raw Material	</td>
                                                                        <td>Out</td>

                                                                        <td>1001</td>
                                                                        <td>1</td>


                                                                    </tr>
                                                                    <tr role="row">
                                                                        
                                                                        <td>Semi Finished</td>
                                                                        <td>IN</td>

                                                                        <td>228</td>
                                                                        <td>1</td>


                                                                    </tr>
                                                                    <tr role="row">
                                                                        
                                                                        <td>Raw Material	</td>
                                                                        <td>Out</td>

                                                                        <td>ABC</td>
                                                                        <td>1</td>


                                                                    </tr>
                                                                    <tr role="row">
                                                                        
                                                                        <td>Semi Finished</td>
                                                                        <td>IN</td>

                                                                        <td>228</td>
                                                                        <td>0.5</td>


                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div
                                                                className="dataTables_info"
                                                                role="status"
                                                                aria-live="polite"
                                                            >
                                                                Total {"0"} entries
                                                            </div>
                                                            <div className="dataTables_paginate paging_simple_numbers">
                                                                <Pagination defaultCurrent={1} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>


                                </Accordion>
                                <div className="col-lg-12">
                                    <button
                                        className="btn btn-primary pd-x-20"
                                        type="submit"
                                    >
                                        {params?.id ? "Update" : "Add"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </div>
    );
}

export default Processgroupmasterform;
