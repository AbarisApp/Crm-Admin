import { Pagination } from "antd";
import { useState } from "react";
import { Button, Modal, Tab, Tabs } from "react-bootstrap"




const GroupSummaryModal = (props) => {

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Group Master
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="list"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="list" title="List">
                            <div style={{ margin: "14px" }}>
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                                <div className="dt-buttons">
                                                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                                    </button>
                                                </div>
                                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                    <thead>
                                                        <tr role="row">
                                                            <th style={{ width: '150px' }}>
                                                                Sr. No.</th>
                                                            <th style={{ width: '150px' }}>
                                                                Group Name</th>
                                                            <th style={{ width: '150px' }}>Parent Group Name
                                                            </th>
                                                            <th style={{ width: '150px' }}>Nature of Group</th>
                                                            <th style={{ width: '150px' }}>Status</th>
                                                            <th style={{ width: '150px' }}>Cr Amount</th>

                                                            <th style={{ width: '150px' }}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr role="row" className="odd" >
                                                            <td >
                                                                1</td>
                                                            <td >Opening Stock</td>
                                                            <td >CURRENT LIABILITY</td>
                                                            <td >Expenses</td>
                                                            <td >Active</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                                    Total 0 entries
                                                </div>
                                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                                    <Pagination
                                                        defaultCurrent={1}
                                                    // onChange={onChangeVal}
                                                    // total={data?.totalCount}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="addNew" title="Add New">
                            <div className="row m-4">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive active-projects style-1">
                                                {/* <div className="tbl-caption tbl-caption-2">
                                                    <h4 className="heading mb-0">Filter</h4>
                                                </div> */}
                                                <form className="">
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="projectName">Group Name </label>
                                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Group Name" />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="projectName">From Date </label>
                                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Parent Group Name " />
                                                        </div>

                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="projectName">Nature of Group</label>
                                                            <select className="form-control" aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value={1}>One</option>
                                                                <option value={2}>Two</option>
                                                                <option value={3}>Three</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="projectName">Effect Gross</label>
                                                            <select className="form-control" aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value={1}>One</option>
                                                                <option value={2}>Two</option>
                                                                <option value={3}>Three</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="projectName">Status</label>
                                                            <select className="form-control" aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value={1}>One</option>
                                                                <option value={2}>Two</option>
                                                                <option value={3}>Three</option>
                                                            </select>
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
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default GroupSummaryModal