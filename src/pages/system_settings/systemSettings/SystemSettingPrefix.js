import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { getSystemSettingPrefix, updateSystemSettingPrefix } from '../../../api/login/Login';

function SystemSettingPrefix() {

    const [inputVal, setInputval] = useState({
        SalesReferencePrefix: '', ReturnSalePrefix: '', PaymentReferencePrefix: '', PurchasePaymentPrefix: '', DeliveryReferencePrefix: '', QuotationReferencePrefix: '', PurchaseReferencePrefix: '', ReturnPurchasePrefix: '', TransferReferencePrefix: '', ExpensePrefix: '', QuantityAdjustmentPrefix: '',ticketPrefix:''
    });
    const fetchSiteConfig = async () => {
        try {
            const response = await getSystemSettingPrefix();
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
        console.log(inputVal);

        try {
            await updateSystemSettingPrefix(inputVal); // Send updated data to API
            toast.success("Configuration updated successfully!");
        } catch (error) {
            toast.error("Error updating configuration");
        }
    };

    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Prefix</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Sales Reference Prefix</label>
                        <input onChange={handleChange} type="text" name='SalesReferencePrefix' value={inputVal?.SalesReferencePrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Ticket Prefix</label>
                        <input onChange={handleChange} type="text" name='ticketPrefix' value={inputVal?.ticketPrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Return Sale Prefix</label>
                        <input onChange={handleChange} type="text" name='ReturnSalePrefix' value={inputVal?.ReturnSalePrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Payment Reference Prefix</label>
                        <input onChange={handleChange} type="text" name='PaymentReferencePrefix' value={inputVal?.PaymentReferencePrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Purchase Payment Prefix</label>
                        <input onChange={handleChange} type="text" name='PurchasePaymentPrefix' value={inputVal?.PurchasePaymentPrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Delivery Reference Prefix</label>
                        <input onChange={handleChange} type="text" name='DeliveryReferencePrefix' value={inputVal?.DeliveryReferencePrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Quotation Reference Prefix</label>
                        <input onChange={handleChange} type="text" name='QuotationReferencePrefix' value={inputVal?.QuotationReferencePrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Purchase Reference Prefix</label>
                        <input onChange={handleChange} type="text" name='PurchaseReferencePrefix' value={inputVal?.PurchaseReferencePrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Return Purchase Prefix</label>
                        <input onChange={handleChange} type="text" name='ReturnPurchasePrefix' value={inputVal?.ReturnPurchasePrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Transfer Reference Prefix</label>
                        <input onChange={handleChange} type="text" name='TransferReferencePrefix' value={inputVal?.TransferReferencePrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Expense Prefix</label>
                        <input onChange={handleChange} type="text" name='ExpensePrefix' value={inputVal?.ExpensePrefix} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Quantity Adjustment Prefix</label>
                        <input onChange={handleChange} type="text" name='QuantityAdjustmentPrefix' value={inputVal?.QuantityAdjustmentPrefix} className="form-control tip"  />
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button' onClick={handleSubmit}  style={{ width: '60px', textAlign: 'end' }}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default SystemSettingPrefix