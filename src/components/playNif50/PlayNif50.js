
import React, { useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { Nifty50 } from './Nifty50/Nifty50';

export const PlayNif50 = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Dashboard/PlayNif 50",
        path_1: "",
    }
    const [activeTab, setActiveTab] = useState('tab1');

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 col-sm-6">
                        <div className='set-alter-tab'>
                            <div className="tabs">
                                <button
                                    className={activeTab === 'tab1' ? 'active ' : ''}
                                    onClick={() => handleTabChange('tab1')}
                                >
                                    Nifty50 League
                                </button>
                                <button
                                    className={activeTab === 'tab2' ? 'active' : ''}
                                    onClick={() => handleTabChange('tab2')}
                                >
                                    Niftybank League
                                </button>
                                <button
                                    className={activeTab === 'tab3' ? 'active' : ''}
                                    onClick={() => handleTabChange('tab3')}
                                >
                                    Stock League
                                </button>
                            </div>
                            {/* <div className="tab-content">
                                        {activeTab === 'tab1' && <div>This is the content for Tab 1.</div>}
                                        {activeTab === 'tab2' && <div>This is the content for Tab 2.</div>}
                                        {activeTab === 'tab3' && <div>This is the content for Tab 3.</div>}
                                    </div> */}
                        </div>

                    </div>
                    <div className="col-xl-12 col-sm-6">
                        <div className="tab-content-2">
                            <div className="tab-content">
                                {activeTab === 'tab1' && <div>
                                    <Nifty50 />

                                </div>}
                                {activeTab === 'tab2' && <div>This is the content for Tab 2.</div>}
                                {activeTab === 'tab3' && <div>This is the content for Tab 3.</div>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="col-xl-3 t-earn">
                        <div className="card">
                            <div className="card-header border-0 pb-0">
                            </div>

                        </div>
                    </div> */}


            </div>
        </>
    )
}
