import React from 'react'

function SupplyDetailTab() {
    return (
        <>
            <div className="col-lg-12" style={{ overflow: "auto" }}>
                <table border="1" cellPadding="10" >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Supply(Db)</th>
                            <th>Account(Cr)</th>
                            <th>Amount</th>
                            <th>Doc No</th>
                            <th>Doc Date</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <p style={{ textAlign: 'center' }}> No Records Available</p>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SupplyDetailTab