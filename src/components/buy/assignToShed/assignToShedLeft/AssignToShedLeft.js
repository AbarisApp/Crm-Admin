import React from 'react'

function AssignToShedLeft() {
    return (
        <>
            <div className='col-xl-6'>
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption d-flex justify-content-between align-items-center" style={{ marginBottom: "10px" }}>
                        <h4 className="heading mb-0">Assign to the shed
                        </h4>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-primary'>Shed List</button>
                    <button className='btn btn-primary'>Information</button>
                </div>
                <div className='card'>
                    <div className='border-bottom py-2'>
                        <div className='d-flex justify-content-between'>
                            <span><b>Total Purchased (head)</b></span>
                            <span><b>89061</b></span>
                        </div>
                    </div>
                    <div className='border-bottom py-2'>
                        <div className='d-flex justify-content-between'>
                            <span><b>Reproduction Quantity (head)</b></span>
                            <span><b>3334995</b></span>
                        </div>
                    </div>
                    <div className='border-bottom py-2'>
                        <div className='d-flex justify-content-between'>
                            <span><b>Total allocated to shed (head)</b></span>
                            <span><b>3409364</b></span>
                        </div>
                    </div>
                    <div className='border-bottom py-2'>
                        <div className='d-flex justify-content-between'>
                            <span><b>Out of the shed (head)</b></span>
                            <span><b>14692</b></span>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div style={{ overflowX: 'auto' }}>
                        <table
                            id="flow-category-tblwrapper"
                            className="table dataTable no-footer"
                            role="grid"
                            aria-describedby="flow-category-tblwrapper_info"
                        >
                            <thead>
                                <tr role="row">
                                    <th style={{ width: "50px" }}>Name of the cattle</th>
                                    <th style={{ width: "300px" }}>Livestock variant</th>
                                    <th style={{ width: "300px" }}>Amount</th>
                                    <th style={{ width: "300px" }}>Total allocated to shed</th>
                                    <th style={{ width: "300px" }}>Available</th>
                                    <th style={{ width: "300px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Table data goes here */}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AssignToShedLeft
