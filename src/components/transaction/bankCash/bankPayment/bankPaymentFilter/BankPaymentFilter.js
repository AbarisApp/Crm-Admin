

const BankPaymentFilter = ({ filterInitial, handleChange, getTransitionReport }) => {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">Filter</h4>
                            </div>
                            <form className="p-4">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="projectName">From Date </label>
                                        <input type="date" className="form-control" id="projectName" placeholder="Enter Transfer to Warehouse " name="start_date" value={filterInitial?.start_date} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="projectName">To Date </label>
                                        <input type="date" className="form-control" id="projectName" placeholder="Enter Transfer to Warehouse " name="end_date" value={filterInitial?.end_date} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <button type="button" className="btn btn-primary" onClick={() => getTransitionReport(0)}>Search</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankPaymentFilter