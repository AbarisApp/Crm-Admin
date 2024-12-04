import React from 'react'

function BottomSec() {
    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                            <div className="form-group col-3 mt-2">
                                <label htmlFor="fromDate">Total Quantity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Total Quantity'
                                    id="fromDate"
                                />
                            </div>

                            <div className="form-group col-3 mt-2">
                                <label htmlFor="fromDate">Minimum order quantity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Minimum order quantity'
                                    id="fromDate"
                                />
                            </div>
                            <div className="form-group col-3 mt-2">
                                <label htmlFor="fromDate">Shipping cost</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Shipping cost'
                                    id="fromDate"
                                />
                            </div>
                            <div className="form-group col-3 mt-2">
                                <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                    <label
                                        className="form-check-label me-2"
                                        htmlFor="flexSwitchCheckDefault"
                                    >
                                        Shipping cost multiply with quantity
                                    </label>
                                    <input
                                        style={{ marginLeft: '80px', border: '1px solid black' }}
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomSec