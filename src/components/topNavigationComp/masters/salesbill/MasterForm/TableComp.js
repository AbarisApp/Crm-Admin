
import React, { useState } from 'react';

const TableComp = () => {
    const [items, setItems] = useState([
        {
            item: '',
            taxPercent: '',
            quantity2: '',
            batchNo: '',
            location: '',
            quantity: '',
            rate: '',
            discountRs: '',
            discountType: '',
            amount: '',
            netAmount: '',
        },
        {
            item: '',
            taxPercent: '',
            quantity2: '',
            batchNo: '',
            location: '',
            quantity: '',
            rate: '',
            discountRs: '',
            discountType: '',
            amount: '',
            netAmount: '',
        },
        {
            item: '',
            taxPercent: '',
            quantity2: '',
            batchNo: '',
            location: '',
            quantity: '',
            rate: '',
            discountRs: '',
            discountType: '',
            amount: '',
            netAmount: '',
        },
    ]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedItems = [...items];
        updatedItems[index][name] = value;
        setItems(updatedItems);
    };

    const handleDelete = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const handleAddRow = () => {
        setItems([
            ...items,
            {
                item: '',
                taxPercent: '',
                quantity2: '',
                batchNo: '',
                location: '',
                quantity: '',
                rate: '',
                discountRs: '',
                discountType: '',
                amount: '',
                netAmount: '',
            },
        ]);
    };

    return (
        <div style={{ overflowX: 'auto' }}>
            <table className="table table-bordered" style={{ width: '2000px' }}>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Tax %</th>
                        <th>Quantity2</th>
                        <th>Batch No</th>
                        <th>Location</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Disc. (Rs.)</th>
                        <th>Disc Type</th>
                        <th>Amount</th>
                        <th>Net Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>
                                {/* <input
                  type="text"
                  className="form-control"
                  name="item"
                  value={item.item}
                  onChange={(e) => handleInputChange(index, e)}
                /> */}
                                <select className="form-select" aria-label="Default select example">
                                    <option selected="">Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>

                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="taxPercent"
                                    value={item.taxPercent}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="quantity2"
                                    value={item.quantity2}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </td>
                            <td>
                                {/* <input
                                    type="text"
                                    className="form-control"
                                    name="batchNo"
                                    value={item.batchNo}
                                    onChange={(e) => handleInputChange(index, e)}
                                /> */}
                                <select className="form-select" aria-label="Default select example">
                                    <option selected="">Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>

                            </td>
                            <td>
                                {/* <input
                                    type="text"
                                    className="form-control"
                                    name="location"
                                    value={item.location}
                                    onChange={(e) => handleInputChange(index, e)}
                                /> */}
                                <select className="form-select" aria-label="Default select example">
                                    <option selected="">Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>

                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="quantity"
                                    value={item.quantity}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="rate"
                                    value={item.rate}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="discountRs"
                                    value={item.discountRs}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </td>
                            <td>
                                {/* <input
                                    type="text"
                                    className="form-control"
                                    name="discountType"
                                    value={item.discountType}
                                    onChange={(e) => handleInputChange(index, e)}
                                /> */}
                                <select className="form-select" aria-label="Default select example">
                                    <option selected="">Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>

                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="amount"
                                    value={item.amount}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="netAmount"
                                    value={item.netAmount}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <button type="button" className="btn btn-primary" onClick={handleAddRow}>
        Add Row
      </button> */}
        </div>
    );
};

export default TableComp;
