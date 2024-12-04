import React from 'react'
import { ToastContainer } from 'react-toastify'

function AddPurchaseReturnWithoutGstComp() {
    return (
        <>
            <ToastContainer />
            <section className="ListDistributer mx-4 expdf ">

                <div className="row m-4">
                    <div className="col-xl-12" style={{ padding: "0" }}>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0"><b>Add New Purchase Return without GST</b><small style={{ textTransform: 'capitalize', marginLeft: '5px' }}> Control panel</small></h4>
                                    </div>
                                    <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Purchase Return No</label>
                                            <input
                                                disabled
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Purchase Return No'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Entry Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder='Enter Entry Date'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Purchase Return Account</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected>Select Return Account</option>
                                                <option value={'Sales Return'}>Sales Return</option>
                                                <option value={'Trade Discount Paid GST'}>Trade Discount Paid GST</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Supplier Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Supplier Name'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">DC Entry No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter DC Entry No'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Supplier CN No</label>
                                            <input
                                                disabled
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Supplier CN No'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Supplier CN Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder='Enter Supplier CN Date'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Purchase Invoice No.</label>
                                            <input
                                                disabled
                                                type="date"
                                                className="form-control"
                                                placeholder='Enter Purchase Invoice No.'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Purchase Invoice Date</label>
                                            <input

                                                type="date"
                                                className="form-control"
                                                placeholder='Enter Purchase Invoice Date'
                                                id="fromDate"
                                            />
                                        </div>



                                        <div className="row mb-4">
                                            <h3 className='mt-5 mb-4'>Product Detail</h3>
                                            <div className="table-responsive active-projects style-1">
                                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                        <thead>
                                                            <tr role="row">
                                                                <th style={{ width: '50px' }}>Sr.No</th>
                                                                <th style={{ width: '150px' }}>Product Name</th>
                                                                <th style={{ width: '150px' }}>Quantity</th>
                                                                <th style={{ width: '150px' }}>Basic Rate</th>
                                                                <th style={{ width: '150px' }}>Amount</th>
                                                                <th style={{ width: '150px' }}></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr role="row" className="odd">
                                                                <td className="sorting_1" style={{ width: '50px' }}>1</td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder=''
                                                                            id=""
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder=''
                                                                            id=""
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder=''
                                                                            id=""
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder=''
                                                                            id=""
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td style={{ width: '150px' }}>
                                                                    <button className='btn btn-primary'>Add</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <h3 className='mt-5 mb-4'>Other Charges</h3>
                                            <div className="table-responsive active-projects style-1">
                                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                        <thead>
                                                            <tr role="row">
                                                                <th style={{ width: '50px' }}>Sr.No</th>
                                                                <th style={{ width: '150px' }}>Expenses Head</th>
                                                                <th style={{ width: '150px' }}>Desc</th>
                                                                <th style={{ width: '150px' }}>Amount</th>
                                                                <th style={{ width: '150px' }}>Basic Amount</th>
                                                                <th style={{ width: '150px' }}></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr role="row" className="odd">
                                                                <td className="sorting_1" style={{ width: '50px' }}>1</td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder=''
                                                                            id=""
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder=''
                                                                            id=""
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder=''
                                                                            id=""
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder=''
                                                                            id=""
                                                                        />
                                                                    </div>
                                                                </td>
                                                               



                                                                <td style={{ width: '150px' }}>
                                                                    <button className='btn btn-primary'>Add</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>




                                        <div className="row mb-4">
                                            <h3 className='mt-5 mb-4'>Final Detail</h3>
                                            <div className="form-group col-4 mt-2">
                                                <label htmlFor="">Basic Total</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter Basic Total'
                                                    id=""
                                                />
                                            </div>
                                           


                                            <div className="form-group col-4 mt-2">
                                                <label htmlFor="">Round Off</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter Round Off'
                                                    id=""
                                                />
                                            </div>

                                            <div className="form-group col-4 mt-2">
                                                <label htmlFor="">Final Total </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter Final Total '
                                                    id=""
                                                />
                                            </div>


                                        </div>
                                        <div className="row mb-4">
                                            <div className='col-lg-12'>
                                                <label htmlFor="fromDate">Remark / Narration</label>
                                                <textarea className="form-control" placeholder='Enter Remark / Narration' id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>

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
                </div >



            </section >
        </>
    )
}

export default AddPurchaseReturnWithoutGstComp