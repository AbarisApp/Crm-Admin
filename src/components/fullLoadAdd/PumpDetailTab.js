import React from 'react'

function PumpDetailTab() {
    return (
        <>
            <div className="col-lg-12" style={{ overflow: "auto" }}>
                <table border="1" cellPadding="10" >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Pump(Cr)</th>
                            <th>Party(Db)</th>
                            <th>Slip No</th>
                            <th>Bill No</th>
                            <th>Liter</th>
                            <th>Rate</th>
                            <th>Amount</th>
                            <th>Pump Account(Cr)</th>
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

export default PumpDetailTab