import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProductsData } from "../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";
import Loadar from "../../common/loader/Loader";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { Tabs, Tab } from 'react-bootstrap';
import PumpDetailTab from "./PumpDetailTab";
import ExpenseDetailTab from "./ExpenseDetailTab";
import JVDetailTab from "./JVDetailTab";
import SupplyDetailTab from "./SupplyDetailTab";
import PaymentDetailsTab from "./PaymentDetailsTab";
import RecieptDetailsTab from "./RecieptDetailsTab";

function FullLoadAdd() {

    const [load, setLoad] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Full Load',
        title_3: `Add Full Load`,
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
        Consignee_name: '',
        shortage: '',
        loading_weight: '',
        party_TAmount: '',
        Allowed: '',
        tds_per: '',
        tds_amt: '',
        unloading_weight: '',
        party_Commision: '',
        party_himali: '',
        party_Detention: '',
        Trans_rate: '',
        p_total: '',
        t_total: '',
        party_rate: '',
        qty: '',
        Party_name: '',
        desc: '',
        delivery_no: '',
        rate: '',
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
                                    <h4 className="heading mb-0 p-2">{params?.id ? "Update" : "Add"} Full Load</h4>
                                </div>

                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Date</label>
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


                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Vehicle No</label>
                                        <select
                                            className="form-select form-control"
                                            name="freightBy"
                                            value={formData.freightBy}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Vehicle No</option>
                                            <option value="1">Paid</option>
                                            <option value="1">To Pay</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Driver</label>
                                        <select
                                            className="form-select form-control"
                                            name="delivery"
                                            value={formData.delivery}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Driver</option>
                                            <option value="Door">Door</option>
                                            <option value="Godown">Godown</option>
                                            <option value="Office">Office</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Freight By</label>
                                        <select
                                            className="form-select form-control"
                                            name="delivery"
                                            value={formData.delivery}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Freight By</option>
                                            <option value="Do66or">Door</option>
                                            <option value="God6own">Godown</option>
                                            <option value="Off6ice">Office</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Transporter</label>
                                        <select
                                            className="form-select form-control"
                                            name="delivery"
                                            value={formData.delivery}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Transporter</option>
                                            <option value="Do3or">Door</option>
                                            <option value="Go33down">Godown</option>
                                            <option value="O3ffice">Office</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <h6>Loading Details</h6><hr></hr>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Consignor</label>
                                        <select
                                            className="form-select form-control"
                                            name="freightBy"
                                            value={formData.freightBy}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Consignor</option>
                                            <option value="13">Paid</option>
                                            <option value="13">To Pay</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Consignor Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Lr_no"
                                            value={formData.Lr_no}
                                            onChange={handleInputChange}
                                            placeholder="Enter Consignor Name"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Consignee</label>
                                        <select
                                            className="form-select form-control"
                                            name="delivery"
                                            value={formData.delivery}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Consignee</option>
                                            <option value="Do444or">Door</option>
                                            <option value="God42own">Godown</option>
                                            <option value="Off442ice">Office</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Consignee Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Consignee_name"
                                            value={formData.Consignee_name}
                                            onChange={handleInputChange}
                                            placeholder="Enter Consignee Name"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Party</label>
                                        <select
                                            className="form-select form-control"
                                            name="delivery"
                                            value={formData.delivery}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Party</option>
                                            <option value="Do66or">Door</option>
                                            <option value="God6own">Godown</option>
                                            <option value="Off6ice">Office</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Party Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Party_name"
                                            value={formData.Party_name}
                                            onChange={handleInputChange}
                                            placeholder="Enter Party Name"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">From City</label>
                                        <select
                                            className="form-select form-control"
                                            name="delivery"
                                            value={formData.delivery}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select From City</option>
                                            <option value="Do883or">Door</option>
                                            <option value="Go3883down">Godown</option>
                                            <option value="O3f88fice">Office</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">To City</label>
                                        <select
                                            className="form-select form-control"
                                            name="delivery"
                                            value={formData.delivery}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select To City</option>
                                            <option value="Do81183or">Door</option>
                                            <option value="Go381183down">Godown</option>
                                            <option value="O3f8118fice">Office</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Goods</label>
                                        <select
                                            className="form-select form-control"
                                            name="delivery"
                                            value={formData.delivery}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Goods</option>
                                            <option value="Do81234183or">Door</option>
                                            <option value="Go38341183down">Godown</option>
                                            <option value="O3f8133418fice">Office</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="desc"
                                            value={formData.desc}
                                            onChange={handleInputChange}
                                            placeholder="Enter Description"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Article(Qty)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="qty"
                                            value={formData.qty}
                                            onChange={handleInputChange}
                                            placeholder="Enter Article(Qty)"
                                        />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <h6>For Party</h6><hr></hr>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Loading Weight</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="loading_weight"
                                            value={formData.loading_weight}
                                            onChange={handleInputChange}
                                            placeholder="Enter Loading Weight"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">UnLoading Weight</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="unloading_weight"
                                            value={formData.unloading_weight}
                                            onChange={handleInputChange}
                                            placeholder="Enter UnLoading Weight"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Freight On</label>
                                        <select
                                            className="form-select form-control"
                                            name="freightBy"
                                            value={formData.freightBy}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Freight On</option>
                                            <option value="1355">Paid</option>
                                            <option value="1355">To Pay</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Party Rate</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="party_rate"
                                            value={formData.party_rate}
                                            onChange={handleInputChange}
                                            placeholder="Enter Party Rate"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Himali</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="party_himali"
                                            value={formData.party_himali}
                                            onChange={handleInputChange}
                                            placeholder="Enter Himali"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Detention</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="party_Detention"
                                            value={formData.party_Detention}
                                            onChange={handleInputChange}
                                            placeholder="Enter Detention"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">P Total</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="p_total"
                                            value={formData.p_total}
                                            onChange={handleInputChange}
                                            placeholder="Enter P Total"
                                        />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <h6>For Transporter</h6><hr></hr>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Loading Weight</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="loading_weight"
                                            value={formData.loading_weight}
                                            onChange={handleInputChange}
                                            placeholder="Enter Loading Weight"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">UnLoading Weight</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="unloading_weight"
                                            value={formData.unloading_weight}
                                            onChange={handleInputChange}
                                            placeholder="Enter UnLoading Weight"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="account">Freight On</label>
                                        <select
                                            className="form-select form-control"
                                            name="freightBy"
                                            value={formData.freightBy}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Freight On</option>
                                            <option value="1355">Paid</option>
                                            <option value="1355">To Pay</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Trans Rate</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Trans_rate"
                                            value={formData.Trans_rate}
                                            onChange={handleInputChange}
                                            placeholder="Enter Trans Rate"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Himali</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="party_himali"
                                            value={formData.party_himali}
                                            onChange={handleInputChange}
                                            placeholder="Enter Himali"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Detention</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="party_Detention"
                                            value={formData.party_Detention}
                                            onChange={handleInputChange}
                                            placeholder="Enter Detention"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">T Total</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="t_total"
                                            value={formData.t_total}
                                            onChange={handleInputChange}
                                            placeholder="Enter T Total"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Commision</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="party_Commision"
                                            value={formData.party_Commision}
                                            onChange={handleInputChange}
                                            placeholder="Enter Commision"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">TDS Per</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="tds_per"
                                            value={formData.tds_per}
                                            onChange={handleInputChange}
                                            placeholder="Enter TDS Per"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">TDS Amt</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="tds_amt"
                                            value={formData.tds_amt}
                                            onChange={handleInputChange}
                                            placeholder="Enter TDS Amt"
                                        />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <h6>Shortage Details</h6><hr></hr>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Shortage</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="shortage"
                                            value={formData.shortage}
                                            onChange={handleInputChange}
                                            placeholder="Enter Shortage"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Allowed</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Allowed "
                                            value={formData.Allowed}
                                            onChange={handleInputChange}
                                            placeholder="Enter Allowed"
                                        />
                                    </div>


                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Rate</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="rate"
                                            value={formData.rate}
                                            onChange={handleInputChange}
                                            placeholder="Enter Rate"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">TAmount</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="party_TAmount"
                                            value={formData.party_TAmount}
                                            onChange={handleInputChange}
                                            placeholder="Enter TAmount"
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <label htmlFor="taxType">Note</label>
                                        <textarea name="narration" id="" cols={186} value={formData.narration}
                                            onChange={handleInputChange}></textarea>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4">
                                        <p><b>Net Party:</b></p>
                                    </div>
                                    <div className="col-lg-4">
                                        <p><b>Net Trans:</b></p>
                                    </div>
                                    <div className="col-lg-4">
                                        <p><b>Difference:</b></p>
                                    </div>
                                </div>


                                <div className="row mt-2 mb-2">
                                    <div className="col-xl-12">
                                        <Tabs defaultActiveKey="Pump Detail" id="uncontrolled-tab-example" className='pt-3 dzm-tabs'>
                                            <Tab eventKey="Pump Detail" title="Pump Detail" className='p-1'>
                                                <PumpDetailTab />
                                            </Tab>
                                            <Tab eventKey="Expense Detail" title="Expense Detail" className='p-1'>
                                                <ExpenseDetailTab />
                                            </Tab>
                                            <Tab eventKey="JV Detail" title="JV Detail" className='p-1'>
                                                <JVDetailTab />
                                            </Tab>
                                            <Tab eventKey="Supply" title="Supply" className='p-1'>
                                                <SupplyDetailTab />
                                            </Tab>
                                            <Tab eventKey="Payment Detail" title="Payment Detail" className='p-1'>
                                                <PaymentDetailsTab />
                                            </Tab>
                                            <Tab eventKey="Reciept Detail" title="Reciept Detail" className='p-1'>
                                                <RecieptDetailsTab />
                                            </Tab>
                                        </Tabs>
                                    </div>
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

export default FullLoadAdd