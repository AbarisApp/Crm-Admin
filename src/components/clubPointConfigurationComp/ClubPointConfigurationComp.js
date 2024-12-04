import React from 'react'

function ClubPointConfigurationComp() {
    return (
        <>
            <section className="ListDistributer mx-4 expdf ">
                <div className="row m-4">
                    <div className="col-xl-12" style={{ padding: "0" }}>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0"><b>Convert Point To Wallet</b></h4>
                                    </div>
                                    <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>


                                        <div className="form-group col-12 mt-2">
                                            <label htmlFor="fromDate">Set Point For ZK1.00</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Point'
                                                id="fromDate"
                                            />
                                            <small>Note: You need to activate wallet option first before using club point addon.</small>
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

export default ClubPointConfigurationComp