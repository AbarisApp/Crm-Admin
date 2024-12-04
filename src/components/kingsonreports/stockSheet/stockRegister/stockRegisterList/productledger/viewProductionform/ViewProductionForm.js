import React from 'react'
import { ToastContainer } from 'react-toastify'

function ViewProductionForm() {
    const tableData = [
        {
            type: 'Product',
            stock: 'Select Stock',
            box: 'Select',
            item: 0,
            batchNo: 'LOCATION',
            locationLiveStock: 0,
            quantity2: 0,
            rate: 0,
            amount: 0,
        },
        {
            type: 'Raw Material',
            stock: 'In',
            box: 'Acid Sulry',
            item: 100,
            batchNo: 'LOCATION 1',
            locationLiveStock: "",
            quantity2: 25,
            rate: 15,
            amount: 375,
        },
        {
            type: 'Raw Material',
            stock: 'In',
            box: 'Acid Sulry',
            item: "",
            batchNo: 'LOCATION 1',
            locationLiveStock: "",
            quantity2: 25,
            rate: 15,
            amount: 375,
        },

    ];
    return (
        <>
            <ToastContainer />
            <section className="ListDistributer mx-4 expdf ">
                <div className="row m-4">
                    <div className="col-xl-12" style={{ padding: "0" }}>
                        <div className="card">
                            <div className="card-body p-0">

                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>View Production Entry
                                    </b><small style={{ textTransform: 'capitalize', marginLeft: '5px' }}> Control panel</small></h4>
                                </div>
                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>


                                    <div className="form-group col-3 mt-2">
                                        <label htmlFor="fromDate">Invoice Entry No</label>
                                        <input

                                            type="date"
                                            className="form-control"
                                            placeholder='Enter Invoice Entry No'
                                            id="fromDate"
                                        />
                                    </div>
                                    <div className="form-group col-3 mt-2">
                                        <label htmlFor="vocher">Vocher</label>
                                        <input

                                            type="number"
                                            className="form-control"
                                            placeholder='Enter Vocher No'
                                            id="vocher"
                                        />
                                    </div>
                                    <div className="form-group col-3 mt-2">
                                        <label htmlFor="process">Process</label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            placeholder='Process'
                                            id="process"
                                        />
                                    </div>
                                    <div className="form-group col-3 mt-2">
                                        <label htmlFor="quantity">Quantity</label>
                                        <input

                                            type="number"
                                            className="form-control"
                                            placeholder='Quantity'
                                            id="quantity"
                                        />
                                    </div>
                                    <div className='col-xl-12'>
                                        <div className="row mb-4">
                                            <div className="table-responsive active-projects style-1">
                                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                                    <table
                                                        id="empoloyees-tblwrapper"
                                                        className="table dataTable no-footer"
                                                        role="grid"
                                                        aria-describedby="empoloyees-tblwrapper_info"
                                                        style={{ width: '100%', tableLayout: 'fixed' }}
                                                    >
                                                        <thead>
                                                            <tr role="row">
                                                                <th style={{ width: '10%' }}>Type</th>
                                                                <th style={{ width: '15%' }}>Stock</th>
                                                                <th style={{ width: '15%' }}>Box</th>
                                                                <th style={{ width: '15%' }}>Item</th>
                                                                <th style={{ width: '15%' }}>Batch No</th>
                                                                <th style={{ width: '20%' }}>Location LiveStock</th>
                                                                <th style={{ width: '10%' }}>Quantity2</th>
                                                                <th style={{ width: '10%' }}>Rate</th>
                                                                <th style={{ width: '15%' }}>Amount</th>
                                                                <th style={{ width: '10%' }}>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {tableData.map((row, index) => (
                                                                <tr key={index} role="row" className={index % 2 === 0 ? 'even' : 'odd'}>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <select className="form-select form-control" defaultValue={row.type}>
                                                                                <option>Product</option>
                                                                                <option>Raw Material</option>
                                                                                <option>Semi Finished</option>
                                                                                <option>Wastage</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <select className="form-select form-control" defaultValue={row.stock}>
                                                                                <option>Select Stock</option>
                                                                                <option>In</option>
                                                                                <option>Out</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <select className="form-select form-control" defaultValue={row.box}>
                                                                                <option>Select</option>
                                                                                <option>Acid Sulry</option>
                                                                                <option>1001chine</option>
                                                                                <option>228</option>
                                                                                <option>Agri Product 100 Ml</option>
                                                                                <option>Astaf</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="number"
                                                                                className="form-control"
                                                                                placeholder='0.00'
                                                                                defaultValue={row.item}
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <select className="form-select form-control" defaultValue={row.batchNo}>
                                                                                <option>LOCATION</option>
                                                                                <option>LOCATION 1</option>
                                                                                <option>LOCATION 2(0)</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="number"
                                                                                className="form-control"
                                                                                placeholder='0.00'
                                                                                defaultValue={row.locationLiveStock}
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="number"
                                                                                className="form-control"
                                                                                placeholder='0.00'
                                                                                defaultValue={row.quantity2}
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="number"
                                                                                className="form-control"
                                                                                placeholder='0.00'
                                                                                defaultValue={row.rate}
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="number"
                                                                                className="form-control"
                                                                                placeholder='0.00'
                                                                                defaultValue={row.amount}
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button className="btn btn-sm btn-light mx-1" title="Delete">
                                                                            <i className="fa-solid fa-trash text-danger"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xl-4'>
                                            <div className='card'>
                                                <div className="table-responsive active-projects style-1">
                                                    <div className="tbl-caption">
                                                        <h4 className="heading mb-0">Quantity</h4>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder='Input'
                                                        value={""}
                                                    />
                                                </div>
                                                <div className="form-group">

                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder='Output'
                                                        value={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-4'>
                                            <div className='card'>
                                                <div className="table-responsive active-projects style-1">
                                                    <div className="tbl-caption">
                                                        <h4 className="heading mb-0">Amount</h4>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder='Input'
                                                        Output
                                                    />
                                                </div>
                                                <div className="form-group">

                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder='Output'
                                                        value={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-4'>
                                            <div className='card'>
                                                <div className="table-responsive active-projects style-1">
                                                    <div className="tbl-caption">
                                                        <h4 className="heading mb-0">Charges</h4>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder='Labour'
                                                        value={""}
                                                    />
                                                </div>
                                                <div className="form-group">

                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder='Other'
                                                        value={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-xl-12 mt-2">
                                        <label htmlFor="fromDate">Narration</label>
                                        <textarea className="form-control" placeholder='Narration' id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div className="form-group col-12 mt-3">
                                        <button type="button" className="btn btn-danger float-end">
                                            Close
                                        </button>
                                        <button type="button" className="btn btn-warning float-end">
                                            RESET
                                        </button>

                                        <button type="button" className="btn btn-primary float-end">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default ViewProductionForm