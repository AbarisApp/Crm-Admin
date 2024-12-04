import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import GlobalTempletEmail from './globalTempEmail/GlobalTempletEmail'
import EmailNotificationSeting from './emailNotificationSettings/EmailNotificationSettings'
import SmsSetting from './smsSettings/SmsSettings'
import PushNotificationSettings from './pushNotificationSettings/PushNotificationSettings'
import NotificationTemplates from './notificationTemplates/NotificationTemplates'

function NotificationSettings() {
    return (
        <div className='m-4'>
            <Tabs defaultActiveKey="Global Template" id="uncontrolled-tab-example">
                <Tab eventKey="Global Template" title="GLOBAL TEMPLATE">
                    <GlobalTempletEmail />
                </Tab>

                <Tab eventKey="Email Settings" title="EMAIL SETTINGS">
                    <EmailNotificationSeting />
                </Tab>
                <Tab eventKey="Sms Settings" title="SMS SETTINGS">
                    <SmsSetting />
                </Tab>
                <Tab eventKey="Push Notification Settings" title="PUSH NOTIFICATION SETTINGS">
                    <PushNotificationSettings />
                </Tab>
                <Tab eventKey="NotificationTemplates" title="NOTIFICATION TEMPLATE">
                    <NotificationTemplates />
                </Tab>

            </Tabs>
        </div>
    )
}

export default NotificationSettings
