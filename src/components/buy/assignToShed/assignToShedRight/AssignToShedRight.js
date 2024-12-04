import React from 'react'

function AssignToShedRight() {
    const data = [
        {
            id: "12w1",
            assighDate: "09-30-2023	",
            cattle: "Chicken",
            variant: "White chicken	",
            assignAmount: "10",
            shed: "2200: Chicken Shed 1	",
            batch: "3: CS1-3",
        }
    ]
    return (
        <>
            <div className='col-xl-6'>
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption d-flex justify-content-between align-items-center" style={{ marginBottom: "10px" }}>
                        <h4 className="heading mb-0">Assigned lists
                        </h4>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-primary'>Information</button>
                </div>
                <div className="table-responsive active-projects style-1">
                    <div className="d-flex justify-content-between">
                        <div>
                            <select className="form-select">
                                <option value="10">10 records per page</option>
                                <option value="20">20 records per page</option>
                                <option value="30">30 records per page</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body p-0">
                            <div style={{ overflowX: 'auto' }}>
                                <table
                                    id="flow-category-tblwrapper"
                                    className="table dataTable no-footer rounded-0"
                                    role="grid"
                                    aria-describedby="flow-category-tblwrapper_info"
                                >
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: "50px" }}>SL. No.</th>
                                            <th style={{ width: "300px" }}> Assign Date</th>
                                            <th style={{ width: "300px" }}>cattle</th>
                                            <th style={{ width: "300px" }}>variant</th>
                                            <th style={{ width: "300px" }}>Assign Amount</th>
                                            <th style={{ width: "300px" }}>Shed </th>
                                            <th style={{ width: "300px" }}>Batch </th>
                                            <th style={{ width: "300px" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, i) => (
                                            <tr role="row" className="odd" key={item._id}>
                                                <td>{i + 1}</td>
                                                <td>{item.assighDate}</td>
                                                <td>{item.cattle}</td>
                                                <td>{item.assignAmount}</td>
                                                <td>{item.assignAmount}</td>
                                                <td>{item.shed}</td>
                                                <td>{item.batch}</td>
                                                <td>
                                                    <div className="d-flex">
                                                        <button className="btn btn-info btn-sm">
                                                            <span>
                                                                <i class="fas fa-trash"></i>
                                                            </span>
                                                            &nbsp;
                                                            <span>Delete</span>
                                                        </button>
                                                        <button className="btn btn-info btn-sm">
                                                            <span>
                                                                <i class="fas fa-pen-fancy"></i>
                                                            </span>
                                                            &nbsp;
                                                            <span>Edit</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div
                                    className="dataTables_info"
                                    id="flow-category-tblwrapper_info"
                                    role="status"
                                    aria-live="polite"
                                >
                                    {/* Total {totalCount} entries */}
                                </div>
                                <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="flow-category-tblwrapper_paginate"
                                >
                                    {/*  <Pagination
                                        current={page + 1}
                                        onChange={onChangeVal}
                                        total={totalCount}
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssignToShedRight
