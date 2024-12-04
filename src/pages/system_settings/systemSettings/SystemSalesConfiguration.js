import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { getConfigSettingsales, updateConfigsales } from '../../../api/login/Login';
function SystemSalesConfiguration() {

    const [inputVal, setInputval] = useState({
        OverSelling: null, ReferenceFormat: '', DefaultCurrency: '', ProductLevelDiscount: null, ProductSerial: null, InvoiceView: '', ksaQrcode: null, CartItemAddition: '', ProductsCountfixbarcode: '', AutoDetectBarcode: null, OrderTax: '', referenceNo: '',ticketSequenceNo:""
    });


    const fetchSiteConfig = async () => {
        try {
            const response = await getConfigSettingsales();
            if (!response.data) {
                return
            }
            setInputval(response.data); // Adjust based on API response structure
        } catch (error) {
            toast.error("Error fetching site configuration");
        }
    };

    useEffect(() => {
        fetchSiteConfig();
        
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputval((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async () => {
        try {
            await updateConfigsales(inputVal); // Send updated data to API
            toast.success("Configuration updated successfully!");
        } catch (error) {
            toast.error("Error updating configuration");
        }
    };
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Sales</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Over Selling *</label>
                        <select name="OverSelling" id="rows_per_page" value={inputVal?.OverSelling} className="form-select" onChange={handleChange} >
                            {inputVal?.OverSelling ? <option value={true} >Yes</option> : <option value={false} >No</option>}
                            {!inputVal?.OverSelling ? <option value={true} >Yes</option> : <option value={false} >No</option>}
                            {/* <option value={true} >Yes</option>
                            <option value={false} >No</option> */}
                        </select>
                    </div>

                    <div className="col-lg-4">
                        <label htmlFor="site_name">Reference Format *</label>
                        <select name="ReferenceFormat" id="rows_per_page" className="form-select"  onChange={handleChange}>
                            <option value={"sequence"}>Sequence Number</option>
                            <option value={"random"} >Random Number</option>
                        </select>
                    </div>

                    <div className="col-lg-4">
                        <label htmlFor="site_name">Ticket Sequence No</label>
                        <input type="number" className="form-control tip" value={inputVal.ticketSequenceNo} name='ticketSequenceNo'   onChange={handleChange}/>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Order Reference No</label>
                        <input type="number" className="form-control tip" value={inputVal.referenceNo} name='referenceNo'  onChange={handleChange} />
                    </div>

                    <div className="col-lg-4">
                        <label htmlFor="site_name">Order Tax * </label>
                        <select name="OrderTax" id="rows_per_page" className="form-select" onChange={handleChange} >
                            <option value={'no'} >No Tax</option>
                            <option value={'gst'} >GST</option>
                            <option value={'disable'} >Disable</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">OProduct Level Discount *</label>
                        <select name="ProductLevelDiscount" id="rows_per_page" className="form-select"  onChange={handleChange}>
                            <option value={false}>Disable</option>
                            <option value={true} >Enable</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Product Serial *</label>
                        <select name="ProductSerial" id="rows_per_page" className="form-select" onChange={handleChange} >
                            <option value={false} >Disable</option>
                            <option value={true}>Enable</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Auto Detect Barcode *</label>
                        <select name="AutoDetectBarcode" id="rows_per_page" className="form-select" onChange={handleChange} >
                            <option value={false} >Disable</option>
                            <option value={true} >Enable</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Products count to fix barcode input *</label>
                        <input type="text" className="form-control tip" value={inputVal?.ProductsCountfixbarcode} name='ProductsCountfixbarcode'  onChange={handleChange} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Cart Item Addition Method *</label>
                        <select name="CartItemAddition" id="rows_per_page" className="form-select"  onChange={handleChange}>
                            <option value={'add new item'} >Add New Item to cart</option>
                            <option value={'add qty'} >Increase item quantity, if it already exists in cart</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Default Order Page Focus *</label>
                        <select name="rows_per_page" id="rows_per_page" className="form-select" onChange={handleChange} >
                            <option value={0} >Add item input</option>
                            <option value={1} >Quantity input for last order item</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">ksa qrcode *</label>
                        <select name="ksaQrcode" id="rows_per_page" className="form-select"  onChange={handleChange}>
                            <option value={false} >Disable</option>
                            <option value={true} >Enable</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Invoice View * </label>
                        <select name="InvoiceView" id="rows_per_page" className="form-select" onChange={handleChange} >
                            <option value={'tax invoice'} >Tax Invoice</option>
                            <option value={'standard'}>Standard</option>
                            <option value={'indian gst'} >Indian GST</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button' onClick={handleSubmit}  style={{ width: '60px', textAlign: 'end' }}>Save</button>

                <ToastContainer />
            </div>
        </>
    )
}

export default SystemSalesConfiguration