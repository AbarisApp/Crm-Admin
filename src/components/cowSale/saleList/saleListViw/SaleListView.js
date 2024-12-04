

import { Modal } from "react-bootstrap"

export const SaleListView = (props) => {
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
                        Cow Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table>
                        <thead>
                            <tr style={{ color: 'white' }}>
                                <th style={{ color: 'white' }}>Image</th>
                                <th style={{ color: 'white' }}>Cow Number	</th>
                                <th style={{ color: 'white' }}>Stall No</th>
                                <th style={{ color: 'white' }}>Gender</th>
                                <th style={{ color: 'white' }}>Weight (KG)	</th>
                                <th style={{ color: 'white' }}>Height (INCH)</th>

                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>image</td>
                                <td>000 21</td>
                                <td>Stall-005	</td>
                                <td>Male</td>
                                <td>434353.00</td>
                                <td>234.00</td>
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
