import React from 'react'
import { ToastContainer } from 'react-toastify';

function AddNewSaleInvoiceComp() {
    return (
        <>
            <ToastContainer />
            <section className="ListDistributer mx-4 expdf ">
                <div className="text-end">

                </div>

                <div className="row m-4">
                    <div className="col-xl-12" style={{ padding: "0" }}>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0"><b>Add New Sales Invoice</b><small style={{ textTransform: 'capitalize', marginLeft: '5px' }}> Control panel</small></h4>
                                    </div>
                                    <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>


                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Invoice Entry No</label>
                                            <input
                                                disabled
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Invoice Entry No'
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
                                            <label htmlFor="fromDate">Delivery From</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected>Select Delivery From</option>
                                                <option value={'AC Store'}>AC Store</option>
                                                <option value={'Kolhapur Main'}>Kolhapur Main</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Customer Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Customer Name'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Credit Days / Outstanding Amt.</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Credit Days / Outstanding Amt.'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Sales Order No</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected>Select Sales Order No</option>
                                                <option value={'ABC'}>ABC</option>
                                                <option value={'DEF'}>DEF</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Sales Person Name</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected>Select Sales Person Name</option>
                                                <option value={'ABCD'}>ABCD</option>
                                                <option value={'DEFG'}>DEFG</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Sales Account</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected>Select Sales Account</option>
                                                <option value={'ABC'}>ABC</option>
                                                <option value={'DEF'}>DEF</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Shipped To (Name)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Shipped To (Name)'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Shipped To Address</label>
                                            <textarea className="form-control" placeholder='Enter Shipped To Address' id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Delivery / Realse</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected>Select Delivery / Realse</option>
                                                <option value={'Delivery'}>Delivery</option>
                                                <option value={'Hold'}>Hold</option>
                                            </select>
                                        </div>


                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Delivery Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder='Enter Delivery Date'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">DC No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter DC No'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Invoice Type </label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected>Select Invoice Type </option>
                                                <option value={'Retail'}>Retail</option>
                                                <option value={'Distributer'}>Distributer</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">GSTIN</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter GSTIN'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Dispatch details</label>
                                            <textarea className="form-control" placeholder='Enter Dispatch details' id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>


                                        <div className="form-group col-4 mt-2">
                                            <label htmlFor="fromDate">Order / Challan Detail</label>
                                            <textarea className="form-control" disabled placeholder='Enter Order / Challan Detail' id="exampleFormControlTextarea1" rows="3"></textarea>
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
                                                                <th style={{ width: '150px' }}>Product Desc</th>
                                                                <th style={{ width: '150px' }}>Stock</th>
                                                                <th style={{ width: '150px' }}>Qty</th>
                                                                <th style={{ width: '150px' }}>rate/DP</th>
                                                                <th style={{ width: '150px' }}>Dis. %</th>
                                                                <th style={{ width: '150px' }}>Dis. Amt</th>
                                                                <th style={{ width: '150px' }}>Additional Dis.</th>
                                                                <th style={{ width: '150px' }}>Basic Amount</th>
                                                                <th style={{ width: '150px' }}>CGST Amt</th>
                                                                <th style={{ width: '150px' }}>SGST Amt</th>
                                                                <th style={{ width: '150px' }}>IGST Amt</th>
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
                                                                <th style={{ width: '150px' }}>Service Desc</th>
                                                                <th style={{ width: '150px' }}>SACCODE</th>
                                                                <th style={{ width: '150px' }}>Amount</th>
                                                                <th style={{ width: '150px' }}>Basic Amount</th>
                                                                <th style={{ width: '150px' }}>CGST %</th>
                                                                <th style={{ width: '150px' }}>CGST Amt</th>
                                                                <th style={{ width: '150px' }}>SGST %</th>
                                                                <th style={{ width: '150px' }}>SGST Amt</th>
                                                                <th style={{ width: '150px' }}>IGST %</th>
                                                                <th style={{ width: '150px' }}>IGST Amt</th>
                                                                <th style={{ width: '150px' }}>Amount With Tax</th>
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
                                            <h3 className='mt-5 mb-4'>Payment Mode</h3>
                                            <div className="table-responsive active-projects style-1">
                                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                        <thead>
                                                            <tr role="row">
                                                                <th style={{ width: '50px' }}>Sr.No</th>
                                                                <th style={{ width: '150px' }}>Particulars</th>
                                                                <th style={{ width: '150px' }}>Old Product</th>
                                                                <th style={{ width: '150px' }}>Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr role="row" className="odd">
                                                                <td className="sorting_1" style={{ width: '50px' }}>1</td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <input
                                                                            disabled
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder='Immediate Payment'
                                                                            id=""
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <select className="form-select form-control" aria-label="Default select example">
                                                                            <option selected>Select</option>
                                                                            <option value={'Refrigerator'}>Refrigerator</option>
                                                                            <option value={'Washing Machine'}>Washing Machine</option>
                                                                            <option value={'Cooler'}>Cooler</option>
                                                                            <option value={'Mixer'}>Mixer</option>
                                                                        </select>
                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1" style={{ width: '150px' }}>
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            placeholder='0.00'
                                                                            id=""
                                                                        />
                                                                    </div>
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
                                                <label htmlFor="">CGST Total</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter CGST Total'
                                                    id=""
                                                />
                                            </div>
                                            <div className="form-group col-4 mt-2">
                                                <label htmlFor="">SGST Total</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter SGST Total'
                                                    id=""
                                                />
                                            </div>
                                            <div className="form-group col-4 mt-2">
                                                <label htmlFor="">IGST Total</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter IGST Total'
                                                    id=""
                                                />
                                            </div>
                                            <div className="form-group col-4 mt-2">
                                                <label htmlFor="">TCS Amt</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter TCS Amt'
                                                    id=""
                                                />
                                            </div>
                                            <div className="form-group col-4 mt-2">
                                                <label htmlFor="">Roundoff</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter Roundoff'
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
                                            <div className="form-group col-4 mt-2">
                                                <label htmlFor="">Difference Amount</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder='Enter Difference Amount'
                                                    id=""
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <h3 className='mt-5 mb-4'>Remarks / Comments Box</h3>
                                            <div className='col-lg-12'>
                                                <label htmlFor="fromDate">Remark / Narration</label>
                                                <textarea className="form-control" placeholder='Enter Remark / Narration' id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <div className='col-lg-12'>
                                                <label htmlFor="fromDate">CC Remark</label>
                                                <textarea className="form-control" placeholder='Enter CC Remark' id="exampleFormControlTextarea1" rows="2"></textarea>
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

export default AddNewSaleInvoiceComp