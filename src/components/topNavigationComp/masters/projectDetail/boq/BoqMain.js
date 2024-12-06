import React from 'react';
import { Space, Tabs } from 'antd';
import Quatation from './Quatation';
import SalseOrder from './SalseOrder';
import SaleInvoice from './SaleInvoice';
import PaymentForClient from './PaymentForClient';

function BoqMain() {

    const data = [
        { name: 'Quatation For Client', compo: <Quatation /> },
        { name: 'Client Orders', compo: <SalseOrder/> },
        { name: 'Client Invoices', compo: <SaleInvoice/> },
        { name: 'Payments From Client', compo: <PaymentForClient/> },
    ]
    return <div>
        <div className="row">
            

            <div className="row" style={{ margin: "10px 0" }}>
                <Space
                    style={{
                        marginBottom: 24,
                    }}
                >

                </Space>
                <Tabs
                    tabPosition={'top'}
                    items={data.map((str, i) => {
                        const id = String(i + 1);
                        return {
                            label: `${str.name}`,
                            key: id,
                            children: str.compo,
                        };
                    })}
                />
            </div>
        </div>
    </div>
}
export default BoqMain