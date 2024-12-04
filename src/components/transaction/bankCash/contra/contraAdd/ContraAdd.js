import { useState } from "react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs"


const ContraAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Bank / Cash',
        title_3: `Contra Add`,
        path_2: ``
    };


    const [rows, setRows] = useState([
        { id: 1, crDb: '', accountName: '', debit: 0, credit: 0, no: '' },
        { id: 2, crDb: '', accountName: '', debit: 0, credit: 0, no: '' },
        { id: 3, crDb: '', accountName: '', debit: 0, credit: 0, no: '' },
        { id: 4, crDb: '', accountName: '', debit: 0, credit: 0, no: '' },
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
                    value={row.crDb}
                    onChange={(e) => handleChange(index, 'crDb', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Cr">Cr</option>
                    <option value="Db">Db</option>
                </select>
            </td>

            {/* Account Name Select */}
            <td>
                <select
                    value={row.accountName}
                    onChange={(e) => handleChange(index, 'accountName', e.target.value)}
                >
                    <option value="">Select Account</option>
                    <option value="Account 1">Account 1</option>
                    <option value="Account 2">Account 2</option>
                </select>
            </td>

            {/* Debit Input */}
            <td>
                <input
                    type="number"
                    value={row.debit}
                    onChange={(e) => handleChange(index, 'debit', e.target.value)}
                />
            </td>

            {/* Credit Input */}
            <td>
                <input
                    type="number"
                    value={row.credit}
                    onChange={(e) => handleChange(index, 'credit', e.target.value)}
                />
            </td>

            {/* No Input */}
            <td>
                <input
                    type="number"
                    value={row.no}
                    onChange={(e) => handleChange(index, 'no', e.target.value)}
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
                                    <h4 className="heading mb-0">Contra Add</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Voucher </label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Voucher" />
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Date </label>
                                            <input type="date" className="form-control" id="projectName" placeholder=" " />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Voucher No : </label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Voucher No" />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Doc No : </label>
                                            <input type="number" className="form-control" id="projectName" placeholder=" " />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Doc Date :  </label>
                                            <input type="date" className="form-control" id="projectName" placeholder=" " />
                                        </div>

                                        <div className="col-lg-12">
                                            <table border="1" cellPadding="10">
                                                <thead>
                                                    <tr>
                                                        <th>Cr/Db</th>
                                                        <th>Account Name</th>
                                                        <th>Debit</th>
                                                        <th>Credit</th>
                                                        <th>No</th>
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

export default ContraAdd