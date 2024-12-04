import React from 'react'

function TodaysDealSec() {
    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                            <h3 style={{ color: '#231f1fa1' }}>Todays Deal</h3>
                            <hr />
                            <div className="form-group col-12 mt-2">
                                <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                    <label
                                        className="form-check-label me-2"
                                        htmlFor="flexSwitchCheckDefault"
                                    >
                                        Status
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

export default TodaysDealSec