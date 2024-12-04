import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { getSettingMoneyAndNumberFormat, updateSettingMoneyAndNumberFormat } from '../../../api/login/Login';

function MoneyAddNumberFormat() {

    const [inputVal, setInputval] = useState({
        Decimals: '', qty_decimals: '', SouthAsianCountriesCurrencyFormat: null, DecimalsSeparator: '', ThousandsSeparator: "", DisplayCurrencySymbol: ''
    });
    const fetchSiteConfig = async () => {
        try {
            const response = await getSettingMoneyAndNumberFormat();
            if (!response.data) {
                return
            }
            setInputval(response.data); // Adjust based on API response structure
        } catch (error) {
            toast.error("Error fetching site configuration");
        }
    };

    useEffect(() => {
        // fetchSiteConfig();
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
            await updateSettingMoneyAndNumberFormat(inputVal); // Send updated data to API
            toast.success("Configuration updated successfully!");
        } catch (error) {
            toast.error("Error updating configuration");
        }
    };
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Money and Number Format</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Decimals *</label>
                        <select name="Decimals" id="rows_per_page" className="form-select" onChange={handleChange}>
                            <option value={'disable'} >Disable</option>
                            <option value={'1'} >1</option>
                            <option value={'2'} >2</option>
                            <option value={'3'} >3</option>
                            <option value={'4'} >4</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Quantity Decimals *</label>
                        <select name="qty_decimals" id="rows_per_page" className="form-select" onChange={handleChange}>
                            <option value={'disable'} >Disable</option>
                            <option value={'1'} >1</option>
                            <option value={'2'} >2</option>
                            <option value={'3'} >3</option>
                            <option value={'4'} >4</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">South Asian Countries Currency Format *</label>
                        <select name="SouthAsianCountriesCurrencyFormat" id="rows_per_page" className="form-select" onChange={handleChange}>
                            <option value={false} >Disable</option>
                            <option value={true} >Enable</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Decimals Separator *</label>
                        <select name="DecimalsSeparator" id="rows_per_page" className="form-select" onChange={handleChange}>
                            <option value={'dot'} >Dot(.)</option>
                            <option value={'comma'}>comma</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Thousands Separator *</label>
                        <select name="ThousandsSeparator" id="rows_per_page" className="form-select"onChange={handleChange} >
                            <option value={'dot'} >Dot(.)</option>
                            <option value={'comma'}>comma</option>
                            <option value={'space'}>Space</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Display Currency Symbol *</label>
                        <select name="DisplayCurrencySymbol" id="rows_per_page" className="form-select"onChange={handleChange} >
                            <option value={'disable'} >Disable</option>
                            <option value={'before'} >Before</option>
                            <option value={'after'} >After</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Currency Symbol</label>
                        <input type="text" name='CurrencySymbol' value={inputVal?.CurrencySymbol} className="form-control tip" onChange={handleChange} />
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button'  style={{ width: '60px', textAlign: 'end' }} onClick={handleSubmit}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default MoneyAddNumberFormat