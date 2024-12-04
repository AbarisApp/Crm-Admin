import { useState } from "react";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";

const ProcessAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Account Master",
        title_2: 'Add Process',
        path_2: ``
    };
    const [rows, setRows] = useState([
        { id: 1, Type: '', Stock: '', Item: '', Quantity2: '', Conversion: '', Quantity: '', Rate: '', Amount: '' },
        { id: 2, Type: '', Stock: '', Item: '', Quantity2: '', Conversion: '', Quantity: '', Rate: '', Amount: '' },
        { id: 3, Type: '', Stock: '', Item: '', Quantity2: '', Conversion: '', Quantity: '', Rate: '', Amount: '' },
        { id: 4, Type: '', Stock: '', Item: '', Quantity2: '', Conversion: '', Quantity: '', Rate: '', Amount: '' },
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
            {/* Cr/Db Select */}
            <td>
                <select
                    value={row.Type}
                    onChange={(e) => handleChange(index, 'Type', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Cr">Cr</option>
                    <option value="Db">Db</option>
                </select>
            </td>

            {/* Account Name Select */}
            <td>
                <select
                    value={row.Stock}
                    onChange={(e) => handleChange(index, 'Stock', e.target.value)}
                >
                    <option value="">Select Account</option>
                    <option value="Account 1">Account 1</option>
                    <option value="Account 2">Account 2</option>
                </select>
            </td>
            <td>
                <select
                    value={row.Item}
                    onChange={(e) => handleChange(index, 'Item', e.target.value)}
                >
                    <option value="">Select Account</option>
                    <option value="Account 1">Account 1</option>
                    <option value="Account 2">Account 2</option>
                </select>
            </td>
            <td>
                <input
                    type="number"
                    value={row.Quantity2}
                    onChange={(e) => handleChange(index, 'Quantity2', e.target.value)}
                />
            </td>

            {/* No Input */}
            <td>
                <input
                    type="number"
                    value={row.Conversion}
                    onChange={(e) => handleChange(index, 'Conversion	', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.Quantity}
                    onChange={(e) => handleChange(index, 'Quantity	', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.Rate}
                    onChange={(e) => handleChange(index, 'Rate	', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.Amount}
                    onChange={(e) => handleChange(index, 'Amount', e.target.value)}
                />
            </td>

            {/* Delete Button */}
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
            { id: rows.length + 1, crDb: '', accountName: '', debit: 0, credit: 0, no: 0 },
        ]);
    };
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add Process</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Process Name </label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Process Name" />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Conversion Qty : </label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Voucher No" />
                                        </div>

                                        <div className="col-lg-12">
                                            <table border="1" cellPadding="10">
                                                <thead>
                                                    <tr>
                                                        <th>Type</th>
                                                        <th>Stock</th>
                                                        <th>Item</th>
                                                        <th>Quantity2</th>
                                                        <th>Conversion</th>
                                                        <th>Quantity</th>
                                                        <th>Rate</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {rows.map((row, index) => renderRow(row, index))}
                                                </tbody>
                                            </table>
                                            {/* <button type="button" onClick={handleAddRow}>Add Row</button>    */}
                                        </div>


                                        <div className="col-md-12 mb-3 text-align-center">
                                            <button type="button" className="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProcessAdd