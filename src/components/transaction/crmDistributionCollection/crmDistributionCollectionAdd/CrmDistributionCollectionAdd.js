import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";


const CrmDistributionCollectionAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Add CRM Distribution Collection',
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add CRM Distribution Collection</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Entry Date </label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter TransactionId" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName"> City .  </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>

                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName"> Dealer Name  </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>

                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Amount Commited</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount Commited" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Reminder After Days</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Reminder After Days" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName"> Status  </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>

                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <button type="button" className="btn btn-primary">Save</button>
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

export default CrmDistributionCollectionAdd