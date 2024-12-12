import { useEffect, useState } from "react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { getAllAccountData, getAllLocationsData, getAllPickupPointsData, getAllProductsData, getAllTaxTypeData, getAllTransportersData, getAttTaxTypeData } from "../../../../../api/login/Login";


const PurchageOrderAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Order',
        title_3: `Add Purchase Order`,
        path_2: ``
    };
    const [allAccounts, setAllAccounts] = useState();
    const [allTaxes, setAllTaxes] = useState();
    const [allTransports, setAllTransports] = useState();
    const [allProducts, setAllProducts] = useState();
    const [allPickupPoints, setAllPickupPoints] = useState();

    const [formData, setFormData] = useState({
        date: '',
        account: '',
        order_no: '',
        taxType: ''
    });

    // State for dynamic expense and taxes data
    const [expenses, setExpenses] = useState([]);

    // Sample expense data based on tax type
    const taxTypeData = {
        "GST 5%": [
            { name: 'CGST 1.5%', Product: 'CGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'SGST 1.5%', Product: 'SGST (O/P)', rate: 1.5, amount: 0 },
        ],
        "GST 12%": [
            { name: 'CGST 6%', Product: 'CGST (O/P)', rate: 6, amount: 0 },
            { name: 'SGST 6%', Product: 'SGST (O/P)', rate: 6, amount: 0 },
        ],
        "GST MULTIPLE": [
            { name: 'CGST 1.5%', Product: 'CGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'SGST 1.5%', Product: 'SGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'CGST 2.5%', Product: 'CGST (O/P)', rate: 2.5, amount: 0 },
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



    const [rows, setRows] = useState([
        { id: 1, item: '', variant: '', sku: "", Tax: 0, pickupPoint: '', Quantity2: '', Quantity: 0, Rate: 0, DiscRs: '', DiscType: '', Amount: 0 },
    ]);

    // const handleChange = (index, key, value, varArr) => {
    //     if (key === "item") {
    //         const variantItem = allProducts?.find((item) => {
    //             return item?._id?.uid == value
    //         })
    //         console.log("variantItem--", variantItem)
    //         const updatedRows = rows.map((row, i) =>
    //             i === index ? { ...row, [key]: value, variant: '', variantArr: variantItem?.product?.variations } : row
    //         );
    //         setRows(updatedRows);
    //         return
    //     } if (key === "variant") {
    //         const skuD = varArr?.find((item) => {
    //             return item?._id == value
    //         })
    //         console.log('skud---', skuD)
    //         const updatedRows = rows.map((row, i) =>
    //             i === index ? { ...row, [key]: value, sku: skuD?.sku } : row
    //         );
    //         setRows(updatedRows);
    //         return
    //     } else {
    //         const updatedRows = rows.map((row, i) =>
    //             i === index ? { ...row, [key]: value } : row
    //         );
    //         setRows(updatedRows);
    //     }
    // };

    // const renderRow = (row, index) => (
    //     <tr key={row.id}>
    //         <td>
    //             <select
    //                 value={row.item}
    //                 onChange={(e) => handleChange(index, 'item', e.target.value)}
    //             >
    //                 <option value="">Select Product</option>
    //                 {allProducts && allProducts?.map((item, i) => {
    //                     return <option value={item?._id?.uid}>{item?.product?.name}</option>
    //                 })}
    //             </select>
    //         </td>

    //         <td>
    //             <select
    //                 value={row.variant}
    //                 name="variant"
    //                 onChange={(e) => handleChange(index, 'variant', e.target.value, row.variantArr)}
    //             >
    //                 <option value="">Select Variant</option>
    //                 {row?.variantArr && row?.variantArr?.map((item, i) => {
    //                     return <option value={item?._id}>{item?.weight}</option>
    //                 })}
    //             </select>
    //         </td>

    //         <td>
    //             <input
    //                 type="text"
    //                 disabled
    //                 value={row.sku}
    //                 onChange={(e) => handleChange(index, 'sku', e.target.value)}
    //             />
    //         </td>

    //         <td>
    //             <input
    //                 type="number"
    //                 value={row.Tax}
    //                 onChange={(e) => handleChange(index, 'Tax', e.target.value)}
    //             />
    //         </td>

    //         <td>
    //             <select
    //                 value={row.pickupPoint}
    //                 onChange={(e) => handleChange(index, 'pickupPoint', e.target.value)}
    //             >
    //                 <option value="">Select PickupPoint</option>
    //                 {allPickupPoints && allPickupPoints?.map((item, i) => {
    //                     return <option value={item?._id}>{item?.name}</option>
    //                 })}
    //             </select>
    //         </td>
    //         <td>
    //             <input
    //                 type="number"
    //                 value={row.Quantity2}
    //                 onChange={(e) => handleChange(index, 'Quantity2', e.target.value)}
    //             />
    //         </td>
    //         <td>
    //             <input
    //                 type="number"
    //                 value={row.Quantity}
    //                 onChange={(e) => handleChange(index, 'Quantity', e.target.value)}
    //             />
    //         </td>

    //         <td>
    //             <input
    //                 type="number"
    //                 value={row.Rate}
    //                 onChange={(e) => handleChange(index, 'Rate', e.target.value)}
    //             />
    //         </td>

    //         <td>
    //             <input
    //                 type="number"
    //                 value={row.DiscRs}
    //                 onChange={(e) => handleChange(index, 'DiscRs', e.target.value)}
    //             />
    //         </td>
    //         <td>
    //             <select
    //                 value={row.DiscType}
    //                 onChange={(e) => handleChange(index, 'DiscType', e.target.value)}
    //             >
    //                 <option value="">Select Disc Type</option>
    //                 <option value="Fixed">Fixed</option>
    //                 <option value="per">Per</option>
    //                 <option value="Quantity">Quantity</option>
    //             </select>
    //         </td>
    //         <td>
    //             <input
    //                 type="number"
    //                 value={row.Amount}
    //                 onChange={(e) => handleChange(index, 'Amount', e.target.value)}
    //             />
    //         </td>
    //         <td>
    //             <button onClick={() => handleDeleteRow(index)}>🗑️</button>
    //         </td>
    //     </tr>
    // );

    const handleDeleteRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };
    const handleAddRow = () => {
        setRows([
            ...rows,
            { id: rows.length + 1, item: '', variant: '', sku: "", Tax: 0, pickupPoint: '', Quantity2: '', Quantity: 0, Rate: 0, DiscRs: '', DiscType: '', Amount: 0 },
        ]);
    };



    const handleChange = (index, key, value, varArr) => {
        if (key === "item") {
            const variantItem = allProducts?.find((item) => item?._id?.uid === value);
            const updatedRows = rows.map((row, i) =>
                i === index
                    ? {
                        ...row,
                        [key]: value,
                        variant: '',
                        variantArr: variantItem?.product?.variations,
                    }
                    : row
            );
            setRows(updatedRows);
            return;
        }

        if (key === "variant") {
            const skuD = varArr?.find((item) => item?._id === value);
            const updatedRows = rows.map((row, i) =>
                i === index
                    ? {
                        ...row,
                        [key]: value,
                        sku: skuD?.sku,
                    }
                    : row
            );
            setRows(updatedRows);
            return;
        }

        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                const updatedRow = { ...row, [key]: value };

                // Perform calculations for Amount based on Quantity, Quantity2, Rate, Discount, etc.
                const totalQuantity = parseFloat(updatedRow.Quantity || 0) + parseFloat(updatedRow.Quantity2 || 0);
                const rate = parseFloat(updatedRow.Rate || 0);
                let discount = 0;

                if (updatedRow.DiscType === "Fixed") {
                    discount = parseFloat(updatedRow.DiscRs || 0);
                } else if (updatedRow.DiscType === "per") {
                    discount = (parseFloat(updatedRow.DiscRs || 0) / 100) * (rate * totalQuantity);
                }

                // Calculate Amount
                const amount = (rate * totalQuantity) - discount;
                updatedRow.Amount = amount > 0 ? amount.toFixed(2) : 0;

                return updatedRow;
            }
            return row;
        });

        setRows(updatedRows);
    };




    const renderRow = (row, index) => (
        <tr key={row.id}>
            <td>
                <select
                    value={row.item}
                    onChange={(e) => handleChange(index, 'item', e.target.value)}
                >
                    <option value="">Select Product</option>
                    {allProducts?.map((item, i) => (
                        <option key={i} value={item?._id?.uid}>
                            {item?.product?.name}
                        </option>
                    ))}
                </select>
            </td>
            <td>
                <select
                    value={row.variant}
                    name="variant"
                    onChange={(e) => handleChange(index, 'variant', e.target.value, row.variantArr)}
                >
                    <option value="">Select Variant</option>
                    {row?.variantArr?.map((item, i) => (
                        <option key={i} value={item?._id}>
                            {item?.weight}
                        </option>
                    ))}
                </select>
            </td>
            <td>
                <input
                    type="text"
                    disabled
                    value={row.sku}
                    onChange={(e) => handleChange(index, 'sku', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.Tax}
                    onChange={(e) => handleChange(index, 'Tax', e.target.value)}
                />
            </td>
            <td>
                <select
                    value={row.pickupPoint}
                    onChange={(e) => handleChange(index, 'pickupPoint', e.target.value)}
                >
                    <option value="">Select PickupPoint</option>
                    {allPickupPoints?.map((item, i) => (
                        <option key={i} value={item?._id}>
                            {item?.name}
                        </option>
                    ))}
                </select>
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
                <input
                    type="number"
                    value={row.Rate}
                    onChange={(e) => handleChange(index, 'Rate', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.DiscRs}
                    onChange={(e) => handleChange(index, 'DiscRs', e.target.value)}
                />
            </td>
            <td>
                <select
                    value={row.DiscType}
                    onChange={(e) => handleChange(index, 'DiscType', e.target.value)}
                >
                    <option value="">Select Disc Type</option>
                    <option value="Fixed">Fixed</option>
                    <option value="per">Per</option>
                    <option value="Quantity">Quantity</option>
                </select>
            </td>
            <td>
                <input type="number" value={row.Amount} disabled />
            </td>
            <td>
                <button onClick={() => handleDeleteRow(index)}>🗑️</button>
            </td>
        </tr>
    );






    const getAllAccount = async () => {
        try {
            const res = await getAllAccountData();
            setAllAccounts(res?.data?.voucher)
        } catch (error) {

        }
    };
    const getAllTaxType = async () => {
        try {
            const res = await getAllTaxTypeData();
            setAllTaxes(res?.data)
        } catch (error) {

        }
    };
    const getAllTransporters = async () => {
        try {
            const res = await getAllTransportersData();
            setAllTransports(res?.data)
        } catch (error) {

        }
    };
    const getAllProducts = async () => {
        try {
            const res = await getAllProductsData();
            console.log('Products---', res)
            setAllProducts(res)
        } catch (error) {

        }
    };
    const getAllPickupPoints = async () => {
        try {
            const res = await getAllPickupPointsData();
            console.log('Locations---', res)
            setAllPickupPoints(res)
        } catch (error) {

        }
    };

    useEffect(() => {
        getAllAccount();
        getAllTaxType();
        getAllTransporters();
        getAllProducts();
        getAllPickupPoints();
    }, []);


    const handleSubmitData = () => {
        console.log("ROWS----", rows)
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
                                    <h4 className="heading mb-0">Add Purchase Order</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Date </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            placeholder="Enter Date"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Account</label>
                                        <select
                                            className="form-control"
                                            name="account"
                                            value={formData.account}
                                        >
                                            <option value="">Select Account</option>
                                            {allAccounts && allAccounts?.map((item, i) => {
                                                return <option value={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Order No</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="order_no"
                                            value={formData.order_no}
                                            onChange={handleInputChange}
                                            placeholder="Enter Order No"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Tax Type </label>
                                        <select
                                            className="form-control"
                                            name="taxType"
                                            value={formData.taxType}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Tax Type</option>
                                            {allTaxes && allTaxes?.map((item, i) => {
                                                return <option value={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Transporter</label>
                                        <select
                                            className="form-control"
                                            name="taxType"
                                        >
                                            <option value="">Select Transporter</option>
                                            {allTransports && allTransports?.map((item, i) => {
                                                return <option value={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <table border="1" cellPadding="10">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Variants</th>
                                                <th>SKU</th>
                                                <th>Tax %</th>
                                                <th>Location</th>
                                                <th>Quantity2</th>
                                                <th>Quantity</th>
                                                <th>Rate</th>
                                                <th>Disc.(Rs.)</th>
                                                <th>Disc Type</th>
                                                <th>Amount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map((row, index) => renderRow(row, index))}
                                        </tbody>
                                    </table>
                                    <button type="button" onClick={handleAddRow}>Add Row</button>
                                </div>


                                {/* Expense and Taxes Table */}
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Account Name</th>
                                                <th>Rate</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {expenses.length > 0 ? (
                                                expenses.map((expense, index) => (
                                                    <tr key={index}>
                                                        <td>{expense.name}</td>
                                                        <td>{expense.Product}</td>
                                                        <td>{expense.rate}</td>
                                                        <td>{expense.amount}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="text-center">
                                                        Amount expenses available for the selected tax type.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col-lg-12">
                                    <label htmlFor="taxType">Transporter</label>
                                    <textarea name="" id="" cols={180}></textarea>
                                </div>

                                {/* Total Amount */}
                                <div className="mt-3">
                                    <h4>
                                        Total Amount: {expenses.reduce((total, expense) => total + expense.amount, 0)}
                                    </h4>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button type="button" className="btn btn-primary" onClick={handleSubmitData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PurchageOrderAdd