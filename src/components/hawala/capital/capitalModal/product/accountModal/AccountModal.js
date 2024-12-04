import React, { useState } from 'react'
import AccountHistory from './accountHistory/AccountHistory'
import AccountSumry from './accountSummary/AccountSumry'
import { Button } from 'react-bootstrap'

function AccountModal() {
    const [showHis, setShowHis] = useState(true)
    return (
        <section>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <div className="d-flex align-item-center"><h4 className="heading mb-0">ACCOUNT</h4>
                                    </div>
                                    <div ><Button type="button" className="btn bg-warning py-0" onClick={(() => { setShowHis(true) })} >
                                        Ledger
                                    </Button>
                                        <Button type="button" className="btn bg-warning py-0" onClick={(() => { setShowHis(false) })}>
                                            SUMMARY
                                        </Button></div>
                                </div>
                                {showHis ? <AccountHistory /> : <AccountSumry />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccountModal