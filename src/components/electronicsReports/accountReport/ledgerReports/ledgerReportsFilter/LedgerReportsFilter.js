import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";



const LedgerReportsFilter = () => {

    return (
        <>

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
                                            <label htmlFor="projectName">Company </label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Company" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">From Date </label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter Transfer to Warehouse " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">To Date </label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter Transfer to Warehouse " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Ledger Name  </label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter Ledger Name  " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Narration</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Branch Name</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Ledger Balance</label>
                                            <input type="text" className="form-control" id="projectName" disabled placeholder="Enter Ledger Balance" />
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <button type="button" className="btn btn-primary">Search</button>
                                        </div>
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

export default LedgerReportsFilter