import React from 'react';
import './SystemSeting.css';
import { Link } from 'react-router-dom';

const SystemSettings = () => {
    
    const settings = [
        {
            title: 'General Setting',
            description: 'Configure the fundamental information of the site.',
            icon: <i className="fa-solid fa-gear"></i>,
            link:"/general-settings"
        },
       /*  {
            title: 'Logo and Favicon',
            description: 'Upload your logo and favicon here.',
            icon: <i className="fa-solid fa-image"></i>,
            link:""
            }, */
        {
            title: 'System Configuration',
            description: 'Control all of the basic modules of the system.',
            icon: <i className="fa-solid fa-gears"></i>,
            link:"/system-configration"
            },
        {
            title: 'Notification Setting',
            description: 'Control and configure overall notification elements of the system.',
            icon: <i className="fa-solid fa-bell"></i>,
            link:"/notification/global/email"
            },
        {
            title: 'Payment Gateways',
            description: 'Configure automatic or manual payment gateways to accept payment from users.',
            icon: <i className="fa-solid fa-credit-card"></i>,
            link: '/gateway/automatic',
        },
        {
            title: 'SEO Configuration',
            description: 'Configure proper meta title, meta description, meta keywords, etc. to make the system SEO-friendly.',
            icon: <i className="fa-solid fa-globe"></i>,
            link:"/seo-configration"
            },
        {
            title: 'Manage Frontend',
            description: 'Control all of the frontend contents of the system.',
            icon: <i className="fa-brands fa-html5"></i>,
            link:"/manegment-pages"
            },
        {
            title: 'Manage Pages',
            description: 'Control dynamic and static pages of the system.',
            icon: <i className="fa-solid fa-list"></i>,
            link:"/solcial-login"
            },
        {
            title: 'Social Login Setting',
            description: 'Provide the required information here to use the login system by social media.',
            icon: <i className="fa-solid fa-user-circle"></i>,
            link:"/corn-jobs"
            },
        {
            title: 'Language',
            description: 'Configure your required languages and keywords to localize the system.',
            icon: <i className="fa-solid fa-language"></i>,
            link:"/language"
            },
        {
            title: 'Extensions',
            description: 'Manage extensions of the system here to extend some extra features of the system.',
            icon: <i className="fa-solid fa-puzzle-piece"></i>,
            link:"/extensions"
            },
        {
            title: 'Cron Job Setting',
            description: 'Configure cron job to automate some operations of the system.',
            icon: <i className="fa-solid fa-clock"></i>,
            link:"/corn-jobs"
            },
        {
            title: 'Policy Pages',
            description: 'Configure your policy and terms of the system here.',
            icon: <i className="fa-solid fa-shield-alt"></i>,
            link:"/policy"
            },
        {
            title: 'Maintenance Mode',
            description: 'Enable or disable the maintenance mode of the system when required.',
            icon: <i className="fa-solid fa-robot"></i>,
            link:"/maintenancemode"
            },
        {
            title: 'GDPR Cookie',
            description: 'Set GDPR Cookie policy if required. It will ask visitors of the system to accept if enabled.',
            icon: <i className="fa-solid fa-cookie-bite"></i>,
            link:"/gdpr-cookie"
            },
        {
            title: 'Custom CSS',
            description: 'Write custom CSS here to modify some styles of frontend of the system if you need to.',
            icon: <i className="fa-brands fa-css3-alt"></i>,
            link:"/custom-css"
            },
        {
            title: 'Sitemap XML',
            description: 'Insert the sitemap XML here to enhance SEO performance.',
            icon: <i className="fa-solid fa-sitemap"></i>,
            link:"/sitemap-XML"
            },
        {
            title: 'Robots txt',
            description: 'Insert the robots.txt content here to enhance bot web crawlers and instruct them on how to interact with certain areas of the website.',
            icon: <i className="fa-solid fa-robot"></i>,
            link:"/robots-txt"
            }
    ];
    

    return (
        <div className="system-settings-container">
            <h1 className="settings-title">System Settings</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="settings-grid">
                {settings.map((setting, index) => (
                    <Link to={setting?.link} key={index} className="settings-card text-decoration-none">
                        <span id="settings-icon">
                            {setting.icon}
                        </span>
                        <h2>{setting.title}</h2>
                        <p>{setting.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SystemSettings