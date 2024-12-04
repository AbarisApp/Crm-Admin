
import { Alert } from 'antd'
import React from 'react'
import CustomTextArea from '../../common/CustomTextArea'

function PhpViewer() {
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption mb-3">
                                        <h4 className="heading mb-0"><b>NodeJs ReactJs Info Viewer</b></h4>
                                    </div>
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <button type="button" className="btn btn-primary btn-sm" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                    </div>
                                    <div className='card' style={{ height: "60vh" }}>

                                    </div>
                                    {/* <Alert showIcon={false} message="Note: Error Log includes warnings, fatal errors and notice messages." banner /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}

export default PhpViewer

