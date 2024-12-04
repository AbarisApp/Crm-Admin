import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function TestMailSetup({ showModal, setShowModal }) {
    return (
        <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
            <Modal.Header closeButton>
                <Modal.Title>Test Mail Setup</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label className='form_control'>Sent To</label>
                <input
                    type="text"
                    value={""}
                    onChange={""}
                    placeholder="EMail Address"
                    className="form-control"
                />
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
                    Close
                </Button> */}
                <Button
                    variant="primary"
                    className='w-100'

                >
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TestMailSetup
