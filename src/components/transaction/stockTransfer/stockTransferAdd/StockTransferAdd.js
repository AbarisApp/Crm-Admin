import { useState } from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";


const StockTransferAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Add Stock Transfer',
        path_2: ``
    };

    const [formData, setFormData] = useState({
        voucher: '',
        date: '',
        voucherAmount: '',
        taxType: ''
    });



    // Handle form input change
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });


    };


    ////////
    const [rows, setRows] = useState([
        { id: 1, item: '', BatchNo: '', Tax: 0, Location: '', ToLocation: '', Quantity2: '', Quantity: 0, },
        { id: 2, item: '', BatchNo: '', Tax: 0, Location: '', ToLocation: '', Quantity2: '', Quantity: 0, },
        { id: 3, item: '', BatchNo: '', Tax: 0, Location: '', ToLocation: '', Quantity2: '', Quantity: 0, },
        { id: 4, item: '', BatchNo: '', Tax: 0, Location: '', ToLocation: '', Quantity2: '', Quantity: 0, },
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
                    value={row.Tax}
                    onChange={(e) => handleChange(index, 'Tax', e.target.value)}
                />
            </td>
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
                <select
                    value={row.ToLocation}
                    onChange={(e) => handleChange(index, 'ToLocation', e.target.value)}
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
                                    <h4 className="heading mb-0">Add Challan Return</h4>
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
                                        <label htmlFor="voucher">Transfer No: </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucher"
                                            placeholder="Enter Voucher"
                                        />
                                    </div>



                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">From Location :</label>
                                        <select
                                            className="form-control"
                                            name="taxType"

                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">To Location :</label>
                                        <select
                                            className="form-control"
                                            name="taxType"

                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">From Location Add :</label>
                                        <select
                                            className="form-control"
                                            name="taxType"

                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">ToLoation Add :</label>
                                        <select
                                            className="form-control"
                                            name="taxType"

                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">DeliveryAt :</label>
                                        <select
                                            className="form-control"
                                            name="taxType"

                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>




                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Cartoon/Bags :
                                        </label>
                                        <input type="date" className="form-control" placeholder="Enter Cartoon/Bags " />
                                    </div>





                                </div>

                                <div className="col-lg-12">
                                    <table border="1" cellPadding="10">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Tax %</th>
                                                < th>Batch No</th>
                                                <th>Location</th>
                                                <th>To Location</th>
                                                <th>Quantity2</th>
                                                <th>Quantity</th>
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


                                <div className="col-lg-12">
                                    <label htmlFor="taxType">Narration</label>
                                    <textarea name="" id="" cols={180}></textarea>
                                </div>

                                {/* Total Amount */}

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

export default StockTransferAdd