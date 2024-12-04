import { useState } from "react";



export const GSTUtilizationAdd = () => {
    const [formData, setFormData] = useState({
        voucher: '',
        date: '',
        docDate: '',
    });

    // State for dynamic expense and taxes data
    const [expenses, setExpenses] = useState([]);

    // Sample expense data based on tax type
    const taxTypeData = {
        "GST 5%": [
            { name: 'CGST 1.5%', UtilizationForAc: 'CGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'SGST 1.5%', UtilizationForAc: 'SGST (O/P)', rate: 1.5, amount: 0 },
        ],
        "GST 12%": [
            { name: 'CGST 6%', UtilizationForAc: 'CGST (O/P)', rate: 6, amount: 0 },
            { name: 'SGST 6%', UtilizationForAc: 'SGST (O/P)', rate: 6, amount: 0 },
        ],
        "GST MULTIPLE": [
            { name: 'CGST 1.5%', UtilizationForAc: 'CGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'SGST 1.5%', UtilizationForAc: 'SGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'CGST 2.5%', UtilizationForAc: 'CGST (O/P)', rate: 2.5, amount: 0 },
        ]
    };

    // Handle form input change
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        // Update expenses when tax type is selected
        if (e.target.name === 'taxType') {
            setExpenses(taxTypeData[e.target.value] || []);
        }
    };


    ////////
    const [rows, setRows] = useState([
        { id: 1, Utilization: '', UtilizationForAc: '', Amount: 0 },
        { id: 2, Utilization: '', UtilizationForAc: '', Amount: 0 },
        { id: 3, Utilization: '', UtilizationForAc: '', Amount: 0 },
        { id: 4, Utilization: '', UtilizationForAc: '', Amount: 0 },
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
                    value={row.Utilization}
                    onChange={(e) => handleChange(index, 'Utilization', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Cr">Cr</option>
                    <option value="Db">Db</option>
                </select>
            </td>

            {/* Account Name Select */}
            <td>
                <select
                    value={row.UtilizationForAc}
                    onChange={(e) => handleChange(index, 'UtilizationForAc', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Cr">Cr</option>
                    <option value="Db">Db</option>
                </select>
            </td>

            {/* HSNCode Input */}


            {/* Amount Input */}
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
            { id: rows.length + 1, Utilization: '', UtilizationForAc: '', HSNCode: 0, Commodity: 0, Amount: 0 },
        ]);
    };


    /////
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add GST Expense Entry</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Date </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucherAmount">Voucher No : </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucherAmount"
                                            value={formData.voucherAmount}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher Amount"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Doc Date </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <table border="1" cellPadding="10">
                                        <thead>
                                            <tr>
                                                <th>Utilization From A/c (Cr)</th>
                                                <th>Utilization For A/c (Db)</th>
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

                                {/* Total Amount */}
                                <div className="mt-3">
                                    <h4>
                                        Total Amount: {expenses.reduce((total, expense) => total + expense.amount, 0)}
                                    </h4>
                                </div>
                                <div className="col-lg-12">
                                    <button type="button" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
