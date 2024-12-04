import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function VersionHistory(props) {
    // Sample data for version history
    const versionHistoryData = [
        { date: '2024-10-01', addedBy: 'John Doe', version: '1.0.0' },
        { date: '2024-10-15', addedBy: 'Jane Smith', version: '1.1.0' },
        { date: '2024-11-01', addedBy: 'Alice Johnson', version: '1.2.0' },
    ];

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Version History
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Added By</th>
                            <th>Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        {versionHistoryData.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.date}</td>
                                <td>{entry.addedBy}</td>
                                <td>{entry.version}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VersionHistory;
