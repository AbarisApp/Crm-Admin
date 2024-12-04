import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { getSettingEmail, updateSettingEmail } from '../../../api/login/Login';

function Email() {

    const [inputVal, setInputval] = useState({
        EmailProtocol: ""
    });
    const fetchSiteConfig = async () => {
        try {
            const response = await getSettingEmail();
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
            await updateSettingEmail(inputVal); // Send updated data to API
            toast.success("Configuration updated successfully!");
        } catch (error) {
            toast.error("Error updating configuration");
        }
    };
    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Email</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Email Protocol *</label>
                        <select name="EmailProtocol" id="rows_per_page" className="form-select" onChange={handleChange}>
                            <option value={'phpMailFUnction'} >PHP Mail Function</option>
                            <option value={'send mail'} >Send Mail</option>
                            <option value={'smtp'} >SMTP</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button'  style={{ width: '60px', textAlign: 'end' }}  onClick={handleSubmit}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default Email