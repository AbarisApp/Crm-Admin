

import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'

export const MonitoringServicesAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Catalog",
        title_2: 'Add New Service',
        path_2: ""
    };
    return (
        <>
            <>
                <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0">AAdd New Service</h4>
                                    </div>
                                    <form className="tbl-captionn" >
                                        <div className="row">
                                            <div className="col-xl-6 mb-3">
                                                <div className={`form-group`}>
                                                    <label htmlFor="subject">Service Name </label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        value={''}
                                                        onChange={''}
                                                        className="form-control"
                                                        placeholder="Enter Service Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 mb-3">
                                                <button type="button" className="btn btn-success mt-4">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}
