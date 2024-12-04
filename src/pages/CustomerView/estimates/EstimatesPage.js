import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EstimateList = ({ title }) => {
    const paremss = useParams()
    return (
        <>
            <h4>{title}</h4>
            <div className='card'>
                {/* Header Buttons */}
                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <Link to={`/customer-view/${paremss.id}/estimates-add`} className="btn btn-primary me-2">+ Create New Estimate</Link>
                        {/* <button className="btn btn-primary">Zip Estimates</button> */}
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="search" className="form-control" placeholder="Search..." />
                    </div>
                </div>

                {/* Status Cards */}
                <div className=" row d-flex justify-content-between mb-4">
                    <div className="card text-center col-2">
                        <div className="card-body">
                            <h6>Draft</h6>
                            <h5>$0.00</h5>
                        </div>
                    </div>
                    <div className="card text-center col-2">
                        <div className="card-body">
                            <h6>Sent</h6>
                            <h5>$0.00</h5>
                        </div>
                    </div>
                    <div className="card text-center col-2">
                        <div className="card-body">
                            <h6>Expired</h6>
                            <h5>$0.00</h5>
                        </div>
                    </div>
                    <div className="card text-center col-2">
                        <div className="card-body">
                            <h6>Declined</h6>
                            <h5>$1.00</h5>
                        </div>
                    </div>
                    <div className="card text-center col-2">
                        <div className="card-body">
                            <h6>Accepted</h6>
                            <h5>$0.00</h5>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>Estimate #</th>
                                <th>Amount</th>
                                <th>Total Tax</th>
                                <th>Project</th>
                                <th>Tags</th>
                                <th>Date</th>
                                <th>Expiry Date</th>
                                <th>Reference #</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to="/customer-view/1/estimates-view-listview">EST-000001</Link></td>
                                <td>$1.00</td>
                                <td>$0.00</td>
                                <td>Project X</td>
                                <td>-</td>
                                <td>2024-06-21</td>
                                <td>2024-06-28</td>
                                <td>-</td>
                                <td><span className="badge bg-danger">Declined</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <select className="form-select w-auto">
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </div>
                    <div>
                        <nav>
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#">Prev</a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EstimateList;
