import React from 'react'

function LowStockQtyWarning() {
    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                            <h3 style={{ color: '#231f1fa1' }}>Low Stock Quantity Warning</h3>
                            <hr />
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Quantity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Quantity'
                                    id="fromDate"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LowStockQtyWarning