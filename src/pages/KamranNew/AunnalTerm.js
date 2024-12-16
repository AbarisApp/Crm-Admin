import React from 'react'
import { BiSolidFileJson } from 'react-icons/bi'
import { FaFileExcel, FaFilePdf } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TravelPolicyForm from '../../components/KamranNew/TravelPolicyForm'
import TravelList from '../../components/KamranNew/TravelList'
import AunnalList from '../../components/KamranNew/AunnalList'


function AunnalTerm() {
  return (
    <div >
    <div className='card 'style={{marginTop: "10px", marginLeft: "4px", marginRight: "4px"}}>
    <div className='table-responsive active-projects style-1' >
  <h3 className='tbl-caption text-light'>
Annual Leave Report
<div>
 <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import PDF" style={{ marginLeft: '8px' }}>
      <FaFilePdf /> PDF
    </Link>
    <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import JSON" style={{ marginLeft: '8px' }}>
      <BiSolidFileJson /> JSON
    </Link>
    <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import Excel" style={{ marginLeft: '8px' }}>
      <FaFileExcel /> Excel
    </Link>
  </div>
  </h3> 
  </div>
  <from className="row">
  <div className="col-lg-3 col-md-6 col-12">
<div className='mt-2'>
  <label for="exampleFormControlInput1" class="form-label">From Date: </label>
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
    <option className='' value="India">Delhi</option>
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
  </from>
  </div>
  <div className=''><AunnalList/></div>
  </div>
  )
}

export default AunnalTerm
