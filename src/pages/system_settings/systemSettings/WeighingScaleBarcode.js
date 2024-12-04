import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { getSettingWeighingScale, updateSettingWeighingScale } from '../../../api/login/Login';

function WeighingScaleBarcode() {

    const [inputVal, setInputval] = useState({
        Barcodecontains: '', Barcodetotalcharacters: '', FlagCharacters: "", ItemCodeStartingPosition: '', NumberofcharactersinItemCode: "", NumberofcharactersinWeight: "", WeightStartingPosition: "", Weightdivideby: ''
    });
    const fetchSiteConfig = async () => {
        try {
            const response = await getSettingWeighingScale();
            if (!response.data) {
                return
            }
            setInputval(response.data); 
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
            await updateSettingWeighingScale(inputVal); // Send updated data to API
            toast.success("Configuration updated successfully!");
        } catch (error) {
            toast.error("Error updating configuration");
        }
    };
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Weighing Scale Barcode</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Barcode contains</label>
                        <select name="Barcodecontains" id="rows_per_page" className="form-select" onChange={handleChange}>
                            <option value={'Weight/Quantity'} >Weight/Quantity</option>
                            <option value={'price'} >Price</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Barcode total characters</label>
                        <input onChange={handleChange} type="text" name='Barcodetotalcharacters' value={inputVal?.Barcodetotalcharacters} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Flag Characters</label>
                        <input onChange={handleChange} type="text" name='FlagCharacters' value={inputVal?.FlagCharacters} className="form-control tip"  />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="site_name">Item Code Starting Position</label>
                        <input onChange={handleChange} type="text" name='ItemCodeStartingPosition' value={inputVal?.ItemCodeStartingPosition} className="form-control tip"  />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="site_name">Number of characters in Item Code</label>
                        <input onChange={handleChange} type="text" name='NumberofcharactersinItemCode' value={inputVal?.NumberofcharactersinItemCode} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Weight Starting Position</label>
                        <input onChange={handleChange} type="text" name='WeightStartingPosition' value={inputVal?.WeightStartingPosition} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Number of characters in Weight</label>
                        <input onChange={handleChange} type="text" name='NumberofcharactersinWeight' value={inputVal?.NumberofcharactersinWeight} className="form-control tip"  />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Weight divide by</label>
                        <input onChange={handleChange} type="text" name='Weightdivideby' value={inputVal?.Weightdivideby} className="form-control tip"  />
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button'  style={{ width: '60px', textAlign: 'end' }}  onClick={handleSubmit}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default WeighingScaleBarcode