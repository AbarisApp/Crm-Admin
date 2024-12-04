import React from 'react';
import { Space, Tabs } from 'antd';
import FromVender from './FromVender';
import OrderVender from './OrderVender';
import VenderInvoice from './venderInvoice/VenderInvoice';
import OtherExpense from './otherexpense/OtherExpense';
import VenderScope from './VenderScope';
import OrderReport from './OrderReport';
import PaymentForVender from './PaymentForVender';

function OrderMain() {

    const data = [
        { name: 'Proposals From Vendor', compo: <FromVender/> },
        { name: 'Vendor Orders', compo: <OrderVender/> },
        { name: 'Vendor Invoices', compo: <VenderInvoice/> },
        { name: 'Other Expense', compo: <OtherExpense/> },
        { name: 'Vendor Wise Scope', compo: <VenderScope/> },
        { name: 'Vendor Wise Progress Report', compo: <OrderReport/> },
        { name: 'Payment From Vendor', compo: <PaymentForVender/> },
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
export default OrderMain