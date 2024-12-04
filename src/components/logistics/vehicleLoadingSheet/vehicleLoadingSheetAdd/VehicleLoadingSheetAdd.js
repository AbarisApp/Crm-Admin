import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";

function VehicleLoadingSheetAdd() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Logistics",
        title_2: 'Add Vehicle Loading Sheet',
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
                                    <h4 className="heading mb-0">Add Vehicle Loading Sheet</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Entry Date </label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter TransactionId" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Transporter Name </label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Transporter Name " />
                                        </div>

                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Sr. No.</th>
                                                        <th>Invoice Number</th>
                                                        <th>CustomerName</th>
                                                        <th>OutwardNo</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4}>No Data Found</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>


                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Vehicle No.</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Vehicle No." />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Freight</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Freight" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Advance</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Advance" />
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
export default VehicleLoadingSheetAdd