import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"


const VehicleLoadingSheetDeatils = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Logistics",
        title_2: 'Details Vehicle Loading Sheet',
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
                                    <h4 className="heading mb-0">Details Vehicle Loading Sheet</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <div className="vehicleLoading">
                                                <h2>Out Date : </h2>
                                                <h3>26-Jan-2023</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="vehicleLoading">
                                                <h2>Transporter Name  : </h2>
                                                <h3>AVINASH GADGADE</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="vehicleLoading">
                                                <h2>Vehicle No. </h2>
                                                <h3>MH13CJ0721</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="vehicleLoading">
                                                <h2>Freight </h2>
                                                <h3>4500.00</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className="vehicleLoading">
                                                <h2>Advance </h2>
                                                <h3>0.00</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>    Sr. No.</th>
                                                        <th>Invoice Number</th>
                                                        <th>CustomerName</th>
                                                        <th>OutwardNo </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={4}>No Data Found !</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default VehicleLoadingSheetDeatils