import { Pagination } from "antd"
import { Button, Modal } from "react-bootstrap"



const BankPaymentModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.modalHeading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0">{props.modalHeading}</h4>
                                    </div>
                                    <form className="p-4">
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="projectName">Voucher </label>
                                                <input type="text" className="form-control" id="projectName" placeholder="Enter Voucher Name " />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="projectName">Account : </label>
                                                <select className="form-control" aria-label="Default select example">
                                                    <option selected>Open this select Account</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="projectName">Sheet Name : </label>
                                                <input type="text" className="form-control" id="projectName" placeholder="Enter Sheet Name " />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="projectName">Skip No Of Rows  : </label>
                                                <input type="text" className="form-control" id="projectName" placeholder="Enter Skip No Of Rows  " />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="projectName">
                                                    Skip No Of Columns : </label>
                                                <input type="text" className="form-control" id="projectName" placeholder="Enter Skip No Of Columns " />
                                            </div>

                                            <div className="col-md-12 mb-3">
                                                <button type="button" className="btn btn-primary" > Set Format</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ margin: "14px" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    {/* <h4 className="heading mb-0">
                                        {heading}
                                    </h4> */}
                                    {/* <div>
                                    <Link className="btn btn-primary btn-sm" to="/bankpayment/add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
                                </div> */}
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '150px' }}>Voucher</th>
                                                <th style={{ width: '150px' }}>Book Code</th>
                                                <th style={{ width: '150px' }}>Date</th>
                                                <th style={{ width: '150px' }}>Account Name</th>
                                                <th style={{ width: '150px' }}>Doc.No.</th>
                                                <th style={{ width: '150px' }}>Doc.Date</th>
                                                <th style={{ width: '150px' }}>Amount</th>
                                                <th style={{ width: '150px' }}>Exl Cl.Bal</th>
                                                <th style={{ width: '150px' }}>Narration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd" >
                                                <td >
                                                    No Data Found
                                                </td>
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
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BankPaymentModal