import React from 'react'

function UpdateClubUserPoints() {
    return (
        <>
            <section className="ListDistributer mx-4 expdf ">
                <div className="row m-4">
                    <div className="col-xl-12" style={{ padding: "0" }}>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0"><b>Update User Point</b></h4>
                                    </div>
                                    <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>


                                        <div className="form-group col-12 mt-2">
                                            <label htmlFor="fromDate">Point</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Point'
                                                id="fromDate"
                                            />
                                        </div>



                                        <div className="form-group col-12 mt-3">
                                            <button type="button" className="btn btn-warning float-end">
                                                RESET
                                            </button>
                                            <button type="button" className="btn btn-primary float-end">
                                                Update
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

export default UpdateClubUserPoints