import React from 'react';
import { Button, Table } from 'react-bootstrap';
// import './ManualGateways.css';  // You can add custom CSS to style specific elements

const ManualGateways = ({ setShowUpdateMGateway, showUpdateMGateway }) => {
    return (
        <div className="container my-4">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Manual Gateways</h4>
                                </div>
                                <div className="search-add-new ">
                                    <div className='row align-items-center'>
                                        <div className='col-xl-6'>
                                            <label for="search2">Search</label>
                                            <input
                                                type="search"
                                                className="form-control search-box"
                                                placeholder="Search..."
                                                id='search2'
                                            />
                                        </div>
                                        <div className='col-xl-6'>
                                            <div>
                                                <Button variant="primary" className="ms-2 mt-3">
                                                    <i className="fas fa-search" />
                                                </Button>
                                                <Button variant="primary" className="ms-2 mt-3" onClick={() => setShowUpdateMGateway(!showUpdateMGateway)}>+ Add New</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Table Section */}
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr style={{ backgroundColor: '#3F00FF', color: '#fff' }}>
                                            <th>Gateway</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* First Row */}
                                        <tr>
                                            <td>Mobile Money</td>
                                            <td>
                                                <span className="badge bg-success">Enabled</span>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" className="me-2" onClick={() => setShowUpdateMGateway(!showUpdateMGateway)}>
                                                    <i className="fas fa-pen"></i> Edit
                                                </Button>
                                                <Button variant="outline-danger">
                                                    <i className="fas fa-eye-slash"></i> Disable
                                                </Button>
                                            </td>
                                        </tr>

                                        {/* Second Row */}
                                        <tr>
                                            <td>Bank Transfer</td>
                                            <td>
                                                <span className="badge bg-success">Enabled</span>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" className="me-2">
                                                    <i className="fas fa-pen"></i> Edit
                                                </Button>
                                                <Button variant="outline-danger">
                                                    <i className="fas fa-eye-slash"></i> Disable
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManualGateways;
