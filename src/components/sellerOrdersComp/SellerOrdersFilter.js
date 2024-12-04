import React from 'react'

function SellerOrdersFilter() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Filter</b></h4>
                                </div>
                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                    <div className="form-group col-4">
                                        <label htmlFor="fromDate">Bulk Action</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Select Action</option>
                                            <option value={1}>Delete Selection</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="fromDate">Filter By Delivery Status</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Select Delivery Status</option>
                                            <option value={'Pending'}>Pending</option>
                                            <option value={'Confirmed'}>Confirmed</option>
                                            <option value={'Picked Up'}>Picked Up</option>
                                            <option value={'On The Way'}>On The Way</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="fromDate">Filter By Payment Status</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Select Payment Status</option>
                                            <option value={'Paid'}>Paid</option>
                                            <option value={'Un Paid'}>Un Paid</option>
                                        </select>
                                    </div>


                                    <div className="form-group col-4 mt-2">
                                        <label htmlFor="fromDate">Filter By Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder='Enter Filter By Date'
                                            id="fromDate"
                                        />
                                    </div>
                                    <div className="form-group col-4 mt-2">
                                        <label htmlFor="fromDate">Filter By Order Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Filter Order Code'
                                            id="fromDate"
                                        />
                                    </div>

                                    <div className="form-group col-12 mt-3">
                                        <button type="button" className="btn btn-warning float-end" >
                                            RESET
                                        </button>
                                        <button type="submit" className="btn btn-primary float-end">
                                            FILTER
                                        </button>
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

export default SellerOrdersFilter