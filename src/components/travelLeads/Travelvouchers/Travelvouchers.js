import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { Tab, Tabs } from "react-bootstrap";
import VoucherHotalList from "./voucherHotalList/VoucherHotalList";
import { Link, useParams } from "react-router-dom";
import VoucherServiceList from "./voucherServiceList/VoucherServiceList";
import VoucherFlightList from "./voucherFlightList/VoucherFlightList";


const Travelvouchers = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: 'Vouchers',
        path_2: ``
    };
    const params = useParams()
    console.log(params);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Vouchers</h4>
                                        <div>
                                            <Link to={`/travel-Vouchers-Add/${params?.id}`} className="btn btn-primary">Add Hotel Voucher</Link>
                                            <Link to={`/travel-service-Add/${params?.id}`} className="btn btn-primary">Add Service Voucher</Link>
                                            <Link to={`/travel-flight-Add/${params?.id}`} className="btn btn-primary">Add Flight Voucher</Link>
                                        </div>

                                    </div>
                                    <form className="tbl-captionn tbl-captionn-lead">
                                        <div className="row">
                                            <Tabs defaultActiveKey="hotel" id="lead-tabs" className="mb-3">
                                                <Tab eventKey="hotel" title="Hotel">
                                                    <VoucherHotalList />
                                                </Tab>
                                                <Tab eventKey="service" title="Service">
                                                    <VoucherServiceList />
                                                </Tab>
                                                <Tab eventKey="flight" title="Flight">
                                                    <VoucherFlightList />
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Travelvouchers