import { Button, Form, Modal } from "react-bootstrap"


export const ReturnManagementModal = (props) => {
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
                        {props?.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="table-responsive active-projects style-1">
                                        <div className="tbl-caption tbl-caption-2">
                                            <h4 className="heading mb-0"> Add New</h4>
                                        </div>
                                        <form className="p-4">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">TransactionDetailId  </label>
                                                    <input type="number" className="form-control" disabled id="projectName" placeholder="1718" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Inward NO.</label>
                                                    <input type="text" className="form-control" id="projectName" disabled placeholder="MDSETHH " />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Party</label>
                                                    <input type="text" className="form-control" id="projectName" disabled placeholder="Abaris " />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Category</label>
                                                    <input type="number" className="form-control" id="projectName" disabled placeholder="Washing" />
                                                </div>

                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Brand</label>
                                                    <input type="number" className="form-control" id="projectName" disabled placeholder="Godreg" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Product </label>
                                                    <input type="number" className="form-control" id="projectName" disabled placeholder="center" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Barcode </label>
                                                    <input type="number" className="form-control" id="projectName" disabled placeholder="7676548FFJJGFG6T6" />
                                                </div>

                                                <div className="col-md-12 mb-3">
                                                    <h2>Account Status</h2>
                                                </div>

                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Barcode </label>
                                                    <input type="text" className="form-control" id="projectName" placeholder="Enter CN Number" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">CN Date  </label>
                                                    <input type="date" className="form-control" id="projectName" placeholder="Enter CN Number" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Remark / Narration  </label>
                                                    <input type="text" className="form-control" id="projectName" placeholder="Enter Remark / Narration" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Replacement Challan No  </label>
                                                    <input type="number" className="form-control" id="projectName" placeholder="Enter Replacement Challan No" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Replacement Challan Date </label>
                                                    <input type="date" className="form-control" id="projectName" placeholder=" Replacement Challan Date" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="projectName">Account Status  </label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
