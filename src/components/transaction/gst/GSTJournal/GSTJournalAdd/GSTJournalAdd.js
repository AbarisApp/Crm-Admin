import { useState } from "react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";



const GSTJournalAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'GST',
        title_3: `Add GST Journal`,
        path_2: ``
    };

    const [formData, setFormData] = useState({
        Date: '',
        BankCash: '',
        VoucherNo: '',
        ChallanNo: '',
        ChallanDate: '',
        ChqNo: '',
        ChqDate: ''
    });

    // State for dynamic expense and Debites data
    const [expenses, setExpenses] = useState([]);

    // Sample expense data based on Debit type
    const CrDbData = {
        "GST 5%": [
            { name: 'CGST 1.5%', UtilizationForAc: 'CGST (O/P)', rate: 1.5, Debit: 0 },
            { name: 'SGST 1.5%', UtilizationForAc: 'SGST (O/P)', rate: 1.5, Debit: 0 },
        ],
        "GST 12%": [
            { name: 'CGST 6%', UtilizationForAc: 'CGST (O/P)', rate: 6, Debit: 0 },
            { name: 'SGST 6%', UtilizationForAc: 'SGST (O/P)', rate: 6, Debit: 0 },
        ],
        "GST MULTIPLE": [
            { name: 'CGST 1.5%', UtilizationForAc: 'CGST (O/P)', rate: 1.5, Debit: 0 },
            { name: 'SGST 1.5%', UtilizationForAc: 'SGST (O/P)', rate: 1.5, Debit: 0 },
            { name: 'CGST 2.5%', UtilizationForAc: 'CGST (O/P)', rate: 2.5, Debit: 0 },
        ]
    };

    // Handle form input change
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        // Update expenses when Debit type is selected
        if (e.target.name === 'CrDb') {
            setExpenses(CrDbData[e.target.value] || []);
        }
    };


    ////////
    const [rows, setRows] = useState([
        { id: 1, CrDb: '', AccountName: '', Debit: 0, Credit: 0, },
        { id: 1, CrDb: '', AccountName: '', Debit: 0, Credit: 0, },
        { id: 1, CrDb: '', AccountName: '', Debit: 0, Credit: 0, },
        { id: 1, CrDb: '', AccountName: '', Debit: 0, Credit: 0, },
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
                    value={row.CrDb}
                    onChange={(e) => handleChange(index, 'CrDb', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Cr">Cr</option>
                    <option value="Db">Db</option>
                </select>
            </td>

            {/* Account Name Select */}
            <td>
                <select
                    value={row.AccountName}
                    onChange={(e) => handleChange(index, 'AccountName', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Cr">Cr</option>
                    <option value="Db">Db</option>
                </select>
            </td>
            <td>
                <input
                    type="number"
                    value={row.Debit}
                    onChange={(e) => handleChange(index, 'Debit', e.target.value)}
                />
            </td>

            {/* HSNCode Input */}
            <td>
                <input
                    type="number"
                    value={row.Credit}
                    onChange={(e) => handleChange(index, 'Credit', e.target.value)}
                />
            </td>

            {/* Debit Input */}



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
            { id: rows.length + 1, Utilization: '', UtilizationForAc: '', HSNCode: 0, Commodity: 0, Debit: 0 },
        ]);
    };


    /////
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
                                    <h4 className="heading mb-0">Add GST Journal</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Voucher </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher"
                                        />
                                    </div>
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
                                        <label htmlFor="voucher">Voucher No </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Voucher No"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucherDebit">Doc No </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucherDebit"
                                            value={formData.voucherDebit}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher Debit"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Doc Date </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Challan No"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Type </label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>

                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Sub Type </label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>

                                    </div>

                                </div>

                                <div className="col-lg-12">
                                    <table border="1" cellPadding="10">
                                        <thead>
                                            <tr>
                                                <th>Cr/Db</th>
                                                <th>Account Name</th>
                                                <th>Debit</th>
                                                <th>Credit</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map((row, index) => renderRow(row, index))}
                                        </tbody>
                                    </table>
                                    {/* <button type="button" onClick={handleAddRow}>Add Row</button>    */}
                                </div>

                                {/* Total Debit */}
                                <div className="mt-3">
                                    <h4>
                                        Total Debit: {expenses.reduce((total, expense) => total + expense.Debit, 0)}
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

export default GSTJournalAdd