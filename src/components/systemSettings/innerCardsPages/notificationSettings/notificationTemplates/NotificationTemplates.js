import React from 'react'
    function NotificationTemplates() {
        const emailNotifications = [
            {
                name: "Welcome Email",
                subject: "Welcome to Our Service",
                key: "welcome_email"
            },
            {
                name: "Password Reset",
                subject: "Reset Your Password",
                key: "password_reset"
            },
            {
                name: "Newsletter",
                subject: "Monthly Newsletter Update",
                key: "newsletter"
            },
            {
                name: "Order Confirmation",
                subject: "Your Order Has Been Confirmed",
                key: "order_confirmation"
            },
            {
                name: "Account Verification",
                subject: "Verify Your Account",
                key: "account_verification"
            }
        ];
    
        return (
            <div>
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ backgroundColor: '#5B29F6', color: 'white' }}>Name </th>
                                        <th style={{ backgroundColor: '#5B29F6', color: 'white' }}>Subject</th>
                                        <th style={{ backgroundColor: '#5B29F6', color: 'white' }}>Edit Template</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {emailNotifications.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                {item?.name}
                                            </td>
                                            <td>
                                                {item?.subject}
                                            </td>
                                            <td>
                                                <button className='btn btn-primary btn-sm'>Email</button>
                                                <button className='btn btn-success btn-sm'>SMS</button>
                                                <button className='btn btn-warning btn-sm'>PUSH</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    

export default NotificationTemplates
