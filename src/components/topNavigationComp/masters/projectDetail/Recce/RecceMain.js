import React, { useState } from 'react';
import { Space, Tabs } from 'antd';
import { BeddRoom } from './BeddRoom';
import { Door } from './Door';
import { Walls } from './Walls';
import { Wendow } from './Wendow';
import AddRecce from './AddRecce';

function RecceMain() {

    const data = [
        { name: 'Bedroom', compo: <BeddRoom /> },
        { name: 'Door', compo: <Door /> },
        { name: 'Walls', compo: <Walls /> },
        { name: 'Window', compo: <Wendow /> },
    ]
    const [modalShow, setModalShow] = useState(false);
    return <div>
        <div className="row">
            <AddRecce
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="col-12 d-flex">
                <button type="button" class="btn btn-success" onClick={() => setModalShow(true)}>+ Create Recce</button>
                <div style={{ display: "flex" }}>
                    <h6 style={{ display: "flex", alignItems: "center", margin: "0 10px" }}>Select Recce : </h6>
                    <select className="form-select" style={{ width: "200px" }} aria-label="Default select example">
                        <option selected="">Open this select menu</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>
                    <h6 style={{ display: "flex", alignItems: "center", margin: "0 10px" }}>Status  : </h6>
                    <div style={{ display: "flex", alignItems: "center", color: "red" }}> Not Started</div>

                </div>
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
export default RecceMain