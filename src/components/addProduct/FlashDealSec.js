import React from 'react'

function FlashDealSec() {
    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                            <h3 style={{ color: '#231f1fa1' }}>Flash Deal</h3>
                            <hr />
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Start Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder='Enter Start Date'
                                    id="fromDate"
                                />
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">End Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder='Enter End Date'
                                    id="fromDate"
                                />
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Discount</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Discount'
                                    id="fromDate"
                                />
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Discount Type</label>
                                <select className="form-select form-control" aria-label="Default select example">
                                    <option selected>Select Discount Type</option>
                                    <option value={'Amount'}>Amount</option>
                                    <option value={'Percent'}>Percent</option>
                                </select>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashDealSec