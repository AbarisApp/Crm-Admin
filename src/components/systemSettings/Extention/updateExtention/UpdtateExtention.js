import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function UpdateExtention({ showModal, setShowModal }) {
    return (
        <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
            <Modal.Header closeButton>
                <Modal.Title>Update Extension:Custom Captcha</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label className='form_control'>Random String
                </label>
                <input
                    type="text"
                    value={""}
                    onChange={""}
                    className="form-control"
                />
            </Modal.Body>
            <Modal.Footer>
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

export default UpdateExtention
