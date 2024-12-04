import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";

export const SalesInvoiceforAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Sales Invoice for Update COD',
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
                                    <h4 className="heading mb-0">Add Sales Invoice for COD</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">TransactionId</label>
                                            <input type="number" className="form-control" id="projectName" disabled placeholder="Enter TransactionId" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Remark / Narration</label>
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
