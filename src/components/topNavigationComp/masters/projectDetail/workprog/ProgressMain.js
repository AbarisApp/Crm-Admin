import React, { useState } from 'react';
import { Space, Tabs } from 'antd';
import { ProgressUpdate } from './ProgressUpdate';
import ProgressReport from './ProgressReport';

function ProgressMain() {

    const data = [
        { name: 'Progress Update', compo: <ProgressUpdate /> },
        { name: 'Progress Report', compo: <ProgressReport /> },
    ]
   
    return <div>
        <div className="row">
          
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
export default ProgressMain