import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const BasicInfoForm = () => {
    const [formValues, setFormValues] = useState({
        deal: '',
        documentType: '',
        owner: '',
        title: '',
        locale: '',
        signatureOption: 'no-signature',
        signers: [{ name: '', email: '' }],
        content: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSignerChange = (index, field, value) => {
        const updatedSigners = formValues.signers.map((signer, i) =>
            i === index ? { ...signer, [field]: value } : signer
        );
        setFormValues((prev) => ({
            ...prev,
            signers: updatedSigners,
        }));
    };

    const handleAddSigner = () => {
        setFormValues((prev) => ({
            ...prev,
            signers: [...prev.signers, { name: '', email: '' }],
        }));
    };

    const handleRemoveSigner = (index) => {
        const updatedSigners = formValues.signers.filter((_, i) => i !== index);
        setFormValues((prev) => ({
            ...prev,
            signers: updatedSigners,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit} className='row'>
            <div className="mb-3 col-12">
                <label>Choose Deal</label>
                <select
                    name="deal"
                    value={formValues.deal}
                    onChange={handleChange}
                    className="form-control"
                >
                    <option value="">Select</option>
                    <option value="deal1">Deal 1</option>
                    <option value="deal2">Deal 2</option>
                </select>
            </div>
            <div className="mb-3 col-6">
                <label>Document Type</label>
                <select
                    name="documentType"
                    value={formValues.documentType}
                    onChange={handleChange}
                    className="form-control"
                >
                    <option value="">Select</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                </select>
            </div>
            <div className="mb-3 col-6">
                <label>Staff</label>
                <select
                    name="owner"
                    value={formValues.owner}
                    onChange={handleChange}
                    className="form-control"
                >
                    <option value="">Select</option>
                    <option value="owner1">Owner 1</option>
                    <option value="owner2">Owner 2</option>
                </select>
            </div>
            <div className="mb-3 col-6">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={formValues.title}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3 col-6">
                <label>Locale</label>
                <select
                    name="locale"
                    value={formValues.locale}
                    onChange={handleChange}
                    className="form-control"
                >
                    <option value="">Select</option>
                    <option value="locale1">Locale 1</option>
                    <option value="locale2">Locale 2</option>
                </select>
            </div>

            <div className="mb-3">
                <label>Signature</label>
                <div>
                    <div className="form-check">
                        <input
                            type="radio"
                            name="signatureOption"
                            value="no-signature"
                            checked={formValues.signatureOption === 'no-signature'}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label className="form-check-label">
                            No Signature - This document does not require a signature before acceptance.
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            name="signatureOption"
                            value="use-signature"
                            checked={formValues.signatureOption === 'use-signature'}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label className="form-check-label">
                            Use e-signature - This document requires an e-signature before acceptance.
                        </label>
                    </div>
                </div>
            </div>

            {formValues.signatureOption === 'use-signature' && (
                <div className="mb-3">
                    <label>Document Signers</label>
                    {formValues.signers.map((signer, index) => (
                        <div key={index} className="d-flex mb-2 row">
                            <div className="col-4">
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    value={signer.name}
                                    onChange={(e) => handleSignerChange(index, 'name', e.target.value)}
                                    className="form-control me-2"
                                />
                            </div>
                            <div className="col-4">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={signer.email}
                                    onChange={(e) => handleSignerChange(index, 'email', e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-2">
                                <Button
                                    type="button"
                                    onClick={() => handleRemoveSigner(index)}
                                    className="btn btn-danger"
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                    <Button type="button" onClick={handleAddSigner} className="btn btn-secondary">
                        Add Signer
                    </Button>
                </div>
            )}

            <div className="mb-3">
                <label>Content</label>
                <textarea
                    name="content"
                    value={formValues.content}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Add Content"
                />
            </div>
            <div className="mb-3">
                <Button type="submit" className="btn btn-primary">
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default BasicInfoForm;
