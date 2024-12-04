import React, { useState } from 'react';
import { Space, Tabs } from 'antd';
import { Door } from './Door';
import { Invoice } from './Invoice';
import AddCreditNoteModal from './AddCreditNoteModal';

function VenderInvoice() {

    const data = [
        { name: 'Invoice', compo: <Invoice /> },
        { name: 'Credit Note', compo: <Door /> },
    ]
    const [modalShow, setModalShow] = useState(false);
    return <div>
        <div className="row">
            <AddCreditNoteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="col-12 d-flex">
                <button type="button" class="btn btn-success" onClick={() => setModalShow(true)}>+ Create New Invoice</button>

            </div>

            <div className="row" style={{ margin: "10px 0" }}>
                {/* <div className="col-4 card">left</div>
                <div className="col-8 card">rigth</div> */}
                <Space
                    style={{
                        marginBottom: 24,
                    }}
                >

                </Space>
                <Tabs
                    tabPosition={'left'}
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
export default VenderInvoice