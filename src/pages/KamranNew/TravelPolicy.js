import React from 'react'
import { BiSolidFileJson } from 'react-icons/bi'
import { FaFileExcel, FaFilePdf } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TravelPolicyForm from '../../components/KamranNew/TravelPolicyForm'
import TravelList from '../../components/KamranNew/TravelList'


function TravelPolicy() {
  return (
    <div >
    <div className='card 'style={{marginTop: "10px", marginLeft: "4px", marginRight: "4px"}}>
    <div className='table-responsive active-projects style-1' >
  <h3 className='tbl-caption text-light'>
Travel Policy
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
  </h3> </div>
 <TravelPolicyForm/>
  </div>
  <div className=''>
    <TravelList/>
  </div>
</div>
  )
}

export default TravelPolicy
