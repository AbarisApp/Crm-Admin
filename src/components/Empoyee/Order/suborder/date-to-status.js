import React from 'react'
import { Link } from 'react-router-dom'

function DateToStatus() {
  return (
    <div>
      <form className='row'>
      <div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">Form Date: </label>
  <input type="date" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">To Date: </label>
  <input type="date" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">Country: </label>
 <select className='form-control'>
    <option className='' value="--all country--">--All Country--</option>
    <option className='' value="India">India</option>
 </select>
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">State: </label>
 <select className='form-control'>
    <option className='' value="--all country--">--All State--</option>
    <option className='' value="delhi">Delhi</option>
    <option className='' value="delhi">Gujrat </option>
    <option className='' value="delhi">Maharashtra</option>
    <option className='' value="delhi">Madhya Pardesh</option>
    <option className='' value="uttar">Uttar Pradesh</option>
    <option className='' value="bihar">Bihar</option>
    <option className='' value="Rajasthan">Rajasthan</option>
 </select>
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">Depot: </label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">Employee: </label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">Customer(Party): </label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">Downline? </label>
 <select className='form-control'>
    <option className='' value=""></option>
    <option className='' value="delhi">DownLine</option>
    <option className='' value="uttar">Self</option>
 </select>
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">Category:  </label>
 <select className='form-control'>
    <option className='' value=""></option>
    <option className='' value="delhi">All</option>
    <option className='' value="uttar">Air Freshner</option>
    <option className='' value="uttar">Bone Plate</option>
    <option className='' value="uttar">CORE</option>
    <option className='' value="uttar">FERTILIZER</option>
    <option className='' value="uttar">HMO</option>
    <option className='' value="uttar">MEDICAL</option>
    <option className='' value="uttar">PGR</option>
 </select>
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">Product:  </label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
<div class="mb-3 col-4">
  <label for="exampleFormControlInput1" class="form-label">Status  </label>
 <select className='form-control'>
    <option className='' value=""></option>
    <option className='' value="delhi">All</option>
    <option className='' value="delhi">Pending</option>
    <option className='' value="uttar">Dispatched</option>
 </select>
</div>
      </form>
      <div className='text-center'>
      <Link className="btn btn-primary btn-sm" 
       role="button" aria-controls="offcanvasExample"> 
Search</Link>
      </div>
    </div>
  )
}

export default DateToStatus ;