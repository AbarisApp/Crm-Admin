import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";

const StockJournalOutwardAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Logistics",
        title_2: 'Add Stock Journal Outward',
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
                                    <h4 className="heading mb-0">Add Stock Journal Outward</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Entry Date </label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter TransactionId" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName"> Scanning Type  </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>

                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Barcode</label>
                                            <input type="text" className="form-control" id="projectName" disabled placeholder="Enter Barcode" />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Serial No.</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Serial No." />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Total Qty.</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Total Qty." />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">ValQty</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter ValQty" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">ValQty</label>
                                            <textarea name="" id="" cols={90}></textarea>
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

export default StockJournalOutwardAdd