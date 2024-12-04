import React from 'react'
import "./dairydashboard.css"
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
function DairyDashboard() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Dashboard",
        path_1: "/",
    }
    const data = [
        { label: 'TOTAL STAFF', value: '12', icon: 'fa-user-tie', bgColor: 'bg-primary', textColor: "white" },
        { label: 'TOTAL COW', value: '18', icon: 'fa-cow', bgColor: 'bg-dark', textColor: "white" },
        { label: 'TOTAL CALF', value: '6', icon: 'fa-cow-baby', bgColor: 'bg-success', textColor: "white" },
        { label: 'TOTAL SUPPLIER', value: '8', icon: 'fa-hard-hat', bgColor: 'bg-secondary', textColor: "white" },
        { label: 'TOTAL COW STALLS', value: '16', icon: 'fa-home', bgColor: 'bg-secondary', textColor: "white" },
        { label: 'TOTAL EXPENSE', value: 'Rs.58,220.00', icon: 'fa-money-check', bgColor: 'bg-warning', textColor: "dark" },
        { label: 'TOTAL COLLECTED MILK', value: '1469.00', icon: 'fa-mug-hot', bgColor: 'bg-info', textColor: "dark" },
        { label: 'TOTAL SOLD MILK', value: 'Rs.10,512.00', icon: 'fa-truck', bgColor: 'bg-success', textColor: "white" },
        { label: 'TODAY COLLECTED MILK', value: '0', icon: 'fa-bottle-water', bgColor: 'bg-danger', textColor: "white" },
        { label: 'TODAY SOLD MILK AMOUNT', value: '0', icon: 'fa-van-shuttle', bgColor: 'bg-success', textColor: "white" },
        { label: 'TODAY COLLECT MILK', value: '0', icon: 'fa-money-check-dollar', bgColor: 'bg-warning', textColor: "dark" },
        { label: 'TODAY SOLD MILK', value: '0', icon: 'fa-sack-dollar', bgColor: 'bg-primary', textColor: "white" },
    ];

    const feedData = [
        { stall: 'Stall-002', feeds: [{ quantity: '2.00 KG', time: '' }, { quantity: '5.00 KG', time: '' }] },
        { stall: 'Stall-003', feeds: [{ quantity: '25.00 KG', time: '8:00 AM' }] },
        { stall: 'Stall-004', feeds: [] },
        { stall: 'Stall-005', feeds: [] },
        { stall: 'Stall-006', feeds: [] },
        { stall: 'Stall-007', feeds: [{ quantity: '34.00 Gram', time: '' }, { quantity: '34.00 Gram', time: '' }] },
        { stall: 'Stall-008', feeds: [] },
        { stall: '1212', feeds: [] },
        { stall: '2222', feeds: [] },
        { stall: '001', feeds: [] },
        { stall: '232', feeds: [] },
    ];



    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <section className='m-4'>
                <div className='row'>
                    {data.map((item, i) => {
                        return <div className='col-xl-3' key={i}>
                            <div className={`card bg ${item?.bgColor}`}>
                                <div className={`d-flex align-items-center justify-content-between `}>
                                    <div className={`decr text-white `}>
                                        <div>{item?.label}</div>
                                        <div>{item?.value}</div>
                                    </div>
                                    <div className='icon'>
                                        <i className={`fa fs-2 text-white ${item.icon}`} aria-hidden="true"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    })}

                </div>
                <div className="row">
                    {/* Last Five Expense History */}
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa fa-info-circle"></i> Last Five Expense History
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Expense Purpose</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Apr 02, 2024</td>
                                            <td>Paper</td>
                                            <td>Rs.200.00</td>
                                        </tr>
                                        <tr>
                                            <td>Apr 02, 2024</td>
                                            <td>Mani</td>
                                            <td>Rs.120.00</td>
                                        </tr>
                                        <tr>
                                            <td>Mar 22, 2024</td>
                                            <td>Medicine</td>
                                            <td>Rs.25,000.00</td>
                                        </tr>
                                        <tr>
                                            <td>Mar 22, 2024</td>
                                            <td>Chara</td>
                                            <td>Rs.25,000.00</td>
                                        </tr>
                                        <tr>
                                            <td>Jan 31, 2024</td>
                                            <td>Bucket</td>
                                            <td>Rs.100.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Last Five Milk Sale History */}
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa fa-info-circle"></i> Last Five Milk Sale History
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Account No</th>
                                            <th>Litre</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Sep 11, 2024</td>
                                            <td>BK023323</td>
                                            <td>2.00</td>
                                            <td>Rs.20.00</td>
                                        </tr>
                                        <tr>
                                            <td>Sep 02, 2024</td>
                                            <td>BK023323</td>
                                            <td>2.00</td>
                                            <td>Rs.20.00</td>
                                        </tr>
                                        <tr>
                                            <td>Aug 15, 2024</td>
                                            <td>BK023323</td>
                                            <td>100.00</td>
                                            <td>Rs.1,000.00</td>
                                        </tr>
                                        <tr>
                                            <td>Aug 05, 2024</td>
                                            <td>33</td>
                                            <td>70.00</td>
                                            <td>Rs.3,850.00</td>
                                        </tr>
                                        <tr>
                                            <td>Jun 15, 2024</td>
                                            <td>BK023323</td>
                                            <td>10.00</td>
                                            <td>Rs.150.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <h5>
                                    <i className="fa fa-cutlery"></i> Cow Feed Chart
                                </h5>
                                <button className="btn btn-outline-secondary btn-sm">+ Set Feed Chart</button>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Stall</th>
                                            <th colSpan="4">Feed Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {feedData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.stall}</td>
                                                <td colSpan={4}>
                                                    <div className="d-flex flex-wrap">
                                                        {item.feeds.length > 0 ? (
                                                            item.feeds.map((feed, feedIndex) => (
                                                                <div key={feedIndex} className="p-2">
                                                                    <span className="badge badge-success">
                                                                        Quantity: {feed.quantity}
                                                                    </span>{' '}
                                                                    <span className="badge badge-warning">
                                                                        Time: {feed.time ? feed.time : ''}
                                                                    </span>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <div>No Feed Data Available</div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default DairyDashboard
