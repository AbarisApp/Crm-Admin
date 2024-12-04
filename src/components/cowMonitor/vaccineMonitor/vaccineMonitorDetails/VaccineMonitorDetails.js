import { Modal } from "react-bootstrap"


export const VaccineMonitorDetails = (props) => {
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
                                <th style={{ color: 'white' }}>Vaccine Name</th>
                                <th style={{ color: 'white' }}>Remarks</th>
                                <th style={{ color: 'white' }}>Given Time</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>Anthrax - ( 120 Months )</td>
                                <td>Done</td>
                                <td>10:20 AM</td>
                            </tr>
                            <tr>
                                <td>BDV - ( 60 Months )</td>
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
