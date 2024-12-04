import { useState } from "react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";


const GSTPaymentAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'GST',
        title_3: `Add GST Payment`,
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

    // State for dynamic expense and taxes data
    const [expenses, setExpenses] = useState([]);

    // Sample expense data based on tax type
    const taxTypeData = {
        "GST 5%": [
            { name: 'CGST 1.5%', UtilizationForAc: 'CGST (O/P)', rate: 1.5, Tax: 0 },
            { name: 'SGST 1.5%', UtilizationForAc: 'SGST (O/P)', rate: 1.5, Tax: 0 },
        ],
        "GST 12%": [
            { name: 'CGST 6%', UtilizationForAc: 'CGST (O/P)', rate: 6, Tax: 0 },
            { name: 'SGST 6%', UtilizationForAc: 'SGST (O/P)', rate: 6, Tax: 0 },
        ],
        "GST MULTIPLE": [
            { name: 'CGST 1.5%', UtilizationForAc: 'CGST (O/P)', rate: 1.5, Tax: 0 },
            { name: 'SGST 1.5%', UtilizationForAc: 'SGST (O/P)', rate: 1.5, Tax: 0 },
            { name: 'CGST 2.5%', UtilizationForAc: 'CGST (O/P)', rate: 2.5, Tax: 0 },
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
        { id: 1, TaxType: '', TaxAccount: '', Tax: 0, Interest: '', Penalty: '', Fees: '', Other: '', Total: '' },
        { id: 1, TaxType: '', TaxAccount: '', Tax: 0, Interest: '', Penalty: '', Fees: '', Other: '', Total: '' },
        { id: 1, TaxType: '', TaxAccount: '', Tax: 0, Interest: '', Penalty: '', Fees: '', Other: '', Total: '' },
        { id: 1, TaxType: '', TaxAccount: '', Tax: 0, Interest: '', Penalty: '', Fees: '', Other: '', Total: '' },
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
                    value={row.TaxType}
                    onChange={(e) => handleChange(index, 'TaxType', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Cr">Cr</option>
                    <option value="Db">Db</option>
                </select>
            </td>

            {/* Account Name Select */}
            <td>
                <select
                    value={row.TaxAccount}
                    onChange={(e) => handleChange(index, 'TaxAccount', e.target.value)}
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

            {/* HSNCode Input */}
            <td>
                <input
                    type="number"
                    value={row.Interest}
                    onChange={(e) => handleChange(index, 'Interest', e.target.value)}
                />
            </td>

            {/* Tax Input */}
            <td>
                <input
                    type="number"
                    value={row.Penalty}
                    onChange={(e) => handleChange(index, 'Penalty', e.target.value)}
                />
            </td>

            <td>
                <input
                    type="number"
                    value={row.Fees}
                    onChange={(e) => handleChange(index, 'Fees', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.Other}
                    onChange={(e) => handleChange(index, 'Other', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.Total}
                    onChange={(e) => handleChange(index, 'Total', e.target.value)}
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
            { id: rows.length + 1, Utilization: '', UtilizationForAc: '', HSNCode: 0, Commodity: 0, Tax: 0 },
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
                                    <h4 className="heading mb-0">Add GST Payment</h4>
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
                                        <label htmlFor="voucherTax">Bank/Cash </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucherTax"
                                            value={formData.voucherTax}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher Tax"
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
                                        <label htmlFor="voucher">Challan No </label>
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
                                        <label htmlFor="voucher">Challan Date </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Challan No"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Chq. No </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Chq. No"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Chq. Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Chq. No"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <table border="1" cellPadding="10">
                                        <thead>
                                            <tr>
                                                <th>Tax Type</th>
                                                <th>Tax Account</th>
                                                <th>Tax</th>
                                                <th>Interest</th>
                                                <th>Penalty</th>
                                                <th>Fees</th>
                                                <th>Other</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map((row, index) => renderRow(row, index))}
                                        </tbody>
                                    </table>
                                    {/* <button type="button" onClick={handleAddRow}>Add Row</button>    */}
                                </div>

                                {/* Total Tax */}
                                <div className="mt-3">
                                    <h4>
                                        Total Tax: {expenses.reduce((total, expense) => total + expense.Tax, 0)}
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

export default GSTPaymentAdd