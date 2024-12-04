import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Shareable(props) {
    const [isLinkExpiration, setIsLinkExpiration] = useState(false);
    const [isPasswordProtected, setIsPasswordProtected] = useState(false);
    const [allowDownload, setAllowDownload] = useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Shareable Link
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="linkExpiration">
                        <Form.Label>Link expiration:</Form.Label>
                        <Form.Check
                            type="checkbox"
                            label="Is Link Valid until:"
                            checked={isLinkExpiration}
                            onChange={() => setIsLinkExpiration(!isLinkExpiration)}
                        />
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="passwordProtection">
                        <Form.Label>Password Protection:</Form.Label>
                        <Form.Check
                            type="checkbox"
                            label="Is password Required:"
                            checked={isPasswordProtected}
                            onChange={() => setIsPasswordProtected(!isPasswordProtected)}
                        />
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="allowDownload">
                        <Form.Label>Allow Download:</Form.Label>
                        <Form.Check
                            type="checkbox"
                            label="Users with link can download this item"
                            checked={allowDownload}
                            onChange={() => setAllowDownload(!allowDownload)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={() => alert('Settings Saved!')}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Shareable;
