import React from 'react';
import './Dashcss.css';
import { FaCalendarAlt, FaPhone, FaUsers, FaClipboardList, FaCheckCircle, FaBolt } from 'react-icons/fa';

const DashLead = () => {
    const cards = [
        { title: 'New Leads', count: 5, icon: <FaUsers /> },
        { title: 'WTD Site Visit Compl...', count: 0, icon: <FaCalendarAlt /> },
        { title: 'Booked', count: 0, icon: <FaCheckCircle /> },
        { title: 'Site Visit Completed', count: 0, icon: <FaCalendarAlt /> },
        { title: 'MTD Site Visit Compl...', count: 0, icon: <FaClipboardList /> },
        { title: 'Re-Engaged', count: 2, icon: <FaUsers /> },
        { title: 'Today Follow Up', count: 2, icon: <FaBolt /> },
        { title: 'Missed Follow Up', count: 20, icon: <FaPhone /> },
        { title: 'Today Leads', count: 2, icon: <FaUsers /> },
        { title: 'All Leads', count: 26, icon: <FaClipboardList /> },
    ];

    return (
        <div className="dashboard row">
            {cards.map((card, index) => (
                <div className='col-xl-4' key={index}>
                    <div className="cards">
                        <div className="card-title">{card.title}</div>
                        <div className='icon-contain'>
                            <div className="card-count">{card.count}</div>
                            <div className="card-icon">{card.icon}</div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashLead;
