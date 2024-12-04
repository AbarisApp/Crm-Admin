import { useState } from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";



const StockJurnalAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Stock Journal',
        title_3: `Add Stock Journal`,
        path_2: ``
    };

    const [formData, setFormData] = useState({
        voucher: '',
        date: '',
        voucherAmount: '',
        taxType: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    const [rows, setRows] = useState([
        { id: 1, Type: '', item: '', BatchNo: '', Location: '', Quantity2: '', Quantity: 0, CurrentStock: '', Rate: '', amount: '' },
        { id: 2, Type: '', item: '', BatchNo: '', Location: '', Quantity2: '', Quantity: 0, CurrentStock: '', Rate: '', amount: '' },
        { id: 3, Type: '', item: '', BatchNo: '', Location: '', Quantity2: '', Quantity: 0, CurrentStock: '', Rate: '', amount: '' },
        { id: 4, Type: '', item: '', BatchNo: '', Location: '', Quantity2: '', Quantity: 0, CurrentStock: '', Rate: '', amount: '' },
    ]);


    const handleChange = (index, key, value) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, [key]: value } : row
        );
        setRows(updatedRows);
    };


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

            {/* Account Name Select */}
            <td>
                <input
                    type="number"
                    value={row.BatchNo}
                    onChange={(e) => handleChange(index, 'BatchNo', e.target.value)}
                />
            </td>
            <td>
                <select
                    value={row.Location}
                    onChange={(e) => handleChange(index, 'Location', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Cr">Cr</option>
                    <option value="Db">Db</option>
                </select>
            </td>
            <td>
                <input
                    type="number"
                    value={row.Quantity2}
                    onChange={(e) => handleChange(index, 'Quantity2', e.target.value)}
                />
            </td>

            {/* HSNCode Input */}
            <td>
                <input
                    type="number"
                    value={row.Quantity}
                    onChange={(e) => handleChange(index, 'Quantity', e.target.value)}
                />
            </td>

            <td>
                <input
                    type="number"
                    value={row.CurrentStock}
                    onChange={(e) => handleChange(index, 'CurrentStock', e.target.value)}
                />
            </td>

            <td>
                <input
                    type="number"
                    value={row.Rate}
                    onChange={(e) => handleChange(index, 'Rate', e.target.value)}
                />
            </td>



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
            { id: rows.length + 1, ExpenseAc: '', Product: '', HSNCode: 0, Commodity: 0, Amount: 0 },
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
                                    <h4 className="heading mb-0">Add Stock Journal</h4>
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
                                        <label htmlFor="taxType">Voucher No. :
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Enter Order No"
                                        />
                                    </div>


                                </div>

                                <div className="col-lg-12">
                                    <table border="1" cellPadding="10">
                                        <thead>
                                            <tr>
                                                <th>Type</th>
                                                <th>Stock</th>
                                                <th>Item</th>
                                                <th>Batch No</th>
                                                <th>Location LiveStock	</th>
                                                <th>Quantity2</th>
                                                <th>Quantity</th>
                                                <th>CurrentStock</th>
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


                                {/* Expense and Taxes Table */}

                                <div className="col-lg-12 text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default StockJurnalAdd