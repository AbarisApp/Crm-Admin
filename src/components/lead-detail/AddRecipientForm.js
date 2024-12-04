import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AddRecipientForm = () => {
    const [formValues, setFormValues] = useState({
        recipients: [{ name: '', email: '' }],
        subject: '',
        messageText: 'Your document is ready',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRecipientChange = (index, field, value) => {
        const updatedRecipients = formValues.recipients.map((recipient, i) =>
            i === index ? { ...recipient, [field]: value } : recipient
        );
        setFormValues((prev) => ({
            ...prev,
            recipients: updatedRecipients,
        }));
    };

    const handleAddRecipient = () => {
        setFormValues((prev) => ({
            ...prev,
            recipients: [...prev.recipients, { name: '', email: '' }],
        }));
    };

    const handleRemoveRecipient = (index) => {
        const updatedRecipients = formValues.recipients.filter((_, i) => i !== index);
        setFormValues((prev) => ({
            ...prev,
            recipients: updatedRecipients,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Recipients (Additional recipients)</label>
                {formValues.recipients.map((recipient, index) => (
                    <div key={index} className="d-flex mb-2 align-items-center">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={recipient.name}
                            onChange={(e) => handleRecipientChange(index, 'name', e.target.value)}
                            className="form-control me-2"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={recipient.email}
                            onChange={(e) => handleRecipientChange(index, 'email', e.target.value)}
                            className="form-control me-2"
                        />
                        <Button
                            type="button"
                            onClick={() => handleRemoveRecipient(index)}
                            className="btn btn-danger"
                        >
                            Remove
                        </Button>
                    </div>
                ))}
                <Button type="button" onClick={handleAddRecipient} className="btn btn-secondary">
                    Add Recipient
                </Button>
            </div>
            <div className="mb-3">
                <label>Message Subject</label>
                <input
                    type="text"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Subject"
                />
            </div>
            <div className="mb-3">
                <label>Message Text</label>
                <textarea
                    name="messageText"
                    value={formValues.messageText}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your document is ready"
                />
            </div>
            <Button type="submit" className="btn btn-primary">
                Send Now
            </Button>
        </form>
    );
};

export default AddRecipientForm;
