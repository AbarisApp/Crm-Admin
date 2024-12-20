import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProductsData } from "../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";
import Loadar from "../../common/loader/Loader";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";

function DeliveryOfLrAdd() {

    const [load, setLoad] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Delivery Of Lr',
        title_3: `Add Delivery Of Lr`,
        path_2: ``
    };
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
    const [allAccounts, setAllAccounts] = useState();
    const [allProducts, setAllProducts] = useState();

    const params = useParams();
    const [formData, setFormData] = useState({
        date: '',
        memo_no: '',
        delivery_no: '',
        address: '',
        Lr_no: '',
        to_wt: '',
        hire: '',
        add_lr: '',
        freightBy: '',
        delivery: '',
        lr_no: '',
        from_city: '',
        to_city: '',
        consigner: '',
        consignee: '',
        gst_no: '',
        actual_weight: '',
        value_rs: '',
        Valuedate: '',
        delivery_at: '',
        inv_no: '',
        Other_charges: '',
        freight: '',
        docket_charge: '',
        himali: '',
        detention: '',
        door_collection: '',
        door_delivery: '',
        narration: '',
        gst_by: '',
        gst_amt: '',
        sub_total: '',


    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'taxType') {
            setExpenses(taxTypeData[e.target.value] || []);
        }
    };

    const [rows, setRows] = useState([
        { id: 1, item: '', variant: '', article: "", goods: '', weight: '', rate: '', freightOn: '', disc_rs: '', amount: 0 },
    ]);
    const handleDeleteRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };
    const handleAddRow = () => {
        setRows([
            ...rows,
            { id: rows.length + 1, item: '', variant: '', article: "", goods: '', weight: '', rate: '', freightOn: '', disc_rs: '', amount: 0 },
        ]);
    };
    const handleChange = (index, key, value, varArr) => {
        if (key === "item") {
            const variantItem = allProducts?.find((item) => item?._id?.uid === value);
            const updatedRows = rows.map((row, i) =>
                i === index
                    ? {
                        ...row,
                        product_id: value,
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
                        variant_id: value,
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
                const totalQuantity = parseFloat(updatedRow.quantity || 0) + parseFloat(updatedRow.quantity2 || 0);
                const rate = parseFloat(updatedRow.rate || 0);
                let discount = 0;

                if (updatedRow.disc_type === "Fixed") {
                    discount = parseFloat(updatedRow.disc_rs || 0);
                } else if (updatedRow.disc_type === "per") {
                    discount = (parseFloat(updatedRow.disc_rs || 0) / 100) * (rate * totalQuantity);
                }

                // Calculate Amount
                const amount = (rate * totalQuantity) - discount;
                updatedRow.amount = amount > 0 ? amount.toFixed(2) : 0;
                return updatedRow;
            }
            return row;
        });

        setRows(updatedRows);
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };
    const toastErrorMessage = (message) => {
        toast.error(`${message}`, {
            position: "top-right",
        });
    };


    // const getAllAccount = async () => {
    //     try {
    //         const res = await getAllAccountData();
    //         setAllAccounts(res?.data?.voucher)
    //     } catch (error) {

    //     }
    // };
    const getAllProducts = async () => {
        try {
            const res = await getAllProductsData();
            console.log('Products---', res)
            setAllProducts(res)
        } catch (error) {

        }
    };
    useEffect(() => {
        // getAllAccount();
        getAllProducts();
    }, []);


    const handleSubmitData = async () => {
        setLoad(true)
        const produ = rows.map((item) => {
            return {
                product_id: item.product_id,
                variant_id: item.variant_id,
                sku: item.sku,
                tax: item.tax,
                location: item.location,
                quantity2: item.quantity2,
                quantity: item.quantity,
                rate: item.rate,
                rate: item.rate,
                disc_rs: item.disc_rs,
                disc_type: item.disc_type,
                amount: item.amount,
            }
        })
        let Quantity = 0
        produ.forEach(element => {
            Quantity = Quantity + +element.quantity

        });
        let Product_amount = 0
        produ.forEach(element => {
            Product_amount = Product_amount + +element.amount

        });
        const obj = { ...formData, products: produ, total_items: produ.length, quantity: Quantity, product_amount: Product_amount }
        // console.log("obj----", obj)

        // if (params?.id) {
        //     const payload = { id: params?.id, data: obj }
        //     try {
        //         const res = await updatePurchaseChallan(payload)
        //         if (res?.statusCode == '200') {
        //             setLoad(false)
        //             toastSuccessMessage(" Updated successfully");
        //         } else {
        //             toastErrorMessage("Not Updated")
        //         }
        //     } catch (error) {
        //         toastErrorMessage("Not Updated")
        //     }
        //     setLoad(false)
        // } else {
        //     try {
        //         const res = await postPurchaseChallan(obj)
        //         if (res?.statusCode == '200') {
        //             setLoad(false)
        //             toastSuccessMessage(" Added successfully");
        //         } else {
        //             toastErrorMessage("Not Added")
        //         }
        //     } catch (error) {
        //         toastErrorMessage("Not Added")
        //     }
        //     setLoad(false)
        // }
    };


    return (
        <>
            <ToastContainer />
            {load && <Loadar />}
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">{params?.id ? "Update" : "Add"} Delivery Of Lr</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Delivery Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            placeholder="Enter Date"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Delivery No </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="delivery_no"
                                            value={formData.delivery_no}
                                            onChange={handleInputChange}
                                            placeholder="Enter Delivery No"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Lr No </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Lr_no"
                                            value={formData.Lr_no}
                                            onChange={handleInputChange}
                                            placeholder="Enter Lr No"
                                        />
                                    </div>
                                    <div className="col-md-3 mt-5">
                                        <span><button type="button" className="btn btn-primary">Go</button></span>
                                        <span><button type="button" className="btn btn-primary">Get Lr</button></span>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Party</label>
                                        <select
                                            className="form-select form-control"
                                            name="freightBy"
                                            value={formData.freightBy}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Party</option>
                                            <option value="1">Paid</option>
                                            <option value="1">To Pay</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Party Name</label>
                                        <select
                                            className="form-select form-control"
                                            name="delivery"
                                            value={formData.delivery}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Party Name</option>
                                            <option value="Door">Door</option>
                                            <option value="Godown">Godown</option>
                                            <option value="Office">Office</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="taxType">Party Address</label>
                                        <textarea name="address" id="" className="mt-2" cols={80} value={formData.address}
                                            onChange={handleInputChange}></textarea>
                                    </div>



                                    {/* <div className="col-md-3 mb-3">
                                        <label htmlFor="account">To City</label>
                                        <select
                                            className="form-select form-control"
                                            name="to_city"
                                            value={formData.to_city}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select To City</option>
                                            <option value="Agra">Agra</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Mumbai">Mumbai</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">To WT</label>
                                        <input
                                            type="number"
                                            className="form-select form-control"
                                            name="to_wt"
                                            value={formData.to_wt}
                                            onChange={handleInputChange}
                                            placeholder="Enter To WT"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Agent</label>
                                        <select
                                            className="form-select form-control"
                                            name="consigner"
                                            value={formData.consigner}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Agent</option>
                                            <option value="ABC Driver">ABC Agent</option>
                                            <option value="ABC Trader">ABCD Agent</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Hire</label>
                                        <input
                                            type="number"
                                            className="form-select form-control"
                                            name="hire"
                                            value={formData.hire}
                                            onChange={handleInputChange}
                                            placeholder="Enter Hire"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Cash/Bank</label>
                                        <select
                                            className="form-select form-control"
                                            name="consignee"
                                            value={formData.consignee}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Cash/Bank</option>
                                            <option value="ABC Driver1">ABC Cash</option>
                                            <option value="ABC Trader1">ABC Bank</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Advanced</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="gst_no"
                                            value={formData.gst_no}
                                            onChange={handleInputChange}
                                            placeholder="Enter Advanced"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Add Lr</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="add_lr"
                                            value={formData.add_lr}
                                            onChange={handleInputChange}
                                            placeholder="Enter Add Lr"
                                        />
                                    </div>
                                    <div className="col-md-2 mt-4">
                                        <button type="button" className="btn btn-primary">Add Lr</button>
                                    </div>
                                    <div className="col-md-2 mt-4">
                                        <button type="button" className="btn btn-primary">Auto Add Lr</button>
                                    </div> */}
                                    {/* <div className="col-md-3 mb-3">
                                <label htmlFor="account">Account</label>
                                <select
                                    className="form-control"
                                    name="account"
                                    value={formData.account}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Account</option>
                                    {allAccounts && allAccounts?.map((item, i) => {
                                        return <option value={item?._id}>{item?.name}</option>
                                    })}
                                </select>
                            </div> */}
                                </div>

                                <div className="col-lg-12" style={{ overflow: "auto" }}>
                                    <table border="1" cellPadding="10" >
                                        <thead>
                                            <tr>
                                                <th>Lr No</th>
                                                <th>Lr Date</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Consiqnor</th>
                                                <th>Consiqnor GSTNO</th>
                                                <th>Consiqnee</th>
                                                <th>Consiqnee GSTNO</th>
                                                <th>Pack</th>
                                                <th>Description</th>
                                                <th>Article</th>
                                                <th>Weight</th>
                                                <th>Freight By</th>
                                                <th>Total Freight</th>
                                                <th>Invoice No</th>
                                                <th>Invoice Date</th>
                                                <th>Truck No</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <p style={{ textAlign: 'center' }}> No Records Available</p>
                                        </tbody>
                                    </table>
                                </div>





                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label htmlFor="taxType" style={{ fontSize: '10px', marginBottom: 0 }}>Article:</label>
                                                <input
                                                    style={{ fontSize: '10px', marginTop: 0, boxShadow: 'none' }}
                                                    type="text"
                                                    className="form-control"
                                                    name="inv_no"
                                                    value={formData.inv_no}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Article"
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label htmlFor="taxType" style={{ fontSize: '10px', marginBottom: 0 }}>Weight:</label>
                                                <input
                                                    style={{ fontSize: '10px', marginTop: 0, boxShadow: 'none' }}
                                                    type="text"
                                                    className="form-control"
                                                    name="actual_weight"
                                                    value={formData.actual_weight}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Weight"
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label htmlFor="taxType" style={{ fontSize: '10px', marginBottom: 0 }}>Rate:</label>
                                                <input
                                                    style={{ fontSize: '10px', marginTop: 0, boxShadow: 'none' }}
                                                    type="text"
                                                    className="form-control"
                                                    name="value_rs"
                                                    value={formData.value_rs}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Rate"
                                                />
                                            </div>

                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label style={{ fontSize: '10px', marginBottom: 0 }} htmlFor="account">Delivery Type</label>
                                                <select
                                                    className="form-select form-control"
                                                    name="delivery"
                                                    value={formData.delivery}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="">Select Delivery Type</option>
                                                    <option value="Door">Door</option>
                                                    <option value="Godown">Godown</option>
                                                    <option value="Office">Office</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label style={{ fontSize: '10px', marginBottom: 0 }} htmlFor="account">Freight On</label>
                                                <select
                                                    className="form-select form-control"
                                                    name="delivery"
                                                    value={formData.delivery}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="">Select Freight On</option>
                                                    <option value="Door11">Door</option>
                                                    <option value="Godo11wn">Godown</option>
                                                    <option value="Offi11ce">Office</option>
                                                </select>
                                            </div>

                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label htmlFor="taxType" style={{ fontSize: '10px', marginBottom: 0 }}>Amount:</label>
                                                <input
                                                    style={{ fontSize: '10px', marginTop: 0, boxShadow: 'none' }}
                                                    type="text"
                                                    className="form-control"
                                                    name="value_rs"
                                                    value={formData.value_rs}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Rate"
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label style={{ fontSize: '10px', marginBottom: 0 }} htmlFor="account">Labour</label>
                                                <select
                                                    className="form-select form-control"
                                                    name="delivery"
                                                    value={formData.delivery}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="">Select Labour</option>
                                                    <option value="Doowr11">Door</option>
                                                    <option value="Godowwww11wn">Godown</option>
                                                    <option value="Offiw11ce">Office</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label style={{ fontSize: '10px', marginBottom: 0 }} htmlFor="account">Delivery At</label>
                                                <select
                                                    className="form-select form-control"
                                                    name="delivery"
                                                    value={formData.delivery}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="">Select Delivery At</option>
                                                    <option value="Doo2r11">Door</option>
                                                    <option value="God2o11wn">Godown</option>
                                                    <option value="Offi211ce">Office</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-2">

                                    </div>

                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label htmlFor="taxType" style={{ fontSize: '10px', marginBottom: 0, marginRight: '23px' }}>Total Freight:</label>
                                                <input
                                                    style={{ fontSize: '10px', marginTop: 0, boxShadow: 'none' }}
                                                    type="text"
                                                    className="form-control"
                                                    name="freight"
                                                    value={formData.freight}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Total Freight "
                                                />
                                            </div>

                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label htmlFor="taxType" style={{ fontSize: '10px', marginBottom: 0, marginRight: '23px' }}>Himali:</label>
                                                <input
                                                    style={{ fontSize: '10px', marginTop: 0, boxShadow: 'none' }}
                                                    type="text"
                                                    className="form-control"
                                                    name="himali"
                                                    value={formData.himali}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Himali "
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label htmlFor="taxType" style={{ fontSize: '10px', marginBottom: 0 }}>Service Charge:</label>
                                                <input
                                                    style={{ fontSize: '10px', marginTop: 0, boxShadow: 'none' }}
                                                    type="text"
                                                    className="form-control"
                                                    name="detention"
                                                    value={formData.detention}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Charge"
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label htmlFor="taxType" style={{ fontSize: '10px', marginBottom: 0 }}>Discount(kasar):</label>
                                                <input
                                                    style={{ fontSize: '10px', marginTop: 0, boxShadow: 'none' }}
                                                    type="text"
                                                    className="form-control"
                                                    name="door_collection"
                                                    value={formData.door_collection}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Discount(kasar)"
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3 d-flex align-items-center">
                                                <label htmlFor="taxType" style={{ fontSize: '10px', marginBottom: 0 }}> Delivery Freight:</label>
                                                <input
                                                    style={{ fontSize: '10px', marginTop: 0, boxShadow: 'none' }}
                                                    type="text"
                                                    className="form-control"
                                                    name="door_delivery"
                                                    value={formData.door_delivery}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Delivery Freight"
                                                />
                                            </div>


                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-12">
                                    <label htmlFor="taxType">Note</label>
                                    <textarea name="narration" id="" cols={186} value={formData.narration}
                                        onChange={handleInputChange}></textarea>
                                </div>



                                <div className="col-lg-12 text-center">
                                    <button type="button" className="btn btn-primary float-end" onClick={handleSubmitData}>{params?.id ? "Update" : "Save"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default DeliveryOfLrAdd