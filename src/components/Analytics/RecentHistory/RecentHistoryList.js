import { Tab } from "bootstrap"
import { Tabs } from "react-bootstrap"
import RecentAccessHistory from "./RecentAccessHistory"
import { RecentHistoryFilter } from "./RecentHistoryFilter"



export const RecentHistoryList = () => {
    return (
        <>

            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>Recent History</b></h4>
                                    <div>
                                        {/* Add any Export PDF or Excel functionality here */}
                                    </div>
                                </div>
                                <RecentHistoryFilter />
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <Tabs
                                        defaultActiveKey="wacampingreports"
                                        id="uncontrolled-tab-example"
                                    >
                                        <Tab eventKey="wacampingreports" title="Recent Access History">
                                            <RecentAccessHistory />
                                        </Tab>
                                        <Tab eventKey="waMessageLogs" title="User Query">
                                            <RecentAccessHistory />
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
