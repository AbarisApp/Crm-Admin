import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs"


const AddpaymentReceipt = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: "Create Receipt",
        path_2: ``,
    };
    return (

        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Create Receipt</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    {/* Basic Invoice Details */}
                                    <div className="col-xl-3 mb-3">
                                        <label className="form-label">Name</label>
                                        <p>Mustafa Ashraf</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label className="form-label">Email</label>
                                        <p>seoabaris@gmai.com</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label className="form-label">Customer Type</label>
                                        <p>B2C</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label className="form-label">Contact</label>
                                        <p>99999999999</p>
                                    </div>
                                    {/* Invoice Fields */}
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Currency</label>
                                        <select className="form-control">
                                            <option selected>Open this select Currency</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Payment</label>
                                        <select className="form-control">
                                            <option selected>Open this select Payment</option>
                                            <option value={1}>Advance</option>
                                            <option value={2}>Against Invoice</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Description"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Mode of Payment</label>
                                        <select className="form-control">
                                            <option selected>Open this select Mode of Payment</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Receipt Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Receipt Number"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Amount</label>
                                        <input type="number" className="form-control" placeholder="Enter Amount" />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Remark</label>
                                        <input type="text" className="form-control" placeholder="Enter Remark" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Date</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary">
                                            Save
                                        </button>
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

export default AddpaymentReceipt