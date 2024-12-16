import React from 'react'
import { Link } from 'react-router-dom'

function OrderDisForm() {
  return (
    <div className='card'style={{marginTop: "10px", marginLeft: "4px", marginRight: "4px"}}>
      <form className='row'>
      <div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Form Date: </label>
  <input type="date" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">To Date: </label>
  <input type="date" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Country: </label>
 <select className='form-control'>
    <option className='' value="--all country--">--All Country--</option>
    <option className='' value="India">India</option>
 </select>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">State: </label>
 <select className='form-control'>
    <option className='' value="--all country--">--All State--</option>
    <option className='' value="delhi">Delhi</option>
    <option className='' value="uttar">Uttar Pradesh</option>
    <option className='' value="bihar">Bihar</option>
    <option className='' value="Rajasthan">Rajasthan</option>
 </select>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Depot: </label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Employee: </label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Customer(Party): </label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Downline? </label>
 <select className='form-control'>
    <option className='' value=""></option>
    <option className='' value="delhi">DownLine</option>
    <option className='' value="uttar">Self</option>
 </select>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">PO. No: </label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Order Status: </label>
 <select className='form-control'>
    <option className='' value="--order status--">--Order Status--</option>
    <option className='' value="pending">Pending</option>
    <option className='' value="cnfrim">Confrim</option>
    <option className='' value="cancel">Cancel</option>
 </select>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'> 
  <label for="exampleFormControlInput1" class="form-label">Order Type: </label>
 <select className='form-control'>
    <option className='' value="--All--">--All--</option>
    <option className='' value="pending">General</option>
    <option className='' value="cnfrim">Specail</option>
    <option className='' value="cancel"></option>
 </select>
</div>
</div>
      </form>
      <div className='text-center mt-2'>
<button type="button" class="btn btn-primary btn-lg">Search</button>
      </div>
    </div>
  )
}

export default OrderDisForm
