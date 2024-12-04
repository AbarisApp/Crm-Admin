import React from 'react';
import { Space, Tabs } from 'antd';
import Quatation from './Quatation';
import SalseOrder from './SalseOrder';
import SaleInvoice from './SaleInvoice';
import PaymentForClient from './PaymentForClient';

function Snagmain() {

    const data = [
        { name: 'All', compo: <Quatation /> },
        { name: 'Open Resolved', compo: <SalseOrder/> },
        { name: 'Open Unresolved', compo: <SaleInvoice/> },
        { name: 'Closed', compo: <PaymentForClient/> },
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
export default Snagmain