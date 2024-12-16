import React from 'react'
import { Link } from 'react-router-dom'
import LisntingQty from './LisntingQty'



function AddOrderProduct() {
    return (
        <div className='card mx-2 mt-2 '>
            <div className='table-responsive active-projects style-1' >
                <h3 className='tbl-caption text-light'>
                    Add Product Order
                </h3> </div>
            <form className='row'>
                <div class="mb-3 col-4">
                    <label for="exampleFormControlInput1" class="form-label">Order Type: </label>
                    <select className='form-control'>
                        <option className='' value="--All--">--All--</option>
                        <option className='' value="pending">General</option>
                        <option className='' value="cnfrim">Specail</option>
                        <option className='' value="cancel"></option>
                    </select>
                </div>
                <div class="mb-3 col-4">
                    <label for="exampleFormControlInput1" class="form-label">Order Type: </label>
                    <select className='form-control'>
                        <option className='' value="--All--">--Debit/Credit--</option>
                        <option className='' value="pending">Debit</option>
                        <option className='' value="cnfrim">Credit</option>
                        <option className='' value="cancel"></option>
                    </select>
                </div>
                <div class="mb-3 col-4">
                    <label for="exampleFormControlInput1" class="form-label">Order Type: </label>
                    <select className='form-control'>
                        <option className='' value="--All--">--Grade--</option>
                        <option className='' value="pending">General</option>
                        <option className='' value="cnfrim">Specail</option>
                        <option className='' value="cancel"></option>
                    </select>
                </div>
                <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">Sell To: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Search Customer(Party)" />
                </div>
                <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">Shipping To: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Search Customer(Party)" />
                </div>
                <div class="mb-3 col-6 ">
                    <label for="exampleFormControlInput1" class="form-label">Customer Ref No.: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Ref.No" />
                </div>
                <div class="mb-3 col-6 ">
                    <label for="exampleFormControlInput1" class="form-label">Ref Date: </label>
                    <input type="Date" class="form-control" id="exampleFormControlInput1"
                        placeholder="" />
                </div>

                <div className='row ' style={{ border: "solid black 1px", marginLeft: "4px", marginRight: "8px" }}>
                    <h5 className='p-2'>Item Details:</h5>
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label">Product: </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Trade Name/Category" />
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label">Product Depot: </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="N/A" />
                    </div>
                    <div class="mb-3 col-3">
                        <label for="exampleFormControlInput1" class="form-label">Packing : </label>
                        <select className='form-control'>
                            <option className='' value="--All--">1Kg</option>
                            <option className='' value="pending">10Kg</option>
                            <option className='' value="cnfrim">250Gm</option>
                            <option className='' value="cancel">!00Ml</option>
                        </select>
                    </div>
                    <div class="mb-3 col-3">
                        <label for="exampleFormControlInput1" class="form-label">Unit: </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="N/A" />
                    </div>
                    <div class="mb-3 col-3">
                        <label for="exampleFormControlInput1" class="form-label">QTY: </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Qty" />
                    </div>
                    <div class="mb-3 col-3">
                        <label for="exampleFormControlInput1" class="form-label">Price: </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Price" />
                    </div>
                    <div class="mb-3 col-3">
                        <label for="exampleFormControlInput1" class="form-label">Discount Type : </label>
                        <select className='form-control'>
                            <option className='' value="--None--">None</option>
                            <option className='' value="pending">10Kg</option>
                            <option className='' value="cnfrim">250Gm</option>
                            <option className='' value="cancel">!00Ml</option>
                        </select>
                    </div>
                    <div class="mb-3 col-3">
                        <label for="exampleFormControlInput1" class="form-label">Dics.(%): </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            disabled placeholder="Dics.(%)" />
                    </div>
                    <div class="mb-3 col-3">
                        <label for="exampleFormControlInput1" class="form-label">Disc Amount: </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            disabled placeholder="Disc. Amount" />
                    </div>
                    <div class="mb-3 col-3">
                        <label for="exampleFormControlInput1" class="form-label">Net Amount: </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Amount" />
                    </div>
                </div>
                <div class="mb-3 col-6">
                        <label for="exampleFormControlInput1" class="form-label">Required On: </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Required On" />
                    </div>
                    <div class="mb-3 col-6">
                        <label for="exampleFormControlInput1" class="form-label">Select File: </label>
                        <input type="File" class="form-control" id="exampleFormControlInput1"
                            placeholder="Required On" />
                    </div>
                    <div className='mt-2'>
            <button
            className="btn btn-primary me-1"
            type="submit">
            Generate Order
          </button>
          <Link to='' className="btn btn-danger light ms-1">Reset</Link>
         </div>
            </form>
            <LisntingQty/>
        </div>
    )
}

export default AddOrderProduct
