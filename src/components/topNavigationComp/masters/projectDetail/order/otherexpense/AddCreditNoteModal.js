import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddExpenseModal(props) {
    const [expensePeriod, setExpensePeriod] = useState(null);
    const [items, setItems] = useState([
        { itemName: '', expenseType: 'Food', quantity: 2, uom: 'SQFT', rate: 5, gstPercentage: 5 }
    ]);
    const [totalAmount, setTotalAmount] = useState(10.5);
    const [uploadFile, setUploadFile] = useState(null);
    const [remarks, setRemarks] = useState('');
    const [certify, setCertify] = useState(false);

    const handleFileUpload = (e) => {
        setUploadFile(e.target.files[0]);
    };

    const calculateTotalAmount = () => {
        let total = 0;
        items.forEach((item) => {
            const amount = item.quantity * item.rate;
            const gstAmount = (amount * item.gstPercentage) / 100;
            total += amount + gstAmount;
        });
        setTotalAmount(total);
    };

    useEffect(() => {
        calculateTotalAmount();
    }, [items]);

    const handleAddItem = () => {
        setItems([...items, { itemName: '', expenseType: 'Food', quantity: 1, uom: 'SQFT', rate: 0, gstPercentage: 5 }]);
    };

    const handleRemoveItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = items.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
        );
        setItems(updatedItems);
    };

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Request for Other Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="row">
                        {/* Expense Period */}
                        <div className="col-md-12 mb-3">
                            <label htmlFor="expensePeriod" className="form-label">Expense Period *</label>
                            <DatePicker
                                selected={expensePeriod}
                                onChange={(date) => setExpensePeriod(date)}
                                dateFormat="yyyy/MM/dd"
                                className="form-control"
                                placeholderText="Select Date Range"
                            />
                        </div>

                        {/* Item Sections */}
                        {items.map((item, index) => (
                            <div className='row addinfSection' key={index}>
                                <div className="col-md-2 mb-3">
                                    <label htmlFor={`itemName-${index}`} className="form-label">Item Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={`itemName-${index}`}
                                        placeholder="Enter Item Name"
                                        value={item.itemName}
                                        onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                                    />
                                </div>
                                <div className="col-md-2 mb-3">
                                    <label htmlFor={`expenseType-${index}`} className="form-label">Expense Type</label>
                                    <select
                                        className="form-select"
                                        id={`expenseType-${index}`}
                                        value={item.expenseType}
                                        onChange={(e) => handleItemChange(index, 'expenseType', e.target.value)}
                                    >
                                        <option value="Food">Food</option>
                                        <option value="Transport">Transport</option>
                                        <option value="Accommodation">Accommodation</option>
                                        <option value="Miscellaneous">Miscellaneous</option>
                                    </select>
                                </div>
                                <div className="col-md-2 mb-3">
                                    <label htmlFor={`quantity-${index}`} className="form-label">Quantity</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id={`quantity-${index}`}
                                        value={item.quantity}
                                        onChange={(e) => handleItemChange(index, 'quantity', Number(e.target.value))}
                                    />
                                </div>
                                <div className="col-md-2 mb-3">
                                    <label htmlFor={`uom-${index}`} className="form-label">UOM</label>
                                    <select
                                        className="form-select"
                                        id={`uom-${index}`}
                                        value={item.uom}
                                        onChange={(e) => handleItemChange(index, 'uom', e.target.value)}
                                    >
                                        <option value="SQFT">SQFT</option>
                                        <option value="KG">KG</option>
                                        <option value="L">L</option>
                                        <option value="Unit">Unit</option>
                                    </select>
                                </div>
                                <div className="col-md-2 mb-3">
                                    <label htmlFor={`rate-${index}`} className="form-label">Rate</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id={`rate-${index}`}
                                        value={item.rate}
                                        onChange={(e) => handleItemChange(index, 'rate', Number(e.target.value))}
                                    />
                                </div>
                                <div className="col-md-2 mb-3">
                                    <label htmlFor={`gstPercentage-${index}`} className="form-label">GST %</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id={`gstPercentage-${index}`}
                                        value={item.gstPercentage}
                                        onChange={(e) => handleItemChange(index, 'gstPercentage', Number(e.target.value))}
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <Button variant="danger" onClick={() => handleRemoveItem(index)}>Remove</Button>
                                </div>
                            </div>
                        ))}
                        <div className="col-md-12 mb-3">
                            <Button variant="success" onClick={handleAddItem}>Add Item</Button>
                        </div>

                        {/* Total Amount (With GST) */}
                        <div className="col-md-12 mb-3">
                            <label htmlFor="totalAmount" className="form-label">Total Value (With GST)</label>
                            <input
                                type="text"
                                className="form-control"
                                id="totalAmount"
                                value={`₹ ${totalAmount.toFixed(2)}`}
                                readOnly
                            />
                        </div>

                        {/* Upload Proof */}
                        <div className="col-md-12 mb-3">
                            <label htmlFor="uploadProof" className="form-label">Upload Proof *</label>
                            <input
                                type="file"
                                className="form-control"
                                id="uploadProof"
                                onChange={handleFileUpload}
                            />
                        </div>

                        {/* Remarks */}
                        <div className="col-md-12 mb-3">
                            <label htmlFor="remarks" className="form-label">Remarks</label>
                            <textarea
                                className="form-control"
                                id="remarks"
                                rows="3"
                                placeholder="Enter Remarks"
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                            ></textarea>
                        </div>

                        {/* Certification Checkbox */}
                        <div className="col-md-12 mt-3">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="certify"
                                    checked={certify}
                                    onChange={(e) => setCertify(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="certify">
                                    I hereby certify that the above expenses have been borne by me on the mentioned project during the mentioned period above.
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary" disabled={!certify}>Submit Expense</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddExpenseModal;
