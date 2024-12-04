import React from 'react'

function AddNewCouponComp() {
    return (
        <>
            <section className="ListDistributer mx-4 expdf ">
                <div className="row m-4">
                    <div className="col-xl-12" style={{ padding: "0" }}>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0"><b>Add New Coupon</b></h4>
                                    </div>
                                    <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                                        <div className="form-group col-12 mt-2">
                                            <label htmlFor="fromDate">Coupon Category</label>
                                            <select class="form-select form-control" aria-label="Default select example">
                                                <option selected>Select Coupon Category</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-12 mt-2">
                                            <label htmlFor="fromDate">Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Code'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-12 mt-2">
                                            <label htmlFor="fromDate">Image</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                placeholder='Enter Image'
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
                                            <label htmlFor="fromDate">Description</label>
                                            <textarea class="form-control" placeholder='Enter Short Description' id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>

                                        <div className="form-group col-12 mt-2">
                                            <label htmlFor="fromDate">Discount Type</label>
                                            <select class="form-select form-control" aria-label="Default select example">
                                                <option selected>Select Discount Type</option>
                                                <option value="Amount">Amount</option>
                                                <option value="Percent">Percent</option>
                                            </select>
                                        </div>

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


                                        <div className="form-group col-12 mt-3">
                                            <button type="button" className="btn btn-warning float-end">
                                                RESET
                                            </button>
                                            <button type="button" className="btn btn-primary float-end">
                                                Save
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default AddNewCouponComp