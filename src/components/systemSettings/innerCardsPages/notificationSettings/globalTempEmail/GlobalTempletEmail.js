import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import EmailSentTemp from './emailSentTemp/EmailSentTemp';
import SmsTemplet from './smsTemplet/SmsTemplet';
import PushNotificationTemplet from './pushNotificationTemplet/PushNotificatioTemplet';

function GlobalTempletEmail() {
    const [copiedStates, setCopiedStates] = useState([false, false, false, false]);
    const [hoveredStates, setHoveredStates] = useState([false, false, false, false]);

    const handleCopyClick = (textToCopy, index) => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            const newCopiedStates = [...copiedStates];
            newCopiedStates[index] = true;
            setCopiedStates(newCopiedStates);

            setTimeout(() => {
                const resetCopiedStates = [...copiedStates];
                resetCopiedStates[index] = false;
                setCopiedStates(resetCopiedStates);
            }, 2000);
        });
    };

    const handleMouseEnter = (index) => {
        const newHoveredStates = [...hoveredStates];
        newHoveredStates[index] = true;
        setHoveredStates(newHoveredStates);
    };

    const handleMouseLeave = (index) => {
        const resetHoveredStates = [...hoveredStates];
        resetHoveredStates[index] = false;
        setHoveredStates(resetHoveredStates);
    };

    const data = [
        { shortCode: '{{username}}', description: 'Full Name of User' },
        { shortCode: '{{site_name}}', description: 'Name of your site' },
        { shortCode: '{{site_currency}}', description: 'Currency of your site' },
        { shortCode: '{{currency_symbol}}', description: 'Symbol of currency' },
    ];

    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Automatic Gateways</h4>
                                </div>
                            </div>
                        </div>
                        {/* Move the table inside this tab */}
                        <div className="card">
                            <div className="table-responsive active-projects style-1">
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th style={{ backgroundColor: '#5B29F6', color: 'white' }}>Short Code</th>
                                                <th style={{ backgroundColor: '#5B29F6', color: 'white' }}>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <span
                                                            onMouseEnter={() => handleMouseEnter(index)}
                                                            onMouseLeave={() => handleMouseLeave(index)}
                                                        >
                                                            {hoveredStates[index] ? (
                                                                <button
                                                                    className="copy-button btn-sm"
                                                                    onClick={() => handleCopyClick(item.shortCode, index)}
                                                                >
                                                                    {copiedStates[index] ? 'Copied' : 'Copy'}
                                                                </button>
                                                            ) : (
                                                                item.shortCode
                                                            )}
                                                        </span>
                                                    </td>
                                                    <td>{item.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {copiedStates.some((state) => state) && (
                                        <div className="toaster">Copied to clipboard!</div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Tabs defaultActiveKey="Email Template" id="uncontrolled-tab-example">
                            <Tab eventKey="Email Template" title="Email Template">
                                <EmailSentTemp />
                            </Tab>
                            <Tab eventKey="SMS Template" title="SMS Template">
                                <SmsTemplet />
                            </Tab>
                            <Tab eventKey="Push Notification" title="Push Notification">
                                <PushNotificationTemplet />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GlobalTempletEmail;
