


const ElectronicsDashboard = () => {
    const breadCrumbsTitle = {
        id: "1",
        // title_1: "Transaction",
        title_2: 'Electronic Dashboard',
        path_2: ""
    };
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Electronic Dashboard</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div class="col-md-3 mb-4">

                                            <div className="info-card revenue-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="change">+12% From Last Month</span>
                                                </div>
                                                <div className="mt-2">
                                                    <h4 className="stat">₹725,569</h4>
                                                    <p>Total Revenue</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Total Sales */}
                                        <div className="col-md-3 mb-4">
                                            <div className="info-card sales-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="change">+15% From Last Month</span>
                                                </div>
                                                <div className="mt-2">
                                                    <h4 className="stat">750</h4>
                                                    <p>Total Sales</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Total Profit */}
                                        <div className="col-md-3 mb-4">
                                            <div className="info-card profit-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="change">+08% From Last Month</span>
                                                </div>
                                                <div className="mt-2">
                                                    <h4 className="stat">₹95,562</h4>
                                                    <p>Total Profit</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Total Cost */}
                                        <div className="col-md-3 mb-4">
                                            <div className="info-card cost-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="change">+10% From Last Month</span>
                                                </div>
                                                <div className="mt-2">
                                                    <h4 className="stat">₹526,269</h4>
                                                    <p>Total Cost</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Pending Sales Orders</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Order No.</th>
                                                        <th>Order Date</th>
                                                        <th>Party</th>
                                                        <th>Delivery Date</th>
                                                        <th>Remark</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>HO222303SO001</td>
                                                        <td>02 Mar 2024</td>
                                                        <td>ABC Dist. Pvt Ltd</td>
                                                        <td>02 Mar 2024</td>
                                                        <td>Remark</td>
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

            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Todays Sales Person Visit</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Sales Person Name</th>
                                                        <th>City</th>
                                                        <th>First IN Time</th>
                                                        <th>Dealer</th>
                                                        <th>Last Out Time</th>
                                                        <th>Collection	</th>
                                                        <th>Not Available</th>
                                                        <th>Order</th>
                                                        <th>Shop Closed</th>
                                                        <th>Skipped	</th>
                                                        <th>Unproductive</th>
                                                        <th>Today's Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>CHAITANYA BANKAR_95</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>

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


            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Today's CRM Report</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>ISD</th>
                                                        <th>Day Start</th>
                                                        <th>Fresh</th>
                                                        <th>Today's Follow Up</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>	ARAB MAHAMAD_1424</td>
                                                        <td></td>

                                                        <td>0</td>
                                                        <td>0</td>

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


            <div className="row m-4">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">ISD TARGET REPORT</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>ISD</th>
                                                        <th>Collection%</th>
                                                        <th>TARGET</th>
                                                        <th>ACHIVED</th>
                                                        <th>BALANCE</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>--</td>
                                                        <td>--</td>

                                                        <td>--</td>
                                                        <td>--</td>
                                                        <td>--</td>

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
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Purchase Above 45 Lakh</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Supplier</th>
                                                        <th>Basic Amt%</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>--</td>
                                                        <td>--</td>


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



            <div className="row m-4">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Distribution Target and Achievement(All)</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>ISD</th>
                                                        <th>Collection%</th>
                                                        <th>TARGET</th>
                                                        <th>ACHIVED</th>
                                                        <th>BALANCE</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>--</td>
                                                        <td>--</td>

                                                        <td>--</td>
                                                        <td>--</td>
                                                        <td>--</td>

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
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Approve Requested Task to carry forward</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>ACTIVITY</th>
                                                        <th>Task Date</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>--</td>
                                                        <td>--</td>
                                                        <td>--</td>
                                                        <td>--</td>


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

export default ElectronicsDashboard