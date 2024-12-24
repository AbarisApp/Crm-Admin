import React, { useState } from 'react'
import { Formik } from 'formik';
import CustomInputField from '../../../../common/CustomInputField';
import { Pagination } from 'antd';
function BusBookingFilter({ handleChange, filterInitial, count, page, getTransitionReport, title }) {

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b> Search Bus Booking </b></h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <label className="form-label">Start Date:</label>
                                            <input type="date" className="form-control" name='start_date' value={filterInitial?.start_date} onChange={handleChange} />
                                        </div>
                                        {/* To Date */}
                                        <div className="col-xl-4">
                                            <label className="form-label">End Date:</label>
                                            <input type="date" className="form-control" name='end_date' value={filterInitial?.end_date} onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mt-3">
                                            <div className='d-flex justify-content-start mt-3'>
                                                <button className="btn btn-primary pd-x-20 color2 mt-2" type="submit" onClick={() => getTransitionReport(0)}>
                                                    <i className="fas fa-search"></i> Search
                                                </button>
                                                {/* <button className="btn btn-primary pd-x-20 color2" type="button" onClick={resetForm}>
                                                    <i className="fas fa-refresh"></i> Reset
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusBookingFilter