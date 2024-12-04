import React, { useEffect, useState } from 'react'
import SetupVoucherAside from './setupVoucherAside/SetupVoucherAside'
import { voucherSetupAside } from '../../../api/login/Login'
import SetupVoucherDetails from './setupVoucherDetails/SetupVoucherDetails'
import { Tab } from 'react-bootstrap'

function SetupVoucher() {
    const [state, setState] = useState([]);
    const [activeKey, setActiveKey] = useState(state?.data?.[0]?.name || "Cash Payment");
    
    const getVoucherTypedatAside = async () => {
        const response = await voucherSetupAside();
        setState(response);
    };
    
    useEffect(() => {
        getVoucherTypedatAside();
    }, []);
    
    return (
        <section className="row m-4 position-sticky top-50">
            <div className="tbl-caption">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="card">
                                <SetupVoucherAside state={state} onSelect={setActiveKey} />
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card" >
                                <Tab.Container activeKey={activeKey}>
                                    <SetupVoucherDetails state={state} activeKey={activeKey} />
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SetupVoucher;
