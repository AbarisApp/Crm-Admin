import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { getSettingaward, updateSettingaward } from '../../../api/login/Login';

function AwardPoint() {

    const [inputVal, setInputval] = useState({
        CustomerAwardPoints: "", AwardPoints: "", StaffAwardPoints: ''
    });
    const fetchSiteConfig = async () => {
        try {
            const response = await getSettingaward();
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
            await updateSettingaward(inputVal); // Send updated data to API
            toast.success("Configuration updated successfully!");
        } catch (error) {
            toast.error("Error updating configuration");
        }
    };
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Award Points</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Customer Award Points</label>
                        <input onChange={handleChange} type="text" name='CustomerAwardPoints' value={inputVal?.CustomerAwardPoints} className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Award Points</label>
                        <input onChange={handleChange} type="text" name='AwardPoints' value={inputVal?.AwardPoints} className="form-control tip" />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Staff Award Points</label>
                        <input onChange={handleChange} type="text" name='StaffAwardPoints' value={inputVal?.StaffAwardPoints} className="form-control tip" />
                    </div>
                    {/* <div className="col-lg-4">
                        <label htmlFor="site_name">Award Points</label>
                        <input onChange={handleChange} type="text" name='' className="form-control tip" />
                    </div> */}
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button'  style={{ width: '60px', textAlign: 'end' }}  onClick={handleSubmit}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default AwardPoint