import React from 'react'

function HotelVoucherFilter({ filterInitial, handleChange, getTransitionReport }) {
    return (
        <section className='mx-4'>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Hotel Voucher Report</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Form Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="start_date"
                                        value={filterInitial?.start_date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">To Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="end_date"
                                        value={filterInitial?.end_date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 text-center mt-5">
                                    <button type="button" className="btn btn-primary" onClick={() => getTransitionReport(0)}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HotelVoucherFilter