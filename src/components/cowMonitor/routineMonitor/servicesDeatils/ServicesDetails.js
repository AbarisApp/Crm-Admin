


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const ServicesDetails = (props) => {
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
                        Services Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table>
                        <thead>
                            <tr style={{ color: 'white' }}>
                                <th style={{ color: 'white' }}>Service Name</th>
                                <th style={{ color: 'white' }}>Result</th>
                                <th style={{ color: 'white' }}>Checkup Time</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>Monitoring</td>
                                <td>Done</td>
                                <td>10:20 AM</td>
                            </tr>
                            <tr>
                                <td>Monthly Tika</td>
                                <td>Done</td>
                                <td>01:20 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
