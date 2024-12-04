import { Alert } from 'antd'
import React from 'react'
import CustomTextArea from '../../common/CustomTextArea'

function CronJobViewer() {
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption mb-3">
                                        <h4 className="heading mb-0"><b>Cron Job Viewer </b></h4>
                                        <button className='btn btn-success z-3 ' >Clear corn log!</button>
                                    </div>
                                    <Alert showIcon={false} message="Note: Intervals between cron jobs is 10 to 30 miniutes(Maxmium). Don't setup Cron Job more than 30 minutes!" banner />
                                    <b><small>Cron Job Path:</small></b>
                                    <div className='border border-primary px-4 py-1'>
                                        <p>/home/atozseotools/domains/demo.atozseotools.com/public_html/core/cron.php</p>
                                    </div>
                                    <b><small>Cron Execution Log:</small></b>
                                    <div className='mt-4'>
                                        <CustomTextArea
                                            type="text"
                                            value={""}
                                            id="smtpUsername"
                                            name="smtpUsername"
                                            placeholder="Cron log is empty!"
                                        />
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

export default CronJobViewer
