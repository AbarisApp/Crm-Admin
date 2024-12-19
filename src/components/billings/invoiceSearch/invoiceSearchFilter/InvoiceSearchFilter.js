import React from 'react'
import { Link } from 'react-router-dom'

function InvoiceSearchFilter({ params, filterInitial, handleChange, getTransitionReport }) {
    return (
        <>
            <div className="card">
                <div className="d-flex align-items-center justify-content-between">
                    {/* From Date */}
                    <div className='row flex-grow-1 '>
                        <div className="col-xl-4">
                            <label className="form-label">From:</label>
                            <input type="date" className="form-control" name='start_date' value={filterInitial?.start_date} onChange={handleChange} />
                        </div>

                        {/* To Date */}
                        <div className="col-xl-4">
                            <label className="form-label">To:</label>
                            <input type="date" className="form-control" name='end_date' value={filterInitial?.end_date} onChange={handleChange} />
                        </div>

                        {/* Bill Type */}
                        <div className="col-xl-4">
                            <label className="form-label">Bill Type</label>
                            <select className="form-select">
                                <option>--Select--</option>
                                <option>Type 1</option>
                                <option>Type 2</option>
                            </select>
                        </div>
                    </div>

                    {/* View and New Buttons */}
                    <div className="col-xl-4 text-end">
                        <button className="btn btn-outline-primary me-2" onClick={() => getTransitionReport(0)}>View</button>
                        <Link className="btn btn-primary" to={`/create-billings-invoice/${params?.id}`}>New</Link>
                    </div>
                </div>

                <div className="row mt-3 align-items-center">
                    {/* Radio Buttons */}
                    <div className="col-md-3">
                        <div>
                            <label className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    name="billType"
                                    className="form-check-input"
                                    defaultChecked
                                />
                                Bill
                            </label>
                            <label className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    name="billType"
                                    className="form-check-input"
                                />
                                Sale
                            </label>
                            <label className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    name="billType"
                                    className="form-check-input"
                                />
                                Purchase
                            </label>
                        </div>
                    </div>

                    {/* Party */}
                    <div className="col-md-3">
                        <label className="form-label">Party:</label>
                        <input type="text" className="form-control" placeholder="Enter Party" />
                    </div>

                    {/* Search */}
                    <div className="col-md-3">
                        <label className="form-label">Search:</label>
                        <input type="text" className="form-control" placeholder="Enter Search" />
                    </div>

                    {/* More */}
                    <div className="col-md-3">
                        <label className="form-label"></label>
                        <button className="btn btn-light w-100">
                            <i className="bi bi-caret-down"></i> More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceSearchFilter