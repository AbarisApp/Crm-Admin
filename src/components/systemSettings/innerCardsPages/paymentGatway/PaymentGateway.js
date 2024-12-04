import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AutomaticPaymentgateways from './automaticPaymentgateways/AutomaticPaymentgateways';
import UpdateGateway from './automaticPaymentgateways/updateGateway/UpdateGateway';
import ManualGateways from './manuallyPaymentGateWay/ManuallyPaymentGateWay';
import ManuallyGatewayForm from './manuallyPaymentGateWay/ManuallyGatewayForm';

function PaymentGateway() {
    const [showUpdateGateway, setShowUpdateGateway] = useState(false);
    const [showUpdateMGateway, setShowUpdateMGateway] = useState(false);

    return (
        <div className='m-4'>
            <Tabs defaultActiveKey="Automatic Gateway" id="uncontrolled-tab-example">
                {/* Automatic Gateway Tab */}
                <Tab eventKey="Automatic Gateway" title="Automatic Gateway">
                    {!showUpdateGateway ? (
                        <AutomaticPaymentgateways setShowUpdateGateway={setShowUpdateGateway} showUpdateGateway={showUpdateGateway} />
                    ) : (
                        <UpdateGateway showUpdateGateway={showUpdateGateway} setShowUpdateGateway={setShowUpdateGateway} />
                    )}
                </Tab>

                {/* Manual Gateway Tab */}
                <Tab eventKey="Manual Gateway" title="Manual Gateway">
                    {!showUpdateMGateway ? (
                        <ManualGateways setShowUpdateMGateway={setShowUpdateMGateway} showUpdateMGateway={showUpdateMGateway} />
                    ) : (
                        <ManuallyGatewayForm  setShowUpdateMGateway={setShowUpdateMGateway} showUpdateMGateway={showUpdateMGateway} />
                    )}
                </Tab>
            </Tabs>
        </div>
    );
}

export default PaymentGateway;
