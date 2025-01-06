import React, { useState } from 'react'
import { Formik } from 'formik';
import CustomInputField from '../../../../common/CustomInputField';
import { Pagination } from 'antd';
function FlightAmbdFilter({ filterInitial, handleChange, getTransitionReport }) {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>SEARCH AMENDMENTS MARKUP
                                    </b></h4>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Form Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={filterInitial?.start_date}
                                            name="start_date"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">To Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={filterInitial?.end_date}
                                            name="start_date"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 text-center mt-4">
                                        <button type="button" className="btn btn-primary mt-3" onClick={() => getTransitionReport(0)}>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightAmbdFilter