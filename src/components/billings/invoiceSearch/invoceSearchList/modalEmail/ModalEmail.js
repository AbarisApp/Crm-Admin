import JoditEditor from "jodit-react"
import { useRef } from "react";
import { Button, Modal } from "react-bootstrap"



const ModalEmail = (props) => {
    const editor = useRef(null);
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
                        Send Email
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section className="">
                        <div className="card">
                            <div className="">
                                <div className="row">
                                    {/* Invoice Type */}
                                    <div className="col-md-12">
                                        <label className="form-label">To</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="invoice_no"
                                            placeholder="To"
                                        />
                                    </div>
                                    {/* Invoice No */}
                                    <div className="col-md-12">
                                        <label className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="invoice_no"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Send Voucher through email as attachment</label>
                                        <JoditEditor
                                            ref={editor}
                                            // value={initialData.others}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            // onBlur={(newContent) => handleEditorChange('others', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Modal.Body>
                <Modal.Footer>

                    <Button >Send</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEmail