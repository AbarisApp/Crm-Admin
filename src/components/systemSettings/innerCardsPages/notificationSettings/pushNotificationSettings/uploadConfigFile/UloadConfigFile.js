import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function UloadConfigFile({ showModal, setShowModal }) {
    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Push Notification Configuration File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label className='form_control'>File</label>
                    <input
                        type="File"
                        value={""}
                        onChange={""}
                        placeholder="Email Address"
                        className="form-control"
                    />
                    <small>Support File : </small>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={() => setShowModal(!showModal)}>
                    Close
                </Button> */}
                    <Button
                        variant="primary"
                        className='w-100'
                    >
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UloadConfigFile
