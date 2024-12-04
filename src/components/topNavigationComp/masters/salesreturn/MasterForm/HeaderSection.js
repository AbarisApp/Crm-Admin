
import React, { useState } from 'react';

function HeaderSection() {
    const [formValues, setFormValues] = useState({
        date: '',
        account: '',
        cdOption: '',
        billNo: ''
    });

    const accountOptions = [
        { value: 'account1', label: 'Account 1' },
        { value: 'account2', label: 'Account 2' },
        { value: 'account3', label: 'Account 3' }
    ];

    const cdOptions = [
        { value: 'C', label: 'Credit' },
        { value: 'D', label: 'Debit' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form values:', formValues);
        // Add form submission logic here
    };

    return (
        <div>
            <form className='row' onSubmit={handleSubmit}>
                <div className="form-group col-2">
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={formValues.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group col-2">
                    <label>Account:</label>
                    <select
                        name="account"
                        className="form-control"
                        value={formValues.account}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Account</option>
                        {accountOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group col-2">
                    <label>C/D:</label>
                    <select
                        name="cdOption"
                        className="form-control"
                        value={formValues.cdOption}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select C/D</option>
                        {cdOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group col-2">
                    <label>Bill No:</label>
                    <input
                        type="number"
                        name="billNo"
                        className="form-control"
                        value={formValues.billNo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group col-2">
                    <label>Invoice No</label>
                    <input
                        type="text"
                        className="form-control"
                        value='GJ2021/4'
                        disabled
                    />
                </div>

              
            </form>
        </div>
    );
}

export default HeaderSection;
