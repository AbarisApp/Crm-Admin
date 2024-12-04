import { Button } from "react-bootstrap"





export const PaymentsDetails = () => {
    return (
        <>
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">anatol requested $75.00 USD
                                </h4>
                            </div>

                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-5 mb-3">
                                        <div className="card-card shadow-sm">
                                            <div className="card-body-card">
                                                <h5 className="card-title">Payment Via Bank Transfer</h5>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>Date</span><span>2024-09-16 07:41 PM</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>Transaction Number</span><span>VJZKDNRP4AUY</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>Username</span><span>@anatol</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>Method</span><span>Bank Transfer</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>Amount</span><span>$75.00 USD</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>Charge</span><span>$1.75 USD</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>After Charge</span><span>$76.75 USD</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>Rate</span><span>1 USD = 1.00 USD</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>After Rate Conversion</span><span>76.75 USD</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>Status</span><span className="badge bg-warning text-dark">Pending</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <div class="card-card shadow-sm">
                                            <div class="card-body-card">
                                                <h5 class="card-title">User Payment Information</h5>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item d-flex justify-content-between">
                                                        <span>First Name</span><span>Anatol</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between">
                                                        <span>Last Name</span><span>Us</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between">
                                                        <span>Bank Name</span><span>PrivatBank</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between">
                                                        <span>Transaction Number</span><span>111111111111</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between">
                                                        <span>Screenshot</span><span><a href="#" class="text-decoration-none">Attachment</a></span>
                                                    </li>
                                                </ul>

                                                <div class="mt-3 text-end">
                                                    <button class="btn btn-success me-2">Approve</button>
                                                    <button class="btn btn-danger">Reject</button>
                                                </div>
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
