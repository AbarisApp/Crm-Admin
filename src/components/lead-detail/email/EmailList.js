import React from 'react';
import { FaStar, FaRegStar, FaPaperclip } from 'react-icons/fa'; // Using react-icons for star and paperclip icons

const EmailList = () => {
    const emails = [
        {
            starred: true,
            toEmail: 'John Doe',
            subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            createdTime: '13:14',
            hasAttachment: true,
        },
        {
            starred: false,
            toEmail: 'Envato Account',
            subject: 'Important account security update from Envato',
            createdTime: '8:42',
        },
        {
            starred: false,
            toEmail: 'Twitter',
            subject: 'HRMS Bootstrap Admin Template',
            createdTime: '30 Nov',
        },
        {
            starred: false,
            toEmail: 'Richard Parker',
            subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            createdTime: '18 Sep',
        },
        {
            starred: false,
            toEmail: 'John Smith',
            subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            createdTime: '21 Aug',
        },
        {
            starred: false,
            toEmail: 'me, Robert Smith (3)',
            subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            createdTime: '1 Aug',
        },
        {
            starred: false,
            toEmail: 'Codecanyon',
            subject: 'Welcome To Codecanyon',
            createdTime: 'Jul 13',
        },
        {
            starred: false,
            toEmail: 'Richard Miles',
            subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            createdTime: 'May 14',
            hasAttachment: true,
        },
        {
            starred: false,
            toEmail: 'John Smith',
            subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            createdTime: '11/11/16',
        },
        {
            starred: true,
            toEmail: 'Mike Litorus',
            subject: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
            createdTime: '10/31/16',
        },
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="p-3">
                        <div className="row">
                            <div className="col-12" style={{ overflowX: "auto" }}>
                                <div>
                                    <table className="table table-hover">
                                        <tbody>
                                            {emails.map((email, index) => (
                                                <tr key={index}>
                                                    <td style={{ width: '1%' }}>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td style={{ width: '1%' }}>
                                                        {email.starred ? <FaStar className="text-warning" /> : <FaRegStar />}
                                                    </td>
                                                    <td>{email.toEmail}</td>
                                                    <td>{email.subject}</td>
                                                    <td style={{ width: '1%' }}>
                                                        {email.hasAttachment && <FaPaperclip />}
                                                    </td>
                                                    <td>{email.createdTime}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailList;
