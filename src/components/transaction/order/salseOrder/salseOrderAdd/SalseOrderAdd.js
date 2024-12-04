import { useState } from "react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";


const SalseOrderAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Order',
        title_3: `Add Sales Order`,
        path_2: ``
    };

    const [formData, setFormData] = useState({
        date: '',
        taxType: '',
        orderNo: '',
        broker: '',
        transportName: '',
        deliveryDestination: '',
        narration: ''
    });

    const handleInputChange = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
        // setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.value
        // });

        // Update expenses when tax type is selected
        // if (e.target.name === 'taxType') {
        //     setExpenses(taxTypeData[e.target.value] || []);
        // }
    };


    ////////
    const [rows, setRows] = useState([
        { id: 1, item: '', Tax: 0, CaseQty: '', Location: '', SizeofCase: '', Quantity2: 0, Quantity: 0 },
        { id: 2, item: '', Tax: 0, CaseQty: '', Location: '', SizeofCase: '', Quantity2: 0, Quantity: 0 },
        { id: 3, item: '', Tax: 0, CaseQty: '', Location: '', SizeofCase: '', Quantity2: 0, Quantity: 0 },
        { id: 4, item: '', Tax: 0, CaseQty: '', Location: '', SizeofCase: '', Quantity2: 0, Quantity: 0 },
    ]);
    // Function to handle value changes in the input fields
    const handleChange = (index, key, value) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, [key]: value } : row
        );
        setRows(updatedRows);
    };

    // Function to render each row of the table
    const renderRow = (row, index) => (
        <tr key={row.id}>
            <td>
                <select
                    value={row.item}
                    onChange={(e) => handleChange(index, 'item', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Cr">Cr</option>
                    <option value="Db">Db</option>
                </select>
            </td>
            <td>
                <input
                    type="number"
                    value={row.Tax}
                    onChange={(e) => handleChange(index, 'Tax', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.CaseQty}
                    onChange={(e) => handleChange(index, 'CaseQty', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.Location}
                    onChange={(e) => handleChange(index, 'Location', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.SizeofCase}
                    onChange={(e) => handleChange(index, 'SizeofCase', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.Quantity2}
                    onChange={(e) => handleChange(index, 'Quantity2', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.Quantity}
                    onChange={(e) => handleChange(index, 'Quantity', e.target.value)}
                />
            </td>
            <td>
                <button onClick={() => handleDeleteRow(index)}>🗑️</button>
            </td>
        </tr>
    );

    // Function to handle row deletion
    const handleDeleteRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    // Function to add a new row
    const handleAddRow = () => {
        setRows([
            ...rows,
            { id: rows.length + 1, ExpenseAc: '', Product: '', HSNCode: 0, Commodity: 0, Amount: 0 },
        ]);
    };

    const submitData = () => {
        console.log(formData);

    }


    /////
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add Sales Order</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="date">Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Account</label>
                                        <select
                                            className="form-control"
                                            name="taxType"
                                            value={formData.taxType}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="orderNo">Order No</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="orderNo"
                                            value={formData.orderNo}
                                            onChange={handleInputChange}
                                            placeholder="Enter Order No"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="broker">Broker</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="broker"
                                            value={formData.broker}
                                            onChange={handleInputChange}
                                            placeholder="Enter Broker"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="transportName">Transport Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="transportName"
                                            value={formData.transportName}
                                            onChange={handleInputChange}
                                            placeholder="Enter Transport Name"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="deliveryDestination">Delivery Destination</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="deliveryDestination"
                                            value={formData.deliveryDestination}
                                            onChange={handleInputChange}
                                            placeholder="Enter Delivery Destination"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <table border="1" cellPadding="10">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Tax %</th>
                                                <th>CaseQty</th>
                                                <th>Location</th>
                                                <th>Size of Case</th>
                                                <th>Quantity2</th>
                                                <th>Quantity</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map((row, index) => renderRow(row, index))}
                                        </tbody>
                                    </table>
                                    {/* <button type="button" onClick={handleAddRow}>Add Row</button> */}
                                </div>
                                <div className="col-lg-12">
                                    <label htmlFor="narration">Narration:</label>
                                    <textarea
                                        name="narration"
                                        id="narration"
                                        cols="180"
                                        value={formData.narration}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button type="button" className="btn btn-success" onClick={submitData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalseOrderAdd