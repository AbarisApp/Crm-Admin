import React from 'react'
import { Link } from 'react-router-dom'
import LisntingQty from './LisntingQty'

function SampleOrderAdd() {
  return (
    <div className='card mx-2 mt-2 '>
            <div className='table-responsive active-projects style-1' >
                <h3 className='tbl-caption text-light'>
                    Add Sample Order
                </h3> </div>
      <form className='row'>
        <div className=''>
        <label for="exampleFormControlInput1" class="form-label">Type Of Product: </label>
                    <select className='form-control'>
                        <option className='' value="--All--">Registred</option>
                        <option className='' value="pending">Un-Registered</option>
                          </select>
                </div>
                <div class="mb-3 col-6 ">
                    <label for="exampleFormControlInput1" class="form-label">Customer: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Search Customer(Party)" />
                </div>
                <div class="mb-3 col-6 ">
                    <label for="exampleFormControlInput1" class="form-label">Ship To: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Search Customer(Party)" />
                </div>
                <div class="mb-3 col-8 ">
                    <label for="exampleFormControlInput1" class="form-label">Marketing Group: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Search Marketing Group" />
                </div>
                <div className='mb-3 col-4'>
        <label for="exampleFormControlInput1" class="form-label">Source: </label>
                    <select className='form-control'>
                        <option className='' value="--All--">--Select--</option>
                        <option className='' value="pending">Un-Registered</option>
                          </select>
                </div>
                <div className='mb-3 col-4'>
        <label for="exampleFormControlInput1" class="form-label">Country of Final Dest.: </label>
                    <select className='form-control'>
                        <option className='' value="--All--">--Select--</option>
                        <option className='' value="pending">India</option>
                          </select>
                </div>
                <div class="mb-3 col-4 ">
                    <label for="exampleFormControlInput1" class="form-label">Tech.Person Name: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Name" />
                </div>
                <div class="mb-3 col-4 ">
                    <label for="exampleFormControlInput1" class="form-label">Tech.Person Email: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Email" />
                </div>
                <div class="mb-3 col-6 ">
                    <label for="exampleFormControlInput1" class="form-label">Tech.Person ContactNo: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Contact Number" />
                </div>
                <div class="mb-3 col-6 ">
                    <label for="exampleFormControlInput1" class="form-label">Other Email: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Other Email" />
                </div>
                <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">Address: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Address" />
                </div>
                <div class="mb-3 col-6 ">
                    <label for="exampleFormControlInput1" class="form-label">City: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Dispatch City" />
                </div>
                <div class="mb-3 col-6 ">
                    <label for="exampleFormControlInput1" class="form-label">Pincode: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Pincode" />
                </div>
                <div className='row'style={{border:"solid black 1px", margin:"2px"}}>
<h5 className='p-2'>Item Details:-</h5>
<div className='mb-3 col-6'>
        <label for="exampleFormControlInput1" class="form-label">Main Application: </label>
                    <select className='form-control'>
                        <option className='' value="--All--">--Select--</option>
                        <option className='' value="pending">Un-Registered</option>
                          </select>
                </div>
                <div className='mb-3 col-6'>
        <label for="exampleFormControlInput1" class="form-label">Sub Application: </label>
                    <select className='form-control'>
                        <option className='' value="--All--">--Select--</option>
                        <option className='' value="pending">Un-Registered</option>
                          </select>
                </div>
                <div class="mb-3 col-8 ">
                    <label for="exampleFormControlInput1" class="form-label">Technical Item Details: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Technical Item Details" />
                </div>
                <div class="mb-3 col-4 ">
                    <label for="exampleFormControlInput1" class="form-label">% of Dose: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="% Dose" />
                </div>
                <div class="mb-3 col-6 ">
                    <label for="exampleFormControlInput1" class="form-label">Customer end Product: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Customer End Product " />
                </div>
                <div className='mb-3 col-4'>
        <label for="exampleFormControlInput1" class="form-label">Usage: </label>
                    <select className='form-control'>
                        <option className='' value="--All--">--Select--</option>
                        <option className='' value="pending">Sales</option>
                          </select>
                          </div>
                          <div class="mb-3 col-4 ">
                    <label for="exampleFormControlInput1" class="form-label">Required On: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Customer End Product " />
                </div>
                <div class="form-check col-6">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Add to Dispatch Plane
  </label>
</div>
<div className='mb-3 col-4'>
        <label for="exampleFormControlInput1" class="form-label">Product Depot: </label>
                    <select className='form-control'>
                        <option className='' value="--All--">--Select--</option>
                        <option className='' value="pending">Sales</option>
                          </select>
                          </div>
                          <div class="mb-3 col-4 ">
                    <label for="exampleFormControlInput1" class="form-label">QTY: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Qty " />
                </div>
                <div class="mb-3 col-4 ">
                    <label for="exampleFormControlInput1" class="form-label">Weight: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Weight " />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Product: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Product " />
                </div>
                <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">Remarks: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Remarks " />
                </div>
            </div>
            <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">Comment: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Comment " />
                </div>
      </form>
      <div className='mt-2'>
            <button
            className="btn btn-primary me-1"
            type="submit">
            Generate Order
          </button>
          <Link to='' className="btn btn-danger light ms-1">Reset</Link>
         </div>
         <LisntingQty/>
    </div>
  )
}

export default SampleOrderAdd
