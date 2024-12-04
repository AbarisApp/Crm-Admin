import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';

const dataStructure = {
    defaultSettings: {
        title: "Default Settings",
        fields: [
            { label: "Open In Add?", key: "openInAdd", type: "checkbox" },
            { label: "Book Code Required?", key: "bookCodeRequired", type: "checkbox" },
            { label: "Default Book Code:", key: "defaultBookCode", type: "text" },
            { label: "Default Diff Account:", key: "defaultDiffAccount", type: "select", options: ["DISCOUNT A/C", "OTHER A/C"] }
        ]
    },
    documentSettings: {
        title: "Document Settings",
        fields: [
            { label: "Document Number/Date Required?", key: "documentNumberDateRequired", type: "checkbox" },
            { label: "Remove Voucher No?", key: "removeVoucherNo", type: "checkbox" },
            { label: "Auto Add To Contra?", key: "autoAddToContra", type: "checkbox" }
        ]
    },
    diffAccounts: {
        title: "Difference Accounts",
        fields: [
            { label: "Diff Account1 Not Show?", key: "diffAccount1Visible", type: "checkbox", invert: true },
            { label: "Diff Account2 Not Show?", key: "diffAccount2Visible", type: "checkbox", invert: true }
        ]
    },
    termsAndConditions: {
        title: "Terms and Conditions",
        fields: [
            { label: "Terms & Conditions", key: "termsAndConditions", type: "textarea" }
        ]
    },
    printingOptions: {
        title: "Printing Options",
        fields: [
            { label: "Print After Save", key: "printAfterSave", type: "checkbox" },
            { label: "Show Popup", key: "showPopup", type: "checkbox" }
        ]
    },
    whatsappOptions: {
        title: "WhatsApp Options",
        fields: [
            { label: "WhatsApp Registration Template Id", key: "registrationTemplateId", type: "text" },
            { label: "Template", key: "template", type: "textarea" }
        ]
    },
    smsOptions: {
        title: "SMS Options",
        fields: [
            { label: "Send After Save", key: "sendAfterSave", type: "checkbox" },
            { label: "SMS Registration Template Id", key: "registrationTemplateId", type: "text" },
            { label: "Template", key: "template", type: "textarea" }
        ]
    },
    emailOptions: {
        title: "Email Options",
        fields: [
            { label: "Send After Save", key: "sendAfterSave", type: "checkbox" },
            { label: "File Name", key: "fileName", type: "text" },
            { label: "Subject", key: "subject", type: "text" }
        ]
    },
    notificationSettings: {
        title: "Notification Settings",
        fields: [
            { label: "Email/SMS/WhatsApp On", key: "onPlatform", type: "select", options: ["All", "Email", "SMS", "WhatsApp"] }
        ]
    }
};

function SetupVoucherDetails({ state, activeKey }) {
    const [formData, setFormData] = useState(
        Object.fromEntries(Object.keys(dataStructure).map(section => [section, Object.fromEntries(dataStructure[section].fields.map(field => [field.key, field.type === 'checkbox' ? false : '']))]))
    );

    const handleChange = (section, key, value) => {
        setFormData(prevData => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [key]: value
            }
        }));
    };

    const renderField = (section, field) => {
        const fieldValue = formData[section][field.key];
        switch (field.type) {
            case 'checkbox':
                return (
                    <div className="form-group mb-3 d-flex justify-content-between align-items-center">
                        <label>{field.label}</label>
                        <input
                            type="checkbox"
                            checked={field.invert ? !fieldValue : fieldValue}
                            onChange={(e) => handleChange(section, field.key, field.invert ? !e.target.checked : e.target.checked)}
                        />
                    </div>
                );
            case 'text':
                return (
                    <div className="form-group mb-3">
                        <label>{field.label}</label>
                        <input
                            type="text"
                            className="form-control border-bottom mt-1"
                            value={fieldValue}
                            onChange={(e) => handleChange(section, field.key, e.target.value)}
                        />
                    </div>
                );
            case 'textarea':
                return (
                    <div className="form-group mb-3">
                        <label>{field.label}</label>
                        <textarea
                            className="form-control border-bottom mt-1"
                            value={fieldValue}
                            onChange={(e) => handleChange(section, field.key, e.target.value)}
                        ></textarea>
                    </div>
                );
            case 'select':
                return (
                    <div className="form-group mb-3">
                        <label>{field.label}</label>
                        <select
                            className="form-select mt-1"
                            value={fieldValue}
                            onChange={(e) => handleChange(section, field.key, e.target.value)}
                        >
                            {field.options.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Tab.Content>
            {state?.data?.map((item) => (
                <Tab.Pane eventKey={item.name} key={item._id}>
                    <h4 className="bg-dark text-white p-2 rounded">
                        {item.name} Voucher Setup 
                    </h4>
                    <section>
                        <form className="m-4 p-4 border border-secondary rounded ">
                            <div className='' style={{ height: "65vh", overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}>
                                {Object.entries(dataStructure).map(([sectionKey, sectionData]) => (
                                    <fieldset className="mb-4" key={sectionKey}>
                                        <legend>{sectionData.title}</legend>
                                        {sectionData.fields.map(field => renderField(sectionKey, field))}
                                    </fieldset>
                                ))}
                            </div>
                            <div className='text-end'><button className='btn  btn-primary'>Save</button></div>
                        </form>
                    </section>
                </Tab.Pane>
            ))}
        </Tab.Content>
    );
}

export default SetupVoucherDetails;
