import React from 'react';
import { Space, Tabs } from 'antd';
import Quatation from './Quatation';

function DesignMain() {

    const data = [
        { name: '2D Layout / Adaptation', compo: <Quatation /> },
        { name: '3D Layout / Adaptation', compo: <Quatation/> },
        { name: 'Moodboard', compo: <Quatation/> },
        { name: 'GFC', compo: <Quatation/> },
        { name: 'Production Files', compo: <Quatation/> },
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
export default DesignMain