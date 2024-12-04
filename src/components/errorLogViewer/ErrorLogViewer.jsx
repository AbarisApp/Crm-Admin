import { Alert } from 'antd'
import React from 'react'
import CustomTextArea from '../../common/CustomTextArea'

function ErrorLogViewer() {
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption mb-3">
                                        <h4 className="heading mb-0"><b>Error Log Viewer </b></h4>
                                        <button className='btn btn-success z-3 ' >Clear corn log!</button>
                                    </div>
                                    <Alert showIcon={false} message="Note: Error Log includes warnings, fatal errors and notice messages." banner />


                                    <div className='my-5'>
                                        <b><small>Error log is empty!:</small></b>
                                        <div className='mt-4'>
                                            <CustomTextArea
                                                type="text"
                                                value={""}
                                                id="smtpUsername"
                                                name="smtpUsername"
                                                placeholder="Error log is empty!"
                                                style={{ height: "700px" }}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}

export default ErrorLogViewer

