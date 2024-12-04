import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const SystemConfiguration = () => {
    // State to track enable/disable toggle status
    const [settings, setSettings] = useState({
        userRegistration: true,
        forceSSL: false,
        agreePolicy: true,
        forceSecurePassword: false,
        emailVerification: false,
    });

    // Array of setting options
    const settingOptions = [
        {
            key: 'userRegistration',
            title: 'User Registration',
            description: 'If you disable this module, no one can register on this system.',
        },
        {
            key: 'forceSSL',
            title: 'Force SSL',
            description: 'By enabling Force SSL (Secure Sockets Layer), the system will force visitors to access in secure mode.',
        },
        {
            key: 'agreePolicy',
            title: 'Agree Policy',
            description: 'Users must agree with your system’s policies during registration.',
        },
        {
            key: 'forceSecurePassword',
            title: 'Force Secure Password',
            description: 'Enforces users to set a secure password when signing up or changing the password.',
        },
        {
            key: 'emailVerification',
            title: 'Email Verification',
            description: 'Users need to verify their email to access the dashboard. A 6-digit verification code will be sent.',
            note: 'Note: Ensure the Email Notification module is enabled.',
        },
    ];

    // Toggle function
    const handleToggle = (settingKey) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [settingKey]: !prevSettings[settingKey],
        }));
    };

    return (
        <section className="container my-4">
            <div className="card shadow-lg border-0">
                <div className="card-body p-4">
                    {/* Header */}
                    <h3 className="mb-4 text-center">System Configuration</h3>

                    {/* Loop through settings */}
                    {settingOptions.map((setting) => (
                        <div
                            key={setting.key}
                            className="d-flex justify-content-between align-items-center border py-1 px-3 mb-3 rounded"
                        >
                            <div>
                                <h5 className="mb-1 font-weight-bold">{setting.title}</h5>
                                <p className="mb-0 text-muted">{setting.description}</p>
                                {setting.note && (
                                    <p className="text-muted mb-0">
                                        <small>{setting.note}</small>
                                    </p>
                                )}
                            </div>
                            <button
                                className={`btn btn-sm ${settings[setting.key] ? 'btn-success' : 'btn-danger'} px-4 d-flex align-items-center`}
                                onClick={() => handleToggle(setting.key)}
                            >
                                {settings[setting.key] ? (
                                    <FaCheckCircle className="me-2" />
                                ) : (
                                    <FaTimesCircle className="me-2" />
                                )}
                                {settings[setting.key] ? 'Enabled' : 'Disabled'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SystemConfiguration