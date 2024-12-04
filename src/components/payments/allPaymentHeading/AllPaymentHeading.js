



export const AllPaymentHeading = () => {
    return (
        <>
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            {/* <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">anatol requested $75.00 USD
                                </h4>
                            </div> */}

                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card-setcard-1 border-0 shadow-sm p-3 d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light p-2 me-3">
                                                    <i className="bi bi-check-circle text-success" style={{ fontSize: 24 }} />
                                                </div>
                                                <div>
                                                    <strong>$3,390.00 USD</strong>
                                                    <p className="text-muted mb-0">Successful Payment</p>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <a href="#" className="text-decoration-none">&gt;</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card-setcard-1 border-0 shadow-sm p-3 d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light p-2 me-3">
                                                    <i className="bi bi-clock-history text-warning" style={{ fontSize: 24 }} />
                                                </div>
                                                <div>
                                                    <strong>$1,111.00 USD</strong>
                                                    <p className="text-muted mb-0">Pending Payment</p>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <a href="#" className="text-decoration-none">&gt;</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card-setcard-1 border-0 shadow-sm p-3 d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light p-2 me-3">
                                                    <i className="bi bi-x-circle text-danger" style={{ fontSize: 24 }} />
                                                </div>
                                                <div>
                                                    <strong>$0.00 USD</strong>
                                                    <p className="text-muted mb-0">Rejected Payment</p>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <a href="#" className="text-decoration-none">&gt;</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card-setcard-1 border-0 shadow-sm p-3 d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle bg-light p-2 me-3">
                                                    <i className="bi bi-cash-coin text-secondary" style={{ fontSize: 24 }} />
                                                </div>
                                                <div>
                                                    <strong>$9,796.00 USD</strong>
                                                    <p className="text-muted mb-0">Initiated Payment</p>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <a href="#" className="text-decoration-none">&gt;</a>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
