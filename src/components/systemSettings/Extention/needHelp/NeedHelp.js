import React from 'react'
import { Modal } from 'react-bootstrap'

function NeedHelp({ showLg, setShowLg }) {
    return (
        <>
            <Modal
                size="lg"
                show={showLg}
                onHide={() => setShowLg(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Just put any random string
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    )
}

export default NeedHelp
