import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

function AddCreditNoteModal(props) {
    const [creditNoteNumber, setCreditNoteNumber] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [gstAmount, setGstAmount] = useState('');
    const [creditNoteFile, setCreditNoteFile] = useState(null);
    const [debitNoteFile, setDebitNoteFile] = useState(null);
    const [remarks, setRemarks] = useState('');
    const [markVerified, setMarkVerified] = useState(false);

    const handleFileUpload = (e, setFile) => {
        setFile(e.target.files[0]);
    };

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Add Credit Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="creditNoteNumber">
                                <Form.Label>Credit Note Number *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Credit Note Number"
                                    value={creditNoteNumber}
                                    onChange={(e) => setCreditNoteNumber(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="invoiceNumber">
                                <Form.Label>Reference Invoice Number *</Form.Label>
                                <Form.Select
                                    value={invoiceNumber}
                                    onChange={(e) => setInvoiceNumber(e.target.value)}
                                >
                                    <option>Select Invoice Number</option>
                                    <option value="invoice1">Invoice 1</option>
                                    <option value="invoice2">Invoice 2</option>
                                    <option value="invoice3">Invoice 3</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="amount">
                                <Form.Label>Amount (₹) *</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="gstAmount">
                                <Form.Label>GST Amount (₹) *</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter GST Amount"
                                    value={gstAmount}
                                    onChange={(e) => setGstAmount(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="uploadCreditNote">
                                <Form.Label>Upload Credit Note Document</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e) => handleFileUpload(e, setCreditNoteFile)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="uploadDebitNote">
                                <Form.Label>Upload Debit Note Document</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e) => handleFileUpload(e, setDebitNoteFile)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group controlId="remarks">
                                <Form.Label>Remarks</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter Remarks"
                                    value={remarks}
                                    onChange={(e) => setRemarks(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={12} className="mt-3">
                            <Form.Group controlId="markVerified">
                                <Form.Check
                                    type="switch"
                                    label="Mark Verified"
                                    checked={markVerified}
                                    onChange={(e) => setMarkVerified(e.target.checked)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary">Save Credit Note</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddCreditNoteModal;
