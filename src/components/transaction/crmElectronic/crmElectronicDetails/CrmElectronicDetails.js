
import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'

const CrmElectronicDetails = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Leave Application',
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Leave Application</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <div className='set-mat-details'>
                                                <h2>Leave Application :</h2>
                                                <h3>04-Feb-2023</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className='set-mat-details'>
                                                <h2>Customer Name :</h2>
                                                <h3>ABC</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className='set-mat-details'>
                                                <h2>Leave From :</h2>
                                                <h3>04-Feb-202304-Feb-2023</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className='set-mat-details'>
                                                <h2>Leave To :</h2>
                                                <h3>04-Feb-2023</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className='set-mat-details'>
                                                <h2>Care Taker :</h2>
                                                <h3>abc sir</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div className='set-mat-details'>
                                                <h2>Remark :</h2>
                                                <h3>Personal reasons</h3>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-3 mb-3">
                                            <div className='set-mat-details'>
                                                <h2>Reminder After(Days) :</h2>
                                                <h3>2</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <div className='set-mat-details'>
                                                <h2>Status :</h2>
                                                <h3>Pending</h3>
                                            </div>
                                        </div> */}
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrmElectronicDetails