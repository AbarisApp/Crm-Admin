import React from 'react'
import { Link } from 'react-router-dom'

function TravelPolicyForm() {
  return (
    <div className='row'>
      <div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Type: </label>
 <select className='form-control'>
    <option className='' value="--all country--">--All--</option>
    <option className='' value="India">Daily</option>
 </select>
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
  <label for="exampleFormControlInput1" class="form-label">State: </label>
 <select className='form-control'>
    <option className='' value="--all country--">--All State--</option>
    <option className='' value="India">Delhi</option>
 </select>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Depot: </label>
  <input type="date" class="form-control" id="exampleFormControlInput1"
   placeholder="INput Name"/>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Slab: </label>
 <select className='form-control'>
    <option className='' value="--all country--">--None--</option>
    <option className='' value="India">Sales Officer</option>
 </select>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">Employee: </label>
  <input type="date" class="form-control" id="exampleFormControlInput1"
   placeholder="Search Employee....."/>
</div>
</div>
<div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">DownLine: </label>
 <select className='form-control'>
    <option className='' value="--all country--">--Self--</option>
    <option className='' value="India">Downline</option>
 </select>
</div>
</div>
<div className='text-center mt-2'>
<button type="button" class="btn btn-primary btn-lg">Search</button>
      </div>
    </div>
  )
}

export default TravelPolicyForm
